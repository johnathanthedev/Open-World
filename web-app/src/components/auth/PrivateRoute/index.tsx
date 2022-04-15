import PrivateRoute from './PrivateRoute';

interface Props {
  children: JSX.Element;
}

const index = ({ children }: Props) => {
  return <PrivateRoute>{children}</PrivateRoute>;
};

export default index;
