import React, {useState} from "react"
import { useLocation, useNavigate } from "react-router-dom"
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
        console.log("A", event.target.value)
        setLoginFormData(prevData => {
           return {
                ...prevData,
                [name]: value
            }
        })
    }

    return(
        <div className="login-container">
            conditional Sign in first
            <h1>Sign into your account</h1>

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