import Image from 'next/image';
import React from 'react';

type Props = {};

const Categories = (props: Props) => {
  return (
    <div className="mainContainer">
      <div className="flex flex-col space-y-3">
        <span className="uppercase text-3xl">
          <span className="text-custom-yellow-color font-bold">категории</span>{' '}
          товаров
        </span>
        <span className="text-gray-500 font-light">
          10 000+ ходовых позиций по спецмальным ценам
        </span>
      </div>

      <div className="flex py-12 gap-5">
        <div className="text-center space-y-3">
          <div className="bg-orange-50 rounded-2xl overflow-hidden relative w-52 h-52">
            <Image
              src="/1.png"
              alt="first"
              width={220}
              height={200}
              className="bottom-0 absolute"
            />
          </div>
          <span className="inline-block">Бытовая химия</span>
        </div>

        <div className="text-center space-y-3">
          <div className="bg-orange-50 rounded-2xl overflow-hidden relative w-52 h-52">
            <Image
              src="/2.png"
              alt="first"
              width={220}
              height={200}
              className="bottom-0 absolute"
            />
          </div>
          <span className="inline-block">Косметика и гигиена</span>
        </div>

        <div className="text-center space-y-3">
          <div className="bg-orange-50 rounded-2xl overflow-hidden relative w-52 h-52">
            <Image
              src="/3.png"
              alt="first"
              width={220}
              height={200}
              className="bottom-0 absolute"
            />
          </div>
          <span className="inline-block">Товары для дома</span>
        </div>

        <div className="text-center space-y-3">
          <div className="bg-orange-50 rounded-2xl overflow-hidden relative w-52 h-52">
            <Image
              src="/4.png"
              alt="first"
              width={220}
              height={200}
              className="bottom-0 absolute"
            />
          </div>
          <span className="inline-block">Товары для детей и мам</span>
        </div>

        <div className="text-center space-y-3">
          <div className="bg-orange-50 rounded-2xl overflow-hidden relative w-52 h-52">
            <Image
              src="/5.png"
              alt="first"
              width={220}
              height={200}
              className="bottom-0 absolute"
            />
          </div>
          <span className="inline-block">Посуда</span>
        </div>
      </div>
    </div>
  );
};

export default Categories;
