import {AiFillCheckCircle} from 'react-icons/ai'

import {RiErrorWarningFill} from 'react-icons/ri'

import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

// Write your code here

const AlertNotifications = () => (
  <div className="main-con">
    <h1>Alert Notifications</h1>

    <Notification>
      <AiFillCheckCircle className="icon-size success" />
      <div className="text-con">
        <h1>Success</h1>
        <p>You can access all the files in the folder</p>
      </div>
    </Notification>

    <Notification>
      <RiErrorWarningFill className="icon-size danger" />
      <div className="text-con">
        <h1>Error</h1>
        <p>Sorry, you are not authorized to have access to delete the file</p>
      </div>
    </Notification>

    <Notification>
      <MdWarning className="icon-size warning" />
      <div className="text-con">
        <h1>Warning</h1>
        <p>Viewers of this file can see comments and suggestions</p>
      </div>
    </Notification>

    <Notification>
      <MdInfo className="icon-size info" />
      <div className="text-con">
        <h1>Info</h1>
        <p>Anyone on the internet can view these files</p>
      </div>
    </Notification>
  </div>
)

export default AlertNotifications
