import styles from "./styles.module.css"
import {formatNumber} from "@/services/functions";
import Characteristics from "@/business/container/views/detailsView/casas/characteristics/characteristics";

export default function DetailCasas(props:any) {
    // console.log(props.data)

    return (
        <>
            <div className={styles.card_general}>
                <div className={styles.description}>
                    <p>
                        {(props.data ? props.data.description : null)}
                        <br/><br/>
                        {(props.data ? props.data.description2 : null)}
                    </p>
                    <hr/>
                    <Characteristics char={props.data ? props.data.characteristics : []} />
                </div>
                <div className={styles.items}>
                    <p className={styles.subtitle}>{props.translate('casas:details.area')}</p>
                    <p className={styles.area}>{(props.data ? props.data.area : null)}m2</p>
                    <p className={styles.subtitle}>{props.translate('casas:details.price')}</p>
                    <p className={styles.price}>{(props.data ? formatNumber(props.data.price) : null)} COP</p>
                </div>

                {/*<div className={styles.location}>*/}
                {/*    <p>{props.translate('casas:details.location')}</p>*/}
                {/*</div>*/}
            </div>
        </>
    )
}
