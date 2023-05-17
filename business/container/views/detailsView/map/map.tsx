import styles from "./styles.module.css"

export default function MapLocation(props:any) {
    //console.log(props.data)

    return (
        <>
            <iframe
                src={props.data ? props.data.location_map : null}
                width="1920" height="600" loading="lazy"></iframe>
        </>
    )
}
