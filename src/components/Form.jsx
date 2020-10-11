/*===========================================
            components/Form.jsx
===========================================*/
import React from 'react';

const Form = ({value, setValue, handleSubmit}) => {





   return (
      <article className="col-md-8">
         <form className="form-group p-4 border border-dark rounded shadow">
            <label htmlFor="message">
               Message:
            </label>
            <input 
            type="text" 
            name="message" 
            id="message"
            placeholder="Enter message"
            className="form-control my-2 p-1 shadow-sm"
            value={value}
            onChange={e => setValue(e.currentTarget.value)}
            />
            <div className="d-flex justify-content-center">
               <button 
               className="btn btn-dark btn-block w-75 mt-3 shadow"
               onClick={e => handleSubmit(e)}>
                  Submit message
               </button>
            </div>
         </form>
      </article>
   );
};

export default Form;
