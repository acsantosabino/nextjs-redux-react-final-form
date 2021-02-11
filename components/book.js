import React from 'react'
import { Field, Form } from 'react-final-form'
import { fetchBook, postBook } from '../redux/bookingSlice'
import { useSelector, useDispatch } from 'react-redux'
import {useEffect} from 'react'

// import validate from './validate'
import Input from './Input'

const Booking = ({handleSubmit, form, submitting, pristine, values}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component={Input}
          label={"firstName"}
          name="firstName"
          type="text"
        />
      </div>
      <div>
        <Field
          component={Input}
          label={"lastName"}
          name="lastName"
          type="text"
        />
      </div>
      <div>
        <Field
          component={Input}
          label={"email"}
          name="email"
          type="email"
        />
      </div>
      <div>
        <Field
          component={Input}
          label={"phone"}
          name="phone"
          type="tel"
        />
      </div>
      <div>
        {/* {this.renderResponse()} */}
        <button disabled={submitting || pristine} type="submit">
          {"book"}
        </button>
      </div>
    </form>
  )
}

const Book = () => {
  const book = useSelector((state) => (state.book))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBook)
  }, [])

  const onSubmit = async value => {
    const save = postBook(value)
    dispatch(save)
  }

  return (
    <div>
      <p>Book</p>
      <p>{JSON.stringify(book, null, 4)}</p>
      <Form
      onSubmit={onSubmit}
      initialValues={book}
      render={Booking}/>
    </div>
  )
}

export default Book;