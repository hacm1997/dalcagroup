import styles from "./styles.module.css";
import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, {Swiper as SwiperType, A11y, Autoplay, Navigation, Pagination} from "swiper";
import {useEffect, useState} from "react";

SwiperCore.use([Autoplay, Navigation]);
export default function Gallery({data}:any) {

    //console.log("LA DATA IMAGES =>",data);
    const swiperRef = React.useRef<SwiperType>();

    const firstImages = data.map((item:any, index:any)=>(
        <div key={index}>
            <SwiperSlide key={index}>
                <img src={item.detail_banner} />
            </SwiperSlide>
        </div>
    ))
    const listImages = data.map((item:any, index:any) => (

        <div key={index} className={styles.gallery}>
           {item.gallery.map((list:any, index:any) => (
               <SwiperSlide key={index} >
                   <div className={styles.galleryCenter}>
                       <img width={'70%'} height={'620px'} src={list.img} />
                   </div>
               </SwiperSlide>
           ))}
        </div>
    ));

    return(
        <>
            <div className={styles.grid}>
                <div className={styles.prev_btn}>
                    <a type="button" onClick={() => swiperRef.current?.slidePrev()}><i className='bx bx-chevron-left'></i></a>
                </div>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Navigation, Pagination, A11y]}
                    autoplay={{ delay: 5000 }}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    className="mySwiper"
                >

                    {/*firstImages*/}
                    {listImages}

                </Swiper>
                <div className={styles.next_btn}>
                    <a type="button" onClick={() => swiperRef.current?.slideNext()}><i className='bx bx-chevron-right'></i></a>
                </div>
            </div>

        </>
    )
}
