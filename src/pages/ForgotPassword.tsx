import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useForgotPasswordAction } from 'hooks/redux/auth';
import { ForgotPasswordRequest } from 'resources/interfaces';
import CustomInput from 'components/CustomInput';
import Button from 'components/Button';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid Email')
    .required('Email is required'),
});

const ForgotPassword = () => {
  const forgotPassword = useForgotPasswordAction();
  const navigate = useNavigate();

  const handleSubmit = async (values: ForgotPasswordRequest) => {
    await forgotPassword(values);
  };

  const form = useFormik({
    validationSchema,
    initialValues: {
      email: ''
    },
    onSubmit: handleSubmit
  });

  return (
    <form className="w-4/5 sm:w-3/5 md:w-4/5 lg:w-3/5" onSubmit={form.handleSubmit}>
      <h2 className="text-4xl mb-8 font-bold">
        Lost password
      </h2>
      <div>
        <CustomInput
          label="E-Mail Address"
          placeholder="E-Mail Address"
          {...form.getFieldProps('email')}
          errorText={form.errors.email ? form.errors.email : ''}
        />
        <Button
          label="Request new password"
          classnames="!mt-3 rounded-sm"
        />
        <p
          onClick={() => navigate("/login")}
          className="hover:underline cursor-pointer text-center text-sm !mt-32"
        >
          Back
        </p>
      </div>
    </form>
  );
};

export default ForgotPassword;
