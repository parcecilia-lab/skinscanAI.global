import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface Translations {
  [key: string]: {
    en: string;
    es: string;
  };
}

const translations: Translations = {
  appName: { en: 'SkinscanAI', es: 'SkinscanAI' },
  tagline: { en: 'Professional AI Skin Analysis', es: 'Análisis Profesional de Piel con IA' },
  getStarted: { en: 'Get Started', es: 'Comenzar' },
  uploadPhoto: { en: 'Upload Photo', es: 'Subir Foto' },
  analyzeNow: { en: 'Analyze Now', es: 'Analizar Ahora' },
  results: { en: 'Results', es: 'Resultados' },
  pricing: { en: 'Pricing', es: 'Precios' },
  signIn: { en: 'Sign In', es: 'Iniciar Sesión' },
  signUp: { en: 'Sign Up', es: 'Registrarse' },
  signOut: { en: 'Sign Out', es: 'Cerrar Sesión' },
  email: { en: 'Email', es: 'Correo Electrónico' },
  password: { en: 'Password', es: 'Contraseña' },
  fullName: { en: 'Full Name', es: 'Nombre Completo' },
  skinType: { en: 'Skin Type', es: 'Tipo de Piel' },
  conditions: { en: 'Conditions', es: 'Condiciones' },
  hydration: { en: 'Hydration', es: 'Hidratación' },
  elasticity: { en: 'Elasticity', es: 'Elasticidad' },
  amRoutine: { en: 'Morning Routine', es: 'Rutina Matutina' },
  pmRoutine: { en: 'Evening Routine', es: 'Rutina Nocturna' },
  ingredientsToUse: { en: 'Recommended Ingredients', es: 'Ingredientes Recomendados' },
  ingredientsToAvoid: { en: 'Ingredients to Avoid', es: 'Ingredientes a Evitar' },
  progressTimeline: { en: 'Progress Timeline', es: 'Cronograma de Progreso' },
  free: { en: 'Free', es: 'Gratis' },
  pro: { en: 'Pro', es: 'Pro' },
  business: { en: 'Business', es: 'Empresarial' },
  perMonth: { en: '/month', es: '/mes' },
  analysesPerMonth: { en: 'analyses per month', es: 'análisis por mes' },
  unlimitedAnalyses: { en: 'Unlimited analyses', es: 'Análisis ilimitados' },
  basicSupport: { en: 'Basic support', es: 'Soporte básico' },
  prioritySupport: { en: 'Priority support', es: 'Soporte prioritario' },
  advancedReports: { en: 'Advanced reports', es: 'Reportes avanzados' },
  apiAccess: { en: 'API access', es: 'Acceso API' },
  choosePlan: { en: 'Choose Plan', es: 'Elegir Plan' },
  currentPlan: { en: 'Current Plan', es: 'Plan Actual' },
  medicalDisclaimer: { en: 'Medical Disclaimer', es: 'Aviso Médico' },
  privacyPolicy: { en: 'Privacy Policy', es: 'Política de Privacidad' },
  termsOfService: { en: 'Terms of Service', es: 'Términos de Servicio' },
  disclaimer: {
    en: 'This tool provides informational analysis only and is not a substitute for professional medical advice. Always consult with a qualified healthcare provider for skin concerns.',
    es: 'Esta herramienta proporciona análisis informativo únicamente y no sustituye el consejo médico profesional. Siempre consulte con un proveedor de atención médica calificado para problemas de piel.'
  },
  myAnalyses: { en: 'My Analyses', es: 'Mis Análisis' },
  dashboard: { en: 'Dashboard', es: 'Panel' },
  account: { en: 'Account', es: 'Cuenta' },
  analyzing: { en: 'Analyzing your skin...', es: 'Analizando tu piel...' },
  uploadInstruction: { en: 'Upload a clear photo of your face', es: 'Sube una foto clara de tu rostro' },
  dragDrop: { en: 'Drag and drop or click to upload', es: 'Arrastra y suelta o haz clic para subir' },
  heroTitle: { en: 'Transform Your Skincare Journey', es: 'Transforma tu Rutina de Cuidado de la Piel' },
  heroSubtitle: { en: 'Get personalized skin analysis powered by AI in seconds', es: 'Obtén análisis de piel personalizado con IA en segundos' },
  features: { en: 'Features', es: 'Características' },
  howItWorks: { en: 'How It Works', es: 'Cómo Funciona' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
