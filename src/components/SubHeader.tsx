import { CartIcon, SearchIcon, SquareIcons, SultanIcon } from '@/icons/icons';
import { Product } from '@/interfaces/product.interface';
import { useShoppingCart } from '@/state/cartProvider';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Props = {};

const SubHeader = (props: Props) => {
  const { getTotalPrice } = useShoppingCart();

  return (
    <div className="border-b border-t border-b-gray-400 border-t-gray-400">
      <div className="mainContainer flex items-center justify-between py-5">
        <Link href="/">
          <SultanIcon className="fill-gray-800" />
        </Link>

        <button className="text-white flex items-center space-x-2 justify-center px-12 py-[0.8rem] rounded-full bg-custom-yellow-color">
          <span className="font-semibold">Каталог</span>
          <SquareIcons />
        </button>

        <div className="-ml-6 bg-custom-gray-color flex items-center justify-between px-5 py-2 rounded-full">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Поиск..."
            className="text-darkGray bg-transparent text-sm placeholder:text-darkGray outline-none"
          />
          <div className="bg-custom-yellow-color p-2 rounded-full">
            <SearchIcon />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex flex-col text-right text-sm space-y-1">
            <span className="font-semibold">+7 (777) 931-58-49</span>
            <span className="font-light">время работы: 9:00-20:00</span>
            <a href="#" className="font-light underline underline-offset-3">
              Заказать звонок
            </a>
          </div>

          <div className="relative">
            <div className="bg-green-400 absolute top-6 w-3 h-3 right-0 ring ring-gray-100 rounded-full"></div>

            <Image
              src="/pngwing 3.svg"
              alt="img"
              className="rounded-full"
              width={80}
              height={80}
            />
          </div>
        </div>

        <div className="flex items-center space-x-4 cursor-pointer">
          <div>
            <CartIcon className="fill-gray-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-light text-sm">Корзина</span>
            <span className="font-semibold text-sm">
              {getTotalPrice()} &#8376;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
