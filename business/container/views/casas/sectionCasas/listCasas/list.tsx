import styles from "./styles.module.css";
import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { formatNumber } from '@/services/functions';

export default function Card_Casas({ index, casas, translate, lang, gaEventTracker }: any) {
    console.log("Casas alt => ", casas.images[0].alt)
    return (
        <>
            <div className={styles.card} key={index}>

                <a href={`/${lang}/vista_detalle?name=casas&id=${casas.id}`} title={casas.images[0].alt as string} onClick={() => gaEventTracker(`Clic casa: ${casas.name}`)}>
                    <div className={styles.multimedia}>
                        <img className={styles.img_banner} src={casas.images[0].banner} alt={casas.images[0].alt as string} title={casas.images[0].alt as string}/>
                    </div>
                    <div className={styles.content}>
                        <h3><strong>{casas.name}</strong></h3>
                        <p>{casas.location}</p>
                        <p>{translate('areaName')} {casas.area} m<sup style={{fontSize: "10px"}}>2</sup></p>
                        <p><strong>{formatNumber(casas.price)} COP</strong></p>

                    </div>
                </a>

            </div>

        </>
    )
}
