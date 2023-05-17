import styles from "./styles.module.css"
import {formatNumber} from "@/services/functions";

export default function DetailsLotes(props:any) {
    //console.log(props.id)

    return (
        <>
            <div className={styles.card_general}>
                <div className={styles.description}>
                    <p>
                        {(props.data ? props.data.description : null)}
                    </p>
                </div>
                <div className={styles.items}>
                    <p className={styles.subtitle}>{props.translate('lotes:details.area')}</p>
                    <p className={styles.area}>{(props.data ? props.data.area : null)} m<sup style={{fontSize:"24px"}}>2</sup></p>
                    <p className={styles.subtitle}>{props.translate('lotes:details.price')}</p>
                    <p className={styles.price}>${(props.data ? formatNumber(props.data.price)+" COP" : null)}</p>
                </div>

                {/*<div className={styles.location}>*/}
                {/*    <p>{props.translate('lotes:details.location')}</p>*/}
                {/*</div>*/}
            </div>
        </>
    )
}
