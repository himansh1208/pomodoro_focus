import React from 'react'

const AboutUs = () => {
  return (
    <div className="feature-bg">
      <div className="feature-sec mt-5 main-width">
        <div className="row">
          <div className="col">
            <div className="head mb-5">
              <h3>What is this</h3>
            </div>  
            <p className="mb-5 pb-2">
              The <strong>Pomodoro Technique</strong> was created by Francesco Cirillo
              for a more productive way to work and study. The
              technique uses a timer to break down work into
              intervals, traditionally 25 minutes in length, separated
              by short breaks. Each interval is known as a pomodoro,
              from the Italian word for 'tomato', after the
              tomato-shaped kitchen timer that Cirillo used as a
              university student.
            </p>
            <div className="head mb-5">
              <h3>Features</h3>
            </div>
            <ul className="list-unstyled pl-2 mb-0">
              <li className="pl-2 pb-2 pt-2">
                <strong>Responsive design</strong> that works with desktop and mobile
              </li>
              <li className="pl-2 pb-2 pt-2">
                <strong>Color transition</strong> to switch moods between work time and rest time
              </li>
              <li className="pl-2 pb-2 pt-2">
                <strong>Audio notification</strong> at the end of a timer period
              </li>
              <li className="pl-2 pb-2 pt-2">
                <strong>Customizable timer</strong> intervals to suit your preference
              </li>
              <li className="pl-2 pb-2 pt-2">
                <strong>Charts</strong> with stats and progress
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default AboutUs
