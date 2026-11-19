import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const codeStyle = {
  background: '#ebebeb',
  width: 400,
  padding: 10,
  border: '1px solid grey',
  marginBottom: 10,
};

const ShowReduxState = () => {
  const state = useSelector((storedState) => storedState);

  return (
    <>
      <pre style={codeStyle}>
        <code>{JSON.stringify(state, null, 4)}</code>
      </pre>
      <Link href="/">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>Go Back Home</a>
      </Link>
    </>
  )
}

export default ShowReduxState
