import styles from "./styles.module.css"
import proyectos from "../../../../../services/products.json"
import {useEffect, useState} from "react";
import Paginado from "@/business/container/views/lotes/sectionLotes/paginado/Paginado";
import { useMediaQuery } from 'react-responsive';
import Card_Projects from "@/business/container/views/projects/sectionProjects/listProjects/list";
import FiltroProjects from "@/business/content/filtros/filtro_projects/filtro_proyectos";
import useTranslation from "next-translate/useTranslation";

export default function GetProjects(props:any) {

    const {t, lang} = useTranslation('proyectos');
    const items_projects= t<any>("proyectos", {}, {returnObjects: true});
    const [itemOffset, setItemOffset] = useState(0);
    const [listUpdate, setListUpdate] = useState(items_projects);
    const [cardPerPage, setCardPerPage] = useState(8);
    const Responsive1 = useMediaQuery({ query: '(max-width: 1325px)' });
    const Responsive2 = useMediaQuery({ query: '(max-width: 1150px)' });
    const Responsive3 = useMediaQuery({ query: '(max-width: 590px)' });

    //console.log("Products => ",productos)
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
        .map((proyectos:any, index:any) =>(
            <Card_Projects
                key={index}
                projects={proyectos}
                t={t}
                lang={lang}
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
                            <FiltroProjects projects={items_projects} setListUpdate={setListUpdate} />
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
