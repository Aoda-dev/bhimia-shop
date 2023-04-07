import { checkEnv } from '@/helper/checkEnv';
import { Product } from '@/interfaces/product.interface';
import { NextPageContext } from 'next';
import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi';

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
  console.log(props.data);

  return (
    <div>
      <div className="flex mt-14 justify-center">
        <Image
          src={props.data.img}
          width={400}
          height={800}
          alt={props.data.name}
        />

        <div className="flex flex-col max-w-md space-y-6">
          <span className="text-2xl font-semibold">{props.data.name}</span>

          <small>(Артикул: {props.data.article})</small>

          <span className="text-2xl font-bold">{props.data.price} ₸/шт.</span>

          <span>{props.data.text}</span>

          <button className="flex space-x-3 bg-red-500 text-white hover:bg-red-400 py-2.5 items-center justify-center">
            <FiShoppingCart className="text-2xl" />
            <span>В корзину</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
