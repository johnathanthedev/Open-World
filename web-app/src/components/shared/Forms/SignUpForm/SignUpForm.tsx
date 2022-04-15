import { Button, Form } from 'react-bootstrap';
import { TFunction, withTranslation } from 'react-i18next';
import useSignUp from '../../../../hooks/useSignUp';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface Props {
  t: TFunction<string[], undefined>;
}
interface IFormValues {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const SignUpForm = ({ t }: Props) => {
  const { signUp } = useSignUp();
  const initialValues: IFormValues = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  const signUpValidationSchema = Yup.object({
    name: Yup.string().required(t('Name is required')),
    email: Yup.string()
      .email(t('Must be a valid email address'))
      .required(t('Email is required')),
    password: Yup.string()
      .required(t('Password is required'))
      .min(8, t('Password must be 8 characters long')),
    passwordConfirmation: Yup.string()
      .required(t('Password confirmation is required'))
      .oneOf([Yup.ref('password'), null], t('Passwords must match')),
  });

  const formik = useFormik({
    initialValues,
    onSubmit: () => {
      signUp(formik?.values);
    },
    validationSchema: signUpValidationSchema,
  });

  return (
    <Form onSubmit={formik?.handleSubmit}>
      <Form.Group className='mb-3'>
        <Form.Label>{t('Name')}</Form.Label>
        <Form.Control
          name='name'
          type='text'
          placeholder={t('Enter your name')}
          onChange={formik?.handleChange}
          value={formik?.values?.name}
        />
        {formik?.errors?.name && formik?.touched?.name && (
          <p className='text-danger'>{formik?.errors?.name}</p>
        )}
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>{t('Email address')}</Form.Label>
        <Form.Control
          name='email'
          type='email'
          placeholder={t('Enter email')}
          autoComplete='email'
          onChange={formik?.handleChange}
          value={formik?.values.email}
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
          onChange={formik?.handleChange}
          value={formik?.values?.password}
        />
        {formik?.errors?.password && formik?.touched?.password && (
          <p className='text-danger'>{formik?.errors?.password}</p>
        )}
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicPasswordConfirmation'>
        <Form.Label>{t('Password confirmation')}</Form.Label>
        <Form.Control
          name='passwordConfirmation'
          type='password'
          autoComplete='new-password'
          placeholder={t('Password confirmation')}
          onChange={formik?.handleChange}
          value={formik?.values?.passwordConfirmation}
        />
        {formik?.errors?.passwordConfirmation &&
          formik?.touched?.passwordConfirmation && (
            <p className='text-danger'>
              {formik?.errors?.passwordConfirmation}
            </p>
          )}
      </Form.Group>
      <Button type='submit'>{t('Submit')}</Button>
    </Form>
  );
};

export default withTranslation(['common'])(SignUpForm);
