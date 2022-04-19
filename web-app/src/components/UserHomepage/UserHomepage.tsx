import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import useSignOut from '../../hooks/useSignOut';
import Camera from '../AR/Camera/Index';

interface Props {}

const UserHomepage = (props: Props) => {
  const [cameraState, setCameraState] = useState({
    showCamera: false,
  });

  const { showCamera } = cameraState;
  const { t } = useTranslation();
  const { signOut } = useSignOut({});

  return (
    <div>
      <div>
        <h2>User Homepage</h2>
        <Button className='btn btn-secondary' onClick={signOut}>
          {t('Sign out')}
        </Button>
        <Button
          onClick={() => {
            setCameraState({ ...cameraState, showCamera: true });
            window.addEventListener('camera-init', (data) => {
              console.log('camera-init', data);
            });
          }}
        >
          Trigger Camera
        </Button>
      </div>
      {showCamera && <Camera />}
      <Button
        onClick={() => {
          // setCameraState({
          //   ...cameraState,
          //   showCamera: false,
          // });
          // TURN OFF CAMERA
        }}
        className='close-cam-btn'
      >
        Close camera
      </Button>
    </div>
  );
};

export default UserHomepage;
