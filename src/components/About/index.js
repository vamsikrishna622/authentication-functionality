// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'

import './index.css'

const About = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <>
      <Header />
      <div className="about-container">
        <h1>About Route</h1>
        <button type="button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </>
  )
}

export default withRouter(About)
