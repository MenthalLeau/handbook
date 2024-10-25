import {ReactNode, createContext, useState } from 'react';

export const MyContext = createContext<{
    value: string,
    setValue: (val: string) => void,
}>({
    value: "",
    setValue:(_) => _,
});

export function Provider({ children }: { children: ReactNode }) {
    const [value, setValue] = useState("")
    return <MyContext.Provider value={{ value, setValue }}>{children}</MyContext.Provider>
}

export default MyContext;