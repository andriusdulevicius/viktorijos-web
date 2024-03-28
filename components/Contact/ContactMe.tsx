import React, { useRef, useState } from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

type Props = {};

const ContactMe = (props: Props) => {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row  max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl cursor-default">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 mt-28 ">
        <h4 className="text-2xl md:text-4xl font-semibold text-center cursor-default">
          If I got just what you need,{' '}
          <span className="text-[#F5C8D1] cursor-default">Lets Talk!</span>
        </h4>

        <div className="space-y-3 ">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F5C8D1] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+37067459418</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F5C8D1] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Lithuania</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F5C8D1] h-7 w-7 animate-pulse" />
            <p className="text-2xl">viktorija.duleviciene@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
