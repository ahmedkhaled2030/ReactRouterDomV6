import React from 'react';
 import { useParams } from 'react-router-dom';

const UserEdit = () => {
    const {param} = useParams();
    console.log(param) //{id: '1'}
  return (
    <div>UserEdit</div>
  )
}

export default UserEdit