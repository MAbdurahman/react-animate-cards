/*===========================================
            components/ListContainer.jsx
===========================================*/
import React from 'react';
import {useTransition, animated} from 'react-spring';
import ListCard from './ListCard';

const ListContainer = ({items}) => {

   const transition = useTransition(items, items => items.id, {
      from: {opacity: 0, marginLeft:-100, marginRight:100 },
      enter: {opacity:1, marginLeft: 0, marginRight: 0 }
   });


   return (
      <>
         {transition.map(({item, key, props}) => (
            <animated.div key={key} style={props} className="col-md-8">
               <ListCard item={item}/>
            </animated.div>
         ))}
      </>
   );
};

export default ListContainer;
