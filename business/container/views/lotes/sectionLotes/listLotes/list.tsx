import styles from "./styles.module.css";
import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { formatNumber } from '@/services/functions';
import Link from "next/link";

export default function Card_lotes({ lotes, index, translate, lang, gaEventTracker }: any) {
    //console.log("Lotes => ", lotes.images[0].banner)
    return (
        <>
            <div className={styles.card} key={index}>

                <a href={`/${lang}/vista_detalle?name=lotes&id=${lotes.id}`} title={lotes.images[0].alt} onClick={() => gaEventTracker(`Clic Lote ${lotes.name}`)}>
                    <div className={styles.multimedia}>

                        <img className={styles.img_banner} src={lotes.images[0].banner} alt={"Lotes"} title={"Lotes"}/>

                    </div>
                    <div className={styles.content}>
                        <h3><strong>{lotes.name}</strong></h3>
                        <p>{lotes.location}</p>
                        <p>{translate('areaName')} {lotes.area} m<sup style={{fontSize: "10px"}}>2</sup></p>
                        <p><strong>{formatNumber(lotes.price)} COP</strong></p>

                    </div>
                </a>

            </div>

        </>
    )
}
