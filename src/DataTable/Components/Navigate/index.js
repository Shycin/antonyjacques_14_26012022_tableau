import {useContext} from 'react'
 
import { pageContext } from '../../context/pageContext'
import { lengthPageContext } from '../../context/lengthPageContext'

import Pagination from '../Pagination'

import './index.css'

export default function Navigate({ maxPage }) {
    const { page, setPage } = useContext(pageContext)

    const previousPage = function()
    {
        setPage(page-1)
    }

    const nextPage = function()
    {
        setPage(page+1)
    }

    return (
        <div className='select'>
            {
                page > 1
                ? <button id='Entries_previous' className='navigate' onClick={() => previousPage()}>Previous</button>
                : ''
            }
            {
                <Pagination maxPage={maxPage}/>
            }
            {
                page < maxPage
                ? <button id='Entries_next' className='navigate' onClick={() => nextPage()}>Next</button>
                : ''
            }
      </div>
    )
  }