import React, {useContext} from 'react'
 
import { pageContext } from '../../context/pageContext'
import { lengthPageContext } from '../../context/lengthPageContext'

import './index.css'

export default function Search({onSearch}) {
    const { page, setPage } = useContext(pageContext)
    const { length, setLength } = useContext(lengthPageContext)

    return (
        <div className='search'>
            <label htmlFor='search'>Search: </label>
            <input id='search' onChange={(e) => onSearch(e.target.value)}/>
        </div>
    )
  }