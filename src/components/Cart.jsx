/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import CartCount from './cart/CartCount';
import CartEmpty from './cart/CartEmpty';
import CartItem from './cart/CartItem';
import {
  selectCartItems,
  selectCartState,
  selectTotalAmount,
  selectTotalQTY,
  setClearCartItems,
  setCloseCart,
  setGetTotals,
} from '../app/Slice.js';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQTY);

  console.log(totalAmount);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

//   const dispatch = useDispatch();
   

    
    
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

  return (
    <>
      <div
        className={`fixed top-0 left-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[100] ${
          ifCartState
            ? 'visible-cart' : 'hidden-cart'
                  }`}
                  onClick={onCartToggle} // Add this line
      >
        <div
                  className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}
                  onClick={(e) => e.stopPropagation()} // Prevent click events on the cart itself from closing it
        >
          <CartCount
            totalQTY={totalQTY}
            onCartToggle={onCartToggle}
            onClearCartItems={onClearCartItems}
          />
          {cartItems?.length === 0 ? (
            <CartEmpty onCartToggle={onCartToggle} />
          ) : (
            <div>
              <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[70vh] scroll-smooth scroll-hidden py-3">
                {cartItems?.map((item, i) => {
                  console.log(item);
                  return <CartItem key={i} item={item} />;
                })}
              </div>
              <div className="fixed bottom-0 bg-white w-full px-5 py-6 grid items-center">
                <div className="flex items-center justify-between">
                  <h1 className="text-base font-semibold uppercase">
                    SubTotal
                  </h1>
                  <h1 className='text-sm rounded bg-theme-cart text-slate-100 px-1 py-$0.5'>${totalAmount}</h1>
                </div>
                <div className="grid items-center gap-2 ">
                  <p className="text-sm font-medium text-center">
                  Taxes and shipping will be calculated at checkout
                  </p>
                  <button
                    type="button"
                    className="button-theme bg-theme-cart text-white"
                  >
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
