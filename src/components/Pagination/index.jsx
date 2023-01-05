import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/slices/filterSlice';
import styles from './Pagination.module.scss'

export default function Pagination(props) {
    const dispatch = useDispatch()

    const onChangePage = (num) => {
        dispatch(setCurrentPage(num.selected + 1))
    }

    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            // onPageChange={(event) => dispatch(setCurrentPage(event.selected + 1))}
            onPageChange={(e) => onChangePage(e)}
            pageRangeDisplayed={4}
            // pageCount={props.currentPage}
            pageCount={3}
            forcePage={props.value - 1}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    )
}

