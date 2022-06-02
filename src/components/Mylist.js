import React from 'react';
import {Row, Col} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import {DeleteOutlined  } from '@ant-design/icons';
import { removeTodo } from '../redux/action/action';

const Mylist = () => {
    const data = useSelector(state => state.todo);
    const dispatch = useDispatch();
    return (
        <Row className="todo_list">
        <h1 className="todo_list_header">My List: </h1>
        <Row className="todo_list_item">
            <Col span={6}>Title</Col>
            <Col span={8}>Description</Col>
            <Col span={4}> Status</Col>
            <Col span={4}> Date</Col>
            <Col span={2}> </Col>
        </Row>
        {  data.map(item => {
            return(
            <Row key={item.id} className="todo_list_item">
                <Col span={6}>{item.title}</Col>
                <Col span={8}>{item.description}</Col>
                <Col span={4}> {item.status}</Col>
                <Col span={4}> {item.date}</Col>
                <Col span={2} onClick={() => dispatch(removeTodo(item.id))}> <DeleteOutlined /> </Col>
            </Row>
            )
        })
        }
    </Row>
    )
}

export default Mylist;