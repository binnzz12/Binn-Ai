function DashboardNav({ activeTab, setActiveTab }) {
  try {
    const [isOpen, setIsOpen] = React.useState(false);

    const menuItems = [
      { id: 'chat', icon: 'message-circle', label: 'Chat' },
      { id: 'writer', icon: 'pen-tool', label: 'Writer' },
      { id: 'image', icon: 'image', label: 'Image AI' },
      { id: 'files', icon: 'folder', label: 'Files' },
      { id: 'tutor', icon: 'graduation-cap', label: 'Tutor' },
      { id: 'tools', icon: 'wrench', label: 'Tools' }
    ];

    return (
      <>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-50 md:hidden p-2 bg-white rounded-lg shadow-lg"
        >
          <div className={`icon-${isOpen ? 'x' : 'menu'} text-2xl`}></div>
        </button>

        <nav className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-40 transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
          <div className="p-6">
            <a href="index.html" className="flex items-center space-x-2 mb-8">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                <div className="icon-sparkles text-xl text-white"></div>
              </div>
              <span className="text-xl font-bold">Binn AI</span>
            </a>

            <div className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setActiveTab(item.id); setIsOpen(false); }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === item.id 
                      ? 'bg-indigo-50 text-indigo-600' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <div className={`icon-${item.icon} text-xl`}></div>
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>

            <div className="mt-8 p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <div className="icon-crown text-lg text-pink-500"></div>
                <span className="font-semibold text-sm">Upgrade Premium</span>
              </div>
              <p className="text-xs text-gray-600 mb-3">Akses semua fitur advanced</p>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg text-sm font-medium">
                Upgrade
              </button>
            </div>
          </div>
        </nav>
      </>
    );
  } catch (error) {
    console.error('DashboardNav error:', error);
    return null;
  }
}