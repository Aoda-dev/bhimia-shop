import { GpsIcon, LetterIcon } from '@/icons/icons';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="text-sm">
      <div className="mainContainer flex justify-between items-center py-5">
        <div className="flex items-center space-x-14">
          <div className="flex space-x-4 items-center">
            <GpsIcon />
            <span className="-mt-1 inline-block font-medium">
              г.Алматы, ул. Тимирязева 17
            </span>
          </div>

          <div className="flex space-x-4 items-center">
            <LetterIcon />
            <div className="flex flex-col -space-y-1">
              <span className="font-semibold">opt.shop@mail.ru</span>
              <span className="font-normal">На связи в любое время</span>
            </div>
          </div>
        </div>
        <div className="space-x-10 text-gray-700">
          <a href="#">О компании</a>
          <a href="#">Доставка и оплата</a>
          <a href="#">Возврат</a>
          <a href="#">Контакты</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
