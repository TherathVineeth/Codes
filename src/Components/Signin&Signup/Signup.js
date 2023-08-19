import React from 'react';
import { useForm } from 'react-hook-form';
import './Signup.css';

function Restaurant() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch('password', '');

  const onformSubmit = async (data) => {
    try {
      const requestData = {
        UserName: data.username,
        Password: data.password,
        Role: data.role,
        Email: data.emailId,
      };

      const response = await fetch('https://localhost:44324/api/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        console.log('Registered successfully');
      } else {
        console.log('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col mt-4 col-md-8 offset-md-2">
            <form onSubmit={handleSubmit(onformSubmit)}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                  id="username"
                  {...register('username', { required: 'User Name is required' })}
                />
                {errors.username && (
                  <div className="invalid-feedback">{errors.username.message}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  id="password"
                  {...register('password', { required: 'Password is required' })}
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password.message}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                  id="confirmPassword"
                  {...register('confirmPassword', {
                    required: 'Confirm Password is required',
                    validate: (value) => value === password || 'Passwords do not match',
                  })}
                />
                {errors.confirmPassword && (
                  <div className="invalid-feedback">{errors.confirmPassword.message}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="role" className="form-label">
                  Role
                </label>
                <select
                  className={`form-select ${errors.role ? 'is-invalid' : ''}`}
                  id="role"
                  {...register('role', { required: 'Role is required' })}
                >
                  <option value="">Select Role</option>
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </select>
                {errors.role && (
                  <div className="invalid-feedback">{errors.role.message}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="emailId" className="form-label">
                  Email ID
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.emailId ? 'is-invalid' : ''}`}
                  id="emailId"
                  {...register('emailId', { required: 'Email is required' })}
                />
                {errors.emailId && (
                  <div className="invalid-feedback">{errors.emailId.message}</div>
                )}
              </div>

              <div className="button-container">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Restaurant;
