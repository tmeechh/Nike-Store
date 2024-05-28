/* eslint-disable no-unused-vars */
import { ChevronDoubleLeftIcon } from '@heroicons/react/16/solid';
import { XMarkIcon } from '@heroicons/react/20/solid';
import React from 'react';

const CartCount = ({ onCartToggle, totalQTY, onClearCartItems }) => {
    console.log(totalQTY)
    const cartqty = totalQTY.length; 
    // console.log(cartqty)
  return (
    <>
      <div className="bg-white h-11 flex items-center justify-between px-3 sticky top-p left-0 right-0 w-full">
        <div className="flex items-center gap-3">
          <div
            className="grid items-center cursor-pointer"
            onClick={onCartToggle}
          >
            <ChevronDoubleLeftIcon className="w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2]" />
          </div>
          <div className="grid items-center cursor-pointer">
            <h1 className="text-base font-medium text-slate-900 flex items-center justify-center gap-4">
              Your Cart
              <span className="bg-theme-cart rounded px-1 py-0.5 text-slate-100 font-normal text-xs">
                {`${cartqty} Items`}
              </span>
            </h1>
          </div>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            onClick={onClearCartItems}
            className="rounded bg-theme-cart active:scale-90 p-0.5"
          >
            <XMarkIcon className="w-5 h-5 text-white stroke-[2]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCount;
