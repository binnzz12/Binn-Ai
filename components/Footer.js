function Footer() {
  try {
    return (
      <footer className="bg-[var(--text-primary)] text-white py-12" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center">
                  <div className="icon-sparkles text-lg text-white"></div>
                </div>
                <span className="text-xl font-bold">Binn AI</span>
              </div>
              <p className="text-gray-400">Think Smart, Chat Real.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Produk</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Fitur</a></li>
                <li><a href="#premium" className="hover:text-white transition-colors">Premium</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Harga</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Dukungan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Bantuan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dokumentasi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontak</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Binn AI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="icon-twitter text-xl"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="icon-linkedin text-xl"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="icon-github text-xl"></div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}