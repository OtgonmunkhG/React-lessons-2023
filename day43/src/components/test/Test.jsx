import { useState } from "react"
export default function TestSomeFeedBack() {
    const [text, setText] = useState([]);
    const [isSeding, setIsSending] = useState(false);
    const [sent, setSent] = useState(false);
    async function handleClick(event) {
        console.log(event)
        event.preventDefault();
        setIsSending(true);
        await setMessage(text)
        setIsSending(false)
        setSent(true)

    }
    if(sent) {
            return <h1>Thank's for feedback</h1>
    }
    
    function setMessage(){
        return new Promise(resolve => {
            setTimeout(resolve, 2000)
        })
    }



    return(
        <div>
            <h1>Smile you are amazing</h1>
            <form action="" onSubmit={handleClick}>
            <textarea name="feedback" id="" value={text} cols="30" onChange={e => setText(e.target.value)} disabled={isSeding} rows="10"></textarea> <br /> <br />
            <button>Send</button>
            {isSeding && <p>Sending...</p>}
            </form>
        </div>
    )
}