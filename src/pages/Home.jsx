import React from 'react'
import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Sort from '../components/Sort'

import qs from 'qs'
import { useNavigate } from 'react-router'

import axios from 'axios'

// import ReactPaginate from 'react-paginate';
import Pagination from '../components/Pagination'
import { SearchContext } from '../context/Context'
import { useDispatch, useSelector } from 'react-redux'
import { setFilters } from '../redux/slices/filterSlice'

export default function Home() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isSearch = React.useRef(false)
    const isMounted = React.useRef(false)


    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    // const [category, setCategory] = React.useState('')
    // const [currentPage, setCurrentPage] = React.useState(1)

    const filterSLicing = useSelector(el => el.filterSlice)
    const categoryId = filterSLicing.categoryId
    const sortId = filterSLicing.sortId
    const currentPage = filterSLicing.currentPage
    const { searchValue } = React.useContext(SearchContext)



    const fetchPizzas = () => {
        setIsLoading(true)
        axios.get(`https://631c6bde1b470e0e1201576b.mockapi.io/items?page=${currentPage}&${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sortId}`)
            .then(res => {
                setItems(res.data)
                setIsLoading(false)
            })
    }




    React.useEffect(() => {
        if (isMounted.current) {
            const queryStr = qs.stringify({
                sortId,
                categoryId,
                currentPage
            })
            navigate(`?${queryStr}`)
        }
        isMounted.current = true
        // isMounted.current = true
    }, [categoryId, sortId, searchValue, currentPage])


    React.useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            // console.log(params);

            dispatch(setFilters(params))
        }
        isSearch.current = true
        // navigate(``)

    }, [])


    React.useEffect(() => {
        window.scrollTo(0, 0)
        if (isSearch.current) fetchPizzas()
    }, [categoryId, sortId, searchValue, currentPage])


    const pizzas = items.filter(obj => {
        if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
            return true
        }
        return false
    })
        .map(el => <PizzaBlock id={el.id} key={el.id} title={el.title} price={el.price} imageUrl={el.imageUrl} sizes={el.sizes} types={el.types} />)
    return (
        <>
            <div className="content__top">
                <Categories
                    // setCategory={setCategory}
                    categoryId={categoryId}
                />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">

                {
                    isLoading
                        ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                        : pizzas

                }
            </div>
            {/* <Pagination
                value={currentPage}
            /> */}
        </>

    )
}
