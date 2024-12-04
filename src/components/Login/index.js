// Write your code here
import './index.css'

const Login = props => {
  const {login} = props

  return (
    <button
      type="button"
      className="btn-login"
      onClick={login}
      data-testid="loginButton"
    >
      Login
    </button>
  )
}

export default Login
