import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import common from "../../../../services/common.json"
import useTranslation from "next-translate/useTranslation";
import useAnalyticsEventTracker from "@/services/analytics/useAnalyticsEventTracker";

function Navbar() {
  const router = useRouter();
  const { t, lang } = useTranslation('common');
  const menu_items = t<any>("navbar.items", {}, { returnObjects: true });
  const gaEventTracker = useAnalyticsEventTracker('Menu');

  const [state, setState] = useState<{ icon: any; menu: any }>({
    icon: "bx bx-menu-alt-right",
    menu: styles.menu,
  });

  const navbar = common.navbar;
  const {
    query: { name, id },
  } = router

  const [menuTwo, setMenuTwo] = useState(styles.menu);
  const [iconTwo, setIconTwo] = useState('bx bx-menu');
  function useOutsideAlerter(ref: any) {
    let menu = styles.menu;
    let icon = 'bx bx-menu';
    useEffect(() => {

      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setMenuTwo(menu);
          setIconTwo(icon)
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

  const handleMenu = () => {
    let menu = styles.menu;
    let icon = 'bx bx-menu';
    console.log(menu)
    menu !== menuTwo ? setMenuTwo(menu) : setMenuTwo(styles.menuActive);
    icon !== iconTwo ? setIconTwo(icon) : setIconTwo('bx bx-x ' + styles.closeFixed);
  }
  // console.log("name path => ",window.location.pathname)

  return (
    <>
      <nav className={router.asPath === '/' || router.asPath === "/casas" || router.asPath === "/proyectos" ? styles.navbar_style1 : styles.navbar_style} ref={wrapperRef}>
        <div className={styles.general}>
          <Link href={navbar.logo.url} title="Home">
            <div className={styles.logo}>
              <a onClick={() => gaEventTracker('Clic menu: Logo')}><img src={name === "lotes" || name === "casas" || name === "proyectos" ? navbar.logo.srcImgBlue : navbar.logo.srcImg} alt={navbar.logo.alt} title={navbar.logo.alt} /></a>
            </div>
          </Link>

          <div onClick={handleMenu} className={name === "lotes" || name === "casas" || name === "proyectos" ? styles.botonMovilDetails : styles.botonMovil} >
            <i className={iconTwo}></i>
          </div>

          <div className={menuTwo}>
            {menu_items?.filter((list: any) => list.display === true).map((item: any, index: number) => {
              return (
                <ul key={index}>
                  {name ?
                    <Link href={item.url}>
                      <li className={name === item.secondActive ? `${styles.secondActive}` : `${styles.noSecondActive}`}>
                        <a onClick={() => gaEventTracker(`Clic menu: ${item.name}`)}>{item.name}</a>
                      </li>
                    </Link>
                    :
                    <Link href={item.url}>
                      <li className={router.asPath.split("/")[1] === item.active ? `${styles.active}` : `${styles.noActive}`}>
                        <a onClick={() => gaEventTracker(`Clic menu: ${item.name}`)}>{item.name}</a>
                      </li>
                    </Link>
                  }

                </ul>
              )
            })}
            <div className={styles.boton} >
              <a href={t('navbar.bookingBtn.url')} target={"_blank"} onClick={() => gaEventTracker(`Clic menu: Contáctar`)}>
                {t('navbar.bookingBtn.name')}
              </a>

            </div>
            <div className={styles.language}>
              <a href="/" title="Español" onClick={() => gaEventTracker(`Clic menu: Idioma español`)}>
                <img src="/images/icons/spainish_icon.png" alt="Español" width={25} height={25} title="Español" />
              </a>
              <a href="/en" title="English" onClick={() => gaEventTracker(`Clic menu: Idioma inglés`)}>
                <img src="/images/icons/english_icon.png" alt="English" width={25} height={25} title="English" />
              </a>
            </div>
          </div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
