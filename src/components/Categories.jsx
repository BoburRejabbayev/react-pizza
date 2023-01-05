import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId, setFilters } from '../redux/slices/filterSlice';

export default function Categories(props) {

  const categoryId = useSelector(el => el.filterSlice.categoryId)
  const dispatch = useDispatch()

  const [categories, setCategories] = React.useState([
    { name: 'Все', id: 0 },
    { name: 'Мясные', id: 1 },
    { name: 'Вегетарианская', id: 2 },
    { name: 'Гриль', id: 3 },
    { name: 'Острые', id: 4 },
    { name: 'Закрытые', id: 5 },

  ])


  function onCategory(i, el) {
    // onClickCategory(i)
    dispatch(setCategoryId(i))
  

    // props.setCategory(el.name)
  }


  return (
    <div className="categories">
      <ul>
        {
          categories.map((el, i) => {
            return <li onClick={() => onCategory(i, el)} className={props.categoryId === i ? 'active' : ' '} key={i} >{el.name}</li>
          })
        }

      </ul>
    </div>
  );
}
