import React from 'react';

const ProductItem = ({ item, setStateModal }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow bg-white">
      <img src={item.image} alt={item.name} className="w-full h-auto object-contain mb-4" />
      <h3 className="text-lg font-semibold h-14 overflow-hidden">{item.name}</h3>
      <p className="text-gray-600 mb-4 font-bold">{item.price} $</p>
      <button 
        onClick={() => setStateModal(item)}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 flex items-center gap-2 transition-colors"
      >
        Add to cart <i class="fa fa-cart-plus"></i>
      </button>
    </div>
  );
};

export default ProductItem;