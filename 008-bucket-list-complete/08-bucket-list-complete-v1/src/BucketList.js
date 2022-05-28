import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const BucketList = props => {
  const { list } = props;
  const navigate = useNavigate();

  return (
    <ListStyle>
      {list.map((l, i) => (
        <ItemStyle key={i} onClick={() => navigate('detail')}>
          {l}
        </ItemStyle>
      ))}
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: aliceblue;
`;

export default BucketList;
