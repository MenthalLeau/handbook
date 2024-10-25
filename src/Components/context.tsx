import {ReactNode, createContext, useState } from 'react';

export type message = {
    title: string,
    content: string
}

export const MyContext = createContext<{
    value: message[],
    setValue: (val: message[]) => void,
}>({
    value: [],
    setValue:(_) => _,
});

export function Provider({ children }: { children: ReactNode }) {
    const [value, setValue] = useState([] as message[]);
    return <MyContext.Provider value={{ value, setValue }}>{children}</MyContext.Provider>
}

export default MyContext;