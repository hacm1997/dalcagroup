import styles from "./styles.module.css";
import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from "react-bootstrap/Modal";
import {useEffect, useRef, useState} from "react";
import Gallery from "@/business/content/modalGallery/gallery";

export default function BtnSeeMore({text, data}:any) {
    const [newShow, setNewShow] = useState(false);
    //console.log(props.price);
    const btn_click = () => {
        setNewShow(true);
    }
    const btn_close = () => {
        setNewShow(false);
    }

    function useOutsideAlerter(ref:any) {

        useEffect(() => {

            function handleClickOutside(event:any) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setNewShow(false);
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return(
        <>
            <div className={styles.ver_mas}>
                <a onClick={btn_click}><span>{text} <i className='bx bxs-grid'></i></span></a>
            </div>

            <Modal fullscreen={true} show={newShow} contentClassName={styles.body}>
                <Modal.Body>
                    <div className={styles.modal_body} ref={wrapperRef}>
                        <div className={styles.btn_close} >
                            <a title="Cerrar" onClick={btn_close}><i className='bx bx-x-circle'></i></a>
                        </div>

                        <Gallery data={data} />

                    </div>

                </Modal.Body>
            </Modal>

        </>
    );
}
