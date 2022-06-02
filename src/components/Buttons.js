import React from 'react';
import {Link} from 'react-router-dom'
import {Button} from 'antd'
import { removeAll } from '../redux/action/action';
import './buttons.css'
import {useDispatch} from 'react-redux'
const Buttons = () => {
  const dispatch = useDispatch()
  return (
    <div className='action'>
      <Button type = "danger" onClick={() => dispatch(removeAll())}> Clear All </Button>
      <Link type="primary" to="/confirmationPage"><Button type = "primary"> Submit </Button></Link>
    </div>
  )
}
export default Buttons;