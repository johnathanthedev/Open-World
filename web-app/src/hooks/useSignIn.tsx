import { useNavigate } from 'react-router-dom';

const useSignIn = () => {
  const navigate = useNavigate();

  const signIn = () => {
    navigate('/home');
  };

  return { signIn };
};

export default useSignIn;
