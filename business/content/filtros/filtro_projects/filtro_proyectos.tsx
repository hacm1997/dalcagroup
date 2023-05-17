import styles from "./styles.module.css";
import * as React from 'react';
import { Range, getTrackBackground } from 'react-range';
import { formatNumber } from "@/services/functions";

//For filter by Price
const STEP = 10000000;
const MIN = 80000000;
const MAX = 350000000;

//For filter by Area
const STEP_type2 = 20;
const MIN_type2 = 0;
const MAX_type2 = 800;

export default function FiltroProjects({ rtl, rtl2, rangePrice, isClick, projects, applyFilter, setListUpdate }: any) {
    const [values, setValues] = React.useState([80000000, 350000000]);
    const [values2, setValues2] = React.useState([0, 800]);

    const [list, setList] = React.useState(projects);
    const [resultsFound, setResultsFound] = React.useState(true);


    function handleChangePrice(values: any) {
        setValues(values);
    };

    function handleChangeArea(values2: any) {
        setValues2(values2);
    };

    let updateList = projects;
    //console.log("Values update => ", updateList)
    //Function for Filter Lotes
    applyFilter = () => {

        // --- Price filter --- //
        const minPrice = values[0];
        const maxPrice = values[1];

        //console.log(minPrice, maxPrice);

        updateList = updateList.filter(
            (item: { price: number; }) => item.price >= minPrice && item.price <= maxPrice
                //console.log("PRICE => ",item.price);
        );

        //console.log("Update => ",updateList)

        // --- Capacity (Area) Filter --- //
        const minCapacity = values2[0];
        const maxCapacity = values2[1];

        //console.log(minCapacity, maxCapacity);

        updateList = updateList.filter(
            (item: { area: number; }) => item.area >= minCapacity && item.area <= maxCapacity
        )

        setList(updateList);
        setListUpdate(updateList);
        !updateList.length ? setResultsFound(false) : setResultsFound(true);
        //console.log("la lista update: "+ list);
    };

    React.useEffect(() => {
        applyFilter();
    }, [values, values2]);

    return (
        <>

            <div className={styles.general}>
                <div className={styles.content_1}>
                    <h2>Filtrar</h2>
                    <p>Precio</p>

                    <div className={styles.range}>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexWrap: 'wrap'
                            }}
                        >
                            <Range
                                values={values}
                                step={STEP}
                                min={MIN}
                                max={MAX}
                                rtl={rtl}
                                onChange={handleChangePrice}
                                renderTrack={({ props, children }) => (
                                    <div
                                        onMouseDown={props.onMouseDown}
                                        onTouchStart={props.onTouchStart}
                                        style={{
                                            ...props.style,
                                            height: '36px',
                                            display: 'flex',
                                            width: '100%'
                                        }}
                                    >
                                        <div
                                            ref={props.ref}
                                            style={{
                                                height: '5px',
                                                width: '100%',
                                                borderRadius: '4px',
                                                background: getTrackBackground({
                                                    values,
                                                    colors: ['#ccc', '#1D6FB7', '#ccc'],
                                                    min: MIN,
                                                    max: MAX,
                                                    rtl
                                                }),
                                                alignSelf: 'center'
                                            }}
                                        >
                                            {children}
                                        </div>
                                    </div>
                                )}
                                renderThumb={({ props, index }) => (
                                    <div
                                        {...props}
                                        style={{
                                            ...props.style,
                                            height: '16px',
                                            width: '16px',
                                            borderRadius: '50px',
                                            backgroundColor: '#1D6FB7',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            boxShadow: '0px 2px 6px #AAA'
                                        }}
                                    >
                                        <div
                                        style={{
                                            position: 'absolute',
                                            top: '-28px',
                                            color: '#fff',
                                            fontWeight: '400',
                                            fontSize: '12px',
                                            padding: '4px',
                                            borderRadius: '4px',
                                            backgroundColor: '#1D6FB7',
                                            width: '90px',
                                            textAlign: 'center'
                                        }}
                                    >
                                        $ {values[index].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                                        </div>

                                    </div>
                                )}
                            />
                        </div>
                        <div className={styles.content_range}>
                            <div>
                                <p>Min</p>
                            </div>
                            <div>
                                <p>Max</p>
                            </div>
                        </div>
                        <div className={styles.valor_filtro}>
                            <div className={styles.vaule1}>
                                <p><span>$</span> {formatNumber(values[0])}</p>
                            </div>
                            <div className={styles.vaule2}>
                                <p><span>$</span> {formatNumber(values[1])}</p>
                            </div>
                        </div>

                    </div>


                </div>
                <br />
                <p hidden>Área</p>
                <div className={styles.range} hidden>
                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Range
                            values={values2}
                            step={STEP_type2}
                            min={MIN_type2}
                            max={MAX_type2}
                            rtl={rtl}
                            onChange={handleChangeArea}
                            renderTrack={({ props, children }) => (
                                <div
                                    onMouseDown={props.onMouseDown}
                                    onTouchStart={props.onTouchStart}
                                    style={{ ...props.style, height: '36px', display: 'flex', width: '100%' }}>
                                    <div ref={props.ref} style={{
                                        height: '5px',
                                        width: '100%',
                                        borderRadius: '4px',
                                        background: getTrackBackground({
                                            values: values2,
                                            colors: ['#ccc', '#1D6FB7', '#ccc'],
                                            min: MIN_type2,
                                            max: MAX_type2,
                                            rtl
                                        }),
                                        alignSelf: 'center'
                                    }}
                                    >
                                        {children}
                                    </div>
                                </div>
                            )}
                            renderThumb={({ index, props, isDragged }) => (
                                <div
                                    {...props}
                                    style={{
                                        ...props.style,
                                        height: '16px',
                                        width: '16px',
                                        borderRadius: '50px',
                                        backgroundColor: '#1D6FB7',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        boxShadow: '0px 2px 6px #AAA'
                                    }}
                                >
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '-28px',
                                            color: '#fff',
                                            fontWeight: '400',
                                            fontSize: '14px',
                                            padding: '4px',
                                            borderRadius: '4px',
                                            backgroundColor: '#1D6FB7'
                                        }}
                                    >
                                        {values2[index].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                                    </div>
                                </div>
                            )}
                        />
                    </div>
                    <div className={styles.content_range}>
                        <div>
                            <p>Min</p>
                        </div>
                        <div>
                            <p>Max</p>
                        </div>
                    </div>
                    <div className={styles.valor_filtro}>
                        <div>
                            <p>{values2[0]} <span> m<sup>2</sup></span></p>
                        </div>
                        <div>
                            <p>{values2[1]} <span> m<sup>2</sup></span></p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

