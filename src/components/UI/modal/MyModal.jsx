import React from "react";
import cl from "./MyModal.module.css"


const MyModal = ({children, visisble, setVisible}) =>{
  
  const rootClasses = [cl.myModal];
  if(visisble === true){
    rootClasses.push(cl.active)
  }

  return(
    <div className={rootClasses.join(' ')} onClick={()=>setVisible(false)}>
      <div className={cl.myModalContent} onClick={(e)=>e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default MyModal;