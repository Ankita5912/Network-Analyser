export default function Dashboard() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#d4a5a5] p-6 flex flex-col">
        <div className="flex items-center gap-2 mb-12">
          <h1 className="text-xl font-semibold">
            <span className="text-gray-800">Network</span>
            <span className="text-[#8b6f54]">Analyser</span>
          </h1>
        </div>

        <nav className="flex-1 flex flex-col gap-4">
          <a href="#" className="flex items-center gap-3 text-white">
            <div className="w-6 h-6">□</div>
            Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 text-white">
            <div className="w-6 h-6">◊</div>
            Scans
          </a>
          <a href="#" className="flex items-center gap-3 text-white">
            <div className="w-6 h-6">⚙</div>
            Settings
          </a>
        </nav>

        <div className="mt-auto space-y-4">
          <button className="w-full flex items-center justify-center gap-2 bg-[#8b6f54] text-white py-2 px-4 rounded">
            Logout <span>↪</span>
          </button>
          <button className="w-full bg-[#a67d7d] text-white py-2 px-4 rounded">
            Upgrade
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <nav className="flex gap-8">
            <a href="#" className="text-gray-600">Use Cases</a>
            <a href="#" className="text-gray-600">Scanners</a>
            <a href="#" className="text-gray-600">Resources</a>
            <a href="#" className="text-gray-600">Contact us</a>
          </nav>
          <button className="w-8 h-8 rounded-full bg-gray-200">👤</button>
        </header>

        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>

        {/* Risk Cards */}
        <div className="mb-8">
          <h3 className="text-lg mb-4">Risks Detected <span className="text-sm text-gray-500">Filter: 0</span></h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="p-4 rounded bg-[#d4a5a5]">
              <div className="text-white mb-2">Critical</div>
              <div className="text-4xl text-white">0</div>
            </div>
            <div className="p-4 rounded bg-[#e88d72]">
              <div className="text-white mb-2">High</div>
              <div className="text-4xl text-white">0</div>
            </div>
            <div className="p-4 rounded bg-[#e8d372]">
              <div className="text-white mb-2">Medium</div>
              <div className="text-4xl text-white">0</div>
            </div>
            <div className="p-4 rounded bg-[#72e872]">
              <div className="text-white mb-2">Low</div>
              <div className="text-4xl text-white">0</div>
            </div>
          </div>
        </div>

        {/* Recent Scans */}
        <div className="mb-8">
          <h3 className="text-lg mb-4">Recent Scans</h3>
          <div className="border rounded-lg">
            <div className="grid grid-cols-3 gap-4 p-4 border-b bg-gray-50">
              <div>Scans</div>
              <div>Targets</div>
              <div>Results</div>
            </div>
          </div>
        </div>

        {/* Security Charts */}
        <div>
          <h3 className="text-lg mb-4">Security over time</h3>
          <div className="grid grid-cols-2 gap-8">
            <div className="border rounded-lg p-4 aspect-[4/3] bg-white"></div>
            <div className="border rounded-lg p-4 aspect-[4/3] bg-white"></div>
          </div>
        </div>
      </main>
    </div>
  )
}