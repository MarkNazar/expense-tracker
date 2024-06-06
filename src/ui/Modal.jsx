import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineX } from "react-icons/hi";
import useOutsideClick from "../hooks/useOutsideClick";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(249, 247, 247, 0.4);
  /* background-color: rgba(255, 255, 255, 0.2); */
  backdrop-filter: blur(3px);
`;

const StyledModal = styled.div`
  width: 500px;
  padding: 30px;
  background-color: var(--color-white);
  border-radius: 8px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 568px) {
    width: 80%;
    max-height: 400px;
    overflow: scroll;
  }
`;

const CloseModalButton = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;

const ModalContext = createContext();

const Modal = ({ children }) => {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;
  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
};

const Open = ({ children, opens: openWindowName }) => {
  const { open } = useContext(ModalContext);
  return cloneElement(children, {
    onClick: () => open(openWindowName),
  });
};

const Window = ({ children, name }) => {
  const { openName, close } = useContext(ModalContext);
  const { ref } = useOutsideClick(close);

  if (openName !== name) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <CloseModalButton>
          <ButtonIcon onClick={close}>
            <HiOutlineX />
          </ButtonIcon>
        </CloseModalButton>
        <div>
          {cloneElement(children, {
            onCloseModal: close,
          })}
        </div>
      </StyledModal>
    </Overlay>,
    document.body
  );
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
