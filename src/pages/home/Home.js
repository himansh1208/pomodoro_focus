import React from 'react'
import ToDoTable from "../../component/toDoTable"
import 'react-circular-progressbar/dist/styles.css';
import AboutUs from '../../component/AboutUs'
import TabBox from '../../component/TabBox'

const Home = (props) => {
  return (
    <div>
      <div className="container-fluid p-0">
        <div className="timer-sec pomo-bg">
          <div className="tabbable-responsive tabbable-position">
            <div className="container-fluid p-5">
              <div className="timer-sec pomo-bg">
                <div className="tabbable-responsive tabbable-position">
                  <TabBox />
                </div>
              </div>
            </div>
          </div>

          <div className="tab-content">
            <div className="tab-pane active" id="pomodoro">
              <div className="d-md-flex d-block align-items-center justify-content-center main-width">

                <div className="skills_box">
                  <div className="row flex-wrap-no mx-0">
                    <div className="col text-center d-flex justify-content-center">
                      <div className="round-skills">
                        <div class="row flex-wrap-no mx-0">
                          <div class="col text-center d-flex justify-content-center">
                            <div class="round-skills">
                              <div class="progress blue">
                                <span class="progress-left">
                                  <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                  <span class="progress-bar"></span>
                                </span>
                                <div class="progress-value">
                                  <div class="">
                                    <span>18:55</span>
                                    <p>WORKING ON</p>
                                    <strong>Laundry</strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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


      <AboutUs />
    </div>
  )
}

export default Home
