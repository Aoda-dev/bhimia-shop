import Footer from '@/components/Footer';
import SubHeader from '@/components/SubHeader';
import { DeleteIcon } from '@/icons/icons';
import { useShoppingCart } from '@/state/cartProvider';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

const cart = (props: Props) => {
  const {
    cartItems,
    addToCart,
    getTotalPrice,
    removeOne,
    removeFromCart,
    getQuantityById,
  } = useShoppingCart();

  return (
    <div>
      <SubHeader />

      <div className="mainContainer space-y-3">
        <span className="py-14 inline-block text-4xl uppercase">Корзина</span>

        <div className="flex flex-col space-y-6 pb-14">
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

              <div className="max-w-lg flex flex-col space-y-2">
                <span className="text-xs">{item.product.article}</span>
                <span className="text-lg font-bold">{item.product.name}</span>
                <p className="text-sm text-gray-500">{item.product.text}</p>
              </div>

              <div className="flex space-x-3 items-center">
                <button onClick={() => removeFromCart(item.product._id)}>
                  -
                </button>
                <div>{getQuantityById(item.product._id)}</div>
                <button onClick={() => addToCart(item.product)}>+</button>
              </div>

              <span className="font-bold">{item.product.price}</span>

              <button
                onClick={() => removeOne(item.product._id)}
                className="ml-auto w-10 h-10 rounded-full bg-custom-yellow-color flex items-center justify-center"
              >
                <DeleteIcon />
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between py-10">
          <Link
            href="/order"
            className="rounded-full text-white bg-custom-yellow-color px-5 py-2 flex items-center justify-center"
          >
            Оформить заказ
          </Link>

          <span className="font-bold text-xl">{getTotalPrice()}</span>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default cart;
