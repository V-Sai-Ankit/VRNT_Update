import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function VedaVyasa() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-56 md:pt-64 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-slate lg:prose-xl mx-auto prose-p:text-lg prose-p:leading-relaxed prose-headings:font-display prose-blockquote:font-serif prose-blockquote:italic"
          >
            <h1 className="text-secondary underline decoration-primary decoration-4 underline-offset-8">WHAT WE OWE TO VEDA-VYASA</h1>
            <div className="text-primary font-bold uppercase tracking-widest mb-8">THE MAHASVAMI OF KANCHI</div>
            
            <p>
              Vyasa is known as Veda-Vyasa. There were many Vedas. Before the commencement of Kali yuga, and at the end of Dvapara-yuga, Bhagavan Vyasa classified the Vedas into four. He thought: 'In the yuga that is to commence, the life-span of people will be short; their memory- power will be weak; the super-normal powers of yoga will decrease; something should be done in order to save the Veda from utter destruction".
            </p>

            <p>
              Bright day is succeeded by dark night; rainy season is followed by severe summer. So also, if at one time the Veda flourishes, at another time it is found to be on the decline. At that time, the Veda should be protected.
            </p>

            <div className="bg-primary/5 p-8 rounded-2xl mb-8 border-l-4 border-primary">
              <h3 className="mt-0">What should be done?</h3>
              <p className="mb-0 italic">
                In rural areas, when days are short and nights are long, during night-time when the sky is dark, there could be cases of theft. At that time, if ten people keep watch by going round the village, will not cases of theft become less? Similarly, in the Kali-yuga that was about to commence, if the entire Veda was not to be lost, at least four people, if not all, might each save a part of the Veda. Thus thought Vyasa, and classified the Veda into four: Rig, Yajur, Sama, and Atharvana.
              </p>
            </div>

            <p>
              The entire Veda is full of mantras. If the mantras are repeated with great restraint and purity, by the operation of those mantras, good will rebound to the world. In order to achieve this end, restraint and purity are absolutely necessary. There are rules regarding the time when the Veda should be recited. One should not read from a book. Veda is Sruti, what is heard; one should hear it and utter it correctly.
            </p>

            <p>
              In order to facilitate this, there are certain auxiliary disciplines. The Veda should be studied along with the auxiliaries. Those who entrusted with the task of preserving the Veda should observe the rules strictly. All that they have to do in the world is nothing but this. If the Veda is thus preserved, the entire world will fare well. It is not possible for all to devote themselves to this task. At least the sages (Rishis) and those who have come in their line should spend their time in this.
            </p>

            <blockquote className="border-primary/20 bg-primary/5 p-6 rounded-r-xl">
              "Rishayo mantra-drashtaah"<br />
              <span className="text-sm not-italic opacity-80">The rishis are the seers of mantra.</span>
            </blockquote>

            <p>
              Through the practice of yoga, the rishis grasp the powers of mantra, the beginning-less sounds. It is those who have the ability to grasp in this manner that are called 'seers'. Just as Arjuna beheld the cosmic form (visva-rupa) of Maha Vishnu, these sages grasped, by their yogic power, the mantras which are of the nature of beginning-less sounds.
            </p>

            <p>
              With the ordinary ear we hear the outer sounds. But through yogic practice and meditation, one acquires the power to hear the beginning-less sounds that are in ether, Those, who can in this way grasp -- i.e. see the mantras, of the form of sounds, are called rishis. The knowledge that makes known what are supersensory is referred to as the Veda.
            </p>

            <p>
              From time immemorial, the descendants of rishis preserved the Veda without the aid of a book. When we utter 'abhivadana' we mention the line of rishis to which we belong, the particular gotra, and sutra. From this we learn the rishi line in which we have come.
            </p>

            <p>
              If a medicine is brought and kept without use for some time it loses its potency. Similarly, if the Veda is not repeatedly studied, the power of its mantras will diminish. In order to regain for it the power, along with puja and homa the mantra should be repeated many a time. For all lapses, what serves as the sure recompense is the repetition of Gayatri.
            </p>

            <p>
              After teaching his four disciples the Veda which has to be preserved through observing restraints and purity, Vyasa wrote the eighteen Puranas and the Mahabharata, embodying in them the essence of the Vedas, in order that all people might be benefited.
            </p>

            <p>
              After accomplishing all these, Vyasa wrote a work expounding the nature of Brahman the supreme reality, that is the purport of all the earlier works he had written. The name of that work is Brahma-sutra. Another name of Vyasa is Badarayana.
            </p>

            <p>
              For our Vedas, Sutras, Puranas etc., the root is Vyasa. Let us honour his picture at least, and let us not forget the Veda; and let us unite in doing our allotted work. It is Veda-Vyasa who has enabled the Veda to survive during such a long stretch of time. We should honour him; that is our duty.
            </p>

            <div className="mt-16 pt-8 border-t border-border flex flex-col items-center gap-4">
              <div className="font-display font-bold text-primary tracking-[0.2em]">OM TAT SAT</div>
              <div className="text-sm text-muted-foreground italic text-center max-w-lg">
                Courtesy: Vanati Publications, Madras. A free translation from the book of compilation of the speeches by His Holiness Kanchi Paramacharyal.
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
