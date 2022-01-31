const Columns = function(props){

    const {data} = props

    return (
        <tr className="column">
            {
                Array.from(data).map((element,index) => {
                    return <th key={'column_'+index}>{element.data}</th>
                })
            }
        </tr>
    )
}
export default Columns