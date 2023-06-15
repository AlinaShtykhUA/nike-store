import { ChevronDoubleLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';

const CartCount = ({ onCartToggle, onClearCartItems, totalQTY }) => {
  return (
    <>
      <div className='bg-slate-100 h-11 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full'>
        <div className='flex items-center gap-3'>
          <div
            className='gid items-center cursor-pointer'
            onClick={onCartToggle}>
            <ChevronDoubleLeftIcon className='w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2]' />
          </div>
          <div className='gid items-center'>
            <h3 className='text-base font-medium text-slate-900'>
              Your Cart{' '}
              <span className='bg-theme-cart rounded px1 py-0.5 text-slate-100 font-normal text-xs'>
                ({totalQTY} Items)
              </span>
            </h3>
          </div>
        </div>

        <div className='flex items-center'>
          <button
            className='rounded bg-theme-cart active:scale-90 p-0.5'
            type='button'
            onClick={onClearCartItems}>
            <XMarkIcon className='w-5 h-5 text-slate-100 sroke-[2]' />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCount;
