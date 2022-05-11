// bucket.js

// Initial State
const initialState = {
  list: [
    { text: '영화관 가기', completed: false },
    { text: '매일 책읽기', completed: false },
    { text: '수영 배우기', completed: false },
  ],
};

// Action Types
const CREATE = 'bucket/CREATE';
const UPDATE = 'bucket/UPDATE';
const DELETE = 'bucket/DELETE';

// Action Creators
export function createBucket(bucket) {
  return { type: CREATE, bucket };
}
export function updateBucket(bucket_index) {
  return { type: UPDATE, bucket_index };
}
export function deleteBucket(bucket_index) {
  return { type: DELETE, bucket_index };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'bucket/CREATE': {
      const new_bucket_list = [...state.list, action.bucket];
      return { list: new_bucket_list };
    }

    case 'bucket/UPDATE': {
      const new_bucket_list = state.list.map((l, i) => {
        if (i === parseInt(action.bucket_index)) {
          return { ...l, completed: true };
        } else {
          return l;
        }
      });
      console.log(state);
      return { list: new_bucket_list };
    }

    case 'bucket/DELETE': {
      const new_bucket_list = state.list.filter((l, i) => {
        return i !== parseInt(action.bucket_index);
      });
      return { list: new_bucket_list };
    }

    default:
      return state;
  }
}
