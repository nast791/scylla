import React from 'react';
import {ContainerBody} from './_styles/container.styled';

const Container = props => {
  return (
    <ContainerBody flex={props.flex}>
      {props.children}
    </ContainerBody>
  );
};

export default Container;