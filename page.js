export default function Home() {
  const menus = [
    { id: 1, name: 'Espresso Cyber', price: 'Rp 20.000', desc: 'Ekstrak murni dengan tendangan kafein tinggi.' },
    { id: 2, name: 'Neon Latte', price: 'Rp 28.000', desc: 'Perpaduan espresso dan susu creamy lembut.' },
    { id: 3, name: 'Dark Mocha', price: 'Rp 32.000', desc: 'Kopi dan cokelat premium dalam satu racikan.' }
  ];

  const orderWhatsApp = (item) => {
    const text = `Halo Maung Coffee, saya mau pesan ${item.name} (${item.price}).`; return `https://wa.me/62895359610636?text=${encodeURIComponent(text)}`;
  };

  return (
    <main className="min-h-screen p-6 md:p-12 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-pulse"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Hero Section */}
        <header className="text-center py-20">
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            MAUNG COFFEE
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Energi digital untuk harimu. Diseduh dengan presisi, disajikan dengan gaya modern.
          </p>
        </header>

        {/* Menu Section */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-8 text-center text-white/90">Menu Andalan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {menus.map((menu) => (
              <div key={menu.id} className="glass-panel rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white mb-2">{menu.name}</h3>
                <p className="text-blue-400 font-semibold mb-3">{menu.price}</p>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">{menu.desc}</p>
                <a 
                  href={orderWhatsApp(menu)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 rounded-xl bg-white/10 hover:bg-blue-600/80 text-white font-medium transition border border-white/10 hover:border-transparent"
                >
                  Pesan Sekarang
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}