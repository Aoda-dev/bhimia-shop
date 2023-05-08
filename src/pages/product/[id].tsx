import Footer from '@/components/Footer';
import SubHeader from '@/components/SubHeader';
import { checkEnv } from '@/helper/checkEnv';
import { BoxOpen, CartIcon, DownloadItemIcon, ShareIcon } from '@/icons/icons';
import { Product } from '@/interfaces/product.interface';
import { useShoppingCart } from '@/state/cartProvider';
import { NextPageContext } from 'next';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  data: Product;
};

export const getServerSideProps = async (context: NextPageContext) => {
  const response = await fetch(`${checkEnv()}/api/get/${context.query.id}`);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

const index = (props: Props) => {
  const { addToCart, getQuantityById, removeFromCart } = useShoppingCart();

  return (
    <div>
      <SubHeader />

      <div className="mainContainer flex p-16 justify-center">
        <div>
          <Image
            src={props.data.img}
            alt={props.data.article}
            width={400}
            height={400}
          />
        </div>

        <div className="flex flex-col max-w-md space-y-3">
          <span className="text-green-500 font-semibold">В наличии</span>
          <span className="text-2xl font-semibold">{props.data.name}</span>
          <span className="flex space-x-2 items-center">
            <BoxOpen /> <span className="text-xs text-gray-500">90г</span>
          </span>

          <div className="flex items-center space-x-6">
            <span className="text-xl font-bold">
              {props.data.price} &#8376;
            </span>

            <div className="flex space-x-3">
              <button onClick={() => removeFromCart(props.data._id)}>-</button>
              <div>{getQuantityById(props.data._id)}</div>
              <button onClick={() => addToCart(props.data)}>+</button>
            </div>

            <button className="text-white flex items-center space-x-2 justify-center px-12 py-[0.8rem] rounded-full bg-custom-yellow-color">
              <Link href="/cart" className="font-semibold">
                В корзину
              </Link>
              <CartIcon className="fill-white w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <div className="bg-white shadow px-5 py-[27px]">
              <ShareIcon />
            </div>

            <div className="bg-white text-gray-500 whitespace-nowrap shadow p-5 text-xs">
              При покупке от <span className="font-semibold">10 000 ₸</span>{' '}
              бесплатная <br /> доставка по Кокчетаву и области
            </div>

            <div className="bg-white shadow px-5 py-[27px] space-x-2 text-xs flex">
              <span className="whitespace-nowrap font-semibold">
                Прайс-лист
              </span>
              <span>
                <DownloadItemIcon />
              </span>
            </div>
          </div>

          <div className="flex flex-col text-sm space-y-2">
            <span>
              <span className="text-gray-500">Производитель:</span> BioMio
            </span>
            <span>
              <span className="text-gray-500">Бренд:</span> BioMio
            </span>
            <span>
              <span className="text-gray-500">Артикул:</span>{' '}
              {props.data.article}
            </span>
            <span>
              <span className="text-gray-500">Штрихкод:</span> 4604049097548
            </span>
          </div>

          <div className="flex flex-col space-y-3 pt-4">
            <span>Описание</span>

            <p className="text-sm text-gray-500">{props.data.text}</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default index;
