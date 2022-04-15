import { useEffect } from 'react';
import useCheckUserSignIn from '../../../hooks/useCheckUserSignIn';
import { useNavigate } from 'react-router-dom';

interface Props {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: Props) => {
  const navigate = useNavigate();
  const { isUserSignedIn } = useCheckUserSignIn({});

  useEffect(() => {
    isUserSignedIn().then((data: boolean) => {
      const isUserSignedIn = data;
      !isUserSignedIn && navigate('/');
    });
  }, [isUserSignedIn, navigate]);

  return children;
};

export default PrivateRoute;
