import React, { createRef, useState } from "react";
import { Input, Button } from "semantic-ui-react";
import styled from "styled-components";

const InputComponent = ({ content, placeholder, handleChange }) => {
  const handleClick = () => inputRef.current.focus();
  const inputRef = createRef();
  return (
    <div>
      <Field>
        <Button content={content} onClick={handleClick} />
        <Input
          ref={inputRef}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </Field>
    </div>
  );
};

export default InputComponent;

const Field = styled.div``;
