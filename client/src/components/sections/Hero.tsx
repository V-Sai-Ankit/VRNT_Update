import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import headerImg from "@assets/FB_IMG_1768808289933~2_1768808606506.jpg";
import { SITE_CONTENT } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const imageScale = 1;
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="relative h-screen flex items-start justify-center overflow-hidden">
      {/* Background Image with reveal effect */}
      <div className="absolute inset-0 z-0 overflow-hidden pt-8">
        <motion.img
          style={ { scale: imageScale } }
          src={headerImg}
          alt="Veda Rakshana Nidhi Trust Header"
          className="w-full h-full object-cover object-top"
        />
        <motion.div 
          style={ { opacity } }
          className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background/20 z-10" 
        />
      </div>

      {/* Decorative Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
}
