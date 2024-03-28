import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import quote from './quote.svg';
import aboutMeImg from '../../assets/aboutMe.jpeg';

const About = () => {
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

  const aboutText =
    'Hello there! My name is Viktorija. I am a brand manager, with quite a lot of knowledge how to boost your business with a help of social media. Check out my page, and if any of my services interests you, get in touch!';

  return (
    // test
    <div className="w-screen h-screen ">
      <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row  px-10 justify-center gap-20 mx-auto items-center z-20 ">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
          About
        </h3>

        <Image
          src={aboutMeImg}
          width={1000}
          height={1000}
          priority
          quality={100}
          alt="Viktorija's about image"
          className="-mb-10 h-64 w-64 sm:drop-shadow-[0_0px_20px_#ffffff0f] flex-shrink-0 rounded-full object-cover text-[#ffffff5d] transition duration-700  ease-in-out hover:scale-125 hover:drop-shadow-[0_0px_35px_#ffffff2f] md:mb-0 md:h-96 md:w-96 md:rounded-lg xl:scale-110
                "
        />

        <div className={`space-y-6 px-0 md:px-3 flex items-center`}>
          <motion.p
            initial={{
              x: 100,
            }}
            whileInView={{
              y: 0,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="text-justify text-sm font-bold  antialiased sm:text-base sm:font-normal md:max-w-xl md:text-base  md:leading-7 xl:text-xl  xl:leading-8 pb-4 sm:mt-32 relative"
          >
            {/* upper quote */}
            <Image
              src={quote}
              alt="open quote"
              width={35}
              height={35}
              className="absolute top-[-60px] left-[-10px] fill-inherit"
              priority
            />
            {/* lower quote */}
            <Image
              src={quote}
              alt="open quote"
              width={35}
              height={35}
              className="absolute bottom-[-40px] right-[-10px] rotate-180"
              priority
            />

            {aboutText.split(' ').map((word: any, key: any) => {
              return (
                <span
                  className="hover:text-[#F5C8D1] transition-all ease-in-out hover:scale-105 tracking-wide"
                  key={key}
                >
                  {word}{' '}
                </span>
              );
            })}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
