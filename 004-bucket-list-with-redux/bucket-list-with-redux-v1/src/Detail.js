import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Detail = props => {
  const params = useParams();
  // console.log('params: ', params);
  const bucket_index = params.index;
  const bucket_list = useSelector(state => state.bucket.list);

  const history = useHistory();
  return (
    <>
      <h1>{bucket_list[bucket_index]}</h1>
      <button
        onClick={() => {
          history.push('/');
        }}
      >
        돌아가기
      </button>
    </>
  );
};

export default Detail;
