import Link from "next/link";
import styles from "./styles.module.css";
import common from "../../../../services/common.json";
import useTranslation from "next-translate/useTranslation";
import useAnalyticsEventTracker from "@/services/analytics/useAnalyticsEventTracker";

export default function Footer() {
  const {t, lang} = useTranslation('common');
  const footer: any = common.footer;
  const gaEventTracker = useAnalyticsEventTracker('Footer');
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.center}>
          <div className={styles.general}>
            <div className={styles.center}>
              <div className={styles.content_1}>

                <Link href={t('navbar.logo.url')} title={t('navbar.logo.alt')}>
                  <div className={styles.logo}>
                    <a onClick={() => gaEventTracker('Clic footer: Logo')}>
                      <img
                        src={t('navbar.logo.srcImg')}
                        alt={t('navbar.logo.alt')}
                        title={t('navbar.logo.alt')}
                    />
                    </a>
                  </div>
                </Link>
                <h2>{t('footer.aboutUs.aboutUsTitle')}</h2>
                <p>{t('footer.aboutUs.aboutUsContent')}</p>
              </div>
            </div>

          <div className={styles.center}>
            <div className={styles.content_2}>
              <h2>{t('footer.contact.contactTitle')}</h2>
              <div className={styles.infoUbi}>
                <div className={styles.itenUbi}>
                  <i className="bx bx-envelope" title={t('footer.address.iconTitle')}></i>
                  <div className={styles.info}>
                  <p>{t('footer.contact.contactEmail')}</p>
                  </div>
                </div>

                <div className={styles.itenUbi}>
                  <i className="bx bx-phone" title={t('footer.contact.iconTitle')}></i>
                  <div className={styles.info}>
                    <p>{t('footer.contact.phones')}:</p>
                    <p>{t('footer.contact.contactNumber')}</p>
                  </div>
                </div>

                <div className={styles.itenUbi}>
                  <i
                    className="bx bx-time-five"
                    title={t('footer.schedule.iconTitle')}
                  ></i>
                  <div className={styles.info}>
                    {/* <p>{t('footer.schedule.scheduleTitle')}</p> */}
                    <p>{t('footer.schedule.hours')}</p>
                    <p>{t('footer.schedule.saturday')}</p>
                    <p>{t('footer.schedule.sundays')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.center}>
            <div className={styles.content_3}>
              <h2>{t('footer.socialMedia.socialMediaTitle')}</h2>
              <div className={styles.social}>
                <a href={t('https://www.instagram.com/dalcagroup/')} target="_blank" title="Instagram" onClick={() => gaEventTracker('Clic footer: Instagram')}>
                  {" "}
                  <i
                    className="bx bxl-instagram"
                    title={t('footer.socialMedia.urls.instagram.title')}
                  ></i>
                </a>
                <a href={t('https://www.facebook.com/dalcagroup/')} target="_blank" title="Facebook" onClick={() => gaEventTracker('Clic footer: Facebook')}>
                  <i
                    className="bx bxl-facebook"
                    title={t('footer.socialMedia.urls.facebook.title')}
                  ></i>
                </a>

              </div>
              <div className={styles.policy}>
                <a href="/policy/Política%20de%20tratamiento%20de%20datos%20-%20DALCA.pdf" target="_blank" title="Policy" onClick={() => gaEventTracker('Clic footer: Política de tratamiento de datos')}>
                  {t('footer.final.term')}
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
          {/* BY KRU */}
          <div className={styles.center}>
            <div className={styles.content_4}>
              <div className={styles.by_kru}>
                <a className={styles.kru}
                   onClick={() => gaEventTracker('Clic footer: Desarrollado por KRU')}
                   title="Go Kru"
                   href="https://kru360.com/?utm_source=Pagina+web&utm_medium=Clic&utm_campaign=dalcagroup&utm_id=dalcagroup"
                   target="_blank">
                  {t('footer.final.by')} <strong>KRU</strong> 🚀
                </a>
              </div>
            </div>
          </div>


      </footer>
    </>
  );
}
