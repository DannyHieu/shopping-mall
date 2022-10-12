import React from 'react';
import '../assets/css/HomeContainer.css'

function HomeContainer(props) {
    return (
        <div className='main-container'>
            <div className='wrapper-container'>

                <div id='wrapper-banner'>
                    <div id='banner-slider'>

                    </div>
                    <div id='banner'>
                        <div><img alt='banner' src='https://res.cloudinary.com/sport-store/image/upload/v1665561272/shopping-app/logo-banner/banner_y2mkvv.png' /></div>
                        <div><img alt='banner' src='https://res.cloudinary.com/sport-store/image/upload/v1665561557/shopping-app/logo-banner/banner1_w77rxv.png' /></div>
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
                        <div >

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HomeContainer;