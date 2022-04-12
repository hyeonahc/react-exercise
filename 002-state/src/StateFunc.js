import React, { useState } from 'react';

const StateFunc = () => {
  const [name, setName] = useState('maple');

  const onClick = () => {
    setName('lavender');
  };

  return (
    <>
      <p>안녕하세요 제 이름은 {name}입니다</p>
      <button onClick={onClick}>이름을 라벤더로 바꿔주기</button>
    </>
  );
};

export default StateFunc;
