import React from 'react';
import {ErrorBody, ErrorImage, ErrorText} from './_styles/Error';
import ImageError from './../../../../img/error.png';

const Error = props => (
  <ErrorBody>
    <ErrorImage src={ImageError} alt=""/>
    <ErrorText>{props.error}</ErrorText>
  </ErrorBody>
);

export default Error;