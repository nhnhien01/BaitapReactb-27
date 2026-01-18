import React from 'react';

const Modal = ({ content, onClose }) => {
  if (!content) return null; // Nếu không có dữ liệu thì không hiện modal

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full relative overflow-hidden shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold hover:text-red-500"
        >
          &times;
        </button>
        
        <div className="flex flex-col md:flex-row p-6 gap-6">
          <div className="md:w-1/2">
            <img src={content.image} alt={content.name} className="w-full h-auto" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-2">{content.name}</h2>
            <p className="text-xl text-green-600 font-bold mb-4">{content.price} $</p>
            <p className="text-gray-700 mb-4">{content.description}</p>
            <p className="text-sm text-gray-500 italic">Stock: {content.quantity}</p>
            <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;