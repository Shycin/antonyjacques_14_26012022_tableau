import { useState, useContext, useEffect } from 'react'

import Row from './Components/Row'
import Columns from './Components/Columns'
import Navigate from './Components/Navigate'
import DropDown from './Components/DropDown'

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
    const { length, setLength } = useContext(lengthPageContext)
    const { page, setPage } = useContext(pageContext)
    const [ itemDisplay, setItemDisplay ] = useState([])

    useEffect(() => {
        const new_array = Array.from(data).slice(length*(page-1), length*page)
        setItemDisplay(new_array);
    },[length,page])

    useEffect(() => {
        console.log(itemDisplay)
    },[itemDisplay])

    useEffect(() => {
        setLength(lengthMenu[0])
    },[])

    return (
        <div id="DataTable">
            <table>
                <tbody>
                    <tr><th><DropDown lengthMenu={lengthMenu}/></th></tr>
                    <Columns key={'column_1'} data={columns}/>
                    {
                        itemDisplay ?
                        itemDisplay.map((element,index) => {
                            return <Row 
                                key={'line_'+index} 
                                index={index}
                                columns={columns} 
                                data={element} 
                                autoWidth={autoWidth} 
                                lengthMenu={lengthMenu}/>
                        })
                        : null
                    }
                    <tr><th><Navigate lengthPage={length} maxPage={Math.ceil(Array.from(data).length/length)}/></th></tr>
                </tbody>   
            </table>  
        </div>
    )
}

export default DataTable