function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    };

    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[var(--border-color)]" data-name="header" data-file="components/Header.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center">
                <div className="icon-sparkles text-xl text-white"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">Binn AI</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Fitur</button>
              <button onClick={() => scrollToSection('premium')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Premium</button>
              <button onClick={() => scrollToSection('pricing')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Harga</button>
              <a href="dashboard.html" className="btn-primary">Mulai Gratis</a>
            </nav>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
              <div className={`icon-${isMenuOpen ? 'x' : 'menu'} text-2xl text-[var(--text-primary)]`}></div>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-[var(--border-color)]">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('features')} className="block w-full text-left px-4 py-2 text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] rounded-lg">Fitur</button>
              <button onClick={() => scrollToSection('premium')} className="block w-full text-left px-4 py-2 text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] rounded-lg">Premium</button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-4 py-2 text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] rounded-lg">Harga</button>
              <a href="dashboard.html" className="block btn-primary text-center">Mulai Gratis</a>
            </div>
          </div>
        )}
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}