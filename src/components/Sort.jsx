import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setSortId } from '../redux/slices/filterSlice';

const list = [
    { name: 'Убрать фильтр', sort: '' },
    { name: 'популярности макс', sort: 'rating&order=desc' },
    { name: 'популярности мин', sort: 'rating&order=asc' },
    { name: 'цене maks', sort: 'price&order=desc' },
    { name: 'цене min', sort: 'price&order=asc' },
    { name: 'алфавиту вниз', sort: 'title&order=desc' },
    { name: 'алфавиту вверх', sort: 'title&order=asc' },
]


export default function Sort(props) {
    const dispatch = useDispatch()

    const sortId = useSelector(el => el.filterSlice.sortId)
    const onCLickSort = (el) => {
        console.log(el);
        dispatch(setSortId(el))
        dispatch(setCurrentPage(1))
    }


    const [openSort, setOpenSort] = React.useState(false)


    function onPopup() {
        setOpenSort(!openSort)
        // { openSort && alert('ngslkng') }
    }


    const [selected, setSelected] = React.useState('Нет фильтра')

    function onSelected(i, list) {
        onCLickSort(list.sort)
        setSelected(list.name === 'Убрать фильтр' ? 'Нет фильтра' : list.name)
        setOpenSort(!openSort)

    }

    function onSorted(i, list) {
        onSelected(i, list)
    }


    return (
        <div className="sort">
            <div className="sort__label" onClick={() => onPopup()} >
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span >{selected}</span>
            </div>
            {openSort &&
                <div className="sort__popup">
                    <ul>
                        {list.map((list, i) => <li onClick={() => onSorted(i, list)} className={sortId === i ? 'active' : ' '} key={i} >{list.name}</li>)}
                        {/* <li className="active">популярности</li>
                        <li>цене</li>
                        <li>алфавиту</li> */}
                    </ul>
                </div>
            }
        </div>
    );
}
