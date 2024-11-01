const Footer = () => {
    return (
      <footer className="bg-stone-900 text-stone-200 relative">
        {/* Vintage dekorativní prvky */}
        <div className="absolute top-0 left-0 w-full h-4 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#78350f_10px,#78350f_11px)]" />
        
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Ozdobná linka */}
          <div className="flex items-center justify-center mb-12">
            <div className="h-px bg-orange-400/30 w-full" />
            <div className="px-4">
              <div className="w-3 h-3 rotate-45 border-2 border-orange-400/30 transform hover:rotate-90 transition-transform duration-500" />
            </div>
            <div className="h-px bg-orange-400/30 w-full" />
          </div>
  
          {/* Hlavní obsah */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Logo a popis */}
            <div className="group">
              <h3 className="text-orange-400 text-xl font-serif font-bold mb-4 border-b border-orange-400/20 pb-2 inline-block">
                RETRO
                <span className="block h-px w-0 group-hover:w-full bg-orange-400 transition-all duration-700" />
              </h3>
              <p className="text-sm font-light italic">Objevte kouzlo vintage stylu v moderním pojetí.</p>
            </div>
  
            {/* Rychlé odkazy */}
            <div>
              <h4 className="text-white font-serif font-semibold mb-6 relative">
                Rychlé odkazy
                <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 border border-orange-400/50 rotate-45" />
              </h4>
              <ul className="space-y-3">
                {['O nás', 'Novinky', 'Kolekce', 'Kontakt'].map((item) => (
                  <li key={item} className="transform hover:-translate-x-2 transition-transform duration-300">
                    <a href="#" className="hover:text-orange-400 flex items-center group">
                      <span className="inline-block w-0 group-hover:w-2 h-px bg-orange-400 mr-0 group-hover:mr-2 transition-all duration-300" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Kontakt */}
            <div>
              <h4 className="text-white font-serif font-semibold mb-6 relative">
                Kontakt
                <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 border border-orange-400/50 rotate-45" />
              </h4>
              <ul className="space-y-3">
                <li className="hover:text-orange-400 transition-colors duration-300 flex items-center">
                  <span className="inline-block w-1 h-1 bg-orange-400/50 mr-2 rounded-full" />
                  info@retro.cz
                </li>
                <li className="hover:text-orange-400 transition-colors duration-300 flex items-center">
                  <span className="inline-block w-1 h-1 bg-orange-400/50 mr-2 rounded-full" />
                  +420 123 456 789
                </li>
                <li className="hover:text-orange-400 transition-colors duration-300 flex items-center">
                  <span className="inline-block w-1 h-1 bg-orange-400/50 mr-2 rounded-full" />
                  Praha 1, 110 00
                </li>
              </ul>
            </div>
  
            {/* Newsletter */}
            <div>
              <h4 className="text-white font-serif font-semibold mb-6 relative">
                Newsletter
                <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 border border-orange-400/50 rotate-45" />
              </h4>
              <form className="space-y-4 group">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Váš email" 
                    className="w-full px-4 py-2 bg-stone-800/50 border border-stone-700 rounded-none
                             focus:outline-none focus:border-orange-400 transition-colors duration-300
                             placeholder:text-stone-600 placeholder:italic"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-orange-400 group-hover:w-full transition-all duration-700" />
                </div>
                <button className="px-6 py-2 border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black
                                 transition-colors duration-300 group relative overflow-hidden">
                  <span className="relative z-10">Odebírat</span>
                  <span className="absolute inset-0 bg-orange-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="text-center relative">
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-stone-700 to-transparent" />
            <div className="pt-8 text-sm text-stone-400 font-light">
              <span className="font-serif">©</span> 2024 RETRO. Všechna práva vyhrazena.
            </div>
          </div>
        </div>
  
        {/* Bottom dekorativní prvek */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#78350f_10px,#78350f_11px)]" />
      </footer>
    );
  };
  
  export default Footer;