import * as S from "./styled";

export function Modal({ open, setOpen, title, image }) {
  return (
    <S.Modal open={open} togle={() => setOpen()}>
      <S.ModalContainer>
        <S.ModalContent>
          <S.Images src={image} alt="" />
          <S.ModalBody>
            <S.ModalHeader>
              <h1>{title}</h1>
            </S.ModalHeader>
          </S.ModalBody>
          <S.ModalButton>
            <button onClick={() => setOpen()}>&times;</button>
          </S.ModalButton>
        </S.ModalContent>
      </S.ModalContainer>
    </S.Modal>
  );
}
