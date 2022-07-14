import * as yup from 'yup';

const validations = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(5).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password')]).required()
});

export default validations;