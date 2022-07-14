import React from 'react'
import './style.css'
import { useFormik } from 'formik';
import validationSchema from './validation.js';

function Signup() {
    const formik = useFormik({

     initialValues: {
        fullName: '',
        email: '',
        countryCode:'',
        phoneNumber: '',
        password: '',  
        confirmPassword: '',      
        location:''
      },

     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
     validationSchema,
   });

  return (
     <div>
    <h3>Let's get you started</h3>
    
    <form onSubmit={formik.handleSubmit}>
    <label htmlFor="fullName">Full Name</label>
       <input
         id="fullName"
         name="fullName"
         type="text"
         placeholder='Deniz Ertunç'
         onChange={formik.handleChange}
         value={formik.values.fullName}
       />
    {formik.errors.fullName && formik.touched.fullName && (<div className='error'>Name is a required</div>)}
    
     <label htmlFor="email">Email adress</label>

       <input
         id="email"
         name="email"
         type="e-mail"
         placeholder='xxx@abc.com'
         onChange={formik.handleChange}
         value={formik.values.email}
       />
    
    {formik.errors.email && formik.touched.email && (<div className='error'>Email must be valid</div>)}
    
    <label htmlFor="phoneNumber">Phone number</label>

       <input
         id="countryCode"
         name="countryCode"
         placeholder='+90'
         onChange={formik.handleChange}
         value={formik.values.countryCode}

       />
       <input
         id="phoneNumber"
         name="phoneNumber"
         placeholder='123456789'
         onChange={formik.handleChange}
         value={formik.values.phoneNumber}
       />
       {formik.errors.phoneNumber && formik.touched.phoneNumber && (<div className='error'>Phone Number is not valid</div>)}

       <label htmlFor="password">Create Password</label>

       <input
         id="password"
         name="password"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.password}
       />
       {formik.errors.password && formik.touched.password && (<div className='error'>Password must contain 5 character</div>)}

       <label htmlFor="confirmPassword">Confirm Password</label>

       <input
         id="confirmPassword"
         name="confirmPassword"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.confirmPassword}
       />

        {formik.errors.confirmPassword && formik.touched.confirmPassword && (<div className='error'>Password should match</div>)}

       <label htmlFor="location">Location</label>

       <input
         id="location"
         name="location"
         onChange={formik.handleChange}
         value={formik.values.location}
       />
       {formik.errors.location && formik.touched.location && (<div className='error'>Location is required</div>)}
         
    <br/>
    <br/>
    <button type="submit">Sign Up</button>
    </form>
    
    <p>Already a user? <a href='#'>Login</a></p>
    
  </div>
  )
}

export default Signup