import styles from "./styles.module.css"
import Title from "@/business/container/views/detailsView/title/title";
import { useEffect, useState } from "react";
import Images from "@/business/container/views/detailsView/images/images";
import DetailsLotes from "@/business/container/views/detailsView/lotes/dataLotes";
import MapLocation from "@/business/container/views/detailsView/map/map";
import DetailCasas from "@/business/container/views/detailsView/casas/dataCasas";
import DetailsContact from "@/business/content/detailsContact/contact";
import DetailProjects from "@/business/container/views/detailsView/projects/dataProjects";

export default function Details(props: any) {
    //console.log(props.id)
    const [data, setData] = useState<Array<any>>();
    // console.log("PROPS => ",props.data)
    // console.log(props.t('lotes:details.area'))

    useEffect(() => {
        const title = props.data.filter(((i: any) => i.id === Number(props.id)))
        setData(title[0])
    }, [props])
    //console.log("DATA FILTER => ", data)

    const styleback = {
        backgroundImage: props.name === "lotes" ? "url('/images/details/lotes/back-lotes.png')" : "linear-gradient(0deg, rgba(2,0,36,0) 0%, rgba(255,255,255,0.8673844537815126) 93%), url('/images/details/casas/back-detail-house.png')",
        backgroundPositionY: props.name === "lotes" ? "-300px" : "-100px",
        backgroundSize: props.name === "lotes" ? "100% 100%" : "100% 100%"
    }

    return (
        <>
            <div className={styles.section} style={styleback}>
                <div className={styles.content}>
                    <div className={styles.container}>
                        <Title data={data} translate={props.translate} />
                        <Images translate={props.translate} data={props.name === "lotes" ? data : props.name === "casas" ? data : props.name === "proyectos" ? data : []} />
                        {props.name === "lotes" ?
                            <DetailsLotes data={data} translate={props.translate} />
                            : props.name === "casas" ?
                                <DetailCasas data={data} translate={props.translate} />
                                : <DetailProjects data={data} translate={props.translate} />}
                    </div>

                </div>
                {props.name !== "proyectos" ?
                    <div className={styles.location_map}>
                    <h4>{props.lang === 'es' ? 'Ubicación' : 'Location'}</h4>
                </div>: null}
                {props.name !== "proyectos" ?
                    <div className={styles.mapa}>
                    <MapLocation data={data} />
                </div>: null}
                <DetailsContact data={data} epic={props.name} />
            </div>
        </>
    )
}
