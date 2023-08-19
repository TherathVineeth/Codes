import React from 'react';
import { useForm } from 'react-hook-form';
import './Restaurant.css';

function Restaurant() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm();

  const onformSubmit = async (data) => {
    try {
      const response = await fetch('https://localhost:44324/api/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        console.log('Data saved successfully');
      } else {
        console.log('Failed to save data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const lastNameAndFirstNameShouldNotEqual = (value) => {
    if(!value || !getValues('firstName')){
      return true
    }
    return value  !== getValues('firstName');
  }
  // ... Rest of your code ...

  return (
    <>
      <div>
        <div className="container ">
         <div className="row">
         <div className="col mt-4 col-md-8 offset-md-2">
          <form onSubmit={handleSubmit(onformSubmit)}>
          <div className="mb-3">
          <label htmlFor="txtname" className="form-label">
               First Name
           </label>
            <input type="test"
            className={`form-control`}
            id="txtname"
            {...register("firstName", { required: true} )}
            />
                    
            </div>
                  <div className="mb-3">
                    <label htmlFor="txtname" className="form-label">
                      Last Name 
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                      id="txtname"
                      {...register("lastName", { validate: lastNameAndFirstNameShouldNotEqual})}
                    />
                    {errors.lastName?.type === "validate" && (
                      <div className="invalid-feedback">First Name And Last Name Can't be same</div>
                    )}
                    
                  </div>
    
                  <div className="mb-3">
                  <label htmlFor="txtname" className="form-label">
                     Email ID
                     </label>
                  <input type="text"
                  className={`form-control ${errors.emailId ? "is-invalid" : ""}`}
                      id="txtname"
                      {...register("emailId", { required: "Email is required" })}
                              />
                         {errors.emailId && (
                   <div className="invalid-feedback">{errors.emailId.message}</div>
                     )}
                     </div>

                     <div className="mb-3">
                   <label htmlFor="txtname" className="form-label">
                         Phone Number
                   </label>
                     <input type="text"
               className={`form-control ${errors.phonenumber ? "is-invalid" : ""}`}
                id="txtname"
              {...register("phonenumber", { required: "Phone Number is required" })}
                />
              {errors.phonenumber && (
               <div className="invalid-feedback">{errors.phonenumber.message}</div>
                )}
                 </div>

    
                 <div className="mb-3">
                  <label htmlFor="txtname" className="form-label">
                      User Name
                     </label>
                         <input
                         type="text"
                     className={`form-control ${errors.username ? "is-invalid" : ""}`}
                      id="txtname"
                     {...register("username", { required: "User Name is required" })}
                       />
                      {errors.username && (
                       <div className="invalid-feedback">{errors.username.message}</div>
                           )}
                            </div>

    
                            <div className="mb-3">
                           <label htmlFor="txtname" className="form-label">
                                Password
                            </label>
                             <input type="password"  
                         className={`form-control ${errors.password ? "is-invalid" : ""}`}
                               id="txtname"
                         {...register("password", { required: "Password is required" })}
                            />
                         {errors.password && (
                         <div className="invalid-feedback">{errors.password.message}</div>
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
          </div>
    </>
  );
}

export default Restaurant;
