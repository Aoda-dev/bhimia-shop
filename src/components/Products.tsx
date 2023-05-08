import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi';
import { Product } from '@/interfaces/product.interface';
import Link from 'next/link';
import { CartIcon, MlIcon } from '@/icons/icons';

type Props = {
  products: Product[];
};

const Products = (props: Props) => {
  const { products } = props;

  return (
    <div>
      <div className="flex gap-8 flex-wrap">
        {products.map((product) => (
          <Link href={`product/${product._id}`} key={product._id}>
            <div className="flex bg-white p-5 relative rounded-md shadow items-center space-y-3 flex-col cursor-pointer hover:shadow-xl hover:transition-shadow hover:duration-300 max-w-[16rem]">
              <div className="uppercase top-2 left-2 absolute text-[10px] bg-green-400 text-white py-1 px-2 rounded">
                популярное
              </div>
              <Image
                alt={product.name}
                src={product.img}
                width={170}
                height={200}
              />
              <div className="w-full space-y-2">
                <small className="flex text-xs text-gray-500 items-center space-x-2">
                  <MlIcon className="fill-gray-300" />
                  <span>450 мл</span>
                </small>

                <span className="inline-block text-sm">{product.name}</span>

                <div className="text-gray-500 flex flex-col space-y-1.5">
                  <span className="inline-block text-xs">
                    Штрихкод: 4604049097548
                  </span>
                  <span className="inline-block text-xs">
                    Производитель: Нэфис
                  </span>
                  <span className="inline-block text-xs">бренд: AOS</span>
                </div>

                <div className="text-xs flex space-x-7 items-center">
                  <span className="font-bold inline-block whitespace-nowrap">
                    {product.price} &#8376;
                  </span>
                  <button className="text-white flex items-center space-x-2 justify-center rounded-full px-5 py-2 uppercase bg-custom-yellow-color">
                    <span className="font-semibold whitespace-nowrap tracking-wider">
                      В корзину
                    </span>
                    <CartIcon className="fill-white w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
