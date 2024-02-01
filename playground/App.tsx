import React,{ useState } from "react"
import SeamLess from "../components/index"

const demo = Array.from({
  length: 10
}, (_, index) => index)

const App = () => {
  const [scrollOptions, setScrollOptions] = useState({
    hoverStop: true,
    step: 1,
  })
  const toggleIsHover = () => {
    setScrollOptions({
      ...scrollOptions,
      hoverStop: !scrollOptions.hoverStop
    })
  }

  const onChangeStep = (e) => {
    if (!e.target.value) return
    setScrollOptions({
      ...scrollOptions,
      step: e.target.value
    })
  }


  return (
    <div className="container" style={{display: "flex", gap: "10px"}}>
      <div className="option" style={{display: "flex", flexDirection: "column", gap: "8px"}}>
        <div className="row" style={{display: "flex", gap: "10px"}}>
          <div className="property">isHover: {`${scrollOptions.hoverStop}`}</div>
          <div className="setProperty">
            <button onClick={() => toggleIsHover()}> toggle isHover</button>
          </div>
        </div>
        <div className="row" style={{display: "flex", gap: "10px"}}>
          <div className="property">step:
            <input value={scrollOptions.step} onChange={onChangeStep}/>
          </div>
        </div>
      </div>
      <SeamLess {...scrollOptions} style={{height: "190px"}}>
        <div className="demoContainer">
          {
            demo.map((item, index) => <li key={index}>{item}{index}</li>)
          }
        </div>
      </SeamLess>
    </div>
  )
}


export default App
