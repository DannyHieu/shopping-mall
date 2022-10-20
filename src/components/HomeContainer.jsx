import React from 'react';
import '../assets/css/homecontainer.css'

const HomeContainer = (props) => {
    return (
        <div className='main-container'>
            <div className='wrapper-container'>

                <div id='wrapper-banner'>
                    <div id='banner-slider'>

                    </div>
                    <div id='banner'>

                    </div>
                </div>

                <div id='wrapper-category'>
                    <p style={{ color: "grey" }}>CATEGORIES</p>
                    <div id='grid-category'>

                        <div className='one-item-category'>
                            <img alt='item' src='https://res.cloudinary.com/sport-store/image/upload/v1665564289/shopping-app/category/men-clothes_ann8tr.png' />
                            <p>Men Clothes</p>
                        </div>

                        <div className='one-item-category'>
                            <img alt='item' src='https://res.cloudinary.com/sport-store/image/upload/v1665566584/shopping-app/category/mobile-removebg_dncmaq.png' />
                            <p>Mobile & Gadgets</p>
                        </div>

                        <div className='one-item-category'>
                            <img alt='item' src='https://res.cloudinary.com/sport-store/image/upload/v1665566583/shopping-app/category/consumer-removebg_v8vvg1.png' />
                            <p>Consumer Electronic</p>
                        </div>

                        <div className='one-item-category'>
                            <img alt='item' src='https://res.cloudinary.com/sport-store/image/upload/v1665566583/shopping-app/category/laptop-removebg_vun18r.png' />
                            <p>Computer</p>
                        </div>

                        <div className='one-item-category'>
                            <img alt='item' src='https://res.cloudinary.com/sport-store/image/upload/v1665566583/shopping-app/category/automotive-removebg_fjafua.png' />
                            <p>Automotive</p>
                        </div>

                        <div className='one-item-category'>
                            <img alt='item' src='https://res.cloudinary.com/sport-store/image/upload/v1665566583/shopping-app/category/men-shoes-removebg_ltftu1.png' />
                            <p>Men Shoes</p>
                        </div>

                        <div className='one-item-category'>
                            <img alt='item' src='https://res.cloudinary.com/sport-store/image/upload/v1665566581/shopping-app/category/toys-removebg_dbsgnk.png' />
                            <p>Toys</p>
                        </div>

                        <div className='one-item-category'>
                            <img alt='item' src='https://res.cloudinary.com/sport-store/image/upload/v1665566583/shopping-app/category/pets-removebg_uq3fxg.png' />
                            <p>Pets</p>
                        </div>

                        <div className='one-item-category'>
                            <img alt='item' src='https://res.cloudinary.com/sport-store/image/upload/v1665566582/shopping-app/category/sport-removebg_g2ak3g.png' />
                            <p>Sport & Outdoor</p>
                        </div>

                        <div className='one-item-category'>
                            <img alt='item' src='https://res.cloudinary.com/sport-store/image/upload/v1665566583/shopping-app/category/wacthes-removebg_kap9gi.png' />
                            <p>Watches</p>
                        </div>

                        <div className='one-item-category'>
                            <img alt='item' src='https://res.cloudinary.com/sport-store/image/upload/v1665566584/shopping-app/category/women-clothes-removebg_er5zh4.png' />
                            <p>Women Clothes</p>
                        </div>

                        <div className='one-item-category'>
                            <img alt='item' src='https://res.cloudinary.com/sport-store/image/upload/v1665566582/shopping-app/category/mom-kids-removebg_hyazwn.png' />
                            <p>Mom, Kids & Baby</p>
                        </div>

                        <div className='one-item-category'>
                            <img alt='item' src='https://res.cloudinary.com/sport-store/image/upload/v1665566582/shopping-app/category/home-living-removebg_y0by4i.png' />
                            <p>Home & Living</p>
                        </div>

                        <div className='one-item-category'>
                            <img alt='item' src='https://res.cloudinary.com/sport-store/image/upload/v1665566582/shopping-app/category/beauty-removebg_sgzhio.png' />
                            <p>Beauty</p>
                        </div>

                        <div className='one-item-category'>
                            <img alt='item' src='https://res.cloudinary.com/sport-store/image/upload/v1665566582/shopping-app/category/health-removebg_rv7onh.png' />
                            <p>Health</p>
                        </div>

                        <div className='one-item-category'>
                            <img alt='item' src='https://res.cloudinary.com/sport-store/image/upload/v1665566581/shopping-app/category/women-shoes-removebg_hnwjjy.png' />
                            <p>Women Shoes</p>
                        </div>

                        <div className='one-item-category'>
                            <img alt='item' src='https://res.cloudinary.com/sport-store/image/upload/v1665566582/shopping-app/category/accessories-removebg_uwsur9.png' />
                            <p>Fashion Accessories</p>
                        </div>

                        <div className='one-item-category'>
                            <img alt='item' src='https://res.cloudinary.com/sport-store/image/upload/v1665566582/shopping-app/category/grocery-removebg_wgioxy.png' />
                            <p>Grocery</p>
                        </div>

                        <div className='one-item-category'>
                            <img alt='item' src='https://res.cloudinary.com/sport-store/image/upload/v1665566581/shopping-app/category/book-removebg_dzae0a.png' />
                            <p>Books & Stationery</p>
                        </div>

                        <div className='one-item-category'>
                            <img alt='item' src='https://res.cloudinary.com/sport-store/image/upload/v1665566582/shopping-app/category/kid-clothes-removebg_rqrw82.png' />
                            <p>Kid Fashion</p>
                        </div>

                    </div>
                </div>

                <div id='wrapper-product-list'>
                    <p>DAILY DISCOVERY</p>
                    <div id='line' />
                    <div className='content-product-list'>
                        {
                            productList.map(product =>
                                <div className='one-item-product' key={product.product_id}>
                                    <img alt='product-img' src={product.product_img} />
                                    <div id='content-product'>
                                        <div id='product-title'>{product.product_name}</div>
                                        <div id='product-price'>đ {product.product_price}</div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>

            </div>
        </div>
    );
}

export default HomeContainer;


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
    {
        product_id: 8,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 9,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 10,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1661409679/hloczn5kkh9jb9hu5ncm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 11,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 12,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 13,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 14,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 15,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 16,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 17,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 18,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1661409679/hloczn5kkh9jb9hu5ncm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 19,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 20,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 21,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 22,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 23,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 24,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 25,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 26,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1661409679/hloczn5kkh9jb9hu5ncm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 27,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 28,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 29,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 30,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
        product_price: 25000,
        product_sale: 50
    },
];

