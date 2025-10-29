function Pricing() {
  try {
    const plans = [
      {
        name: 'Gratis',
        price: '0',
        period: 'selamanya',
        features: ['Chat Cerdas Real-Time', 'AI Writer Dasar', 'Penerjemah Instan', 'AI Tools Ringan', 'Riwayat 30 hari'],
        cta: 'Mulai Gratis',
        popular: false
      },
      {
        name: 'Premium',
        price: '99.000',
        period: 'per bulan',
        features: ['Semua Fitur Gratis', 'Ultra-Fast Chat Engine', 'Pro Content Generator', 'Voice AI', 'Image Creator & Analyzer', 'File Analyzer', 'Smart Tutor Mode', 'Productivity Suite', 'Keamanan Premium', 'Integrasi Apps & API'],
        cta: 'Upgrade Sekarang',
        popular: true
      }
    ];

    return (
      <section id="pricing" className="py-20 bg-[var(--bg-secondary)]" data-name="pricing" data-file="components/Pricing.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Pilih Paket Anda</h2>
            <p className="text-xl text-[var(--text-secondary)]">Mulai gratis, upgrade kapan saja</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className={`relative p-8 rounded-2xl border-2 ${plan.popular ? 'border-[var(--primary-color)] shadow-xl scale-105' : 'border-[var(--border-color)]'} bg-white`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Paling Populer
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">Rp {plan.price}</span>
                  <span className="text-[var(--text-secondary)]">/{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="icon-check text-lg text-green-500 mt-1"></div>
                      <span className="text-[var(--text-secondary)]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={plan.popular ? 'btn-primary w-full' : 'btn-secondary w-full'}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Pricing component error:', error);
    return null;
  }
}