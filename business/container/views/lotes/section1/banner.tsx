import styles from "./styles.module.css"
import useTranslation from "next-translate/useTranslation";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, A11y, Pagination, Navigation } from "swiper";


export default function BannerLotes() {
    const {t, lang} = useTranslation('lotes');
    const banner_list = t<any>("banners", {}, {returnObjects: true});
    return (
        <>

            <Swiper
                modules={[A11y, Navigation, Pagination]}
                autoplay={{ delay: 5000 }}
                className={styles.swiper}
                slidesPerView={1}
                spaceBetween={500}
                freeMode={true}
                pagination={{ clickable:true,}}
            >

                {
                    banner_list.map((item: any, index: any) => {
                        const background = {
                            backgroundImage: `url(${item.img})`
                        }
                        return(
                            <SwiperSlide key={index}>
                                <div className={styles.section} style={background}>

                                </div>
                            </SwiperSlide>
                        )

                    })
                }

            </Swiper>

        </>
    )
}
