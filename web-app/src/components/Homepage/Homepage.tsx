import { Button } from 'react-bootstrap';
import useModal from '../../hooks/useModal';
import { SIGNIN_FORM, SIGNUP_FORM } from '../../config/constants';
import { TFunction, withTranslation } from 'react-i18next';

interface Props {
  t: TFunction<string[], undefined>;
}

const Homepage = ({ t }: Props) => {
  const { Modal, handleShowModal } = useModal();

  return (
    <div
      id='homepage'
      className='d-flex flex-column justify-content-center align-items-center vh-100'
    >
      <div>
        <h1>Open World</h1>
      </div>

      <div className='mt-5 d-flex'>
        <Button onClick={() => handleShowModal(SIGNUP_FORM)}>
          {t('Sign Up')}
        </Button>
        <Button onClick={() => handleShowModal(SIGNIN_FORM)}>
          {t('Sign In')}
        </Button>
      </div>

      <Modal />
    </div>
  );
};

export default withTranslation(['common'])(Homepage);
