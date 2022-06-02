import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { Layout, Row, Col } from 'antd';
import './css/confirmation.css'

const ConfirmationPage = () => {
  const data = useSelector(state=>state.todo)
  const { Header } = Layout;
  console.log("data", data)
  return (
    <Header className='header'>
      <Link to="/"><h1>My TODO List</h1></Link>
      <div className='todolist'> 
        <Row className='list_header'>
          <Col span={6}><b>Title</b></Col>
          <Col span={12}><b>Description</b></Col>
          <Col span={3}><b>Status</b></Col>
          <Col span={3}><b>Due Date</b></Col>
        </Row>
        <div className='list_body'>
          {  data.map(item => {
            return(
            <Row key={item.id} className="list_content">
                <Col span={6}>{item.title}</Col>
                <Col span={12}>{item.description}</Col>
                <Col span={3}> {item.status}</Col>
                <Col span={3}> {item.date}</Col>
            </Row>
            )
          })
          }
        </div>
       
      </div>
    </Header>
  )
}

export default ConfirmationPage;