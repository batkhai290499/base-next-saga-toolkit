/* eslint-disable */
import * as React from 'react';
import { Fields } from '~/components/Field';
import { useForm } from 'react-hook-form';
import Selects from '~/components/Select/Select';
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: [string];
};

function CreateEmployee() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <div>
      <form onSubmit={onSubmit}>
        <Fields name="First Name" register={register('firstName')} />
        <Fields name="Last Name" register={register('lastName')} />
        <Fields name="Email" register={register('email')} />
        <Fields name="Phone" register={register('phone')} />
        <Selects
          name="Gender"
          value={['Female', 'Male']}
          register={register('gender')}
        />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
export default CreateEmployee;
