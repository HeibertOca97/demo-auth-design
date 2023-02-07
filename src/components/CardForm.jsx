import React from "react";

export function CardForm({data: { element_type, input_type, name_id, description }, children}){

  const ShowElement = () => {
    if(element_type == "input"){
      return (
        <div className="group__input--style">
          <input 
            type={input_type} 
            id={name_id} 
            autoComplete="off" 
            autoFocus
            required
          />
          <label htmlFor="user">{description}</label>
          {children}
        </div>
      );
    }

    if(element_type == "button"){
      return (
        <div className="group__input--style">
            <button type={input_type} className="btn btn__style">{description}</button>
          </div>
      );
    }

    return <p>HTML element not found</p>;
  }

  return ShowElement();
}
