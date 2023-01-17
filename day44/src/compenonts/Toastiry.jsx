import { ToastContainer, toast } from 'react-toastify';

export default function Toastiry() {
    const notify = () => toast("saved!")
    return (
        <div>
                <button onClick={notify}>Save</button>
                <ToastContainer/>
        </div>
    )
}