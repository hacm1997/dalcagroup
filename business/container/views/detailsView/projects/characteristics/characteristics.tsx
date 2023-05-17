import styles from "./styles.module.css"
import {formatNumber} from "@/services/functions";

export default function Characteristics(props:any) {
    // console.log("Characteristics => ",props.char.items)
    const listChars = props.char.items ? props.char.items.map((item:any, index:number) => (
        <a type="text" key={index}><i className='bx bx-check'></i>{item.char}</a>
    )): null;

    return (
        <>
            <div className={styles.content}>

                <div className={styles.info}>
                    <div >
                        <i className='bx bx-bed'></i>
                    </div>
                    <div className={styles.description}>
                        <span><strong>{props.char.items ? props.char.items[0].char : null}</strong></span>
                        <span> {props.char.items ? props.char.items[1].char : null}</span>
                    </div>
                </div>
                <hr className={styles.hr}/>

                <div className={styles.title_characteristics}>
                    <h2><strong>{props.char.title}</strong></h2>
                </div>

                <div className={styles.characteristics}>
                    {/*props.char.wifi ? <a type="text"><img width={20} height={20} src={"/images/characteristics/wifi.png"} alt="wifi"/> Wifi</a> : null*/}
                    {listChars}
                </div>
            </div>
        </>
    )
}
