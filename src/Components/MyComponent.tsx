import { useContext, useState } from 'react';
import {message, MyContext} from './context';
import CryptoJS from 'crypto-js';
import SeeTheMessage from './seeTheMessage';
import EditTheMessage from './editTheMessage';

function MyComponent() {
    const secret_key = 'laclesecrete'
    const {value, setValue} = useContext(MyContext);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [password, setPassword] = useState("");
    const [passwordGiven, setPasswordGiven] = useState(false);
    const [resetKey,setResetKey] = useState(0);

    return (
        <div>
            <h1>Journal intime</h1>
            {
                !passwordGiven && <>
                <div>
                <input type="password" onChange={(event) => setPassword(event.target.value)}
                    placeholder="password">
                    </input>
                    <button onClick={() => {
                        setPasswordGiven(true)
                        setPassword(CryptoJS.AES.encrypt(password, secret_key).toString())
                    }}>Set the password</button>
                </div>
                </>
            }
            {
                value.map((val, index) => (
                    <div key={index}>{val.title}

                        <SeeTheMessage key={resetKey} content={val.content} password={password}/>

                        <EditTheMessage t={title} c={content} password={password} value={value} setValue={setValue} resetKey={resetKey} setResetKey={setResetKey} index={index}/>
                        {/* <button onClick={()=> {
                            setResetKey(resetKey + 1);
                            const newTitle = prompt("enter new title", val.title) as string;
                            const newContent = prompt("enter new content", val.content) as string;
                            let updatedValue = [...value];
                            updatedValue[index] = {title: newTitle, content: newContent};
                            setValue(updatedValue);
                        }}>edit</button> */}


                        <button onClick={() => {
                            setValue(value.filter((_, i) => i !== index))
                        }}>delete</button>
                    </div>
                ))
            }
            {
                passwordGiven && <>
                <div>
                    <input type="text" onChange={(event) => setTitle(event.target.value)}
                        placeholder="title">
                    </input>
                    <input type="text" onChange={(event) => setContent(event.target.value)}
                        placeholder="content">
                    </input>
                    <button onClick={() => {
                        setValue([...value, {title: title, content: CryptoJS.AES.encrypt(content, secret_key).toString()}])
                    }}>ajoute</button>
                </div>
                </>
            }
        </div>
    )
}

export default MyComponent;