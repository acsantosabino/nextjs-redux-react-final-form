import Link from 'next/link';
import React, { useEffect } from 'react';
import { Field, Form } from 'react-final-form';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBook, postBook } from '../redux/bookingSlice';
import {useRouter} from 'next/router';

// import validate from './validate'
import Input from './Input';

const Booking = ({
  // eslint-disable-next-line no-unused-vars
  handleSubmit, form, submitting, pristine, values,
}) => (
  <form onSubmit={handleSubmit}>
    <div>
      <Field
        component={Input}
        label="firstName"
        name="firstName"
        type="text"
      />
    </div>
    <div>
      <Field
        component={Input}
        label="lastName"
        name="lastName"
        type="text"
      />
    </div>
    <div>
      <Field
        component={Input}
        label="email"
        name="email"
        type="email"
      />
    </div>
    <div>
      <Field
        component={Input}
        label="phone"
        name="phone"
        type="tel"
      />
    </div>
    <div>
      {/* {this.renderResponse()} */}
      <button
        // as='a'
        disabled={submitting || pristine}
        // onClick={(e) => {
        //   // e.preventDefault()
        //   handleSubmit()
        // }}
        type="submit">
        book
      </button>
    </div>
  </form>
);

const Book = () => {
  const book = useSelector((state) => state.book);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchBook);
  }, []);

  const onSubmit = async (value) => {
    const save = postBook(value);
    dispatch(save).then( () => {
      router.push('show-redux-state');
    }
    );
  };

  return (
    <div>
      <p>Book</p>
      <p>{JSON.stringify(book, null, 4)}</p>
      <Form onSubmit={onSubmit} initialValues={book} render={Booking} />
    </div>
  );
};

export default Book;
