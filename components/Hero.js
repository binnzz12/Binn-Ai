function Hero() {
  try {
    return (
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8" data-name="hero" data-file="components/Hero.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[var(--primary-color)]/10 to-[var(--secondary-color)]/10 px-4 py-2 rounded-full mb-6">
              <div className="icon-zap text-lg text-[var(--primary-color)]"></div>
              <span className="text-sm font-semibold text-[var(--primary-color)]">Real-Time AI Assistant</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">
                Binn AI
              </span>
              <br />
              <span className="text-[var(--text-primary)]">Asisten Cerdas</span>
              <br />
              <span className="text-[var(--text-primary)]">Real-Time</span>
            </h1>

            <p className="text-xl text-[var(--text-secondary)] mb-8 max-w-3xl mx-auto">
              Platform kecerdasan buatan yang dirancang untuk menghadirkan pengalaman interaksi real-time. 
              Menulis, menjawab, menganalisis — seolah berbicara dengan asisten manusia sungguhan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="dashboard.html" className="btn-primary">
                <span className="flex items-center space-x-2">
                  <span>Mulai Chat Gratis</span>
                  <div className="icon-arrow-right text-lg"></div>
                </span>
              </a>
              <button className="btn-secondary">
                <span className="flex items-center space-x-2">
                  <div className="icon-play-circle text-lg text-[var(--primary-color)]"></div>
                  <span>Lihat Demo</span>
                </span>
              </button>
            </div>

            <div className="mt-16 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop" 
                alt="Binn AI Dashboard" 
                className="rounded-2xl shadow-2xl w-full max-w-5xl mx-auto border border-[var(--border-color)]"
              />
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}