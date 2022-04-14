import { Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import useSignIn from '../../../../hooks/useSignIn';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface Props {}

interface IFormValues {
  email: string;
  password: string;
}

const SignInForm = (props: Props) => {
  const { t } = useTranslation(['common']);
  const { signIn } = useSignIn();
  const initialValues: IFormValues = {
    email: '',
    password: '',
  };

  const signInValidationSchema = Yup.object({
    email: Yup.string()
      .email(t('Must be a valid email address'))
      .required(t('Email is required')),
    password: Yup.string()
      .required(t('Password is required'))
      .min(8, t('Password must be 8 characters long')),
  });

  const formik = useFormik({
    initialValues,
    onSubmit: () => {
      signIn();
    },
    validationSchema: signInValidationSchema,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>{t('Email address')}</Form.Label>
        <Form.Control
          name='email'
          type='email'
          placeholder={t('Enter email')}
          autoComplete='email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik?.errors?.email && formik?.touched?.email && (
          <p className='text-danger'>{formik?.errors?.email}</p>
        )}
        <Form.Text className='text-muted'>
          {t("We'll never share your information with anyone else.")}
        </Form.Text>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>{t('Password')}</Form.Label>
        <Form.Control
          name='password'
          type='password'
          autoComplete='new-password'
          placeholder={t('Min. 8 characters long')}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik?.errors?.password && formik?.touched?.password && (
          <p className='text-danger'>{formik?.errors?.password}</p>
        )}
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicCheckbox'>
        <Form.Check type='checkbox' label={t('Remember me')} />
      </Form.Group>

      <Button type='submit'>{t('Submit')}</Button>
    </Form>
  );
};

export default SignInForm;
