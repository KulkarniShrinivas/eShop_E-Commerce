// creating context api using Hook in react createContext
//later import in app.js 

import { createContext, useState } from "react";


export const DataContext = createContext(null);

//create compnent

const DataProvider = ({ children }) => {

    const[ account, setAccount] = useState('');

    return (
        <DataContext.Provider value={{ 
            account, 
            setAccount 
            }}>
                { children }
        </DataContext.Provider>
    )
}


export default DataProvider;