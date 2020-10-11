/*===========================================
            components/ListContainer.jsx
===========================================*/
import React from 'react';
import ListCard from './ListCard';

const ListContainer = ({items}) => {
   return (
      <>
         {items.map(item => (
            <ListCard key={item.id} item={item}/>
         ))}
      </>
   );
};

export default ListContainer;
