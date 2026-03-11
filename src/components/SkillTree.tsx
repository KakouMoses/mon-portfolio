"use client";

import React, { useMemo, useCallback, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  Handle,
  Position,
  MarkerType,
  Edge,
  Node,
  NodeProps,
} from "reactflow";
import OnNodeClick from "reactflow"
import dagre from "dagre";
import "reactflow/dist/style.css";
import { Cpu, Globe, Database, Shield, Layout, Globe2 } from "lucide-react";

// 1. Création d'un composant de Nœud Personnalisé pour plus de style
const SkillNode = ({ data, id }: NodeProps) => {
  const Icon = data.icon || Cpu;
    // Détermine si le node a des enfants (pour afficher +/−)
    const hasChildren = useMemo(() => 
      initialEdges.some(e => e.source === id), 
      [id]
    );
  return (
    <div
      className={`px-4 py-2 shadow-lg rounded-md border-2 bg-gray-900 ${data.borderColor || "border-blue-500"} min-w-[37.5]`}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Handle
        type="target"
        position={Position.Left}
        className="w-2 h-2 bg-blue-400"
      />
      <div className="flex items-center gap-2 relative">
        <div className={`p-1 rounded ${data.bgColor || "bg-blue-500/20"}`}>
          <Icon size={16} className={data.iconColor || "text-blue-400"} />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-500 uppercase font-bold leading-none">
            {data.category}
          </span>
          <span className="text-sm font-bold text-white">{data.label}</span>
        </div>
        {hasChildren && (
                  <span className="ml-auto text-xs font-bold text-gray-400">
                    {data.expanded ? '−' : '+'}
                  </span>
                )}
      </div>
      <Handle
        type="source"
        position={Position.Right}
        className="w-2 h-2 bg-blue-400"
      />
    </div>
  );
};

const nodeTypes = { skillNode: SkillNode };

// --- 1. FONCTION DE CALCUL DU LAYOUT ---
const getLayoutedElements = (
  nodes: Node[],
  edges: Edge[],
  direction = "LR",
) => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  // Paramètres de l'arbre : TB (Top to Bottom) ou LR (Left to Right)
  dagreGraph.setGraph({ rankdir: direction, nodesep: 70, ranksep: 100 });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: 180, height: 80 });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const layoutedNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    return {
      ...node,
      position: {
        x: nodeWithPosition.x - 90,
        y: nodeWithPosition.y - 40,
      },
    };
  });

  return { nodes: layoutedNodes, edges };
};

// Fonction pour extraire les enfants directs d'un node
const getDirectChildren = (parentId: string, edges: Edge[]): string[] => 
  edges.filter(e => e.source === parentId).map(e => e.target);

// Fonction recursive pour collecter tous les descendants visibles
const collectVisibleDescendants = (
  parentId: string, 
  expanded: Record<string, boolean>, 
  edges: Edge[],
  visited = new Set<string>()
): Set<string> => {
  const children = getDirectChildren(parentId, edges);
  children.forEach(child => {
    if (!visited.has(child)) {
      visited.add(child);
      if (expanded[child]) {
        collectVisibleDescendants(child, expanded, edges, visited);
      }
    }
  });
  return visited;
};

const getVisibleElements = (allNodes: Node[], allEdges: Edge[], expanded: Record<string, boolean>) => {
  const visibleNodeIds = new Set<string>(['root']); // racine toujours visible

  // Ajoute les enfants directs de root si root expanded (ici toujours true)
  if (expanded['root']) {
    const rootChildren = getDirectChildren('root', allEdges);
    rootChildren.forEach(child => {
      visibleNodeIds.add(child);
      if (expanded[child]) {
        collectVisibleDescendants(child, expanded, allEdges, visibleNodeIds);
      }
    });
  }

  const visibleNodes = allNodes.filter(n => visibleNodeIds.has(n.id));
  const visibleEdges = allEdges.filter(e => 
    visibleNodeIds.has(e.source) && visibleNodeIds.has(e.target)
  );

  return { visibleNodes, visibleEdges };
};

