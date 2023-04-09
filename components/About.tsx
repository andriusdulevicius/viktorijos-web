import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import aboutImage from "assets/aboutImage.jpg";

type Props = {};

const About = (props: Props) => {
  const x = useMotionValue(100);
  const y = useMotionValue(100);

  const rotateX = useTransform(y, [0, 200], [10, -10]);
  const rotateY = useTransform(x, [0, 200], [-10, 10]);

  function handleMouse(event: any) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }
  function mouseLeave(event: any) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(100);
    y.set(100);
  }

  return (
    // test
    <div className="w-screen h-screen ">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          scale: [0.5, 1.1, 1],
        }}
        transition={{
          type: "spring",
          duration: 1.5,
        }}
        viewport={{ once: true }}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row  px-10 justify-evenly mx-auto items-center z-20"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
          About
        </h3>

        <motion.div
          initial={{
            y: -200,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
        >
          <motion.div
            style={{
              display: "flex",
              placeItems: "center",
              placeContent: "center",
              perspective: 1000,
            }}
            onMouseMove={handleMouse}
            onMouseLeave={mouseLeave}
          >
            <motion.div
              style={{
                rotateX: rotateX,
                rotateY: rotateY,
              }}
              className="mt-28 flex h-60 w-64 items-start justify-center md:h-96 md:w-96"
            >
              <Image
                src={aboutImage}
                priority={true}
                alt="Sunil's about image"
                className="-mb-10 h-64 w-64 flex-shrink-0 rounded-full object-cover text-[#ffffff5d] transition duration-700  ease-in-out hover:scale-125 hover:drop-shadow-[0_0px_35px_#ffffff2f] md:mb-0 md:h-96 md:w-96 md:rounded-lg xl:scale-110"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: [0.5, 1.1, 1],
          }}
          transition={{
            type: "spring",
            duration: 2,
          }}
          viewport={{ once: true }}
          className="space-y-6 px-0 md:px-5"
        >
          <h4 className="text-2xl font-semibold text-[#F7AB0A] sm:text-4xl xl:mt-20">{`Here's Something `}</h4>
          <p className="text-justify text-sm font-bold  antialiased sm:text-base sm:font-normal md:max-w-xl md:text-base  md:leading-7 xl:text-xl  xl:leading-8 pb-4">
           Hello there! I&apos;m your friendly neighborhood MERN developer, about to
            graduate and take the tech world by storm! My love for coding runs
            as deep as my love for chai, and I can promise you that I work just
            as hard as I do when devouring a piping hot slice of pizza. In my
            spare time, you&apos;ll find me tinkering away on side projects, trying
            to push the limits of what&apos;s possible with the latest tech trends.
            I&apos;m always up for a good challenge, whether it&apos;s debugging a pesky
            line of code or figuring out how to integrate the latest APIs. So,
            if you&apos;re in need of a quirky, fun-loving, full-stack MERN
            developer, look no further! I&apos;m ready to roll up my sleeves and get
            coding!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
