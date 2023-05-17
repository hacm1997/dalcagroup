import styles from "./styles.module.css"
import {useState} from "react";

export default function FormContact(props:any) {
    const [form, setForm] = useState<any>({name:'',phone:'',email:''});
    const wspSpa = `https://api.whatsapp.com/send?phone=573042811369&text=Hola%20Dalca%20Group%2C%20vengo%20de%20su%20sitio%20web.%20Quisiera%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20productos%20y%20servicios%20%0Ami%20nombre%20es%3A%20${form.name ? form.name : null}%2C%20Celular%20${form.phone ? form.phone : null}%20y%20mi%20correo%20es%20${form.email ? form.email : null}`
    const wspEng = `https://api.whatsapp.com/send?phone=573042811369&text=Hello%20Dalca%20Group%2C%20I%20come%20from%20your%20website.%20I%20would%20like%20more%20information%20about%20your%20products%20and%20services%0Amy%20name%20is%3A%20${form.name ? form.name : null}%2C%20cell%20${form.phone ? form.phone : null}%20and%20my%20email%20is${form.email ? form.email : null}`

    const handlerForm = async (e:any) => {
        const value = e.target.value;
        setForm({
            ...form,
            [e.target.name] : value
        })
    }
    return (
        <>
            <div className={styles.card_content}>
                <form>
                    <div>
                        <input type="text" onChange={handlerForm} name="name" placeholder={props.translate('contact.name')} required />
                    </div>
                    <div>
                        <input type="number" onChange={handlerForm} name="phone" placeholder={props.translate('contact.phone')} required />
                    </div>
                    <div>
                        <input type="email" onChange={handlerForm} name="email" placeholder={props.translate('contact.email')} required />
                    </div>
                    <div className={styles.button}>
                        {form.name !== '' && form.phone !== '' && form.email !== '' ?
                            <a type="submit" href={props.lang === 'es' ? wspSpa : wspEng} target="_blank" onClick={() => props.gaEventTracker('Contacto a wsp desde formulario')}>{props.translate('contact.send')}</a>
                            : <p style={{textAlign: "center", color:"#1d6fb7"}}>{props.lang === 'es' ? 'Ingrese todos los datos' : 'Please enter all data'}</p>}

                    </div>
                </form>
            </div>
        </>
    )
}
