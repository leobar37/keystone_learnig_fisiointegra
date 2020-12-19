import React , {useState} from 'react';
import {Button, Form } from 'react-bootstrap';
import Head from 'next/head';
import MenuFixed from '../components/menufixed';
import { useFormik} from 'formik';
import { Modal} from 'react-bootstrap';
import axiosM from 'axios';
const axios  = axiosM.create({baseURL  : "/admin/api" ,  headers : { 
     'Content-Type': 'application/json',
     'Accept': 'application/json',
}});
const createReserve = `mutation createReserve($name:String, $lastName:String ,
     $email :String, $description: String, $hourcall: DateTime ){
      
    createReserve(data: {name : $name, lastName :$lastName , email : $email , description : $description , hourCall : $hourcall,   timestamp : 505 }){
     name
     lastName
     description
   }
   }`;

const FormReserver = ()=>{
   const [show , setShow ] = useState(false);
       /// send form
     const   formik =  useFormik( {
           initialValues : {name : "" , lastName : "" , email : "" , phone : "" , hourcall  : "" , description  : ""},
           onSubmit : (values)=>{
                              // values here
                               if(values){
                                    axios.post("/" ,  { query :  createReserve , variables : values } ).then(val =>{
                                         console.log(val);
                                          handleShow();
                                        })
                               }
               
           }
     })
    
     /// close modal
     const  handleCloseButton =  ()=>  setShow(false);
     
     const handleShow = ()=> setShow(true);
  return (
      <>
       <Modal onHide={handleCloseButton} show={show}>
            <Modal.Header closeButton>
                      Gracias {formik.values.name}
            </Modal.Header>
            <Modal.Body>
                   le hemos enviar un email con mas detalles
            </Modal.Body>
       </Modal>
             <Form className="form_register" onSubmit={ formik.handleSubmit}>
                      <Form.Group className="group_control_flex">
                            <Form.Control className="control"  value={ formik.values.name }   onChange={formik.handleChange} name="name" type="text" placeholder="Nombre">
                            </Form.Control>
                            <Form.Control className="control" name="lastName" value={ formik.values.lastName  } onChange={formik.handleChange} type="text" placeholder="Apellido">                                 
                            </Form.Control>
                      </Form.Group>
                      <Form.Group className="">
                           <Form.Control type="email" value={ formik.values.email}  name="email" onChange={formik.handleChange} placeholder="email">
                                 
                           </Form.Control>
                      </Form.Group>
                      
                      <Form.Group className="">
                           <Form.Control type="text" value={ formik.values.phone} name="phone"  onChange={formik.handleChange} placeholder="Número">
                                 
                           </Form.Control>
                      </Form.Group>
                      <Form.Group className="">
                           <Form.Control type="text" name="hourcall" value={ formik.values.hourcall} onChange={formik.handleChange} placeholder="¿A que hora podemos llamarte?">
                                  
                           </Form.Control>
                      </Form.Group>
                      <Form.Group className="">
                           <Form.Control type="text" as={"textarea"} name="description" value={ formik.values.description}  onChange={formik.handleChange} rows={3} placeholder="Descripción">
                                  
                           </Form.Control>
                      </Form.Group>
                      <Form.Group className="d-flex justify-content-center">
                             
                             <button className="general_btn" >
                                       Enviar
                             </button>
                      </Form.Group>
                 </Form>
          
      </>
  )
}
function Reservar() {
    return (
       <>
         <Head>
         <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous" />

             </Head>
            <div className="contain">
                <div className="contain_form">
                     <h1 className="title bg">Reserva tu cita</h1>
                    <FormReserver>
    
                    </FormReserver>
                </div>
                 <div className="contain_social">
                        <h1 className="title bg">
                           ¿Tienes alguna duda?
                        </h1>
                        <div className="social">
                               <a href="">
                               <i className="fab fa-facebook-messenger"></i>
                               </a>
                                <a href="">
                                <i className="fab fa-whatsapp"></i>
                                </a>
                        </div>
                 </div>
                <MenuFixed route="/index" text="volver al inicio"  />
             </div> 
       </>
    )
}

export default Reservar
