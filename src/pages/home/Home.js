import React from 'react'
import ToDoTable from "../../component/toDoTable"
import 'react-circular-progressbar/dist/styles.css';
import AboutUs from '../../component/AboutUs'
import TabBox from '../../component/TabBox'
import { Link } from 'react-router-dom';

const Home = ({color}) => {
  return (
    <div>
      <div className="container-fluid p-0">
        <div className="timer-sec pomo-bg">
          <div className="tabbable-responsive tabbable-position">
            <div className="container-fluid p-5">
              <div className="timer-sec pomo-bg">
                <div className="tabbable-responsive tabbable-position">
                  <TabBox color={color} />
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
                        <div className="row flex-wrap-no mx-0">
                          <div className="col text-center d-flex justify-content-center">
                            <div className="round-skills" >
                              <div className="progress blue" >
                                <span className="progress-left" >
                                  <span className="progress-bar" ></span>
                                </span>
                                <span className="progress-right" style={{backgroundColor:color}}>
                                  <span 
                                  // className="progress-bar"
                                  
                                  style={{backgroundColor:color}}></span>
                                </span>
                                <div className="progress-value" style={{color:color}}>
                                  <div className="">
                                    <span>18:55</span>
                                    <p style={{color:color}}>WORKING ON</p>
                                    <strong style={{color:color}}>Laundry</strong>
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
                  <Link to="" className="btn rounded text-white mb-4" style={{backgroundColor:color}}>Resume</Link>
                  <Link to="" className="btn rounded bg-white" style={{color:color}} >Reset</Link>
                </div>
              </div>


              <ToDoTable color={color} />

            </div>

          </div>
        </div>
      </div>


      <AboutUs color={color}/>
    </div>
  )
}

export default Home
