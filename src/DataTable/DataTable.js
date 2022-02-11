import React, { useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'

import Row from './Components/Row'
import Columns from './Components/Columns'
import Navigate from './Components/Navigate'
import DropDown from './Components/DropDown'
import Search from './Components/Search'

import { pageContext } from './context/pageContext'
import { lengthPageContext } from './context/lengthPageContext'

import './index.css'

/**
 * Create a Table of data
 * @module Table
 * @component
 * @param {object} props
 * @prop {array} props.columns Array of obelect with columns's information like : { index:'column-index', label:'the name of column'}
 * @prop {array} props.data Array of data to show by line
 * @prop {array} props.lengthMenu Number of element per page. Each key have to correspond with an index to an element of cols's props.
 **/

const DataTable = function({
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
    const [ sort, setSort ] = useState({key: null, direction: 1})

    const isDate = (value) => {
        return !isNaN(Date.parse(value))
    }

    const onSort = () => {
        var new_array = data_array
        
        if(sort.key)
        {
            const key = sort.key
            const direction = sort.direction

            if(isDate(data_array[0][key])) 
            {
                new_array = data_array.sort(
                    (a, b) =>
                        direction *
                            ((new Date(a[key]) > new Date(b[key])) -
                            (new Date(b[key]) > new Date(a[key])))
                )
            }
            else
            {
                new_array = data_array.sort(
                    (a, b) => direction * ((a[key] > b[key]) - (b[key] > a[key]))
                )
            } 
        }
        
        return new_array
    }



    useEffect(() => {
        setLength(lengthMenu[0])
        setPage(1)
    },[])

    useEffect(() => {
        if(search)
        {
            const new_array = onSort(sort).filter((item) => 
                JSON.stringify(item).toLowerCase().includes(search.toLowerCase())
            )

            setSearchArray(new_array)
            setItemDisplay(new_array.slice(length*(page-1), length*page));
        }
        else
        {
            const new_array = onSort(sort)
    
            setSearchArray(data_array)
            setItemDisplay(new_array.slice(length*(page-1), length*page));
        }
        
    },[length, page, search, sort])


    const onSearch = (value) => {
        if(value.length >= 3)
        {
            setSearch(value)
        }
        else
        {
            setSearch(null)
        }

        setPage(1)       
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
                    <Columns data={columns} sort={sort} setSort={setSort}/>
                    {
                        itemDisplay.map((element,index) => {
                            return <Row 
                                key={'line_'+index} 
                                index={index}
                                columns={columns} 
                                data={element} 
                                lengthMenu={lengthMenu}/>
                        })
                    }
                    <tr>
                        <th colSpan={columns.length}>
                            <div className='flex flex--between mt-1'>
                                <div>
                                    Showing {((length*(page-1)) + 1)} to {length*page < searchArray.length ? length*page : searchArray.length} of {searchArray.length} entries
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

DataTable.propTypes = {
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        data: PropTypes.string,
      })
    ).isRequired,
    data: PropTypes.array.isRequired,
    lengthMenu: PropTypes.array
}