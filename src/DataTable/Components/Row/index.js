const Row = function(props){
    const {data, columns, autoWidth, index, page = 1} = props

    const re_order_Object = function() {

        var array_order = []

        if(!Array.isArray(data) && typeof data === "object")
        {
            Object.entries(data).forEach(entry => {
                const [key, value] = entry;
                
                const order_find = Array.from(columns).findIndex((each) => each.data === key)
                if(order_find > -1)
                {
                    array_order[order_find] = value
                }
                return array_order;
            });
        }
        else if(Array.isArray(data))
        {
            Array.from(data).forEach(entry => {
                array_order.push(entry)
            })
        }

        return array_order
    }

    return (
        <tr className="row">
            {
                Array.from(re_order_Object()).map((element,index) => {
                    var width = null
                    if(autoWidth) width = columns[index].width

                    const column_style = {
                        width,
                    };

                    if(element.display)
                    {
                        return <td key={'row_'+index} style={column_style}>{element.display}</td>
                    }

                    return <td key={'row_'+index} style={column_style}>{element}</td>
                })
            }
        </tr>
    )
}
export default Row