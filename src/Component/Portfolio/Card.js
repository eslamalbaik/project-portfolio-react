import React, {useState}from 'react'

function Card(props) {
const [modal, setModal] = useState(false)
const toggleModal = () =>{
    setModal(!modal)
}
  return (
      <>
       <div className="box btn-shadow">
           <div className="img">
               <img src={props.image} alt="" onClick={toggleModal} />
           </div>
           <div className="category d_flex">
               <span  onClick={toggleModal}>{props.category}</span>
               <label >
                   <i className="far fa-heart"></i>{props.totallike}
               </label>
           </div>
           <div className="title">
               <h2  onClick={toggleModal}>{props.title}   </h2>
               <a href="#popup" className='arrow'  onClick={toggleModal}>
               <i className="fas fa-arrow-right"></i>
               </a>
            
           </div>
       </div>
       {/* POPUP MODAL */}
       { modal &&(
           <div className="modal">
               <div  onClick={toggleModal} className="overlay"></div>
               <div className="modal-content d_flex">
                       <img className="modal-img left" src={props.image} alt="" />    
                   <div className="modal-text right">
                       <span>Featured-Design</span>
                       <h1>{props.title}</h1>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil reprehenderit, obcaecati quaerat ad accusantium fugiat hic animi cumque nobis blanditiis ducimus atque natus placeat .</p>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil reprehenderit, obcaecati quaerat ad accusantium fugiat hic animi cumque nobis blanditiis ducimus atque natus placeat .</p>
                 <div className="button f_elx mtop">
                     <button className='btn-shadow'>
                         LIKE THIS <i className="far fa-thumbs-up"></i>
                     </button>
                     <button className='btn-shadow'>
                       VIEW PROJECT <i className="fas fa-chevron-right"></i>
                     </button>
                     </div>
                     <button className='close-modal btn-shadow' onClick={toggleModal}>
                         <i className="fas fa-times">
                         </i>
                     </button>
                   </div>
               </div>
           </div>
       )
       }
      </>
 
  )
}

export default Card