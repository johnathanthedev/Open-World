import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Props {}

const useSignOut = (props: Props) => {
  const navigate = useNavigate();

  const signOut = () => {
    axios
      .delete(`${process.env.REACT_APP_OW_API_HOST}/api/v1/sessions`, {
        withCredentials: true,
      })
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { signOut };
};

export default useSignOut;
