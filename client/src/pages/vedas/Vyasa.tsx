import { motion } from "framer-motion";

export default function VedaVyasa() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-slate lg:prose-xl mx-auto"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-8">What we owe to Veda Vyasa</h1>
          
          <p className="text-lg leading-relaxed mb-6">
            Vyasa is known as Veda-Vyasa. Before the commencement of Kali yuga, and at the end of Dvapara-yuga, Bhagavan Vyasa classified the Vedas into four.
          </p>

          <div className="bg-accent/10 p-8 rounded-2xl mb-8 border-l-4 border-accent italic">
            "In the yuga that is to commence, the life-span of people will be short; their memory-power will be weak; something should be done in order to save the Veda from utter destruction."
          </div>

          <p className="text-lg leading-relaxed mb-6">
            He classified the Veda into four: Rig, Yajur, Sama, and Atharvana. He taught these to his four disciples: Paila, Vaisampayana, Jaimini, and Sumantu.
          </p>

          <p className="text-lg leading-relaxed mb-6 font-serif border-t pt-6">
            It is Veda-Vyasa who has enabled the Veda to survive during such a long stretch of time. We should honour him; that is our duty.
          </p>
          
          <div className="mt-12 text-center text-sm text-muted-foreground italic">
            Courtesy: Vanati Publications, Madras
          </div>
        </motion.div>
      </div>
    </div>
  );
}