const initialNodes: Node[] = [
  // --- RACINE ---
  {
    id: "root",
    type: "skillNode",
    data: {
      label: "KAKOU MOÏSE",
      category: "Ingénieur",
      icon: Cpu,
      borderColor: "border-white",
      iconColor: "text-white",
    },
    position: { x: 500, y: 0 },
  },

  // --- 1. LOW-LEVEL & IOT (Émeraude) ---
  {
    id: "iot",
    type: "skillNode",
    data: {
      label: "Low-level & IoT",
      category: "Hardware",
      icon: Cpu,
      borderColor: "border-emerald-500",
      iconColor: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
    },
    position: { x: 100, y: 150 },
  },
  {
    id: "iot-lang",
    type: "skillNode",
    data: {
      label: "Assembly, C, C++, Rust, Zig",
      category: "Langages",
      icon: Cpu,
    },
    position: { x: -50, y: 250 },
  },
  {
    id: "iot-mcu",
    type: "skillNode",
    data: { label: "Arduino, ESP32", category: "Hardware", icon: Cpu },
    position: { x: 150, y: 250 },
  },
  {
    id: "iot-tools",
    type: "skillNode",
    data: { label: "Node-RED, OpenHAB", category: "Frameworks", icon: Layout },
    position: { x: 50, y: 350 },
  },

  // --- 2. SOFTWARE PROGRAMMING (Bleu) ---
  {
    id: "software",
    type: "skillNode",
    data: {
      label: "Software Programming",
      category: "Fullstack",
      icon: Globe,
      borderColor: "border-blue-500",
      iconColor: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
    position: { x: 500, y: 150 },
  },
  // Frontend
  {
    id: "fe-parent",
    type: "skillNode",
    data: { label: "Frontend", category: "UI/UX", icon: Layout },
    position: { x: 350, y: 300 },
  },
  {
    id: "fe-stack",
    type: "skillNode",
    data: {
      label: "HTML, CSS, JS, TS, React, Next.js",
      category: "Web Stack",
      icon: Globe,
    },
    position: { x: 350, y: 400 },
  },
  // Backend
  {
    id: "be-parent",
    type: "skillNode",
    data: { label: "Backend", category: "Server Side", icon: Database },
    position: { x: 500, y: 300 },
  },
  {
    id: "be-stack",
    type: "skillNode",
    data: {
      label: "Go, Java, Python, TS",
      category: "Languages",
      icon: Globe2,
    },
    position: { x: 500, y: 400 },
  },
  {
    id: "be-fw",
    type: "skillNode",
    data: {
      label: "Node, Express, Django, Spring Boot",
      category: "Frameworks",
      icon: Database,
    },
    position: { x: 500, y: 500 },
  },
  // Mobile
  {
    id: "mob-parent",
    type: "skillNode",
    data: { label: "Mobile", category: "Android", icon: Layout },
    position: { x: 650, y: 300 },
  },
  {
    id: "mob-stack",
    type: "skillNode",
    data: { label: "Kotlin", category: "Language", icon: Layout },
    position: { x: 650, y: 400 },
  },

  // --- 3. DEVOPS & INFRA (Orange) ---
  {
    id: "infra",
    type: "skillNode",
    data: {
      label: "DevOps & Infra",
      category: "Operations",
      icon: Shield,
      borderColor: "border-orange-500",
      iconColor: "text-orange-400",
      bgColor: "bg-orange-500/10",
    },
    position: { x: 900, y: 150 },
  },
  {
    id: "v-git",
    type: "skillNode",
    data: { label: "Git, GitHub", category: "Versionning" },
  },
  {
    id: "deploy",
    type: "skillNode",
    data: { label: "Docker, Podman", category: "Déploiement" },
  },
  {
    id: "test",
    type: "skillNode",
    data: { label: "Cron, Jira", category: "Automation" },
  },
  {
    id: "db",
    type: "skillNode",
    data: { label: "Bases de données", category: "Data" },
  },
  {
    id: "db-rel",
    type: "skillNode",
    data: { label: "SQL, MySQL, PostgreSQL", category: "Relationnel" },
  },
  {
    id: "db-nosql",
    type: "skillNode",
    data: { label: "Redis, MongoDB, SpacetimeDB", category: "No-SQL" },
  },
  {
    id: "script",
    type: "skillNode",
    data: { label: "Bash, Lua", category: "Scripting" },
  },
];

const initialEdges: Edge[] = [
  // Connexions de niveau 1 (Racine vers catégories)
  {
    id: "e-r-iot",
    source: "root",
    target: "iot",
    animated: true,
    style: { stroke: "#10b981" },
  },
  {
    id: "e-r-sw",
    source: "root",
    target: "software",
    animated: true,
    style: { stroke: "#3b82f6" },
  },
  {
    id: "e-r-inf",
    source: "root",
    target: "infra",
    animated: true,
    style: { stroke: "#f97316" },
  },

  // Connexions IoT
  { id: "e-iot-l", source: "iot", target: "iot-lang" },
  { id: "e-iot-m", source: "iot", target: "iot-mcu" },
  { id: "e-iot-t", source: "iot", target: "iot-tools" },

  // Connexions Software
  { id: "e-sw-fe", source: "software", target: "fe-parent" },
  { id: "e-fe-st", source: "fe-parent", target: "fe-stack" },
  { id: "e-sw-be", source: "software", target: "be-parent" },
  { id: "e-be-st", source: "be-parent", target: "be-stack" },
  { id: "e-be-fw", source: "be-stack", target: "be-fw" },
  { id: "e-sw-mob", source: "software", target: "mob-parent" },
  { id: "e-mob-st", source: "mob-parent", target: "mob-stack" },

  // Connexions Infra
  { id: "e-inf1", source: "infra", target: "v-git" },
  { id: "e-inf2", source: "infra", target: "deploy" },
  { id: "e-inf3", source: "infra", target: "test" },
  { id: "e-inf4", source: "infra", target: "db" },
  { id: "e-db1", source: "db", target: "db-rel" },
  { id: "e-db2", source: "db", target: "db-nosql" },
  { id: "e-inf5", source: "infra", target: "script" },
];

export default function SkillTree() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
      root: true,
      // Par défaut false pour les autres
    });
  
    const OnNodeClick = useCallback((_, node : Node) => {
      // Vérifie s'il a des enfants
      const hasChildren = initialEdges.some(e => e.source === node.id);
      if (hasChildren) {
        setExpanded(prev => ({
          ...prev,
          [node.id]: !prev[node.id],
        }));
      }
    }, []);
  
    // Mise à jour data.expanded dans les nodes pour l'affichage (+/−)
    const nodesWithExpanded = useMemo(() => 
      initialNodes.map(node => ({
        ...node,
        data: { ...node.data, expanded: expanded[node.id] ?? false },
      })),
      [expanded]
    );
  
    const { visibleNodes, visibleEdges } = useMemo(() => 
      getVisibleElements(nodesWithExpanded, initialEdges, expanded),
      [expanded, nodesWithExpanded]
    );
  
  const { nodes, edges } = useMemo(
    () => getLayoutedElements(initialNodes, initialEdges),
    [],
  );
  
  const { nodes: layoutedNodes, edges: layoutedEdges } = useMemo(() => 
      getLayoutedElements(visibleNodes, visibleEdges),
      [visibleNodes, visibleEdges]
    );

  return (
    <div className="h-full w-full bg-[#0b0f1a] rounded-3xl border border-gray-800 shadow-2xl overflow-hidden group">
      <div className="absolute top-4 left-6 z-10">
        <h3 className="text-white font-black text-lg tracking-tighter opacity-50">
          TECH_STACK_VISUALIZER_V2
        </h3>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodeClick={OnNodeClick}
        fitView
        className="bg-dot-pattern"
      >
        <Background color="#1e293b" gap={20} size={1} />
        <Controls className="bg-gray-800 border-gray-700 fill-white" />
      </ReactFlow>
    </div>
  );
}
