import { Provider } from "./Components/context";
import MyComponent from "./Components/MyComponent";

function App() {
    return (
        <div>
            <Provider>
                <MyComponent />
            </Provider>
        </div>
    );
}

export default App;
