import type { NextPage } from "next";
import Layout from "../business/container/general/layout/layout";
import Head from "next/head";
import BannerLotes from "@/business/container/views/lotes/section1/banner";
import GetLotes from "@/business/container/views/lotes/sectionLotes/lotes";
import TestimonialSliders from "@/business/content/testimonial/sliders/slider";
import React, { useEffect, useState } from "react";
import Testimonials from "@/business/container/views/lotes/sectionTestigos/testigos";
import SectionContact from "@/business/content/sectionContact/contact";
import useTranslation from "next-translate/useTranslation";
import ReactGA from "react-ga4";
import useAnalyticsEventTracker from "@/services/analytics/useAnalyticsEventTracker";

ReactGA.send({ hitType: "pageview", page: "/", title: "Inicio/Lotes" });
const Home: NextPage = () => {
    const {t, lang} = useTranslation('common');
  const [showChild, setShowChild] = useState(false);
    const gaEventTracker = useAnalyticsEventTracker('Lotes');
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
              content="Dacal-Group"
          />
            <title>Dalca Group | {t('headData.title')}</title>
        </Head>
        <Layout>
            <BannerLotes/>
            <GetLotes gaEventTracker={gaEventTracker}/>
            <Testimonials/>
            <SectionContact gaEventTracker={gaEventTracker}/>
        </Layout>
      </>
  );
};

export default Home;
