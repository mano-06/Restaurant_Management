import style from './styles/Login.module.css';
export default function Login(){
    return(
        <form action="/" className={style.login}>
            <h1>Login</h1>
            <label for="user" id="user">Username</label>
            <input type="text" />
            <label for="pass" id="pass">Password</label>
            <input type="password"/>
            <button type="submit">Login</button>
        </form>
    );
}