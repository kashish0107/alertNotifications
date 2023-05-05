import {GrFormClose} from 'react-icons/gr'

import './index.css'

// Write your code here

const Notification = props => {
  const {children} = props

  return (
    <div className="notification-con">
      {children}
      <GrFormClose className="close-icon" />
    </div>
  )
}

export default Notification
