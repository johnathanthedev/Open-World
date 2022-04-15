import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface ISignInObject {
  email: string;
  password: string;
}

const useSignIn = () => {
  const navigate = useNavigate();

  const signIn = (signInObj: ISignInObject) => {
    const { email, password } = signInObj;

    const signInPostObj = {
      email,
      password,
    };

    return axios
      .post(
        `${process.env.REACT_APP_OW_API_HOST}/api/v1/sign-in`,
        signInPostObj,
        {
          withCredentials: true,
        }
      )
      .then((data) => {
        if (data?.data?.status !== 401) {
          navigate('/home');
        } else {
          return data?.data?.message;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { signIn };
};

export default useSignIn;
