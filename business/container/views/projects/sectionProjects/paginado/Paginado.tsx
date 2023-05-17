import React from 'react'
import ReactPaginate from "react-paginate";
import styles from "./styles.module.css"

function Paginado({changePage, pageCount}:any) {
  return (
    <>
      <div className={styles.paginado}>
            <ReactPaginate
              nextLabel=">"
              onPageChange={changePage}
              pageCount={pageCount}
              previousLabel="<"
              containerClassName={styles.paginationsBtns}
              previousClassName={styles.prevBtn}
              nextClassName={styles.nextBtn}
              disabledClassName={styles.paginationsDisable}
              activeClassName={styles.paginationsActive}
            />
          </div>

    </>
  )
}

export default Paginado


