import React, { useEffect, useState } from "react"
import './App.css';
import { AiFillCaretRight } from "react-icons/ai"
import 'bootstrap/dist/css/bootstrap.min.css';

const url = "https://course-api.com/react-tabs-project";
function App() {

  const [data, setData] = useState([])
  const [isActive, setIsActive] = useState(0)

  async function myData() {
    const FETCHED_DATA = await fetch(url);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON)
    setData(FETCHED_JSON)
  }
  useEffect(() => {
    myData()
  }, [])

  return (
    <section className="container">
      <h1 className="title">Experience</h1>
      <div className="job">

        {
          data.map((el, inx) => {
            return (<div key={inx} className="company-tab" onClick={() =>{ 
              console.log("hello")
              setIsActive(inx)}}><h4><a>{el.company}</a></h4></div>)
          })
        }

        {
          data.map((element, inx) => {
            return (
              <div key={inx} className={isActive === inx ? "company-content" : "d-none"}>
                <h2 className="job-title">{element.title}</h2>
                <p className="company-name">John</p>
                <p className="date">{element.data}</p>
                {
                  element.duties.map((duty, inx) => {
                    return (
                      <div className="text">
                        <AiFillCaretRight />
                        <p>{duty}</p>
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }

      </div>
    </section>
  );
}

export default App;
