/*===========================================
            components/Alert.jsx
===========================================*/
import React from 'react';

const Alert = ({text}) => {

   return (
      <>
         <h3 className="text-center mt-3 mb-3 alert">
            {text}
         </h3>
      </>
   );
};

export default Alert;
