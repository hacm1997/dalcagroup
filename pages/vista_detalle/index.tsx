import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Layout from "../../business/container/general/layout/layout";
import {useRouter} from "next/router";
import Details from "@/business/container/views/detailsView/details";
import useTranslation from "next-translate/useTranslation";
import ReactGA from "react-ga4";
import useAnalyticsEventTracker from "@/services/analytics/useAnalyticsEventTracker";

ReactGA.send({ hitType: "pageview", page: "/casas", title: "vista detalles" });
const Home: NextPage = () => {
    const router = useRouter();
    const {t, lang} = useTranslation('');
    const [showChild, setShowChild] = useState(false);
    const [dataDetails, setDataDetails] = useState<Array<any>>();
    const items_lotes = t<any>("lotes:lotes", {}, {returnObjects: true});
    const items_casas = t<any>("casas:casas", {}, {returnObjects: true});
    const items_proyectos = t<any>("proyectos:proyectos", {}, {returnObjects: true});
    const gaEventTracker = useAnalyticsEventTracker('Detalles');

    const {
        query: { name, id },
    } = router as any

    useEffect(()=>{
        setShowChild(true);
        if(name as string === "lotes"){

            setDataDetails((items_lotes));
        }else if(name as string === "casas"){
            setDataDetails(items_casas);
        }else{
            setDataDetails(items_proyectos);
        }
        ReactGA.send({ hitType: "pageview", page: "/vista_detalle", title: `Vista detalle ${name}` });
    }, [name])
    // console.log("DATA FILTER => ",dataDetails);
    if (!showChild) {
        return null;
    }

    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="Productos-Dacal-Group"
                />
                <title>
                    {lang === 'es' ? name?.charAt(0).toUpperCase() + name?.slice(1): null}
                    {lang === 'en' && name==='casas' ? 'Houses' : null}
                    {lang === 'en' && name==='proyectos' ? 'Projects' : null}
                    {lang === 'en' && name==='lotes' ? 'Lots' : null}
                    {" "}| Dalca Group
                </title>
            </Head>
            <Layout>
                <Details data={dataDetails} name={name} id={id} translate={t} lang={lang}/>
            </Layout>
        </>
    );
};

export default Home;
