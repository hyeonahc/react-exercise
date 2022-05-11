import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { deleteBucket } from './redux/modules/bucket';

const Detail = props => {
  const params = useParams();
  const bucket_index = params.index;
  const bucket_list = useSelector(state => state.bucket.list);

  const history = useHistory();

  const dispatch = useDispatch();

  const deleteList = () => {
    dispatch(deleteBucket(bucket_index));
    history.push('/');
  };

  return (
    <>
      <h1>{bucket_list[bucket_index]}</h1>
      <button onClick={deleteList}>삭제하기</button>
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
