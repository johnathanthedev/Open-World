import Button from '@restart/ui/esm/Button';
import { useTranslation } from 'react-i18next';
import useSignOut from '../../hooks/useSignOut';

interface Props {}

const UserHomepage = (props: Props) => {
  const { t } = useTranslation();
  const { signOut } = useSignOut({});

  return (
    <div>
      <h2>User Homepage</h2>
      <Button className='btn btn-secondary' onClick={signOut}>
        {t('Sign out')}
      </Button>
    </div>
  );
};

export default UserHomepage;
