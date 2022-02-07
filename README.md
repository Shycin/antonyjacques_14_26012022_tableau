# DataTable component
This is a light React component replace the current [JQuery DataTable](https://datatables.net/) with minimun functionnality but better performance

## Installation
Use the package manager [shycin-table-react](https://www.npmjs.com/package/shycin-table-react) to install DataTable component.

Run the following command:
```bash
npm install shycin-table-react
```

## Usage
Example : 
```javascript
import DataTable from 'shycin-table-react'

function App() {
    return (
        <div className="App">
            <DataTable 
                columns={[
                    { title: 'First Name', data: 'firstName' },
                    { title: 'Last Name', data: 'lastName' }
                ]} 
                data={[
                    {"firstName": "roger","lastName": "smith"},
                    {"firstName": "carla","lastName": "johns"}
                ]} 
                lengthMenu={[10,25,50,100]}
            />
        </div>
    );
}

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
