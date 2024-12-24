import './Login.css'


export default function Login(){
    return(
        <form type="submit">
            <label>
                Username:
                <input type="text" />
            </label>
            <br />
            <label>
                Password  :
                <input type="password"/>
            </label>
        </form>
    );
}