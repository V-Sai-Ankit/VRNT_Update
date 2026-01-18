import { motion } from "framer-motion";

export default function AboutVedas() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-slate lg:prose-xl mx-auto"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-8">About the Vedas</h1>
          <div className="bg-primary/5 p-8 rounded-2xl mb-8 border-l-4 border-primary italic font-serif text-lg">
            "The Vedas form the bedrock of Bharatiya Culture and Civilization. They are ANAADHI (timeless) and APAOURESHYA (divine)."
          </div>
          <p className="text-lg leading-relaxed mb-6">
            The Vedas (Sabda-Brahman) are co-existent with God and the Universe. At the beginning of the current Sveta-Varaha-Kalpa, (the present span of the Universe), about 6 million years ago, countless, innumerable Vedas (Ananthaha) were divined by Rishis.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            The knowledge that makes known what are supersensory is referred to as the Veda. From time immmemorial, the descendants of rishis preserved the Veda without the aid of a book, through oral tradition (Sruti).
          </p>
          <div className="my-12">
            <img 
              src="https://vrnt.org/images/acharya.jpg" 
              alt="MahaPeriyava" 
              className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
            />
            <p className="text-center text-sm text-muted-foreground mt-4 italic">The Sage of Kanchi</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
