import { useState, useEffect } from "react"
import CryptoJS from 'crypto-js';

export default function SeeTheMessage({ key, content, password } : any) {
    const [buttonView, setButtonView] = useState(false)
    const [passwordFound, setPasswordFound] = useState(false)
    const [passwordTest, setPasswordTest] = useState("")

    useEffect(() => {
    setButtonView(false)
    setPasswordFound(false)
    setPasswordTest("")
    }, [key])

    return (
        <>
        {
            !buttonView && !passwordFound && <button onClick={() => setButtonView(true)}>view</button>
        }
        {
            buttonView && !passwordFound && <>
                <input type="password" onChange={(event) => setPasswordTest(event.target.value)}
                    placeholder="password"></input>
                <button onClick={() => {
                    var testEncrpted = CryptoJS.AES.decrypt(password, 'laclesecrete').toString(CryptoJS.enc.Utf8)
                    if(testEncrpted === passwordTest) {
                        setPasswordFound(true)
                    }
                }}>See the message</button>
            </>
        }
        {
            passwordFound && <>
            {"    contient : " + CryptoJS.AES.decrypt(content, 'laclesecrete').toString(CryptoJS.enc.Utf8)}
            </>
        }
        </>
    )
}