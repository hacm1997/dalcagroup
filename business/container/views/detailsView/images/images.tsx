import styles from "./styles.module.css"
import {useEffect, useState} from "react";
import BtnSeeMore from "@/business/container/views/detailsView/images/btn_seemore/btn_seemore";

export default function Images(props:any) {

    const [array, setArray] = useState<Array<any>>([]);

    useEffect(()=>{
        if(props.data){
            setArray(props.data.images);
        }
    }, [props.data]);

    //console.log("Array => ",array ? array[0] : []);

    const imagesView = array ? array.map((item:any, index:any) => (
        <div className={styles.card_general} key={index}>
            <div className={styles.container_portada}>
                <img src={item.detail_banner} alt={item.alt} title={item.alt}/>
            </div>
            <div className={styles.container_galeria}>

                {item.gallery.slice(0, 4).map((img:any, index:any) => (
                    <img key={index} src={img.img} title={img.alt} alt={img.alt}/>
                ))}
                <BtnSeeMore data={array ? array: []} text={props.translate('lotes:details.seeMore')}/>
            </div>
        </div>
    )) : [];

    return (
        <>
            {imagesView}
        </>
    )
}
