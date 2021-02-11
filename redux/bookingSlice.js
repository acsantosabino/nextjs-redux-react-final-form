
import axios from 'axios'
const initialState = {}

const url = 'http://localhost:3000/api/book'

export const fetchBookingInfo = async id => {
  try{
    // Get to my backend.
    const { data } = await axios.get(`${url}/${id}`)
    console.log(data)
    return data
  } catch (e) {
    throw e
  }
}

export const postBookingInfo = async (id, input) => {
  try {
    // POST to my backend.
    const { data } = await axios.post(`${url}/${id}`, input)
    console.log(data)
    return data
  } catch (e) {
    throw e
  }
}

export default function bookReducer(state = initialState, action) {
  switch(action.type) {
    case 'book/bookLoaded':
      return action.payload;
    default:
      return state;
  }
}
// Thunk function
export async function fetchBook(dispatch, getState) {
  const book = await fetchBookingInfo(1)
  dispatch({ type: 'book/bookLoaded', payload: book })
}

export function postBook(input){
  return async function postBookAction(dispatch, getState) {
    console.log(input);
    const book = await postBookingInfo(1, input)
    dispatch({ type: 'book/bookLoaded', payload: book })
  }
}