import './Login.css';
export default function Login(){
    return(
        <form action="/">
            <label for="user" id="user">Username</label>
            <input type="text" />
            <label for="pass" id="pass">Password</label>
            <input type="password"/>
            <button type="submit">Login</button>
        </form>
    );
}