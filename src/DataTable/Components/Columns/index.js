import {order_up, order_down} from './assets/svg'
import './assets/index.css'

const Columns = function(props){

    const {data, sort, setSort} = props

    return (
        <tr className="columns">
            {
                data.map((element,index) => {
                    return (
                        <th key={'column_'+index}>
                            <div className="column">
                                <div className='column__title'>{element.title}</div>
                                <div className='column__order' 
                                    onClick={(e) => 
                                        sort.key === element.data 
                                        ? sort.direction === 1 
                                            ? setSort({...sort, direction: -1 }) 
                                            : setSort({...sort, key: null })
                                        : setSort({...sort,  key: element.data, direction: 1 })
                                    }>
                                    { (sort.key === element.data && sort.direction === 1) || (sort.key !== element.data) ? <div className='column__order__item order_up'>{order_up}</div> : ''}
                                    { (sort.key === element.data && sort.direction === -1) || (sort.key !== element.data) ? <div className='column__order__item order_down'>{order_down}</div> : ''}
                                </div>
                            </div>   
                        </th>
                    )
                })
            }
        </tr>
    )
}
export default Columns