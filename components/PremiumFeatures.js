function PremiumFeatures() {
  try {
    const premiumFeatures = [
      { icon: 'zap', title: 'Ultra-Fast Chat', desc: '3x lebih cepat dengan voice chat dan auto-save', color: 'from-yellow-400 to-orange-500' },
      { icon: 'pen-line', title: 'Pro Content Generator', desc: 'Artikel, skripsi, proposal dengan template cepat', color: 'from-blue-400 to-blue-600' },
      { icon: 'mic', title: 'Voice AI', desc: 'Percakapan suara dua arah seperti manusia', color: 'from-purple-400 to-purple-600' },
      { icon: 'image', title: 'Image Creator', desc: 'Buat dan analisis gambar dari deskripsi', color: 'from-pink-400 to-pink-600' },
      { icon: 'file-text', title: 'File Analyzer', desc: 'Analisis PDF, Word, Excel dengan laporan otomatis', color: 'from-green-400 to-green-600' },
      { icon: 'graduation-cap', title: 'Smart Tutor', desc: 'Mode belajar dengan latihan dan pemeriksaan jawaban', color: 'from-indigo-400 to-indigo-600' },
      { icon: 'briefcase', title: 'Productivity Suite', desc: 'CV, surat, presentasi dengan saran AI', color: 'from-red-400 to-red-600' },
      { icon: 'shield', title: 'Keamanan Premium', desc: 'Enkripsi real-time dan mode rahasia', color: 'from-cyan-400 to-cyan-600' },
      { icon: 'link', title: 'Integrasi Apps', desc: 'Hubungkan dengan Docs, Notion, Slack, WordPress', color: 'from-teal-400 to-teal-600' }
    ];

    return (
      <section id="premium" className="py-20" data-name="premium-features" data-file="components/PremiumFeatures.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[var(--accent-color)]/10 to-[var(--secondary-color)]/10 px-4 py-2 rounded-full mb-4">
              <div className="icon-crown text-lg text-[var(--accent-color)]"></div>
              <span className="text-sm font-semibold text-[var(--accent-color)]">Binn AI Plus</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Fitur Premium Advanced</h2>
            <p className="text-xl text-[var(--text-secondary)]">Teknologi AI lebih cepat, akurat, dan mendalam</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumFeatures.map((feature, index) => (
              <div key={index} className="feature-card group cursor-pointer">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                  <div className={`icon-${feature.icon} text-xl text-white`}></div>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('PremiumFeatures component error:', error);
    return null;
  }
}