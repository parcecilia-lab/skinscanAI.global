import { ShieldAlert, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

interface Props {
  onAccept: () => void;
}

export const ConsentScreen = ({ onAccept }: Props) => {
  return (
    <div className="fixed inset-0 z-[100] bg-tech-black flex items-center justify-center p-6 overflow-y-auto">
      <div className="glass max-w-xl w-full p-8 rounded-[2.5rem] border border-white/10 shadow-neon-door my-auto">
        
        {/* Encabezado */}
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-electric-blue/10 rounded-2xl border border-electric-blue/20">
            <ShieldAlert className="text-electric-blue" size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-white uppercase">Protocolo Legal</h2>
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">v1.0.4 Global Security</p>
          </div>
        </div>

        {/* Cuerpo del texto legal */}
        <div className="space-y-6 text-gray-400 text-sm leading-relaxed mb-10 font-sans">
          <div className="flex gap-4">
            <CheckCircle2 className="text-electric-blue shrink-0" size={18} />
            <p><strong className="text-white">Uso Informativo:</strong> SkinScanAI no sustituye el diagnóstico de un dermatólogo profesional. Los resultados son análisis estadísticos generados por IA.</p>
          </div>

          <div className="flex gap-4">
            <FileText className="text-electric-blue shrink-0" size={18} />
            <p><strong className="text-white">Privacidad de Datos:</strong> Tus imágenes son analizadas de forma cifrada y no se asocian con tu identidad personal. Cumplimos con estándares de protección de datos de salud.</p>
          </div>

          <div className="bg-tech-gray/50 p-4 rounded-2xl border border-white/5 italic">
            "Al proceder, el usuario reconoce que cualquier acción tomada basada en estos resultados es bajo su propia responsabilidad."
          </div>
        </div>

        {/* Botón de Acción */}
        <button 
          onClick={onAccept}
          className="group w-full bg-electric-blue hover:bg-white text-tech-black font-extrabold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 uppercase tracking-widest shadow-neon-blue"
        >
          Acepto y deseo comenzar
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="text-center mt-6 text-[10px] text-gray-600 font-mono uppercase tracking-[0.2em]">
          SkinScanAI Global Network © 2026
        </p>
      </div>
    </div>
  );
};
