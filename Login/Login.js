import React from "react";
import { useFormik} from 'formik';
import Card from '../UI/Card/Card';
import styled from 'styled-components';
import Button from '../UI/Button/Button';
import * as Yup from 'yup';

const FormControl = styled.div `


 & form {
  width: 90%;
    max-width: 30rem;
    margin: 2rem auto;
    padding: 2rem;
     margin: 1rem 0;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    

 }

& label,
& input {
  display: block;
}

& label {
  font-weight: bold;
    flex: 1;
    color: #464646;
    margin-bottom: 1rem;
    margin-top: 1rem;
    margin: 1rem 0;
    display: flex;
    align-items: stretch;
    flex-direction: column;
  
}

& input {
  flex: 3;
  font: inherit;
  padding: 0.35rem 0.35rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  
  
}

& input:focus {
  outline: none;
  border-color: #4f005f;
  background: #f6dbfc;
}


&.actions {
  text-align: center;
}

@media (min-width: 768px) {
 
  align-items: center;
  flex-direction: row;

}

`;


// PREGUNTAR ESTO A RIQUI ----input
// flex: 4;
//   font: inherit;
//   padding: 0.35rem 0.35rem;
//   border-radius: 6px;
//   border: 1px solid  ${props => (props.invalidinput ? 'red' : '#ccc' )};
//   background: ${props => props.invalidinput? 'blue': 'trasparent'}
   
 const Login = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
validationSchema: Yup.object({
email: Yup.string().email('Invalid email address').required('Required'),
password: Yup.string()
.min(7, 'Must be 7 characters or more')
.required('Required'),
}),

    onSubmit: values => {
    console.log(values)
    },
  });

  return (
    <Card>
    <FormControl>
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="juan@gmail.com"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
  {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
 
<label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
  {formik.touched.password && formik.errors.password ? (
         <div>{formik.errors.password}</div>
       ) : null}

    </form>
</FormControl>

<Button type="submit">Loggin</Button>

</Card>

)}
 
export default Login;





























// const [enteredEmail, setEnteredEmail] = useState ("");
// const [emailIsValid, setEmailIsValid] = useState ("");
// const [enteredPassword, setEnteredPassword] = useState ("");
// const [passwordIsValid, setPasswordIsValid] = useState ("");
// const [formIsValid, setFormIsValid] = useState(false);

// useEffect(() => {
// const identifier = setTimeout(() =>{
//   console.log('checking for validity!');
//   setFormIsValid(
//     enteredEmail.includes('@') && enteredPassword.trim().length > 6
//   );
// } ,500);



// return () =>{
//   console.log('CLEANUP');
//   clearTimeout (identifier);
// };

// }, [enteredEmail, enteredPassword]);

// const emailChangeHandler = (event) => {
//     setEnteredEmail(event.target.value);
//   };

//   const passwordChangeHandler = (event) => {
//     setEnteredPassword(event.target.value);
//   };

//   const validateEmailHandler = () => {
//     setEmailIsValid(enteredEmail.includes('@'));
//   };

//   const validatePasswordHandler = () => {
//     setPasswordIsValid(enteredPassword.trim().length > 6);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     props.onLogin(enteredEmail, enteredPassword);
//   };

// return (

//     <Card>
//       <form onSubmit={submitHandler}>
//         <FormControl invalidinput={!emailIsValid}>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={enteredEmail}
//             onChange={emailChangeHandler}
//             onBlur={validateEmailHandler}
//             // invalid={emailIsValid === false}
//             //className={!emailIsValid && 'invalid input'}
           
//           />
//         </FormControl>
//         <FormControl invalidinput={!passwordIsValid}>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={enteredPassword}
//             onChange={passwordChangeHandler}
//             onBlur={validatePasswordHandler}
//             invalid={passwordIsValid === false}
//             //className={!passwordIsValid && 'invalid'}
//           />
//         </FormControl>
//         <FormControl>
//           <Button type="submit"  disabled={!formIsValid}>
//             Login
//           </Button>
//         </FormControl>
//       </form>
//     </Card>

//   );


//         }; 
       
      

