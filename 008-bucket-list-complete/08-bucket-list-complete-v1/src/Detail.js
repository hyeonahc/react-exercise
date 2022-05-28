import React from 'react';
import { useNavigate } from 'react-router-dom';

const Detail = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>상세페이지입니다!</h1>
      <button onClick={() => navigate('/')}>돌아가기</button>
    </>
  );
};

export default Detail;
