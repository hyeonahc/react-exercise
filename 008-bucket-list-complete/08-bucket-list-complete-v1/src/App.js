import { Routes, Route } from 'react-router-dom';
import BucketList from './BucketList';
import Detail from './Detail';
import NotFound from './NotFound';
import styled from 'styled-components';
import { useRef, useState } from 'react';

function App() {
  const [list, setList] = useState([
    '영화관 가기',
    '매일 책읽기',
    '수영 배우기',
  ]);

  const input = useRef(null);

  const addList = () => {
    setList([...list, input.current.value]);
    input.current.value = null;
  };

  return (
    <>
      <Container>
        <Title>내 버킷리스트</Title>
        <Line />
        <Routes>
          <Route path="/" element={<BucketList list={list} />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Container>
      <Input>
        <input type="text" ref={input} />
        <button onClick={addList}>추가하기</button>
      </Input>
    </>
  );
}

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default App;
