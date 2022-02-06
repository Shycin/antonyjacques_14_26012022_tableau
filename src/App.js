import React from "react";
import ReactDOM from "react-dom";

import DataTable from './DataTable'
import { data, column } from './__test__/data.js'

const App = function() {
    return (
        <div>
            <DataTable data={data} columns={column}/>
        </div>
    )
}

export default App