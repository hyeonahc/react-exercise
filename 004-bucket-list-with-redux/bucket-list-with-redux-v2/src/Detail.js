import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { DELETE_BUCKET } from './redux/module/bucket';

const Detail = () => {
  const my_lists = useSelector(state => state.bucket.list);
  const history = useHistory();
  const params = useParams();
  const params_index = params.index;
  const dispatch = useDispatch();

  const deleteBucketList = () => {
    console.log('click');
    dispatch(DELETE_BUCKET(params_index));
    history.push('/');
  };

  return (
    <>
      <h1>{my_lists[params_index]}</h1>
      <button onClick={deleteBucketList}>지우기</button>
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
