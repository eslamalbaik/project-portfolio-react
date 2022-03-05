import React ,{ useState } from 'react'
import contact1 from "../pic/Hero-Ahmed22M.png";
import './Contact.css'
const Contact = ()=> {
    const [data, setdata] = useState({ 
        fullname:"",
        phone:"",
        email:"",
        subject:"",
        message:"",
     })
    const InputEvent = (event) => {
        const{name , value} = event.target

        setdata((preVal) =>{
            return {
                ...preVal,
                [name]:value,
            }
        })
    }
    const formSubmit = (event) =>{
        event.preventDefault()
        alert(
            `
            My name is ${data.fullname}.
            My Phone Number is ${data.phone}.
            My Email adderess is ${data.email}.
            My Subject is ${data.subject}.
            Here is my message I want to say : ${data.message}.
            `
        )
    }
  return (
    <div>
    <section className="Contact" id="contact">
      <div className="container top">
          <div className="heading text-center">
              <h4>CONTACT</h4>
              <h1>Contact with Me</h1>
          </div>
         <div className="content d_flex">
             <div className="left">
                 <div className="box box_shodow">
                  <div className="img">
                      <img src={contact1} alt="" />
                  </div>
                  <div className="details">
                      <h1>Ahmed Ziad</h1>
                      <p> I'm a <strong>Laravel developer</strong> Lorem ipsum dolor sit amet consectetur.</p>
                      <p>phone: <strong>+05999999921</strong></p>
                      <p>Email:<strong>example2022@gmail.com</strong> </p><br />
                      <span>FIND WITH ME</span>
                      <div className="button f_flex">
                          <button className="btn-shadow">
                              <i className="fab fa-facebook-f"></i>
                          </button>
                          <button className="btn-shadow">
                              <i className="fab fa-instagram"></i>
                          </button>
                          <button className="btn-shadow">
                              <i className="fab fa-twitter"></i>
                          </button>
                      </div>
                  </div>
                 </div>
             </div>
                <div className="right box_shodow">
                     <form onSubmit={formSubmit}>
                         <div className="f_flex">
                             <div className="input row">
                                 <span>YOUR NAME</span>
                                 <input type="text" name='fullname' value={data.fullname} onChange={InputEvent}/>
                             </div>
                             <div className="input row">
                                 <span>YOUR NUMBER</span>
                                 <input type="phone" name='phone' value={data.phone} onChange={InputEvent}/>
                             </div>
                             <div className="input">
                                 <span>EMAIL</span>
                                 <input type="email" name='email' value={data.email} onChange={InputEvent}/>
                             </div>
                             <div className="input">
                                 <span>SUBJECT</span>
                                 <input type="text" name='subject' value={data.subject} onChange={InputEvent}/>
                             </div>
                             <div className="input">
                                 <span>YOUR MESSAGE</span>
                                 <textarea cols='30' row='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                             </div>

                         </div>
                         <button className='btn-shadow'>
                              SEND MESSAGE <i className="fa fa-long-arrow-down">

                              </i>
                         </button>
                     </form>
                </div>
            </div>
         </div>
    </section>
    </div>
  )
}

export default Contact