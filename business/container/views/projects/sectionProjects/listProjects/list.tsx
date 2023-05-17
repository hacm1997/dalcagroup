import styles from "./styles.module.css";
import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { formatNumber } from '@/services/functions';

export default function Card_Projects({ index, projects, t, lang, gaEventTracker }: any) {
    // console.log("Proyectos => ", projects.images[0].banner)
    return (
        <>
            <div className={styles.card} key={index}>

                <a href={`/${lang}/vista_detalle?name=proyectos&id=${projects.id}`} title={projects.images[0].alt} onClick={() => gaEventTracker(`Clic proyecto ${projects.name}`)}>
                    <div className={styles.multimedia}>
                        <img className={styles.img_banner} src={projects.images[0].banner} alt={projects.images[0].alt} title={projects.images[0].alt}/>
                    </div>
                    <div className={styles.content}>
                        <h3><strong>{projects.name}</strong></h3>
                        <p>{projects.location}</p>
                        <p>{t('areaName')} {projects.area} m<sup style={{fontSize: "10px"}}>2</sup></p>
                        { projects.price !== 0 ?
                            <p><strong>{formatNumber(projects.price)} COP</strong></p>
                        : null}

                    </div>
                </a>

            </div>

        </>
    )
}
