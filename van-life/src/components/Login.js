import React from "react"
import {
  useLocation,
  Form,
  useActionData,
  useNavigation,
} from "react-router-dom"
import { loginUser } from "../Api"

// import { useNavigate } from "react-router-dom"
export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")
  try {
    const data = await loginUser({ email, password })
    localStorage.setItem("login", true)
    return (window.location.href = "/host")
  } catch (err) {
    return err.message
  }
}

export default function Login() {
  const message = useLocation().state
  const error = useActionData()
  const navigate = useNavigation()
  // const [status, setStatus] = React.useState("idle")
  // const [error, setError] = React.useState(null)
  // const [loginFormData, setLoginFormData] = React.useState({
  //   email: "",
  //   password: "",
  // })

  // function handleSubmit(e) {
  //   e.preventDefault()
  //   setStatus("submitting")
  //   setError(null)
  //   loginUser(loginFormData)
  //     .then((data) => console.log(data))
  //     .catch((err) => setError(err))
  //     .finally(() => {
  //       setStatus("idle")
  //     })
  // }

  // function handleChange(e) {
  //   const { name, value } = e.target
  //   setLoginFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }))
  // }

  return (
    <div className="login-container">
      {message && <h2>{message}</h2>}
      {error && <h2>{error}</h2>}
      <h1>Sign in to your account</h1>
      <Form method="post" className="login-form" replace>
        <input
          name="email"
          // onChange={handleChange}
          type="email"
          placeholder="Email address"
          // value={loginFormData.email}
        />
        <input
          name="password"
          // onChange={handleChange}
          type="password"
          placeholder="Password"
          // value={loginFormData.password}
        />
        <button disabled={navigate.state === "submitting"}>
          {navigate.state === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </Form>
    </div>
  )
}
