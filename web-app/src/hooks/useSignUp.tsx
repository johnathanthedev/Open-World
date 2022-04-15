import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface ISignUpObject {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const useSignUp = () => {
  const navigate = useNavigate();

  const signUp = (signUpObj: ISignUpObject) => {
    const { name, email, password, passwordConfirmation } = signUpObj;

    const signUpPostObj = {
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
    };

    return axios
      .post(
        `${process.env.REACT_APP_OW_API_HOST}/api/v1/registrations`,
        { user: signUpPostObj },
        {
          withCredentials: true,
        }
      )
      .then((data) => {
        navigate('/home');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { signUp };
};

export default useSignUp;
