import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LoginRequest } from 'resources/interfaces';
import CustomInput from 'components/CustomInput';
import Button from 'components/Button';
import { useLoginAction } from 'hooks/redux/auth';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid Email')
    .required('Email is required'),
  password: Yup.string().required('Password is required')
});

const Login = () => {
  const navigate = useNavigate();
  const login = useLoginAction();

  const handleSubmit = async (values: LoginRequest) => {
    try {
      await login(values);
    } catch (e) {
      console.log('e =>', e);
    }
  };

  const form = useFormik({
    validationSchema,
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: handleSubmit
  });

  return (
    <form
      className="w-4/5 sm:w-3/5 md:w-4/5 lg:w-3/5"
      onSubmit={form.handleSubmit}
    >
      <h2 className="text-4xl mb-8 font-bold">Login</h2>
      <div className="space-y-2">
        <CustomInput
          label="E-Mail Address"
          placeholder="E-Mail Address"
          {...form.getFieldProps('email')}
          errorText={form.errors.email ? form.errors.email : ""}
        />
        <CustomInput
          type="password"
          label="Password"
          placeholder="Password"
          {...form.getFieldProps('password')}
          errorText={form.errors.password ? form.errors.password : ""}
        />
        <Button
          label="Login"
          classnames="!mt-5 rounded-sm"
        />
        <p
          onClick={() => navigate("/forgot-password")}
          className="hover:underline cursor-pointer text-center text-sm !mt-4"
        >
          Lost password
        </p>
      </div>
    </form>
  );
};

export default Login;
