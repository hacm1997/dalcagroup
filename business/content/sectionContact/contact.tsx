import useTranslation from "next-translate/useTranslation";
import FormContact from "./form/form"
import styles from "./styles.module.css"

export default function SectionContact(props:any) {
    const {t, lang} = useTranslation('common');
    return (
        <>
            <div className={styles.section} id="contact">
                <div className={styles.content_grid}>
                    <div className={styles.grid}>
                        <div className={styles.item1}>
                            <h5>
                                {t('contact.text')}
                            </h5>
                        </div>
                        <div className={styles.item2}>
                            <FormContact translate={t} lang={lang} gaEventTracker={props.gaEventTracker}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
