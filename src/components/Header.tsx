import { FiSearch, FiShoppingBag } from 'react-icons/fi';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex justify-between items-center py-10">
      <span className="whitespace-nowrap">Бытовая химия</span>

      <div className="flex px-28 space-x-6 w-full justify-center">
        <input
          className="bg-gray-100 py-2 border border-stone-300 px-3 text-sm font-medium w-full"
          placeholder="Поиск по товарам"
        />

        <button className="bg-slate-800 px-5">
          <FiSearch className="text-2xl text-white" />
        </button>
      </div>

      <button>
        <FiShoppingBag className="text-2xl" />
      </button>
    </div>
  );
};

export default Header;
