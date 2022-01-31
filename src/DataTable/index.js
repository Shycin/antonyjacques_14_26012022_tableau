import DataTable from "./DataTable";

import { ContextPageContextProvider } from './context/pageContext'
import { ContextLengthPageContextContextProvider } from './context/lengthPageContext'

const App = function(props){
    return (
        <ContextPageContextProvider>
            <ContextLengthPageContextContextProvider>
                {
                    <DataTable {...props} />
                }
            </ContextLengthPageContextContextProvider>
        </ContextPageContextProvider>
    )
}

export default App