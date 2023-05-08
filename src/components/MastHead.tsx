import Image from 'next/image';
import React from 'react';

type Props = {};

const MastHead = (props: Props) => {
  return (
    <div className="relative min-h-[570px] flex items-center">
      <Image
        src="/masthead.jpg"
        alt="Masthead"
        fill
        className="object-cover -z-10"
      />

      <div
        className="-z-10 absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white bg-blur w-1/2"
        style={{
          backgroundImage:
            'linear-gradient(89.86deg, #8A94AB 0.13%, rgba(138, 148, 171, 0) 99.89%)',
          backdropFilter: 'blur(2.8px)',
        }}
      ></div>

      <div className="mainContainer">
        <div className="max-w-xl space-y-6">
          <h1 className="text-white text-6xl font-medium">
            Бытовая химия, косметика и хозтовары
          </h1>
          <span className="uppercase font-semibold inline-block text-xl text-white">
            оптом по г.аЛМАТЫ и области
          </span>

          <button className="text-white flex items-center space-x-2 justify-center px-16 py-6 rounded-full bg-custom-yellow-color">
            <span className="font-medium tracking-wider uppercase">
              В Каталог
            </span>
          </button>

          <div className="flex space-x-6">
            <div className="flex space-x-3">
              <div className="min-w-[40px] h-10 flex items-center justify-center text-white bg-custom-yellow-color rounded-full font-bold">
                +
              </div>
              <span className="text-white text-sm text-left">
                Только самые <br /> выгодные предложения
              </span>
            </div>

            <div className="flex space-x-3">
              <div className="min-w-[40px] h-10 flex items-center justify-center text-white bg-custom-yellow-color rounded-full font-bold">
                +
              </div>
              <span className="text-white text-sm text-left">
                Бесплатная доставка <br /> по г.Алматы от 10 тыс ₸
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MastHead;
