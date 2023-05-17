import useTranslation from "next-translate/useTranslation";
import styles from "./styles.module.css"
import { FreeMode, Pagination } from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';

export default function BannerProjects() {
    const { t, lang } = useTranslation('proyectos');
    const banner_list = t<any>("banners", {}, {returnObjects: true});
    return (
        <>
            <Swiper
                modules={[FreeMode, Pagination]}
                autoplay={{ delay: 5000 }}
                className={styles.swiper}
                slidesPerView={1}
                spaceBetween={500}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
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
            {/*<div className={styles.section}>*/}
            {/*    <div className={styles.title}>*/}
            {/*        <h1>*/}
            {/*            {t('title')} <br />*/}
            {/*            {t('title2')}*/}
            {/*        </h1>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}
