export default function Register() {
    return(
        <div>
            <h1>it's login page</h1>
            <form action="">
                <label htmlFor="email">email:</label>
                <input type="text" name="email" /><br />
                <label htmlFor="lastname">Lastname</label>
                <input type="text" name="lastname"/><br />
                <label htmlFor="password" name="password">password</label>
                <input type="password" />
                <label htmlFor="confirm" name="confirm">Confirm password</label>
                <input type="password" />
                <button>
                    Register
                </button>
            </form>
        </div>
    )
}