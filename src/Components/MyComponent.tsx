import { useContext, useState } from 'react';
import {message, MyContext} from './context';

function MyComponent() {
    const {value, setValue} = useContext(MyContext);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <div>
            <h1>Journal intime</h1>
            {
                value.map((val, index) => (
                    <div key={index}>{val.title}

                        <button onClick={()=> {
                            const newTitle = prompt("enter new title", val.title) as string;
                            const newContent = prompt("enter new content", val.content) as string;
                            let updatedValue = [...value];
                            updatedValue[index] = {title: newTitle, content: newContent};
                            setValue(updatedValue);
                        }}>edit</button>


                        <button onClick={() => {
                            setValue(value.filter((_, i) => i !== index))
                        }}>delete</button>
                    </div>
                ))
            }
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}
                   placeholder="title"></input>
            <input type="text" value={content} onChange={(event) => setContent(event.target.value)}
                   placeholder="content"></input>
            <button onClick={() => {
                if (title !== "" && content !== "") {
                    setValue([...value, {title: title, content: content}])
                }
                setTitle("")
                setContent("")
            }}>
                ajoute
            </button>
        </div>
    )
}

export default MyComponent;