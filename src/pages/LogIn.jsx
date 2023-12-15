import React, {useState} from "react"
import { useLocation, useNavigate, Link } from "react-router-dom"
import { loginUser } from "../api"

export default function Login() {
    const [loginFormData, setLoginFormData] = useState({email: "", password: ""})
    const [status, setStatus] = useState("idle")
    const [error, setError] = useState(null)

    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from || "/host";

    function handleSubmit(e){
        e.preventDefault()
        setStatus("submitting")
        loginUser(loginFormData)
            .then(data => {
                setError(null)
                localStorage.setItem("loggedin", true)
                navigate(from, {replace:true})
            })
            .catch(e => setError(e))
            .finally(()=> setStatus("idle"))

    }

    function handleChange(event){
        const {name,value} =  event.target
        setLoginFormData(prevData => {
           return {
                ...prevData,
                [name]: value
            }
        })
    }

    if(error){
        return (
            <>
                <h1>Error occured</h1>
                <Link to="/">Return home</Link>
            </>
        )
    }
    return(
        <div className="login-container">
            {
                location.state?.message &&
                <>
                    <h3 className="login-error">{location.state.message}</h3>
                    <p style={{fontSize: 20 + "px"}}>Try: user: b@b.com password: p123</p>
                </>
            }

            <h1>Log into your account</h1>

            <form onSubmit={handleSubmit}>
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    value = {loginFormData.email}
                    onChange = {handleChange}
                    />
                <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    value = {loginFormData.password}
                    onChange = {handleChange}
                    />

                <button disabled = {status === "submitting"}>
                    {status === "submitting"
                    ? "Logging In..."
                    : "Log In"}
                    </button>
            </form>
            
        </div>
    )
}