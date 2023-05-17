import styles from "./styles.module.css"
import {useEffect, useState} from "react";

export default function Title(props:any) {
    //console.log("DATA INTO CHILD =>",props.data)

    return (
        <>
            <div className={styles.content_title}>
                <div className={styles.title}>
                    <h1>
                        <i className='bx bxs-circle'></i> {(props.data ? props.data.name : null)}
                    </h1>
                </div>
                <div className={styles.share}>
                    <p className={styles.location}><i className='bx bx-map'></i>{(props.data ? props.data.location : null)}</p>
                    {/* <p className={styles.share_loc}><i className='bx bxs-share'></i>{props.translate('lotes:details.share')}</p> */}
                </div>
            </div>
        </>
    )
}
