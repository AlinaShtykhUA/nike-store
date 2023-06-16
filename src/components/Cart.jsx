import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartState,
  selectTotalAmount,
  selectTotalQTY,
  setClearCartItems,
  setCloseCart,
  setGetTotal,
} from '../redux/cart-slice';

import CartCount from './cart/CartCount';
import CartEmpty from './cart/CartEmpty';
import CartItem from './cart/CartItem';

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQTY);
  useEffect(() => {
    dispatch(setGetTotal());
  }, [cartItems, dispatch]);

  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };

  const onClearCartItems = () => {
    dispatch(setClearCartItems());
  };

  useEffect(() => {
    const bodyElement = document.querySelector('body');
    bodyElement.classList.add('scroll-style');
    if (bodyElement) {
      if (ifCartState) {
        bodyElement.classList.add('no-scroll');
      } else {
        bodyElement.classList.remove('no-scroll');
      }
    }
  }, [ifCartState]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[999] ${
          ifCartState
            ? 'opacity-100 visible translate-x-0'
            : 'opacity-0 invisible translate-x-8'
        }`}>
        <div
          className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}>
          <CartCount
            onClearCartItems={onClearCartItems}
            onCartToggle={onCartToggle}
            totalQTY={totalQTY}
          />

          {cartItems.length === 0 ? (
            <CartEmpty onCartToggle={onCartToggle} />
          ) : (
            <div>
              <div className='flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth py-3 scroll-style'>
                {cartItems?.map((item) => {
                  return <CartItem key={item.id} item={item} />;
                })}
              </div>

              <div className='fixed bottom-0 bg-slate-100 w-full px-5 py-2 grid items-center'>
                <div className='flex items-center justify-between'>
                  <h3 className='text-base font-semibold uppercase'>
                    SubTotal
                  </h3>
                  <p className='text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5'>
                    ${totalAmount}
                  </p>
                </div>
                <div className='grid items-center gap-2'>
                  <p className='text-sm font-medium text-center'>
                    Taxes and Shipping Will Calculate At Shipping
                  </p>
                  <button
                    type='button'
                    className='button-theme bg-theme-cart text-white'>
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
