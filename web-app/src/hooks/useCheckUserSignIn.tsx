import axios from 'axios';

interface Props {}

const useCheckUserSignIn = (props: Props) => {
  const isUserSignedIn = () => {
    return axios
      .get(`${process.env.REACT_APP_OW_API_HOST}/api/v1/signed-in`, {
        withCredentials: true,
      })
      .then((response) => {
        return response?.data?.signed_in;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { isUserSignedIn };
};

export default useCheckUserSignIn;
