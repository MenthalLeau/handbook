import { useState } from "react"
import CryptoJS from 'crypto-js';

export default function EditTheMessage({ t, c, password, value, setValue, resetKey, setResetKey, index } : any) {
    const [editButton, setEditButton] = useState(false)
    const [passwordFound, setPasswordFound] = useState(false)
    const [passwordTest, setPasswordTest] = useState("")
    const [title, setTitle] = useState(t)
    const [content, setContent] = useState(CryptoJS.AES.decrypt(c, 'laclesecrete').toString(CryptoJS.enc.Utf8))

    return (
        <>
        {
            !editButton && !passwordFound && <button onClick={() => setEditButton(true)}>edit</button>
        }
        {
            editButton && !passwordFound && <>
                <input type="password" onChange={(event) => setPasswordTest(event.target.value)}
                    placeholder="password"></input>
                <button onClick={() => {
                    var testEncrpted = CryptoJS.AES.decrypt(password, 'laclesecrete').toString(CryptoJS.enc.Utf8)
                    if(testEncrpted === passwordTest) {
                        setPasswordFound(true)
                    }
                }}>Edit the message</button>
            </>
        }
        {
            editButton && passwordFound && <>
            <div>
                    <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}
                        placeholder="titleChange">
                    </input>
                    <input type="text" onChange={(event) => setContent(event.target.value)}
                        placeholder="contentChange">
                    </input>
                    <button onClick={() => {
                        setResetKey(resetKey + 1);
                        let updatedValue = [...value];
                        updatedValue[index] = {title: title, content: CryptoJS.AES.encrypt(content, 'laclesecrete').toString()};
                        setValue(updatedValue);
                        setEditButton(false)
                        setPasswordFound(false)
                    }}>editer</button>
                </div>
            </>
        }
        </>
    )
}