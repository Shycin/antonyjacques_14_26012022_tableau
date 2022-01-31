import {useContext, useEffect} from 'react'
import { pageContext } from '../../context/pageContext'
import { lengthPageContext } from '../../context/lengthPageContext'

export default function Pagination({ currentPage, maxPage = 0}) {
    const { page, setPage } = useContext(pageContext)
    const { length } = useContext(lengthPageContext)

    const changePage = function(newpage)
    {
        if(page !== newpage)
            setPage(newpage)
    }

    return (
        <div className='pagination'>
            {
                maxPage > 0 
                ?   [...Array(maxPage)].map((e, i) => 
                        <div key={i} className={`pagination__page ${page === (i+1) ? 'pagination__page--current' : ''}`} onClick={(e) => changePage(i+1)}>{i+1}</div>
                    )
                : ''
            }
        </div>
    )
  }