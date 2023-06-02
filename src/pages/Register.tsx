import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from 'components/Input';
import { useRegisterAction } from 'hooks/redux/auth';
import { UserFormValues } from 'resources/interfaces';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid Email')
    .required('Name is required'),
  password: Yup.string()
    .required('Password is required'),
  confirmPassword: Yup.string()
    .required('Password is required')
});

const Register = () => {
  const register = useRegisterAction();
  const navigate = useNavigate();

  const handleSubmit = async (values: UserFormValues) => {
    const { confirmPassword, ...data } = values;
    await register(data);
  };

  const form = useFormik({
    validationSchema,
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: handleSubmit
  })

  return (
    <div className="relative h-full w-full bg-white">
      <div className="bg-blue-200 lg:bg-blue-500 w-full h-full lg:bg-opacity-50 flex">
        <div className="flex justify-center w-full">
          <form className="bg-blue-200 bg-opacity-50 px-16 py-16 self-center lg:w-2/5 md:w-3/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-black lg:text-white text-4xl mb-8 font-semibold">Register</h2>
            <div className="flex flex-col gap-4">
              <Input
                id="name"
                label="Username"
                {...form.getFieldProps('name')}
                errorText={form.errors.name && form.touched.name ? form.errors.name : ""}
              />
              <Input
                id="email"
                label="Email"
                type="email"
                {...form.getFieldProps('email')}
                errorText={form.errors.email && form.touched.email ? form.errors.email : ""}
              />
              <Input
                id="password"
                label="Password"
                type="password"
                {...form.getFieldProps('password')}
                errorText={form.errors.password && form.touched.password ? form.errors.password : ""}
              />
              <Input
                id="password"
                label="Confirm Password"
                type="password"
                {...form.getFieldProps('confirmPassword')}
                errorText={form.errors.confirmPassword && form.touched.confirmPassword ? form.errors.confirmPassword : ""}
              />
            </div>
            <button
              className="bg-blue-600 py-3 text-white rounded-md w-full mt-10 hover:bg-blue-700 transition"
              type="submit"
            >
              Sign up
            </button>
            <p className="text-neutral-500 mt-12">
              <span
                onClick={() => navigate('/login')}
                className="text-black lg:text-white ml-1 hover:underline cursor-pointer">
                Already have an account
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
