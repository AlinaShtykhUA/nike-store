import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalQTY, setOpenCart } from '../redux/cart-slice';
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/solid';

import logo from '../assets/logo.png';

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQTY);

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const onNavScroll = () => {
    if (window.pageYOffset > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      onNavScroll();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchmove', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={
          !navState
            ? 'absolute top-7 left-0 right-0 opacity-100 z-50'
            : 'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[500] blur-effect-theme'
        }>
        <nav className='flex items-center justify-between nike-container'>
          <div className='flex items-center'>
            <img
              src={logo}
              alt='logo/img'
              className={`cursor-pointer w-16 h-auto ${
                navState && 'brightness-0'
              }`}
              onClick={scrollToTop}
            />
          </div>
          <ul className='flex items-center justify-center gap-2'>
            <li className='grid items-center'>
              <MagnifyingGlassIcon
                className={`icon-style ${
                  navState && 'text-slate-900 transition-all duration-300'
                }`}
              />
            </li>
            <li className='grid items-center'>
              <HeartIcon
                className={`icon-style ${
                  navState && 'text-slate-900 transition-all duration-300'
                }`}
              />
            </li>
            <li className='grid items-center'>
              <button
                type='button'
                onClick={onCartToggle}
                className='border-none outline-none active:scale-110 transition-all duration-300 relative'>
                <ShoppingBagIcon
                  className={`icon-style ${
                    navState && 'text-slate-900 transition-all duration-300'
                  }`}
                />
                <span
                  className={`absolute top-4 right-0  w-4 h-4 text-[0.65rem] shadow leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                    navState
                      ? 'bg-slate-900 text-slate-100 shadow-slate-900'
                      : 'bg-slate-100 text-slate-900  shadow-slate-100'
                  }`}>
                  {totalQTY}
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
