import React from "react";
import { TaskList } from "../helpers/data"
import { Link } from "react-router-dom";

const ToDoTable = () => {

    return (<>

        <div >
            <div
                className="tabbable-responsive tabbable-position tabbable-position-nxt"

            >
                <div className="tabbable">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <Link className="nav-link active" data-toggle="tab" to=""
                            >Todos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" data-toggle="tab" to=""
                            >Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" data-toggle="tab" to=""
                            >History</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="tab-content" >
                <div className="tab-pane active" id="todos1">
                    {
                        TaskList.todos.map((item) => {
                            return <div className="row align-items-center todo-box active">
                                <div className="col-md-9 col-sm-9 col-9">
                                    <label className="checkbox-main d-flex align-items-center">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
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