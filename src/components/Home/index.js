// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'

const Home = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <>
      <Header />
      <div className="home-container">
        <h1>Home Route</h1>
        <button type="button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </>
  )
}

export default withRouter(Home)
