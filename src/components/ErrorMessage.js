import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';

export default function ErrorMessage(){
  const error = useSelector(state => state.error);
  if(!error){
    return null;
  }
  return (
    <div>
      <Alert variant='danger'>{error.code} - {error.text}</Alert>
    </div>
  );
};