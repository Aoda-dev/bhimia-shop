import {
  DownloadIcon,
  MasterCardIcon,
  SultanIcon,
  TelegramIcon,
  VisaIcon,
  WhatsappIcon,
} from '@/icons/icons';
import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footer-color p-16">
      <div className="mainContainer flex space-x-6">
        <div className="max-w-xs space-y-6">
          <SultanIcon className="fill-white" />
          <span className="text-white inline-block">
            Компания «tmrln» — снабжаем розничные магазины товарами <br /> "под
            ключ" в Алмате и Жетисуской области
          </span>
        </div>

        <div className="flex space-x-10">
          <div className="text-white space-y-3">
            <span className="text-lg font-semibold">Меню сайта:</span>

            <ul className="text-sm space-y-3">
              <li>О компании</li>
              <li>Доставка и оплата</li>
              <li>Возврат</li>
              <li>Контакты</li>
            </ul>
          </div>

          <div className="text-white space-y-3">
            <span className="text-lg font-semibold">Категории:</span>

            <ul className="text-sm space-y-3">
              <li>Бытовая химия</li>
              <li>Косметика и гигиена</li>
              <li>Товары для дома</li>
              <li>Товары для детей и мам</li>
              <li>Посуда</li>
            </ul>
          </div>

          <div className="text-white space-y-3">
            <span className="text-lg font-semibold">Скачать прайс-лист:</span>

            <button className="text-white flex items-center space-x-2 justify-center px-5 py-[0.8rem] rounded-full bg-custom-yellow-color">
              <span className="font-semibold">Прайс-лист</span>
              <DownloadIcon />
            </button>

            <span className="text-sm inline-block">Связь в мессенджерах:</span>
            <div className="flex space-x-2">
              <WhatsappIcon />
              <TelegramIcon />
            </div>
          </div>

          <div className="text-white space-y-3 flex flex-col">
            <span className="text-lg font-semibold">Контакты:</span>

            <span className="text-sm">+7 (777) 931-58-49</span>
            <span className="text-sm">время работы: 9:00-20:00</span>
            <span className="text-sm">Заказать звонок</span>
            <span className="text-sm">
              opt .shop@mail.ru <br />
              На связи в любое время
            </span>

            <div className="flex space-x-2">
              <VisaIcon />
              <MasterCardIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
