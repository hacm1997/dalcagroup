import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Layout from "../../business/container/general/layout/layout";
import SectionContact from "@/business/content/sectionContact/contact";
import BannerProjects from "@/business/container/views/projects/section1/banner";
import GetProjects from "@/business/container/views/projects/sectionProjects/projects";
import TestimonialsProjects from "@/business/container/views/projects/sectionTestigos/testigos";
import useTranslation from "next-translate/useTranslation";
import ReactGA from "react-ga4";
import useAnalyticsEventTracker from "@/services/analytics/useAnalyticsEventTracker";

ReactGA.send({ hitType: "pageview", page: "/proyectos", title: "Proyectos Dalca Group" });
const Home: NextPage = () => {
    const [showChild, setShowChild] = useState(false);
    const {t, lang} = useTranslation('');
    const gaEventTracker = useAnalyticsEventTracker('Proyectos');
    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    }
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="Proyectos-Dalca-Group"
                />
                <title>{lang === 'es' ? 'Proyectos | Dalca Group' : 'Projects | Dalca Group'}</title>
            </Head>
            <Layout>
                <BannerProjects/>
                <GetProjects gaEventTracker={gaEventTracker}/>
                <TestimonialsProjects/>
                <SectionContact gaEventTracker={gaEventTracker}/>
            </Layout>
        </>
    );
};

export default Home;
