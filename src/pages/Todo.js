import React, {useState} from "react";
import {useDispatch} from 'react-redux'
import {addTodo} from '../redux/action/action'
import  {Row,
        Col,
        Input,
        Button,
        DatePicker, 
        Space
        } from "antd"
import Mylist from "../components/Mylist";
import "./css/todo.css"
import Buttons  from "../components/Buttons";

function App() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [status, setStatus] = useState("")
  const [date, setDate] = useState("")
  const dispatch = useDispatch()
  const [isError, setIsError] = useState(false)

  const onChange = (date, dateString) => {
    setDate(dateString);

  };
  
  const addToList = () =>{
    console.log(desc.length)
    if(desc.length < 2 || title.length < 2){
        setIsError(true)
    }
    else{
        setIsError(false)
        dispatch(addTodo(title, desc, status, date), setDesc(""), setTitle(''))
    }
  }

  return (
    <div className="todo">
      <h1 className="todo_header">Todo List</h1>
      <Row className="todo_input" gutter={16}>
        <Col className="gutter-row" span={6}>
          <Input placeholder="Enter the title.." type="text" value={title} onChange={(e) => setTitle(e.target.value)}></Input>
        </Col>
        <Col className="gutter-row" span={12}>
          <Input placeholder="short description.." type = "text" value={desc} onChange={(e) => setDesc(e.target.value)}></Input>
        </Col>
        <Col className="gutter-row" span={2} className="todo_dropdown">
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="ToDo">ToDo</option>
            <option value="OnGoing">OnGoing</option>
            <option value="Stalled">Stalled</option>
            <option value="Done">Done</option>
          </select>
        </Col>
        <Col className="gutter-row" span={4}>
          <Space direction="vertical">
            <DatePicker onChange={onChange} />
          </Space>
        </Col>
        <div className={isError ? "error-message" : "hide-error-message"}>Please enter title and description of length greater than 2</div>
        <div style={{"width":"100%","display": "flex", "justifyContent": "flex-start", "alignItems":"flex-end"}}>
          <Button type="primary" onClick={addToList} className="todo_button">ADD todo</Button>
        </div>
        </Row>

        <Mylist />
        
        <Buttons />

    </div>
  );
}

export default App;
