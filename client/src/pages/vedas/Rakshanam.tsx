import { motion } from "framer-motion";

export default function VedaRakshanam() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-slate lg:prose-xl mx-auto"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-8">Veda Rakshanam</h1>
          
          <div className="bg-secondary/5 p-8 rounded-2xl mb-12 border-l-4 border-secondary font-serif text-lg">
            "Vedo Vrikshaha Tasya Moolam hi Vip raha A ngas sakhaha Dharma Karmani Patram Tasrnan Moolo Yatnatho Rakshaneeya Chjnne Moolae Naiva Sakha na Vrikshaha"
          </div>

          <p className="text-lg leading-relaxed mb-6">
            "The Vedas" is a Vriksha (Tree), whose roots are the Vipras (Brahmins), the repository of the Vedas. The six Angas are the branches. The Karmanushtanam and the Dharmic way of life are the leaves.
          </p>

          <div className="my-12 flex justify-center">
            <img 
              src="https://vrnt.org/images/treecolor.jpg" 
              alt="Veda Vriksha" 
              className="rounded-2xl shadow-xl border border-border"
            />
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The failure to preserve the Vedas has resulted in 1121 sakhas (recensions) out of 1131 that existed 5000 years ago getting extinct. Verily, watering the roots only will arrest the decay of the tree and its branches.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            This Veda Rakshanam by the Grihastas is sought to be shown by offering the necessities of livelihood to the repositories of the Vedas—the Guru and the disciples.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
