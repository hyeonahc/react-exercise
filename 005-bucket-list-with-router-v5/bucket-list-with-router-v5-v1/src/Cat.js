import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Cat = () => {
  const cat_name = useParams();
  console.log(cat_name);
  const history = useHistory();
  return (
    <>
      <div>고양이 화면입니다</div>
      <button
        onClick={() => {
          history.push('/');
        }}
      >
        홈으로 돌아가기
      </button>
    </>
  );
};

export default Cat;
