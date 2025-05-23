"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
        <motion.div 
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {delay: 2, dulation: 0.4, ease: "easeIn"},
            }}
        >
            {/* Image */}
            <motion.div
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {delay: 2.4, dulation: 0.4, ease: "easeInOut"},
            }}
            className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] absolut"
            >
                <Image
                    src="/assets/removebg-preview.png"
                    priority
                    quality={100}
                    fill 
                    alt="" 
                    className="object-contain rounded-b-full" 
                />
            </motion.div>

        </motion.div>
    </div>
  );
};

export default Photo