import React, { Component } from "react";
import './styles.css'

class Appy extends Component {
  constructor() {
    super();
    this.state = {
      tasks:[],
      currTask: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      currTask: e.target.value,
    });
  };

  onSubmit = (e) => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        { task: this.state.currTask, id: this.state.tasks.length+1},
      ],
      currTask: "",
    });
  };

  onDelete = (id) => {
    var newArr = this.state.tasks.filter((taskObj) => {
      return taskObj.id !== id;
    });

    this.setState({ tasks: [...newArr] });
  };

  render() {
    return (
      <>

      
      <div >
      <div>
        <h3 style={{textAlign:"center",marginTop:"20px"}}>Basic To do App Using ReactJs</h3>
      </div>
      <div className="inputClass">
      
      <input
        style={{textAlign:"center"}}
          type="text"
          placeholder="what is the task"
          value={this.state.currTask}
          onChange={this.handleChange}
          
        ></input>
        <button onClick={this.onSubmit} className='btn btn-success'>Add Task</button>


      </div>
        {this.state.tasks.map((objTask) => (
    
          <ul className="ulClass">
          <span>
            <li>
              <span key={objTask.id}>
                {<p>{objTask.task}</p>}
                <button onClick={() => this.onDelete(objTask.id)} className='btn btn-danger'>Delete</button>
             </span>
            </li>
            </span>
          </ul>
       
        ))}
      </div>
      </>
    );
  }
}
export default Appy;
