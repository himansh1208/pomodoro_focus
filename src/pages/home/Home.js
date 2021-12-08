import React from 'react'
import AboutUs from '../../component/AboutUs'
import TabBox from '../../component/TabBox'

const Home = (props) => {
  return (
    <div>
    <div className="container-fluid p-0">
      <div className="timer-sec pomo-bg">
        <div className="tabbable-responsive tabbable-position">
          <TabBox />
        </div>
      </div>
    </div>
      <AboutUs />
    </div>
  )
}

export default Home
