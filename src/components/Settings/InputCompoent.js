import React, { createRef, useState } from "react";
import { Input, Button } from "semantic-ui-react";
import styled from "styled-components";

const InputComponent = ({ content, placeholder, handleChange, loading }) => {
  const handleClick = () => inputRef.current.focus();
  const inputRef = createRef();
  return (
    <Wrapper>
      <Field>
        <Button content={content} onClick={handleClick} />
        <CostumInput
          ref={inputRef}
          placeholder={placeholder}
          onChange={handleChange}
          loading={loading}
        />
      </Field>
    </Wrapper>
  );
};

export default InputComponent;

const Field = styled.div`
  padding: 6px;
  button {
    width: 15%;
    margin-top: 20px;

    @media (max-width: 500px) {
      display: none;
      width: 50%;
      padding: 10px;
    }
  }
  input {
    width: 30%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
`;

const CostumInput = styled(Input)`
  @media (max-width: 500px) {
    margin-top: 10px;
  }
`;
