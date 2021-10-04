import React from 'react';
import styled from 'styled-components';

export const Logo = props => {
  return <Img {...props} src="/static/icon/Logo.svg" />;
};

const Img = styled.img`
  width: 169px;
  height: 40px;
`;

export default { Logo };
