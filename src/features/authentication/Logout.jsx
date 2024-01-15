
import { useLogout } from "./useLogout"

const LogoutButton = () => {
  const {logout, isLoading} = useLogout()


  return (
    <button onClick={logout} className="btn-auth" disabled={isLoading}>
    Logout
    </button>
  )
}

export default LogoutButton