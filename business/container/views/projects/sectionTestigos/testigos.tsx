import styles from "./styles.module.css"
import { useState } from "react";
import TestimonialSliders from "../../../../content/testimonial/sliders/slider";
import useTranslation from "next-translate/useTranslation";

export default function TestimonialsProjects() {
    const {t, lang} = useTranslation('common');

    return (
        <>
            <div className={styles.testimonials}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h4>{t('comments.title')}</h4>
                    </div>

                    <TestimonialSliders />
                </div>
            </div>
        </>
    )
}
