import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTodoList } from "../redux/actions/GetTodoList";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";

const TodoTable = ({ color }) => {
  const TaskList = useSelector((state) => state.getTodoReducer.taskList);

  const [flag, setFlag] = useState("Todo");
  const [modal, setModal] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    total: "",
    completed: 0,
  });
  const [numErr, setNumErr] = useState("");
  const [nameErr, setNameErr] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setFormValues({
      name: "",
      total: "",
      completed: 0,
    });
    setNumErr("");
    setNameErr("");
  }, [modal]);

  useEffect(() => {
    dispatch(getTodoList(flag));
  }, [flag]);

  const handleClick = () => {
    setModal(true);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const handleNameChange = (e) => {
    setNameErr("");
    setFormValues({ ...formValues, name: e.target.value });
  };

  const handleNumberChange = (e) => {
    if (e.target.value > 0) {
      setFormValues({ ...formValues, total: Math.abs(e.target.value) });
      setNumErr("");
    } else if (e.target.value === "") {
      setNumErr("");
    } else {
      setNumErr("Please Enter a valid number !");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let temp = formValues;
    let taskName = true;
    TaskList.map((item) => {
      if (item.name === temp.name) {
        setNameErr(`! ${flag} with this name already exists.`);
        taskName = false;
      }
    });
    if (taskName === true) {
      TaskList.push(temp);
      setModal(false);
      setFormValues({
        name: "",
        total: "",
        completed: 0,
      });
      setNameErr("");
    }
  };

  return (
    <div>
      <div className="tabbable-responsive tabbable-position tabbable-position-nxt">
        <div className="tabbable">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <Link
                className="nav-link active"
                style={{ color }}
                data-toggle="tab"
                to=""
                onClick={() => setFlag("Todo")}
              >
                Todos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color }}
                data-toggle="tab"
                to=""
                onClick={() => setFlag("Project")}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color }}
                data-toggle="tab"
                to=""
                onClick={() => setFlag("History")}
              >
                History
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="tab-content">
        <div className="tab-pane active" id="todos1">
          {TaskList.map((item, index) => {
            return (
              <div
                key={index}
                className="row align-items-center todo-box  "
                style={{
                  color,
                  borderLeft: `${index === 0 ? `6px solid ${color}` : ""}`,
                }}
              >
                <div className="col-md-9 col-sm-9 col-9">
                  <label className="checkbox-main d-flex align-items-center">
                    <input name={index} type="checkbox" style={{ color }} />
                    <span
                      className={`checkmark ${
                        color === "#024A46" ? "checkmark-green" : ""
                      }`}
                    ></span>
                    <h6>{item.name}</h6>
                  </label>
                </div>
                <div className="col-md-3 col-sm-3 col-3 text-right ">
                  <h6>
                    {item.completed} / {item.total}
                  </h6>
                </div>
              </div>
            );
          })}
          <Modal
            isOpen={modal}
            onRequestClose={() => setModal(false)}
            style={customStyles}
            ariaHideApp={false}
          >
            <form onSubmit={(e) => handleSubmit(e)}>
              <h1 className="modal-title" style={{ color }}>
                Add {flag}
              </h1>
              <div className="px-py-2">
                <input
                  name="Task Name"
                  type="text"
                  className="input mb-3"
                  placeholder="Task Name"
                  onChange={(e) => handleNameChange(e)}
                  value={formValues.name}
                  required
                />
                <div className="d-flex justify-content-center mb-3">
                  <span style={{ color: "red" }}>{nameErr}</span>
                </div>
              </div>
              <div>
                <input
                  name="Total Task"
                  type="number"
                  className=" input mb-4"
                  placeholder="Total Task"
                  onChange={(e) => handleNumberChange(e)}
                  value={formValues.total}
                  min="1"
                  required
                />
                <div className="d-flex justify-content-center mb-3">
                  <span style={{ color: "red" }}>{numErr}</span>
                </div>
              </div>
              <div className="mb-2" style={{ display: "flex" }}>
                <button
                  className="btn rounded mr-2"
                  style={{ backgroundColor: "white", color }}
                  onClick={() => setModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="btn rounded text-white"
                  style={{ backgroundColor: color }}
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </Modal>
          <div className="d-flex justify-content-center">
            <button
              className="btn rounded text-white mb-4"
              style={{ backgroundColor: color }}
              onClick={() => handleClick()}
            >
              Add {flag}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TodoTable;
