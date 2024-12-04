// Write your code here

import './index.css'

const Logout = props => {
  const {logout} = props

  return (
    <button
      type="button"
      className="btn-logout"
      onClick={logout}
      data-testid="logoutButton"
    >
      Logout
    </button>
  )
}
export default Logout
