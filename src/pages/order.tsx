import { useState } from 'react';
import Footer from '@/components/Footer';
import SubHeader from '@/components/SubHeader';
import { FuraIcon, WallerIcon } from '@/icons/icons';
import { useShoppingCart } from '@/state/cartProvider';
import Image from 'next/image';

type Props = {};

const order = (props: Props) => {
  const [active, setActive] = useState(false);

  const { cartItems, getTotalPrice } = useShoppingCart();

  return (
    <div>
      {active && (
        <div
          onClick={(e: any) => {
            e.target.classList.contains('modalka') && setActive(false);
          }}
          className="fixed modalka flex items-center justify-center top-0 left-0 w-screen h-screen bg-black/50 z-50"
        >
          <div className="bg-white p-24 flex justify-center items-center relative flex-col rounded-md">
            <div
              onClick={() => setActive(false)}
              className="text-custom-yellow-color absolute right-5 top-5 cursor-pointer text-lg"
            >
              x
            </div>

            <div className="bg-custom-yellow-color p-3 rounded-full">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 12.5L7.75 17.5L10.375 14.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.5 12.5L13.75 17.5L22.5 7.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 7.5L13 11.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <span className="inline-block text-3xl tracking-wider uppercase">
              СПАСИбо за заказ
            </span>

            <span className="text-gray-500">
              Наш менеджер свяжется с вами в ближайшее время
            </span>
          </div>
        </div>
      )}

      <SubHeader />

      <div className="mainContainer py-16 space-y-14">
        <div className="flex space-x-12">
          <div>
            <span className="uppercase inline-block pb-5 text-3xl font-medium">
              ОФОрмление заказа
            </span>

            <div className="max-w-xs space-y-6">
              <div className="flex space-x-2 items-center">
                <div className="bg-orange-200 w-8 h-8 rounded-full flex items-center justify-center">
                  1
                </div>

                <span className="text-lg uppercase font-semibold">
                  Контактные данные
                </span>
              </div>

              <div className="flex flex-col space-y-3">
                <span className="font-medium">Имя*</span>
                <input
                  type="text"
                  className="bg-gray-100 px-5 py-4 rounded-full"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div className="flex flex-col space-y-3">
                <span className="font-medium">Телефон*</span>
                <input
                  type="text"
                  className="bg-gray-100 px-5 py-4 rounded-full"
                  placeholder="Введите ваш телефон"
                />
              </div>

              <div className="flex flex-col space-y-3">
                <span className="font-medium">E-mail*</span>
                <input
                  type="email"
                  className="bg-gray-100 px-5 py-4 rounded-full"
                  placeholder="Введите ваш E-mail"
                />
              </div>

              <div className="flex flex-col space-y-3">
                <span className="font-medium">Название организации*</span>
                <input
                  type="email"
                  className="bg-gray-100 px-5 py-4 rounded-full"
                  placeholder="Введите ваш E-mail"
                />
              </div>

              <div className="flex space-x-2 items-center">
                <div className="bg-orange-200 w-8 h-8 rounded-full flex items-center justify-center">
                  2
                </div>

                <span className="text-lg uppercase font-semibold">
                  Адрес доставки
                </span>
              </div>

              <div className="flex flex-col space-y-3">
                <span className="font-medium">Город*</span>
                <input
                  type="select"
                  className="bg-gray-100 px-5 py-4 rounded-full"
                  placeholder="Выберите ваш город"
                />
              </div>

              <div className="flex flex-col space-y-3">
                <span className="font-medium">Адрес*</span>
                <input
                  type="text"
                  className="bg-gray-100 px-5 py-4 rounded-full"
                  placeholder="Введите ваш адрес"
                />
              </div>

              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => setActive(true)}
                  className="bg-custom-yellow-color text-white px-5 py-4 rounded-full"
                  placeholder="Введите ваш адрес"
                >
                  Подтверждение заказа
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white shadow p-5 rounded-md max-w-xs">
              <div className="space-x-3 flex">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-200">
                  <WallerIcon />
                </div>
                <span className="text-lg uppercase font-semibold">Оплата</span>
              </div>
              <p className="text-sm text-gray-500">
                Принимаем оплату наличными, по карте и <br /> через расчетный
                счет.
              </p>
            </div>

            <div className="bg-white shadow p-5 rounded-md max-w-xs">
              <div className="space-x-3 flex">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-200">
                  <FuraIcon />
                </div>
                <span className="text-lg uppercase font-semibold">
                  Доставка
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Бесплатная доставка от 10 000 ₸ по области. Наша доставка
                работает ежедневно.
              </p>
            </div>

            <div className="bg-white shadow p-5 rounded-md max-w-xs">
              <div className="space-x-3 flex">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-200">
                  ?
                </div>
                <span className="text-lg uppercase font-semibold">
                  Возникли вопросы?
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Звоните: +7 777 490 00 91 Менеджер Вам ответит на все вопросы.
              </p>
            </div>

            <div className="flex space-x-2 items-center">
              <div className="bg-orange-200 w-8 h-8 rounded-full flex items-center justify-center">
                3
              </div>

              <span className="text-lg uppercase font-semibold">
                Дополнительно
              </span>
            </div>

            <div className="flex flex-col space-y-3">
              <span className="font-medium">Комментарий</span>
              <textarea
                className="bg-gray-100 min-h-[50px] px-5 py-4 rounded-full"
                placeholder="Выберите ваш город"
              />
            </div>
          </div>

          <div className="bg-white shadow-md space-y-6 p-5">
            <span className="font-semibold text-xl inline-block">
              Ваш заказ
            </span>

            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  className="flex items-center gap-14 w-max"
                  key={item.product._id}
                >
                  <Image
                    src={item.product.img}
                    width={150}
                    height={100}
                    alt={item.product.article}
                  />

                  <div className="flex max-w-xs flex-col space-y-2">
                    <span className="text-xs">{item.product.article}</span>
                    <span className="text-lg font-bold">
                      {item.product.name}
                    </span>
                    <span className="font-bold">{item.product.price} ₸</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default order;
