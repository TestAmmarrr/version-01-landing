import React from 'react';
import PropTypes from 'prop-types';

const Details = (props) => {
  const { addToCart, open, currentItem } = props;
  const [isOpen, setIsOpen] = React.useState(open);

  return (
    <div className="h-auto max-w-[1500px] overflow-auto md:m-auto md:mt-5 md:grid md:grid-cols-2 md:space-x-3 md:px-5">
      <div className="md:sticky md:top-1">
        <div className="m-auto border px-20 py-2 md:p-5">
          <img src={currentItem.img} alt="" className=" h-full w-full object-cover" />
        </div>
      </div>
      {/**Nav + Name */}
      <div className=" relative w-full px-5 py-2">
        {/**Price + Details */}
        <div>
          <p className="m-auto w-full border-b-[1px] py-5 text-center text-base font-medium md:text-left">
            {`RS ${currentItem.price}`}
          </p>
          <p className="p-5 text-center text-sm ">
            <div className="mr-4 inline-block h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
            {currentItem.status}
          </p>
          <div className="flex flex-col space-y-2">
            <button
              onClick={addToCart}
              className=" border-2 border-opacity-[1] bg-white px-8 py-4 text-xs font-medium uppercase tracking-widest text-black md:text-sm"
            >
              Add to cart
            </button>
            <button className="border-none bg-black px-8 py-4 text-xs font-medium uppercase tracking-widest text-white md:text-sm">
              Buy it Now
            </button>
          </div>
          <ul className="mt-5 list-disc space-y-2 pl-10 text-xs md:text-base md:font-semibold">
            <li>Double needle cover-stiched on collar to prevent stretch</li>
            <li>Garment dyed</li>
            <li>Pre-shrunk (Except white tees)</li>
            <li>Slim straight fit</li>
          </ul>
          <div className="w-full pt-5">
            <div
              className={`flex w-full items-center justify-between border-2 bg-white px-8 py-5 text-xs font-medium uppercase tracking-widest text-black transition-all md:text-sm ${
                isOpen ? 'border-b-0' : 'border-b-2'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              Ask a question
            </div>
            {isOpen && (
              <div className="border-2 border-t-0 p-4">
                <div className="flex space-x-2">
                  <div className="w-1/2">
                    <label
                      htmlFor="name"
                      className="mb-2 text-base uppercase tracking-widest"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className=" inline w-full border p-1 px-3 py-2"
                    />
                  </div>
                  <div className="w-1/2">
                    <label
                      htmlFor="email"
                      className="mb-2 text-base uppercase tracking-widest"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className=" inline w-full border p-1 px-3 py-2"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="mb-2 text-base uppercase tracking-widest"
                  >
                    Message
                  </label>
                  <textarea
                    rows="4"
                    id="message"
                    type="text"
                    className=" inline w-full border p-1 px-3 py-2"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
Details.propTypes = {
  open: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  currentItem: PropTypes.object.isRequired,
};
