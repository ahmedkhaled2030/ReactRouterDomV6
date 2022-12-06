import React from 'react'
import { Link, Outlet  ,useNavigate} from 'react-router-dom'

const UserRoot = () => {
    const userId = 1;
    const navigate = useNavigate()
    const onClickHandler = () => {
        navigate("/" , {replace:true}) //replace history => that remove the link from the history stack
    }
  return (
      <div className='wrapper2'>
          <div className='nav'>
              <ul>
                  <li>
                      <Link to={`${userId}/edit`}>edit</Link>
                  </li>
                  <li>
                      <Link to="info">info</Link>
                  </li>
                  <li onClick={onClickHandler}>
                      logout
                  </li>
              </ul>
          </div>
          <div className='content'>
              <Outlet />
          </div>
    </div>
  )
}

export default UserRoot