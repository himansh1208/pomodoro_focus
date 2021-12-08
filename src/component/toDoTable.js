import React,{useState} from "react";
import { TaskList } from "../helpers/data"
import { Link } from "react-router-dom";

const ToDoTable = ({color}) => {

const [flag,setflag] =useState("Todos")

    return (<>

        <div >
            <div
                className="tabbable-responsive tabbable-position tabbable-position-nxt"

            >
                <div className="tabbable">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <Link className="nav-link active" style={{color:color}} data-toggle="tab" to=""
                            onClick={()=>{setflag("Todos")}}>Todos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{color:color}} data-toggle="tab" to=""
                           onClick={()=>{setflag("Projects")}} >Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{color:color}} data-toggle="tab" to=""
                           onClick={()=>{setflag("History")}} >History</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="tab-content"  >
                <div className="tab-pane active"  id="todos1">
                    {
                        (flag=="Todos"?TaskList.todos:flag=="Projects"?TaskList.projects:TaskList.history).map((item,index) => {
                            return <div className="row align-items-center todo-box " style={{color:color,borderLeft:`6px solid ${color}`}} >
                                <div className="col-md-9 col-sm-9 col-9" >
                                    <label className="checkbox-main d-flex align-items-center">
                                        <input name={item.index} type="checkbox" style={{color}} />
                                        <span className="checkmark"  ></span>
                                        <h6>{item.name}</h6>
                                    </label>
                                </div>
                                <div className="col-md-3 col-sm-3 col-3 text-right ">
                                    <h6>{item.completed} / {item.total}</h6>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>

        </div>



    </>)
}
export default ToDoTable