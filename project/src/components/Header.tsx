import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { User, LogOut, Globe } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const { user, signOut } = useAuth();
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <header className="bg-gradient-to-r from-purple-900 to-purple-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => onNavigate('home')}
            className="text-2xl font-bold tracking-tight hover:text-cyan-400 transition-colors flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-black">S</span>
            </div>
            {t('appName')}
          </button>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => onNavigate('home')}
              className={`hover:text-cyan-400 transition-colors ${
                currentPage === 'home' ? 'text-cyan-400' : ''
              }`}
            >
              {t('features')}
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className={`hover:text-cyan-400 transition-colors ${
                currentPage === 'pricing' ? 'text-cyan-400' : ''
              }`}
            >
              {t('pricing')}
            </button>
            {user && (
              <button
                onClick={() => onNavigate('dashboard')}
                className={`hover:text-cyan-400 transition-colors ${
                  currentPage === 'dashboard' ? 'text-cyan-400' : ''
                }`}
              >
                {t('dashboard')}
              </button>
            )}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-800 hover:bg-purple-700 transition-colors"
              aria-label="Toggle language"
            >
              <Globe size={18} />
              <span className="text-sm font-semibold">{language.toUpperCase()}</span>
            </button>

            {user ? (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => onNavigate('account')}
                  className="p-2 rounded-lg bg-purple-800 hover:bg-purple-700 transition-colors"
                  aria-label="Account"
                >
                  <User size={20} />
                </button>
                <button
                  onClick={signOut}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition-colors"
                >
                  <LogOut size={18} />
                  <span className="hidden sm:inline">{t('signOut')}</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => onNavigate('signin')}
                  className="px-4 py-2 rounded-lg bg-purple-800 hover:bg-purple-700 transition-colors"
                >
                  {t('signIn')}
                </button>
                <button
                  onClick={() => onNavigate('signup')}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 transition-colors font-semibold"
                >
                  {t('signUp')}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
