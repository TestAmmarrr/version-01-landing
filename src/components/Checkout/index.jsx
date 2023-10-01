import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaQuestionCircle, FaTimes } from 'react-icons/fa';
import Overlay from '../Overlay';
import { PiHandbag } from 'react-icons/pi';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

// NAVSTYLES
const NAV_FIXED =
  'flex h-16 items-center justify-end px-5 text-white transition-transform duration-500 md:px-10 relative z-30 bg-transparent';
const NAV_DYNAMIC =
  'flex border-b-2 h-16 items-center justify-end px-5 text-white transition-transform duration-500 md:px-10 fixed inset-x-0 top-0 z-30 translate-y-0 bg-white';
const NAV_ITEMS_DYNAMIC = 'flex space-x-5 text-right text-black';
const SHIPPING = 199;

const Checkout = (props) => {
  const { handleNav } = props;
  const [showMoreShipping, setShowMoreShipping] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const cartInfo = useContext(CartContext);

  useEffect(() => {
    if (showMoreShipping) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showMoreShipping]);

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  const checkScroll = () => {
    setIsScrolled(window.scrollY > 150);
  };

  const { cartItems } = cartInfo;

  const handleshippingInfo = () => {
    setShowMoreShipping((prev) => !prev);
  };

  const renderNavContent = () => {
    return renderNavItems();
  };

  const renderNavItems = () => {
    return (
      <>
        <div className="flex-1 text-3xl font-bold uppercase text-black">
          <Link to="/home">SYMPH DZLS.</Link>
        </div>
        <div className={NAV_ITEMS_DYNAMIC}>
          <div className="relative">
            <PiHandbag
              className=" h-8 w-8 cursor-pointer"
              onClick={() => handleNav('cart')}
            />
            {Object.entries(cartItems).length > 0 && (
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-red-800"></span>
            )}
          </div>
        </div>
      </>
    );
  };

  const getTotal = () => {
    let total = 0;
    Object.entries(cartItems).forEach(([, item]) => (total += item.price * item.count));
    return total;
  };

  return (
    <>
      <div className={`${isScrolled ? NAV_DYNAMIC : NAV_FIXED}`}>
        {renderNavContent()}
      </div>
      <form>
        <div className="h-full w-full space-y-5 bg-gray-100 py-8 md:flex">
          <div className="h-full space-y-5 bg-gray-100 md:ml-4 md:w-1/2">
            <div className="bg-white p-5">
              <div>
                <p className="block text-2xl tracking-wide text-black">Contact</p>
                <div className="relative w-full border">
                  <input type="text" className="h-10 w-full pb-5 pl-2 pt-8" />
                  <p className="absolute left-1 top-1 text-xs text-gray-600">
                    Email or phone number
                  </p>
                </div>
                <div className="mt-4 flex items-center space-x-2">
                  <input type="checkbox" checked className="h-4 w-4" />
                  <p className="text-sm">Email me with news and offers</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-5">
              <div className="space-y-5">
                <p className="block text-2xl tracking-wide text-black">Delivery</p>
                <div className="relative w-full border">
                  <select className="block w-full appearance-none rounded-none border border-gray-300 bg-white pb-1 pl-2 pt-6 text-base font-medium leading-6 shadow-sm sm:text-sm sm:leading-5">
                    <option>Pakistan</option>
                  </select>
                  <p className="absolute left-1 top-1 text-xs text-gray-600">
                    Country/Region *
                  </p>
                </div>

                <div className="relative w-full border">
                  <input type="text" className="h-10 w-full pb-5 pl-2 pt-8" required />
                  <p className="absolute left-1 top-1 text-xs text-gray-600">
                    First name *
                  </p>
                </div>

                <div className="relative w-full border">
                  <input type="text" className="h-10 w-full pb-5 pl-2 pt-8" required />
                  <p className="absolute left-1 top-1 text-xs text-gray-600">
                    Last name *
                  </p>
                </div>

                <div className="relative w-full border">
                  <input type="text" className="h-10 w-full pb-5 pl-2 pt-8" required />
                  <p className="absolute left-1 top-1 text-xs text-gray-600">Address *</p>
                </div>
                <div className="relative w-full border">
                  <input type="text" className="h-10 w-full pb-5 pl-2 pt-8" required />
                  <p className="absolute left-1 top-1 text-xs text-gray-600">City *</p>
                </div>
                <div className="relative w-full border">
                  <label
                    htmlFor="postal"
                    className="absolute left-1 top-1 text-xs text-gray-600"
                  >
                    Postal code *
                  </label>
                  <input
                    id="postal"
                    type="text"
                    className="h-10 w-full pb-5 pl-2 pt-8"
                    required
                  />
                </div>
                <div className="relative w-full border">
                  <input type="text" className="h-10 w-full pb-5 pl-2 pt-8" required />
                  <p className="absolute left-1 top-1 text-xs text-gray-600">Phone *</p>
                  <span className="absolute right-4 top-4">
                    <FaQuestionCircle title="In case we need to contact you about the order" />
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="h-4 w-4" />
                  <p className="text-sm">Save this information for the next time</p>
                </div>
                <p className="text-lg font-semibold">Shipping method</p>
                <div className="relative w-full rounded-md border-2 border-blue-500 bg-blue-100">
                  <input type="text" className="h-10 w-full pb-5 pl-2 pt-8" disabled />
                  <p className="absolute left-4 top-4 text-sm text-black">Standard</p>
                  <p className="absolute right-4 top-4 text-sm text-black">Rs 199.0</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-5">
              <div className="space-y-5">
                <div>
                  <p className="block text-2xl tracking-wide text-black">Payment</p>
                  <p className="text-sm text-black opacity-70">
                    All transactions are secure and encrypted.
                  </p>
                </div>
                <p className="text-lg font-semibold">Billing address</p>
                <div>
                  <div className="relative w-full rounded-md border-2 border-blue-500 bg-blue-100 p-[25px]">
                    <input
                      type="radio"
                      className="absolute left-4 top-4 h-5 w-5"
                      value="1"
                      disabled
                      checked
                    />
                    <p className="absolute left-12 top-4 text-sm text-black">
                      Same as shipping address
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 md:sticky md:top-10 md:h-full md:w-1/2">
            <div className="space-y-2">
              <div>
                <p className="block text-2xl tracking-wide text-black">Order summary</p>
                {Object.entries(cartItems).map(([id, item]) => (
                  <div key={id} className="flex items-center pt-2">
                    <div
                      key={id}
                      className="relative h-full w-[20%] sm:w-[5%] sm:py-4 sm:pl-0 sm:pr-4"
                    >
                      <div className="flex-col p-2 before:block before:w-full before:pb-[150%]">
                        <div className="">
                          <img
                            src={item.img}
                            alt=""
                            className="absolute left-0 top-0 block h-full w-full max-w-full border object-contain"
                          />
                        </div>
                      </div>
                      <span className="absolute -right-2 -top-1 h-5 w-5 rounded-full bg-gray-500 text-center text-sm font-semibold text-white">
                        {item.count}
                      </span>
                    </div>
                    <div className="flex flex-col justify-between space-y-0 pl-[4px] pr-[10px] sm:py-4">
                      <div>
                        <p className="text-sm">{item.name}</p>
                        <p className="m-0 text-left text-sm sm:mt-2 ">
                          <span className="font-semibold">Size:</span>S
                        </p>
                      </div>
                    </div>
                    <div className="m-0 w-[15%] p-0">
                      <p className="text-xs font-bold">{` RS ${
                        item.price * item.count
                      }`}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm">Subtotal</p>
                <p className="text-sm font-semibold">{`RS ${getTotal().toFixed(2)}`}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="relative">
                  <p className="text-sm">Shipping</p>
                  <span className="absolute -right-5 top-1">
                    <FaQuestionCircle
                      className="h-4 w-4"
                      onClick={() => handleshippingInfo()}
                    />
                  </span>
                </div>
                <p className="text-sm">{`RS ${SHIPPING.toFixed(2)}`}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-base font-semibold">Total</p>
                <p className="text-base font-semibold">{`RS ${(
                  getTotal() + SHIPPING
                ).toFixed(2)}`}</p>
              </div>
              <div>
                <input
                  type="submit"
                  value="PAY"
                  className="mt-4 h-10 w-full rounded-md bg-black font-semibold tracking-widest text-white"
                />
              </div>
            </div>
          </div>
          <div
            className={`fixed inset-x-0 bottom-0 z-30 h-40 rounded-t-md bg-white transition-transform duration-500${
              showMoreShipping ? ' translate-y-0' : ' translate-y-full'
            }`}
          >
            <div className="flex justify-between p-10 pb-5">
              <p className="font-semibold">Shipping policy</p>
              <FaTimes
                className=" h-7 w-7 cursor-pointer"
                onClick={() => setShowMoreShipping(false)}
              />
            </div>
            <p className="w-full px-6 pb-1 font-semibold">
              Your items will be delivered in 5-6 bussiness days.
            </p>
          </div>
          <Overlay
            overlayVisible={showMoreShipping}
            disableOverlay={() => setShowMoreShipping(false)}
          />
        </div>
      </form>
    </>
  );
};

export default Checkout;

Checkout.propTypes = {
  handleNav: PropTypes.func.isRequired,
};
