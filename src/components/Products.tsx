import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi';
import { Product } from '@/interfaces/product.interface';
import Link from 'next/link';

type Props = {
  products: Product[];
};

const Products = (props: Props) => {
  const { products } = props;

  return (
    <div>
      <span className="text-xl">Все товары ({products.length})</span>

      <div className="flex mt-14 gap-10 flex-wrap">
        {products.map((product) => (
          <Link href={`product/${product._id}`} key={product._id}>
            <div className="flex space-y-3 flex-col cursor-pointer hover:border max-w-[15rem]">
              <Image
                alt={product.name}
                src={product.img}
                width={240}
                height={300}
              />

              <span>{product.name}</span>

              <span className="font-bold">{product.price} ₸/шт.</span>

              <button className="flex space-x-3 bg-red-500 text-white hover:bg-red-400 py-2.5 items-center justify-center">
                <FiShoppingCart className="text-2xl" />
                <span>В корзину</span>
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
