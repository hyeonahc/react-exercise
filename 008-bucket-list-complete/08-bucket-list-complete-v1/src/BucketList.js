import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const BucketList = () => {
  const [bucketlists, setBucketlists] = useState([
    '영화관 가기',
    '매일 책읽기',
    '수영 배우기',
  ]);

  const input = useRef();

  return (
    <Background>
      <Box>
        <h1>내 버킷리스트</h1>
        <hr style={{ margin: '1em 0' }} />
        <ul style={{ listStyleType: 'none', paddingInlineStart: '0' }}>
          {bucketlists.map((list, index) => (
            <List key={index}>{list}</List>
          ))}
        </ul>
      </Box>
      <InputBox>
        <input type="text" ref={input} />
        <button
          onClick={() => {
            const newBucketlists = [...bucketlists, input.current.value];
            setBucketlists(newBucketlists);
          }}
        >
          추가하기
        </button>
      </InputBox>
    </Background>
  );
};

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: Gainsboro;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled.div`
  min-width: 500px;
  width: 40vw;
  height: 60vh;
  background-color: White;
  padding: 1.2em;
  margin-bottom: 1em;
  border: 2px solid DarkGray;
  border-radius: 3px;
`;

const List = styled.li`
  height: 30px;
  background-color: AliceBlue;
  padding: 0.75em;
  margin: 1em 0;
`;

const InputBox = styled.div`
  min-width: 500px;
  width: 40vw;
  height: 10vh;
  background-color: White;
  padding: 1.2em;
  border: 2px solid DarkGray;
  border-radius: 3px;
`;

export default BucketList;
