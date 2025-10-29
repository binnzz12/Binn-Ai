function Features() {
  try {
    const features = [
      {
        icon: 'message-circle',
        title: 'Chat Cerdas Real-Time',
        description: 'Chatbox dengan respons instan dan animasi "AI sedang mengetik". Regenerate, ubah gaya jawaban, dan simpan chat.',
        buttons: ['Regenerate', 'Ubah Gaya', 'Simpan Chat']
      },
      {
        icon: 'pen-tool',
        title: 'AI Writer',
        description: 'Buat tulisan dari ide singkat dengan progress bar real-time. Edit bersama AI dan salin ke dokumen.',
        buttons: ['Tambah Panjang', 'Edit AI', 'Salin']
      },
      {
        icon: 'globe',
        title: 'Penerjemah Instan',
        description: 'Terjemahan langsung muncul saat Anda mengetik. Tukar bahasa, baca suara, dan salin dengan mudah.',
        buttons: ['Tukar Bahasa', 'Baca Suara', 'Salin']
      },
      {
        icon: 'wrench',
        title: 'AI Tools Ringan',
        description: 'Ringkasan teks, parafrase, grammar checker, ide caption, dan kalkulator AI dengan hasil instan.',
        buttons: ['Perbaiki', 'Versi Baru', 'Simpan']
      }
    ];

    return (
      <section id="features" className="py-20 bg-[var(--bg-secondary)]" data-name="features" data-file="components/Features.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Fitur Utama Gratis</h2>
            <p className="text-xl text-[var(--text-secondary)]">Semua fitur berjalan real-time tanpa jeda</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center mb-4">
                  <div className={`icon-${feature.icon} text-2xl text-white`}></div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-[var(--text-secondary)] mb-4">{feature.description}</p>
                <div className="flex flex-wrap gap-2">
                  {feature.buttons.map((btn, i) => (
                    <span key={i} className="px-3 py-1 bg-[var(--bg-secondary)] rounded-full text-sm font-medium text-[var(--primary-color)]">
                      {btn}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Features component error:', error);
    return null;
  }
}