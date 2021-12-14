import React, { useState, useEffect } from "react";
import "react-circular-progressbar/dist/styles.css";
import AboutUs from "../../component/AboutUs";
import TabBox from "../../component/TabBox";
import TodoTable from "../../component/TodoTable";
import { useTimer } from "react-timer-hook";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

const Home = ({ color }) => {
  const [stopwatchbtntxt, setStopwatchbtntxt] = useState("start");
  const [stop, setStop] = useState(false);
  const [activeTab, setActiveTab] = useState("pomodoro");
  const [timer, setTimer] = useState(1500);

  useEffect(() => {
    reset();
    setStopwatchbtntxt("start");
  }, [timer]);

  const time = new Date();
  time.setSeconds(time.getSeconds() + timer);

  let expiryTimestamp = time;

  const { seconds, minutes, start, pause, resume, restart } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => alert("!!! Your time has been expired"),
  });

  const startTimer = () => {
    if (stop === true) {
      resume();
    } else {
      start();
    }
    setStopwatchbtntxt("pause");
    setStop(false);
  };

  const reset = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + timer);
    restart(time);
    pause();
    setStop(true);
  };
  
  const percentage = minutes * 60 + seconds;

  return (
    <div>
      <div className="container-fluid p-0">
        <div className="timer-sec pomo-bg">
          <div className="tabbable-responsive tabbable-position">
            <div className="container-fluid p-5">
              <div className="timer-sec pomo-bg">
                <div className="tabbable-responsive tabbable-position">
                  <TabBox
                    color={color}
                    setActiveTab={setActiveTab}
                    setTimer={setTimer}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content">
            <div className="tab-pane active" id="pomodoro">
              <div className="d-md-flex d-block align-items-center justify-content-center main-width">
                <div className="skills_box">
                  <div className="row flex-wrap-no mx-0">
                    <div
                      className="col text-center d-flex justify-content-center"
                      style={{ fontWeight: "600" }}
                    >
                      <div
                        className="round-skills"
                        style={{
                          width: "90%",
                          marginTop: "30px",
                          marginBottom: "30px",
                        }}
                      >
                        <CircularProgressbarWithChildren
                          value={
                            timer === 1500
                              ? percentage / 15
                              : timer === 300
                              ? percentage / 3
                              : percentage / 9
                          }
                          text={`${minutes < 10 ? `0${minutes}` : minutes}:${
                            seconds < 10 ? `0${seconds}` : seconds
                          }`}
                          strokeWidth={4}
                          styles={buildStyles({
                            rotation: 0,
                            strokeLinecap: "butt",
                            textSize: "21px",
                            pathTransitionDuration: 1,
                            pathColor: `${color}`,
                            textColor: `${color}`,
                            trailColor: `rgb(2 4 74 / 12%)`,
                            backgroundColor: "white",
                          })}
                        >
                          <div style={{ marginTop: "100px" }}>
                            <p
                              style={{
                                color,
                                fontSize: "12px",
                                marginTop: "10px",
                                marginBottom: "0px",
                                fontWeight: "200",
                              }}
                            >
                              WORKING ON
                            </p>
                            <strong style={{ color, fontSize: "24px" }}>
                              Laundry
                            </strong>
                          </div>
                        </CircularProgressbarWithChildren>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex d-md-block btns-pr">
                  {stopwatchbtntxt === "start" ? (
                    <button
                      className="btn rounded text-white mb-4"
                      style={{ backgroundColor: color }}
                      onClick={() => startTimer()}
                    >
                      Start
                    </button>
                  ) : stopwatchbtntxt === "pause" ? (
                    <button
                      className="btn rounded text-white mb-4"
                      style={{ backgroundColor: color }}
                      onClick={() => {
                        pause();
                        setStopwatchbtntxt("resume");
                      }}
                    >
                      Pause
                    </button>
                  ) : stopwatchbtntxt === "resume" ? (
                    <button
                      className="btn rounded text-white mb-4"
                      style={{ backgroundColor: color }}
                      onClick={() => {
                        resume();
                        setStopwatchbtntxt("pause");
                      }}
                    >
                      Resume
                    </button>
                  ) : (
                    ""
                  )}
                  <button
                    className="btn rounded bg-white"
                    style={{ color }}
                    onClick={() => {
                      reset();
                      setStopwatchbtntxt("start");
                    }}
                  >
                    Reset
                  </button>
                </div>
              </div>
              <TodoTable color={color} />
            </div>
          </div>
        </div>
      </div>
      <AboutUs color={color} />
    </div>
  );
};

export default Home;
