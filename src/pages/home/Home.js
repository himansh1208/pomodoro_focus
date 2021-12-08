import React from 'react'
import ToDoTable from "../../components/toDoTable"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Home = (props) => {
  return (
    <div>
      <div className="container-fluid p-0">
        <div className="timer-sec pomo-bg">
          <div className="tabbable-responsive tabbable-position">
          </div>
          <div className="tab-content">
            <div className="tab-pane active" id="pomodoro">
              <div className="d-md-flex d-block align-items-center justify-content-center main-width">

                <div className="skills_box">
                  <div className="row flex-wrap-no mx-0">
                    <div className="col text-center d-flex justify-content-center">
                      <div className="round-skills">
                        <CircularProgressbar
                          value={60}
                          text={`18:55`}
                          styles={buildStyles({
                            textColor: "#02044a",
                            pathColor: "#02044a",
                          })
                          }
                          strokeWidth={4}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex d-md-block btns-pr">
                  <a href="#" className="btn rounded text-white mb-4">Resume</a>
                  <a href="#" className="btn rounded bg-white">Reset</a>
                </div>
              </div>

              
              <ToDoTable />
              
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
