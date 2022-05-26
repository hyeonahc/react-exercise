import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { userId } = useParams();

  return <div>Details about {userId}</div>;
};

export default UserDetail;
