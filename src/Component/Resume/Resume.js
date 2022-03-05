import React from 'react'
import Card from './Card'
import ResumeApi from './ResumeApi'
import'./Resume.css'
function Resume() {
  return (
    <>
   <section className="Resume" id="resume">
      <div className="container top">
        <div className="heading text-center">
         <h4>7+ YEARS OF EXPERIENCE</h4>
         <h1>My Resume</h1>
        </div>

        <div className="content-section mtop d_flex">
            <div className="left">
                <div className="heading">
                    <h4>2018-2023</h4>
                    <h1>Education Quality</h1>
                </div>

                <div className="content">
                    {ResumeApi.map((val,id) => {
                        if(val.category === "education"){
                            return<Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc}/>
                        }
                    })}
            
                </div>
            </div>

            <div className="left">
                <div className="heading">
                    <h4>2021-2022</h4>
                    <h1>Job Experience</h1>
                </div>

                <div className="content">
                    {ResumeApi.map((val,id) => {
                        if(val.category == "experience"){
                            return<Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc}/>
                        }
                    })}
            
                </div>
            </div>
        </div>
      </div>
   </section>
    </>
  )
}

export default Resume