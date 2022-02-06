const Columns = function(props){

    const {data} = props

    return (
        <tr className="column">
            {
                data.map((element,index) => {
                    return <th key={'column_'+index}>{element.title}</th>
                })
            }
        </tr>
    )
}
export default Columns