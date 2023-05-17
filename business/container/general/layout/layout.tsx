import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./styles.module.css";
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";
import Link from "next/link";
import common from "../../../../services/common.json";
import useTranslation from "next-translate/useTranslation";
import useAnalyticsEventTracker from "@/services/analytics/useAnalyticsEventTracker";

export default function Layout({ children }: { children: React.ReactNode }) {
  const {t, lang} = useTranslation('common');
  const gaEventTracker = useAnalyticsEventTracker('Inicio');

  return (
    <>
      <div>
        <Head>
          <meta name="keywords" content={t('headData.keywords')} />
          <meta name="description" content={t('headData.description')} />
          <meta name="author" content="Dalca Group"/>
          <meta name="robots" content="index, follow"/>
          <link rel="publisher" href="https://dalcagroup.com" />
        </Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />
        <link rel="canonical" href="https://dalcagorup.com" />

        <a
          href="https://api.whatsapp.com/send?phone=573042811369&text=Hola%20Dalca%20Group%20%F0%9F%8F%A0%F0%9F%8D%83.%20Estaba%20visitando%20su%20sitio%20web%20y%20estoy%20interesad@%20en%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20productos%20y%20servicios%20que%20ustedes%20ofrecen.%20"
          target="_blank"
          rel="noreferrer"
          title="Whatsapp"
          className={styles.float}
          onClick={() => gaEventTracker('Clic WhatsApp flotante')}
        >
          <i className="fa fa-whatsapp my-float"></i>
        </a>


        <NavBar />

        {children}

        <Footer />
      </div>
    </>
  );
}
