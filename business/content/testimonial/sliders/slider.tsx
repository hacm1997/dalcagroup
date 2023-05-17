import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import SwiperCore, { Swiper as SwiperType, Navigation, Pagination, A11y, Autoplay } from "swiper";
import testiomio from "../../../../services/testimonio.json"

SwiperCore.use([Autoplay, Navigation]);
export default function TestimonialSliders() {

    const swiperRef = React.useRef<SwiperType>();

    const content = testiomio.home.map((item: any, index: any) => (

        <SwiperSlide key={index} className={styles.swiper} style={{ backgroundColor: `df8640` }}>

            <div className={"container "} style={{ backgroundColor: '#FFFFFF' }}>
                {/* <div className={styles.content}>
                    <img src={item.image} alt={"Testigo"} title="comments"></img>
                </div> */}
                <div className={styles.info}>
                    <p className={styles.username}>{item.name}</p>
                    <p className={styles.descriptions}>
                        {'"'}{item.comment}{'"'}
                    </p>

                    <div className={styles.ratings}>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                    </div>

                </div>

            </div>

        </SwiperSlide>

    ));
    return (
        <>

            <div className={styles.general}>
                <div className={styles.grid}>
                    <div className={styles.content_slider}>
                        <div className={styles.prev_btn}>
                            <a type="button" onClick={() => swiperRef.current?.slidePrev()}><i className='bx bx-chevron-left'></i></a>
                        </div>
                        <Swiper
                            modules={[Navigation, Pagination, A11y]}
                            autoplay={{ delay: 10000 }}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            loop={true}
                            className={styles.content_swiper}
                            spaceBetween={25}
                            slidesPerView={1}
                            breakpoints={{

                                800: {
                                    slidesPerView: 1,
                                },

                                995: {
                                    slidesPerView: 2,
                                },

                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {content}

                        </Swiper>
                        <div className={styles.next_btn}>
                            <a type="button" onClick={() => swiperRef.current?.slideNext()}><i className='bx bx-chevron-right'></i></a>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};
