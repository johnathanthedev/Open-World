import { useNavigate } from 'react-router-dom';

const useSignUp = () => {
  const navigate = useNavigate();

  const signUp = () => {
    navigate('/home');
  };

  return { signUp };
};

export default useSignUp;
