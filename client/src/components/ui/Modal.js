import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const modalRoot = document.getElementById('modal');

const Modal = ({ children }) => {
  // create a ref container to be stored in the Modal's closure to persist across invocations
  const elementRef = useRef(null);
  // if the ref does not have a current property value, set it to a new div node
  if (!elementRef.current) {
    elementRef.current = document.createElement('div');
  }

  // when the Modal mounts, append the div container to the modal DOM node; clean up when Modal unmounts
  useEffect(() => {
    modalRoot.appendChild(elementRef.current);
    return () => modalRoot.removeChild(elementRef.current);
  }, []);

  // use React portal to render the children of the Modal inside the modal DOM node
  return createPortal(
    <DocumentWrapper height={document.body.scrollHeight}>
      <ModalWrapper>{children}</ModalWrapper>
    </DocumentWrapper>,
    elementRef.current
  );
};

const DocumentWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: ${(p) => `${p.height}px`};
  background-color: hsla(0deg, 0%, 0%, 0.5);
`;

const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Modal;
