import React, {useContext} from 'react'
import { pageContext } from '../../context/pageContext'
import { lengthPageContext } from '../../context/lengthPageContext'

import './index.css'

export default function Pagination({ maxPage = 0}) {
    const { page, setPage } = useContext(pageContext)
    const { length } = useContext(lengthPageContext)

    const maxBox = 7
    const boxNextMain = 1
    const ellipis = '...'

    const showBox = []

    // Si le max page est inférieur au nombre max qu'on veux on affiche le plus possible soit le max en props
    if(maxPage <= maxBox)
    {
        for(let i = 1; i <= maxPage; i++)
            showBox.push(i)
    }
    else
    {
        //Début d'éllipsis quand on est à 3 de différence soit avec le min soit le max
        if( (page - boxNextMain) > 3 && (page + boxNextMain) < maxPage - 2 )
        {
            showBox.push(1)

            if(1 === page - boxNextMain - 1)
                showBox.push(page - boxNextMain)
            else
                showBox.push(ellipis)
            

            for(let i = 0 - boxNextMain; i <= boxNextMain; i++)
            {
                showBox.push(page + i )
            }


            if(maxPage === page + boxNextMain + 1)
                showBox.push(page + boxNextMain)
            else
                showBox.push(ellipis)

           
            showBox.push(maxPage)
        }
        else
        {
            if(page < 4)
            {
                for(let i = 1 - boxNextMain; i < 5; i++)
                {
                    showBox.push(i + 1)
                }

                showBox.push(ellipis)
                showBox.push(maxPage)
            }
            else if(page > maxPage - 4)
            {
                showBox.push(1)
                showBox.push(ellipis)


                for(let i = maxPage - 5; i < maxPage; i++)
                {
                    showBox.push(i + 1)
                }
            }
            else if((page - boxNextMain) <= 3)
            {
                for(let i = 1 - boxNextMain; i < page + boxNextMain; i++)
                {
                    showBox.push(i + 1)
                }

                showBox.push(ellipis)
                showBox.push(maxPage)
            }
            else
            {
                showBox.push(1)
                showBox.push(ellipis)


                for(let i = page - boxNextMain; i < maxPage; i++)
                {
                    showBox.push(i + 1)
                }
               
            }
        }

        // for()

    }


    const changePage = function(newpage)
    {
        if(page !== newpage)
            setPage(newpage)
    }

    return (
        <div className='pagination'>
            {
                // maxPage > 0 
                // ?   [...Array(maxPage)].map((e, i) => 
                //         <button key={i} className={`pagination__page ${page === (i+1) ? 'pagination__page--current' : '' }`} onClick={(e) => changePage(i+1)}>{i+1}</button>
                //     )
                // : ''

                maxPage > 0 
                ?   showBox.map((item, i) => {
                        if(item === ellipis)
                        {
                            return <button key={i} className={`pagination__page`}>{item}</button>
                        }
                        else
                        {
                            return <button key={i} className={`pagination__page ${page === (item) ? 'pagination__page--current' : '' }`} onClick={(e) => changePage(item)}>{item}</button>
                        }
                    })
                : ''
            }
        </div>
    )
  }