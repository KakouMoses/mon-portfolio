export default function Header() {
  return (
    <nav className="p-6 flex justify-between items-center sticky top-0 bg-[#0b0f1a]/80 backdrop-blur-md z-50">
      <div className="bg-white p-2 rounded-xl shadow-lg">
        {/* Ton logo SVG ici */}
        <img src="/MoKa.svg" alt="Logo" className="h-8 w-auto" />
      </div>
      <div className="flex gap-6 items-center">
         <a href="https://www.linkedin.com/in/kacou-mo%C3%AFse-kakou-b686781b8/" className="text-gray-400 hover:text-blue-500 transition-colors">LinkedIn</a>
         <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all">
           Contact
         </button>
      </div>
    </nav>
  );
}