import { useState } from "react";

export default function InputForm({ handleSubmit }) {
  
  return (    
    <form action="" className="mt-3" onSubmit={(evt) => handleSubmit(evt, callBack)}>
      <div className="form-row">        
        <div className="form-group">
          <label htmlFor="input-text">New note</label>
          <div className="input-block">
            <textarea name="input-text" id="input-text"></textarea>  
            <button type="submit" className="material-icons add-button">send</button>
          </div>                      
        </div>
      </div>
    </form>    
  );
}