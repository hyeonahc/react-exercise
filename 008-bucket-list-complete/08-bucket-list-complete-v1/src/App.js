import { Routes, Route } from 'react-router-dom';
import BucketList from './BucketList';
import Detail from './Detail';
import NotFound from './NotFound';
import styled from 'styled-components';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { createBucket } from './redux/modules/bucket';

function App() {
  console.log(useSelector(state => state));
  const my_lists = useSelector(state => state.bucket.list);
  const dispatch = useDispatch();
  const input = useRef(null);

  const addList = () => {
    dispatch(createBucket(input.current.value));
    input.current.value = null;
  };

  return (
    <>
      <Container>
        <Title>내 버킷리스트</Title>
        <Line />
        <Routes>
          <Route path="/" element={<BucketList my_lists={my_lists} />} />
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
