import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext({});

export const AppWrapper = ({ children }) => {
    const [contextstate, setcontextstate] = useState('i am from context')

    return <AppContext.Provider value={{ contextstate }}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext)
}



