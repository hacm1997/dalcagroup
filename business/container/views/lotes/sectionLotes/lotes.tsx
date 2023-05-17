import styles from "./styles.module.css"
import Filtro from "@/business/content/filtros/filtro_lotes/filtro_type1_2";
import {useEffect, useState} from "react";
import Card_lotes from "@/business/container/views/lotes/sectionLotes/listLotes/list";
import Paginado from "@/business/container/views/lotes/sectionLotes/paginado/Paginado";
import {useMediaQuery} from "react-responsive";
import useTranslation from "next-translate/useTranslation";

export default function GetLotes(props:any) {

    const {t, lang} = useTranslation('lotes');
    const items_lotes = t<any>("lotes", {}, {returnObjects: true});
    const [itemOffset, setItemOffset] = useState(0);
    const [listUpdate, setListUpdate] = useState(items_lotes);
    const [cardPerPage, setCardPerPage] = useState(8);
    const Responsive1 = useMediaQuery({ query: '(max-width: 1325px)' });
    const Responsive2 = useMediaQuery({ query: '(max-width: 1150px)' });
    const Responsive3 = useMediaQuery({ query: '(max-width: 590px)' });

   //console.log("Products => ", t('filter.price_step'))
    useEffect(() => {
        if(Responsive1){
            setCardPerPage(6);
        }
        if(Responsive2){
            setCardPerPage(4);
        }
        if(Responsive3){
            setCardPerPage(1);
        }
    }, [Responsive1, Responsive2, Responsive3]);

    const PagesVisited = itemOffset * cardPerPage;

    const listDisplay = listUpdate.slice(PagesVisited, PagesVisited + cardPerPage)
        .map((lotes:any, index:number) =>(

            <Card_lotes
                key={index}
                lotes={lotes}
                lang={lang}
                translate={t}
                gaEventTracker={props.gaEventTracker}
            />

    ))

    const pageCount = Math.ceil(listUpdate.length / cardPerPage); //divide boats / boast per page
    const changePage = ({selected}: { selected: any }) => { /*selected or change page*/
        setItemOffset(selected);
    };

    return (
        <>
            <div className={styles.align}>
                <div className={styles.lotes}>
                    <div className={styles.title}>
                        <h1>{t('text')}</h1>
                    </div>
                    <div className={styles.grid_container}>
                        <div className={styles.grid_item}>
                            <Filtro lotes={items_lotes} setListUpdate={setListUpdate}/>
                        </div>
                        <div>
                            <div className={styles.grid_container2}>
                                {listDisplay}
                            </div>
                            <Paginado
                                pageCount={pageCount}
                                changePage={changePage}
                            />

                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}
