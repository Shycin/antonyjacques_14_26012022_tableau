import {useContext} from 'react'
 
import { pageContext } from '../../context/pageContext'
import { lengthPageContext } from '../../context/lengthPageContext'

import './index.css'

export default function DropDown({lengthMenu}) {
    const { page, setPage } = useContext(pageContext)
    const { length, setLength } = useContext(lengthPageContext)

    const onChange = function(e)
    {
        setLength(e.target.value)
        setPage(1)
    }

    return (
        <div className='DropDown'>
            Show &nbsp;
            <select onChange={onChange}>
                {
                    Array.from(lengthMenu).map((element,index) => {
                        if(element === length)
                        {
                            return <option key={index} selected>{element}</option>
                        }
                        else
                        {
                            return <option key={index}>{element}</option>
                        }
                    })
                }
            </select>
            &nbsp; entries
        </div>
    )
  }