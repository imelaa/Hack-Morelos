// components/Sidebar.js

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white fixed left-0">
      <div className="py-4 px-6">
        <h1 className="text-2xl font-semibold">My Sidebar</h1>
      </div>
      <nav className="mt-6">
        <ul>
          <li className="px-4 py-2 hover:bg-gray-700">
            <a href="/archivo1.txt" target="_blank" rel="noopener noreferrer">Archivo 1</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <a href="/archivo2.txt" target="_blank" rel="noopener noreferrer">Archivo 2</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <a href="/archivo3.txt" target="_blank" rel="noopener noreferrer">Archivo 3</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Sidebar;
// components/Sidebar.js


