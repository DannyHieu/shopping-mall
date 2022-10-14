import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../assets/css/category.css'
import CategoryContainer from '../components/CategoryContainer';

function Category(props) {
    return (
        <div className='container'>
            <Header />
            <CategoryContainer productList={productList} />
            <div id='line' />
            <Footer />
        </div>
    );
}

export default Category;

const productList = [
    {
        product_id: 1,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 2,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1661409679/hloczn5kkh9jb9hu5ncm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 3,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 4,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 5,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 6,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 7,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
        product_price: 25000,
        product_sale: 50
    },
];