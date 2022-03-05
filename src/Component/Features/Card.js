import React from 'react'

function Card(props) {
  return (
    <>

<div className="box btn-shadow">
                    <img src={props.image} alt="" />
                    <h2>{props.title}</h2>
                    <p>{props.desc}</p>
                    <a href="">
                        <i className='fas fa-arrow-right'></i>
                    </a>
                </div>
    </>
  )
}

export default Card