// bucket.js

// Initial State
const initialState = {
  list: ['영화관 가기', '매일 책읽기', '수영 배우기', '코딩하기'],
};

// Action Constants
const CREATE = 'bucket/CREATE';
const DELETE = 'bucket/DELETE';

// Action Creators
export function CREATE_BUCKET(bucket) {
  return { type: CREATE, bucket: bucket };
}
export function DELETE_BUCKET(bucket) {
  return { type: DELETE, bucket: bucket };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'bucket/CREATE': {
      console.log(state.list, action.bucket);
      const new_bucket = [...state.list, action.bucket];
      return { list: new_bucket };
    }
    case 'bucket/DELETE': {
      console.log(state.list, action.bucket);
      const new_bucket = state.list.filter((item, index) => {
        // true면 배열에 남고 false면 배열에서 제외
        // console.log(index, parseInt(action.bucket));
        // console.log(index !== parseInt(action.bucket));
        return index !== parseInt(action.bucket);
      });
      return { list: new_bucket };
    }

    default:
      return state;
  }
}
