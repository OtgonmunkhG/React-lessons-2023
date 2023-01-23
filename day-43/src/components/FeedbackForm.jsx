import { useState } from "react";
export default function FeedbackForm() {
    const [ text, setText] = useState([]);
    const [isSending, setSending] = useState(false)
    const [isSend, setSent] = useState(false)
    async function  handleClick(event) {
      event.preventDefault();
      console.log(event);
      setSending(true)
      await setMessage(text)
      setSending(false)
      setSent(true)
    }
  
    if(isSend) {
      return <h1>Thank's for feedback</h1>
    }
  
  
    function setMessage() {
      return new Promise(resolve => {
        setTimeout(resolve, 2000)
      })
    }
  
    return (
      
      <div className="App">
       <form onSubmit={handleClick}>
        
        <h1>Day43</h1>
        <textarea value={text}
        disabled={isSending} 
        onChange={e => setText(e.target.value)}>
        </textarea><br></br>
        <button>Send</button>
        {isSending && <p>sending...</p>}
       </form>
      </div>
    )
}