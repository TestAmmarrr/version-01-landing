import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CategoryList = (props) => {
  const { handleNewCategory, selectedCat, categoryList } = props;
  return (
    <div className="flex h-auto flex-wrap pt-0">
      {categoryList.map((name, index) => (
        <div
          key={index}
          className={`w-1/2 cursor-pointer px-[2px] pb-[3px] sm:w-1/5 sm:p-4 ${
            selectedCat === name.toLowerCase() ? 'border-2' : ''
          }`}
        >
          <Link to={`/home/${name}`} onClick={() => handleNewCategory(name)}>
            <div className="relative flex-col before:block before:w-full before:pb-[100%]">
              <img
                src="https://impulse-theme-apparel.myshopify.com/cdn/shop/products/Grey3_b6162133-8df0-4963-ab88-86351ad88309.gif?v=1569267103&width=1080"
                alt=""
                className="absolute left-0 top-0 block h-full w-full max-w-full object-contain transition-all duration-500 ease-in-out hover:scale-105 hover:blur-md"
              />
              <p className="absolute inset-0 flex items-center justify-center text-lg text-white sm:text-sm">
                {name}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
CategoryList.propTypes = {
  categoryList: PropTypes.array.isRequired,
  handleNewCategory: PropTypes.func.isRequired,
  selectedCat: PropTypes.string.isRequired,
};
