import { useState } from "react";

export default function InputForm({ handleAdd }) {
  
  return (    
    <form action="" className="mt-3" onSubmit={(evt) => handleAdd(evt)}>
      <div className="form-row">        
        <div className="form-group">
          <label htmlFor="inputText">New note</label>
          <div className="input-block">
            <textarea id="inputText"></textarea>  
            <button type="submit" className="material-icons add-button">send</button>
          </div>                      
        </div>
      </div>
    </form>    
  );
}