import FormContact from "./form/form"
import styles from "./styles.module.css"
import DetailsContactForm from "./form/form";
import useTranslation from "next-translate/useTranslation";

export default function DetailsContact(props:any) {
    const {t, lang} = useTranslation('common');
    return (
        <>
            <div className={styles.section} id="contact">
                <div className={styles.content_grid}>
                    <div className={styles.grid}>
                        <div className={styles.item1}>
                            <h5>{t('contact.text')}
                            </h5>
                        </div>
                        <div className={styles.item2}>
                            <DetailsContactForm t={t} data={props.data} epic={props.epic} lang={lang}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
