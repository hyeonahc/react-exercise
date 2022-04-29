import React from 'react';

const Dog = props => {
  console.log(props.match.params);
  return (
    <>
      <div>강아지 화면입니다</div>
      <button
        onClick={() => {
          props.history.push('/');
        }}
      >
        홈으로 돌아가기
      </button>
    </>
  );
};

export default Dog;
