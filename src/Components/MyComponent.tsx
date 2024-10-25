import { useContext } from 'react';
import { MyContext } from './context';

function MyComponent() {
    const {value, setValue} = useContext(MyContext);
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={() => setValue('Hello, world!')}>
                Click me
            </button>
        </div>
    )
}
export default MyComponent;