import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import CartContext from '../../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router';

const CartContent = (props) => {
  const { close } = props;
  const navigate = useNavigate();

  const cartInfo = useContext(CartContext);

  const handleClick = (itemId, action) => {
    const { cartItems, setCartItems } = cartInfo;
    const deepCopy = JSON.parse(JSON.stringify(cartItems));
    if (action === 'dec') {
      deepCopy[itemId].count -= 1;
    }
    if (action === 'inc') {
      deepCopy[itemId].count += 1;
    }
    if (deepCopy[itemId].count < 1) {
      delete deepCopy[itemId];
    }
    localStorage.setItem('cart', JSON.stringify(deepCopy));
    setCartItems(deepCopy);
  };

  const handleCountChange = (itemId, value) => {
    const { cartItems, setCartItems } = cartInfo;
    const deepCopy = JSON.parse(JSON.stringify(cartItems));
    deepCopy[itemId].count = value;
    if (value < 1) {
      delete deepCopy[itemId];
    }
    localStorage.setItem('cart', JSON.stringify(deepCopy));
    setCartItems(deepCopy);
  };

  const cartFooter = () => {
    const { cartItems } = cartInfo;
    let total = 0;
    Object.entries(cartItems).forEach(([, item]) => (total += item.price * item.count));
    if (Object.entries(cartItems).length < 1 || total === 0) {
      return;
    }
    return (
      <div className="bottom-0 h-40 w-full border-t-[1px] p-5 text-base">
        <div className="flex">
          <p className="flex-1 text-sm uppercase tracking-widest">Subtotal</p>
          <p className="text-sm font-semibold">{total}</p>
        </div>
        <p className=" py-2 text-center text-xs sm:text-sm">
          Shipping, Taxes, and Discount codes calculated at checkout
        </p>
        <button
          onClick={() => {
            navigate('/checkout');
            close();
          }}
          className="mt-5 w-full border-none bg-black px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white"
        >
          Check Out
        </button>
      </div>
    );
  };

  const items = () => {
    const { cartItems } = cartInfo;
    if (Object.entries(cartItems).length < 1) {
      return <p>Your cart is currently empty.</p>;
    }
    return (
      <div className="max-h-[20%]">
        <AnimatePresence>
          {Object.entries(cartItems).map(
            ([id, item]) =>
              item.count > 0 && (
                <motion.div
                  key={id}
                  className="flex border-b-[1px] py-4"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="h-full w-[40%] cursor-pointer sm:w-1/4 sm:py-4 sm:pl-0 sm:pr-4">
                    <div
                      style={{ backgroundColor: '#e5e5e5' }}
                      className="relative flex-col before:block before:w-full before:pb-[150%]"
                    >
                      <div className="">
                        <img
                          src={item.img}
                          alt=""
                          className="absolute left-0 top-0 block h-full w-full max-w-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between space-y-0 px-4 sm:py-4">
                    <div>
                      <p className="text-base">{item.name}</p>
                      <p className="m-0 text-left text-sm sm:mt-2 ">
                        <span className="font-semibold">Size:</span>S
                      </p>
                    </div>
                    <div className="m-0 flex justify-between p-0">
                      <div className="flex w-14 max-w-[80px] space-x-0">
                        <button
                          className="w-1/3 border border-gray-300 bg-white px-3 font-bold text-black"
                          onClick={() => handleClick(id, 'dec')}
                        >
                          -
                        </button>
                        <input
                          className="h-full w-10 border border-gray-300 px-1 text-center focus:outline-none"
                          type="number"
                          value={item.count}
                          onChange={(e) => handleCountChange(id, Number(e.target.value))}
                        />
                        <button
                          className="w-1/3 border border-gray-300 bg-white pl-3 pr-4 font-bold text-black"
                          onClick={() => handleClick(id, 'inc')}
                        >
                          +
                        </button>
                      </div>
                      <p className="font-bold">{item.price * item.count}</p>
                    </div>
                  </div>
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="px-8 font-medium">
        <div className="flex h-16 items-center justify-between border-b-[1px] py-3">
          <p className="text-2xl">Cart</p>
          <FaTimes className=" h-7 w-7 cursor-pointer" onClick={() => close()} />
        </div>
      </div>
      <AnimatePresence>
        <div className="flex-1 overflow-auto p-5">{items()}</div>
      </AnimatePresence>
      {cartFooter()}
    </div>
  );
};

export default CartContent;
CartContent.propTypes = {
  close: PropTypes.func.isRequired,
};
