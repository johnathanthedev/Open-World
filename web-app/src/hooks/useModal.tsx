import { useState } from 'react';
import { Container, Modal as BootstrapModal, Button } from 'react-bootstrap';
import SignUpForm from '../components/shared/Forms/SignUpForm/Index';
import SignInForm from '../components/shared/Forms/SignInForm/Index';
import { SIGNIN_FORM, SIGNUP_FORM } from '../config/constants';
import { useTranslation } from 'react-i18next';
import CloseIcon from '../components/shared/Forms/icons/CloseIcon';

interface IModalState {
  showModal?: boolean;
  type?: null | string;
}

const useModal = () => {
  const { t } = useTranslation(['common']);
  const [modalState, setModalState] = useState<IModalState>({
    showModal: false,
    type: null,
  });

  const { showModal, type } = modalState;

  const handleShowModal = (modalType: string) => {
    setModalState({
      ...modalState,
      showModal: true,
      type: modalType,
    });
  };

  const handleCloseModal = () => {
    setModalState({
      ...modalState,
      showModal: false,
      type: null,
    });
  };

  const modalHeaderContent = () => {
    return (
      <Container className='py-2 d-flex justify-content-between'>
        {(() => {
          switch (type) {
            case SIGNIN_FORM:
              return t('Sign In');
            case SIGNUP_FORM:
              return t('Sign Up');
            default:
              break;
          }
        })()}
        <button onClick={handleCloseModal} className='border-0 bg-transparent'>
          <CloseIcon />
        </button>
      </Container>
    );
  };

  const modalChildComponent = () => {
    return (
      <Container className='py-2'>
        {(() => {
          switch (type) {
            case SIGNIN_FORM:
              return <SignInForm />;
            case SIGNUP_FORM:
              return <SignUpForm />;
            default:
              break;
          }
        })()}
      </Container>
    );
  };

  const Modal = () => {
    return (
      <>
        <BootstrapModal
          size='lg'
          aria-labelledby='contained-modal-title-vcenter'
          centered
          show={showModal}
          onHide={handleCloseModal}
          animation={false}
        >
          <BootstrapModal.Header className='p-0'>
            {modalHeaderContent()}
          </BootstrapModal.Header>
          {modalChildComponent()}
        </BootstrapModal>
      </>
    );
  };

  return { Modal, handleShowModal };
};

export default useModal;
