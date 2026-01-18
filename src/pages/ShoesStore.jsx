import React, { useState } from 'react';
import products from '../data/data.json'; // Đảm bảo đường dẫn file json chính xác
import ProductList from '../components/ProductList';
import Modal from '../components/Modal';

const ShoesStore = () => {
  // Quản lý trạng thái sản phẩm đang chọn để xem chi tiết
  const [productDetail, setProductDetail] = useState(null);

  const setStateModal = (product) => {
    setProductDetail(product);
  };

  const closeModal = () => {
    setProductDetail(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Shoes Shop</h1>
      
      <div className="max-w-6xl mx-auto flex gap-8">
        {/* Sidebar mô phỏng giống trong ảnh */}
        <aside className="hidden md:block w-1/4 border-r pr-4 text-blue-500">
          <ul className="space-y-4 font-medium">
           <a href="#"><li className="cursor-pointer hover:underline border-b pb-2">Home</li></a>
            <li className="cursor-pointer hover:underline border-b pb-2">Shop</li>
          </ul>
        </aside>

        {/* Danh sách sản phẩm */}
        <main className="flex-1">
          <ProductList 
            productsData={products} 
            setStateModal={setStateModal} 
          />
        </main>
      </div>

      {/* Modal hiển thị chi tiết */}
      <Modal 
        content={productDetail} 
        onClose={closeModal} 
      />
    </div>
  );
};

export default ShoesStore;