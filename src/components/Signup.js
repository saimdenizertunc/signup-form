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

       console.log(JSON.stringify(values, null, 2));

     },
     validationSchema,
   });
  return (
     <div>
    <h2>Let's get you started</h2>
    
    <form onSubmit={formik.handleSubmit}>
    <label htmlFor="fullName">Full Name</label>

       <input

         id="fullName"

         name="fullName"

         type="text"

         onChange={formik.handleChange}

         value={formik.values.fullName}

       />
    
     <label htmlFor="email">Email adress</label>

       <input

         id="email"

         name="email"

         type="e-mail"

         onChange={formik.handleChange}

         value={formik.values.email}

       />
    
    <label htmlFor="email">Phone number</label>

       <input

         id="countryCode"

         name="countryCode"


         onChange={formik.handleChange}

         value={formik.values.countryCode}

       />

       <input

         id="phoneNumber"

         name="phoneNumber"

         onChange={formik.handleChange}

         value={formik.values.phoneNumber}

       />

       <label htmlFor="password">Create Password</label>

       <input

         id="password"

         name="password"

         type="password"

         onChange={formik.handleChange}

         value={formik.values.password}

       />

       <label htmlFor="confirmPassword">Confirm Password</label>

       <input

         id="confirmPassword"

         name="confirmPassword"

         type="password"


         onChange={formik.handleChange}

         value={formik.values.confirmPassword}

       />

       <label htmlFor="location">Location</label>

       <input

         id="location"

         name="location"

         onChange={formik.handleChange}

         value={formik.values.location}

       />
    

        
    <br/>
    <button type="submit">Sign Up</button>
    </form>
    
    <p>Already a user? <a href='#'>Login</a></p>
  </div>
  )
}

export default Signup