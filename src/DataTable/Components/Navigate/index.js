import {useContext} from 'react'
 
import { pageContext } from '../../context/pageContext'
import { lengthPageContext } from '../../context/lengthPageContext'

import Pagination from '../Pagination'

export default function Navigate({ lengthPage = 0, maxPage }) {
    const { page, setPage } = useContext(pageContext)
    const { length, setLength } = useContext(lengthPageContext)


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
            <label htmlFor='nbEntries'>Show</label>
            {
                page > 1
                ? <button id='Entries_previous' onClick={() => previousPage()}>{'<<<'}</button>
                : ''
            }
            {
                <Pagination maxPage={maxPage}/>
            }
            {
                page < maxPage
                ? <button id='Entries_next' onClick={() => nextPage()}>{'>>>'}</button>
                : ''
            }
      </div>
    )
  }