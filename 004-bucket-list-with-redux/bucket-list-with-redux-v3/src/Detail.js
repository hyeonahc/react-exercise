import React from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Detail = props => {
  const history = useHistory();
  const { list } = props;
  const params = useParams();
  const paramsIndex = params.index;

  return (
    <>
      <h1>{list[paramsIndex]}</h1>
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
