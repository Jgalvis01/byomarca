import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNosotros = () => {
    scrollToTop();
    navigate('/nosotros');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        location.pathname === '/' && !isScrolled
          ? 'opacity-0 -translate-y-full pointer-events-none'
          : 'opacity-100 translate-y-0'
      } ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-lg border-b border-blue-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-8 w-full">
            {/* NOSOTROS */}
            <button
              onClick={handleNosotros}
              className="transition-colors duration-200 text-base font-semibold tracking-wide text-gray-200 hover:text-blue-400"
            >
              NOSOTROS
            </button>

            {/* PRODUCTOS — dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                onMouseEnter={() => setIsProductsOpen(true)}
                className="flex items-center space-x-1 transition-colors duration-200 text-base font-semibold tracking-wide text-gray-200 hover:text-blue-400"
              >
                <span>PRODUCTOS</span>
                <svg
                  className={`w-6 h-6 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isProductsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-52 bg-black/95 backdrop-blur-lg border border-blue-500/20 rounded-xl overflow-hidden shadow-xl shadow-blue-500/10"
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <Link
                    to="/lebrau"
                    onClick={() => {
                      setIsProductsOpen(false);
                      scrollToTop();
                    }}
                    className="flex items-center space-x-3 px-5 py-4 text-gray-200 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-200 text-sm font-semibold tracking-wide"
                  >
                    <img
                      src="/images/logolebraunew.png"
                      alt="LEBRAU"
                      className="h-5 w-auto"
                      style={{ filter: 'brightness(1.2)' }}
                    />
                    <span>MARCA LEBRAU</span>
                  </Link>
                  <div className="h-px bg-blue-500/10" />
                  <Link
                    to="/otras-marcas"
                    onClick={() => {
                      setIsProductsOpen(false);
                      scrollToTop();
                    }}
                    className="block px-5 py-4 text-gray-200 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-200 text-sm font-semibold tracking-wide"
                  >
                    OTRAS MARCAS
                  </Link>
                </div>
              )}
            </div>

            {/* BUSCAR */}
            <button
              className="transition-colors duration-200 text-base font-semibold tracking-wide text-gray-200 hover:text-blue-400"
              aria-label="Buscar"
            >
              BUSCAR
            </button>

            {/* COTIZA YA */}
            <Link
              to="/contacto"
              onClick={scrollToTop}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-base font-semibold tracking-wide"
            >
              COTIZA YA
            </Link>

            {/* CONTACTO */}
            <NavLink
              to="/contacto"
              onClick={scrollToTop}
              className={({ isActive }) =>
                `transition-colors duration-200 text-base font-semibold tracking-wide ${isActive
                  ? 'text-blue-400'
                  : 'text-gray-200 hover:text-blue-400'
                }`
              }
            >
              CONTACTO
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden absolute right-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-b border-blue-500/20">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {/* NOSOTROS */}
            <button
              className="block w-full text-left px-3 py-3 rounded-lg text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 transition-colors text-base font-semibold"
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleNosotros();
              }}
            >
              NOSOTROS
            </button>

            {/* PRODUCTOS — accordion */}
            <div>
              <button
                className="flex items-center justify-between w-full px-3 py-3 rounded-lg text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 transition-colors text-base font-semibold"
                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
              >
                <span>PRODUCTOS</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${isMobileProductsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isMobileProductsOpen && (
                <div className="pl-6 space-y-1">
                  <Link
                    to="/lebrau"
                    className="block px-3 py-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-colors text-sm font-semibold"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      scrollToTop();
                    }}
                  >
                    MARCA LEBRAU
                  </Link>
                  <Link
                    to="/otras-marcas"
                    className="block px-3 py-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-colors text-sm font-semibold"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      scrollToTop();
                    }}
                  >
                    OTRAS MARCAS
                  </Link>
                </div>
              )}
            </div>

            {/* BUSCAR */}
            <button
              className="flex items-center space-x-3 w-full text-left px-3 py-3 rounded-lg text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 transition-colors text-base font-semibold"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-lg">BUSCAR</span>
            </button>

            {/* CTA buttons */}
            <div className="pt-4 space-y-3">
              <Link
                to="/contacto"
                className="block w-full text-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-base font-semibold"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToTop();
                }}
              >
                COTIZA YA
              </Link>
              <Link
                to="/contacto"
                className="block w-full text-center px-6 py-3 rounded-full border border-blue-500/50 text-blue-400 text-base font-semibold"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToTop();
                }}
              >
                CONTACTO
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;