import { useForm } from 'react-hook-form';
import axios from 'axios';

function RegistrationForm() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/register', data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register({ required: true })} />
      {errors.firstName && <span>This field is required</span>}
      <input name="lastName" ref={register({ required: true })} />
      {errors.lastName && <span>This field is required</span>}
      <input name="phoneNumber" ref={register({ required: true })} />
      {errors.phoneNumber && <span>This field is required</span>}
      <input name="email" ref={register({ required: true })} />
      {errors.email && <span>This field is required</span>}
      <input name="address" ref={register({ required: true })} />
      {errors.address && <span>This field is required</span>}
      <input name="employedDate" ref={register({ required: true })} />
      {errors.employedDate && <span>This field is required</span>}
      <input name="password" type="password" ref={register({ required: true })} />
      {errors.password && <span>This field is required</span>}
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
