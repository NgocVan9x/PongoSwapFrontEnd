import React from 'react';
import Template404 from "../src/components/Error/404";

function Error({ statusCode }) {
  return (
      <Template404/>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
