import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';
import {
  setDecreaseItemQTY,
  setIncreaseItemQTY,
  setRemoveItemFromCart,
} from '../../redux/cart-slice';

const CartItem = ({
  item: { id, color, shadow, title, text, img, price, cartQuantity },
}) => {
  const dispatch = useDispatch();

  const onRemoveItem = () => {
    dispatch(
      setRemoveItemFromCart({
        id,
        color,
        shadow,
        title,
        text,
        img,
        price,
        cartQuantity,
      })
    );
  };
  const onIncreaseItemQTY = () => {
    dispatch(
      setIncreaseItemQTY({
        id,
        color,
        shadow,
        title,
        text,
        img,
        price,
        cartQuantity,
      })
    );
  };
  const onDecreaseItemQTY = () => {
    dispatch(
      setDecreaseItemQTY({
        id,
        color,
        shadow,
        title,
        text,
        img,
        price,
        cartQuantity,
      })
    );
  };

  return (
    <>
      <div className='flex items-center justify-between w-full px-5'>
        <div className='flex items-center gap-5'>
          <div
            className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-700 ease-in-out grid items-center`}>
            <img
              src={img}
              alt={`img/cart-item/${id}`}
              className='w-36 h-auto object-fill lg:w-28'
            />
            <div className='absolute top-1 right-1 blur-theme-effect bg-white/80 text-slate-900 text-xs px-1 rounded'>
              ${price}
            </div>
          </div>

          <div className='grid items-center gap-4'>
            <div className='grid items-center leading-none'>
              <h3 className='font-medium text-lg text-slate-900 lg:text-sm'>
                {title}
              </h3>
              <p className='text-sm text-slate-800 lg:text-xs'>{text}</p>
            </div>

            <div className='flex items-center gap-3 w-full'>
              <button
                className='bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90'
                type='button'>
                <MinusIcon
                  onClick={
                    cartQuantity === 1 ? onRemoveItem : onDecreaseItemQTY
                  }
                  className='h-5 w-5 lg:h-4 lg:w-4 text-slate-100 storke-[2]'
                />
              </button>
              <span className='bg-theme-cart rounded text-slate-100 font-medium lg:text-xs w-7 h-6 lg:w-6 lg:h-5 flex items-center justify-center'>
                {cartQuantity}
              </span>
              <button
                className='bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90'
                type='button'>
                <PlusIcon
                  onClick={onIncreaseItemQTY}
                  className='h-5 w-5 lg:h-4 lg:w-4 text-slate-100 storke-[2]'
                />
              </button>
            </div>
          </div>
        </div>

        <div className='grid items-center gap-5'>
          <div className='grid items-center justify-center'>
            <span className='text-lg lg:text-base text-slate-900 font-medium'>
              ${price * cartQuantity}
            </span>
          </div>
          <div className='grid items-center justify-center'>
            <button
              className='bg-theme-cart rounded p-1 lg:p-0.5 grid items-center justify-items-center cursor-pointer'
              type='button'
              onClick={onRemoveItem}>
              <TrashIcon className='h-5 w-5 text-slate-100' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
