import styles from "./styles.module.css"
import {useState} from "react";

export default function DetailsContactForm(props:any) {
    //console.log("data => ", props.epic);
    const [form, setForm] = useState<any>({name:'',phone:'',email:''});
    const wspSpa = `https://api.whatsapp.com/send?phone=573042811369&text=Hola%20Dalca%20Group%2C%20mi%20nombre%20es%3A%20${form.name ? form.name.toUpperCase() : null}%2C%20y%20vengo%20de%20su%20sitio%20web.%0A%0AQuisiera%20saber%20más%20información%20sobre%20sus%20${props.epic ? props.epic.toUpperCase() : null}%20en este caso:%20${props.data ? props.data.name.toUpperCase() : null}.%0A%0AMuchas%20gracias.😁`
    const wspEng = `https://api.whatsapp.com/send?phone=573042811369&text=Hello%20Dalca%20Group%2C%20my%20name%20is%3A%20${form.name ? form.name.toUpperCase() : null}%2C%20and%20I%20come%20from%20your%20website.%0A%0AI%20would%20like%20to%20know%20more%20information%20about%20the%20${props.epic ? props.epic.toUpperCase() : null}%20in this case:%20${props.data ? props.data.name : null}.%0A%0AThank%20you%20very%20much.😁`

    const handlerForm = async (e:any) => {
        const value = e.target.value;
        setForm({
            ...form,
            [e.target.name] : value
        })
    }
    // console.log("form => ", form)

    return (
        <>
            <div className={styles.card_content}>
                <form>
                    <div>
                        <input onChange={handlerForm} name="name" type="text" placeholder={props.t('contact.name')} required />
                    </div>
                    <div>
                        <input onChange={handlerForm} name="phone" type="number" placeholder={props.t('contact.phone')} required />
                    </div>
                    <div>
                        <input onChange={handlerForm} name="email" type="email" placeholder={props.t('contact.email')} required />
                    </div>
                    <div className={styles.button}>
                        {form.name !== '' && form.phone !== '' && form.email !== '' ?
                            <a type="submit" href={props.lang === 'es' ? wspSpa : wspEng} target="_blank">{props.t('contact.send')}</a>
                        : <p style={{textAlign: "center", paddingTop:"15px", color:"#1d6fb7"}}>{props.lang === 'es' ? 'Ingrese todos los datos' : 'Please enter all data'}</p>}

                    </div>
                </form>
            </div>
        </>
    )
}
