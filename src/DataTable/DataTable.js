import { useState, useContext, useEffect, useRef } from 'react'

import Row from './Components/Row'
import Columns from './Components/Columns'
import Navigate from './Components/Navigate'
import DropDown from './Components/DropDown'
// import Search from './Components/Search'

import { pageContext } from './context/pageContext'
import { lengthPageContext } from './context/lengthPageContext'

import './index.css'

const DataTable = function({
    autoWidth = true,
    deferRender = false,
    info = true,
    lengthChange = true,
    ordering = true,
    paging = true,
    processing = false,
    scrollX = false,
    scrollY = null,
    searching = true,
    serverSide = false,
    stateSave = false,
    ajax = {
        url: null,
        data: [],
        dataSrc: '',
        type: 'POST'
    },
    data = [],
    columns = [],
    columnDefs = [],
    lengthMenu = [10,25,50,100]
}){
    const data_array = Array.from(data)
    const array_length = data_array.length

    const first_length = lengthMenu[0]
    const first_page = 1



    const { length, setLength } = useContext(lengthPageContext)
    const { page, setPage } = useContext(pageContext)
    const [ itemDisplay, setItemDisplay ] = useState(data_array.slice(first_length*(first_page-1), first_length*first_page))

    const [ MaxPagePaginate , setMaxPagePaginate ] = useState(Math.ceil(array_length/first_length))

    const [ minIndex , setMinIndex ] = useState(0);
    const [ maxIndex , setMaxIndex ] = useState(0);

    useEffect(() => {
        setLength(lengthMenu[0])
        setPage(1)
    },[])

    useEffect(() => {
        const new_array = data_array.slice(length*(page-1), length*page)

        setItemDisplay(new_array);
    },[length, page])


    return (
        <div id="DataTable">
            <table>
                <tbody>
                    <tr>
                        <th colSpan={columns.length}>
                            <div className='flex flex--between mt-1'>
                                <DropDown lengthMenu={lengthMenu}/>
                                {/* <Search /> */}
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
                                    Showing {((length*(page-1)) + 1)} to {length*page < array_length ? length*page : array_length} of {array_length} entries
                                </div>
                                <Navigate maxPage={Math.ceil(array_length/length)}/>
                            </div>
                        </th>
                    </tr>
                </tbody>   
            </table>  
        </div>
    )
}

export default DataTable