import React from 'react'
import { Button } from 'react-bootstrap'
import Link from 'next/link';
/**
 * 
 * @param {text} props
 * @param { route} 
 */
const MenuFixed = (props) => {
    const up =()=>{
          window.scrollTo({
              top : 0 ,
              behavior : "smooth"
          })
    }
    
  return (
    <>
      <div className="menu_fixed">
         <ul>
                 <Button variant={"none"} onClick = {()=> up()} href="" className="up_menu">
                   <i className="fas fa-sort-up"></i>
                 </Button >
                 <li className="menu_fixed_cite">
                   <Link href={props.route ||  "/reservar"}>
  <a href="" className="title sm">{props.text || "reservar cita"}</a>      
                   </Link>
               </li>        
         </ul>
      </div>
    </>
  )
}

export default MenuFixed
