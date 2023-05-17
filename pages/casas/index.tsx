import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Layout from "../../business/container/general/layout/layout";
import SectionContact from "@/business/content/sectionContact/contact";
import BannerCasas from "@/business/container/views/casas/section1/banner";
import GetCasas from "@/business/container/views/casas/sectionCasas/casas";
import TestimonialsCasas from "@/business/container/views/casas/sectionTestigos/testigos";
import useTranslation from "next-translate/useTranslation";
import ReactGA from "react-ga4";
import useAnalyticsEventTracker from "@/services/analytics/useAnalyticsEventTracker";

ReactGA.send({ hitType: "pageview", page: "/casas", title: "Casas Dalca Group" });
const Home: NextPage = () => {
    const [showChild, setShowChild] = useState(false);
    const {t, lang} = useTranslation('');
    const gaEventTracker = useAnalyticsEventTracker('Casas');
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
                    content="Casas-Dacal-Group"
                />
                <title>{lang === 'es' ? 'Casas | Dalca Group' : 'Houses | Dalca Group'}</title>
            </Head>
            <Layout>
                <BannerCasas/>
                <GetCasas gaEventTracker={gaEventTracker}/>
                <TestimonialsCasas/>
                <SectionContact gaEventTracker={gaEventTracker}/>
            </Layout>
        </>
    );
};

export default Home;
