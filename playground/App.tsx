import React,{ useState } from "react"
import SeamLess from "../components/index"

const demo = Array.from({
  length: 10
}, (_, index) => index)

const App = () =>
// const [scrollOptions, setScrollOptions] = useState({
//   isHover: true,
//   step: 1,
// })

  (
    <div className="container">
      <div className="option">
        <div className="row">
          <div className="property"></div>
          <div className="setProperty"></div>
        </div>
      </div>
      <SeamLess>
        <div className="demoContainer">
          {
            demo.map((item, index) => <li key={index}>{item}{index}</li>)
          }
        </div>
      </SeamLess>
    </div>
  )


export default App
