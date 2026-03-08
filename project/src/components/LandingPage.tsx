import { useLanguage } from '../contexts/LanguageContext';
import { Sparkles, Camera, BarChart3, Calendar } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-purple-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold px-4 py-2 rounded-full bg-purple-800/50 backdrop-blur-sm">
              <Sparkles size={16} />
              <span>AI-Powered Analysis</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t('heroSubtitle')}
          </p>
          <button
            onClick={() => onNavigate('upload')}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-xl font-bold text-lg shadow-2xl shadow-cyan-500/50 transition-all transform hover:scale-105"
          >
            {t('getStarted')}
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-purple-800/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-700/50 hover:border-cyan-400/50 transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
              <Camera className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Upload Photo</h3>
            <p className="text-purple-200 leading-relaxed">
              Take or upload a clear photo of your face for instant AI-powered analysis
            </p>
          </div>

          <div className="bg-purple-800/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-700/50 hover:border-cyan-400/50 transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
              <BarChart3 className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Get Analysis</h3>
            <p className="text-purple-200 leading-relaxed">
              Receive detailed insights about your skin type, conditions, and health metrics
            </p>
          </div>

          <div className="bg-purple-800/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-700/50 hover:border-cyan-400/50 transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
              <Calendar className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Track Progress</h3>
            <p className="text-purple-200 leading-relaxed">
              Follow your personalized skincare routine and monitor improvements over time
            </p>
          </div>
        </div>

        <div className="bg-purple-800/30 backdrop-blur-sm p-10 rounded-2xl border border-purple-700/50 text-center">
          <p className="text-purple-200 text-sm leading-relaxed max-w-4xl mx-auto">
            <span className="font-bold text-white">{t('medicalDisclaimer')}:</span> {t('disclaimer')}
          </p>
        </div>
      </div>
    </div>
  );
}
