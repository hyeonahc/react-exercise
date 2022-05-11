import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Progress = () => {
  const bucket_list = useSelector(state => state.bucket.list);
  console.log(bucket_list);

  let count = 0;
  bucket_list.map((b, i) => {
    // console.log(b, i);
    if (b.completed) {
      count += 1;
    }
  });
  console.log(count);

  return (
    <div>
      <ProgressBar>
        <HighLight width={(count / bucket_list.length) * 100 + '%'} />
      </ProgressBar>
    </div>
  );
};

export default Progress;

const ProgressBar = styled.div`
  background: #eee;
  width: 100%;
  height: 40px;
`;

const HighLight = styled.div`
  background: orange;
  width: ${props => props.width};
  height: 40px;
  transition: 1s;
`;
