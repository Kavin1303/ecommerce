import { Alert } from "react-bootstrap";

import React from 'react'

const Message = ({variant,children}) => {
  return (
    <Alert vairant={variant}>
      {children}
    </Alert>
  )
};
Message.defaultProps = {
  variant:'info' ,
};

export default Message;