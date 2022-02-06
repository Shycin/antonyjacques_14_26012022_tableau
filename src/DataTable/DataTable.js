import { useState, useContext, useEffect } from 'react'

import Row from './Components/Row'
import Columns from './Components/Columns'
import Navigate from './Components/Navigate'
import DropDown from './Components/DropDown'
import Search from './Components/Search'

import { pageContext } from './context/pageContext'
import { lengthPageContext } from './context/lengthPageContext'

import './index.css'

const DataTable = function({
    autoWidth = true,
    data = [],
    columns = [],
    lengthMenu = [10,25,50,100]
}){
    const data_array = Array.from(data)

    const first_length = lengthMenu[0]
    const first_page = 1



    const { length, setLength } = useContext(lengthPageContext)
    const { page, setPage } = useContext(pageContext)
    const [ itemDisplay, setItemDisplay ] = useState(data_array.slice(first_length*(first_page-1), first_length*first_page))
    const [ search, setSearch ] = useState(null)
    const [ searchArray, setSearchArray ] = useState([])


    useEffect(() => {
        setLength(lengthMenu[0])
        setPage(1)
    },[])

    useEffect(() => {

        if(search)
        {
            const new_array = data_array.filter((item) => 
                JSON.stringify(item).toLowerCase().includes(search.toLowerCase())
            )

            setSearchArray(new_array)
            setItemDisplay(new_array.slice(length*(page-1), length*page));
        }
        else
        {
            const new_array = data_array.slice(length*(page-1), length*page)
    
            setSearchArray(data_array)
            setItemDisplay(new_array);
        }
        
    },[length, page, search])


    const onSearch = (value) => {
        if(value.length >= 3)
        {
            setSearch(value)
        }
        else
        {
            setSearch(null)
        }
            
    }


    return (
        <div id="DataTable">
            <table>
                <tbody>
                    <tr>
                        <th colSpan={columns.length}>
                            <div className='flex flex--between mt-1'>
                                <DropDown lengthMenu={lengthMenu}/>
                                <Search onSearch={onSearch}/>
                            </div>
                        </th>
                    </tr>
                    <Columns data={columns}/>
                    {
                        itemDisplay.map((element,index) => {
                            return <Row 
                                key={'line_'+index} 
                                index={index}
                                columns={columns} 
                                data={element} 
                                autoWidth={autoWidth} 
                                lengthMenu={lengthMenu}/>
                        })
                    }
                    <tr>
                        <th colSpan={columns.length}>
                            <div className='flex flex--between mt-1'>
                                <div>
                                    Showing {((length*(page-1)) + 1)} to {length*page < itemDisplay.length ? length*page : itemDisplay.length} of {itemDisplay.length} entries
                                </div>
                                <Navigate maxPage={Math.ceil(searchArray.length/length)}/>
                            </div>
                        </th>
                    </tr>
                </tbody>   
            </table>  
        </div>
    )
}

export default DataTable