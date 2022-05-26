import React from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

const Guests = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveGuests = searchParams.get('filter') === 'active';

  return (
    <>
      <div>Guest 1</div>
      <div>Guest 2</div>
      <div>Guest 3</div>
      <Outlet />
      <button onClick={() => setSearchParams({ filter: 'active' })}>
        Active Guests
      </button>
      <button onClick={() => setSearchParams({})}>Reset Filter</button>
      {showActiveGuests ? (
        <div>showing active guests</div>
      ) : (
        <div>showing all guests</div>
      )}
    </>
  );
};

export default Guests;
