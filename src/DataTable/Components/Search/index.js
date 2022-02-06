import {useContext} from 'react'
 
import { pageContext } from '../../context/pageContext'
import { lengthPageContext } from '../../context/lengthPageContext'

import './index.css'

export default function Search({ lengthPage = 0, maxPage }) {
    const { page, setPage } = useContext(pageContext)
    const { length, setLength } = useContext(lengthPageContext)

    return (
        <div className='search'>
            
      </div>
    )
  }