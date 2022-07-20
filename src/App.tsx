import { useState } from "react";
import './App.css';
import Field from './components/Field'




export default function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [firstNameHasError, setFirstNameHasError] = useState(false);
  const [lastNameHasError, setLastNameHasError] = useState(false);
  const [emailHasError, setEmailHasError] = useState(false);
  const [passwordHasError, setPasswordHasError] = useState(false);


  function onSubmitButtonClicked (e: any) {
    e.preventDefault();
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);

    setFirstNameHasError(firstName.length === 0);
    setLastNameHasError(lastName.length === 0);
    setEmailHasError(email.length === 0);
    setPasswordHasError(password.length === 0);
  }
  
  return (
    <>
      <section id="intro">
        <div className="container">
          <div className="left-col" id='learn'>
            <h1>Learn to code by watching others</h1>
            <br />
            <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
            but understanding how developers think is invaluable.</p>
          </div>
          <div className="right-col">
            <div className="top-box">
              <p><span>Try it free 7 days</span> then $20/mo. thereafter</p>
            </div>
            <div className="form-container">
              <form action="#">
                <Field id="first_name" label="First Name" value={firstName} onChange={setFirstName} hasError={firstNameHasError} placeholder="First Name" errorText="First Name cannot be empty" type="text"/>
                <Field id="last_name" label="Last Name" value={lastName} onChange={setLastName} hasError={lastNameHasError} placeholder="Last Name" errorText="Last Name cannot be empty" type="text"/>
                <Field id="email" label="Email" value={email} onChange={setEmail} hasError={emailHasError} placeholder="Email Address" errorText="Email cannot be empty" type="email"/>
                <Field id="password" label="Password" value={password} onChange={setPassword} hasError={passwordHasError} placeholder="Password" errorText="Password cannot be empty" type="text"/>
                <button type="submit" onClick={onSubmitButtonClicked}>Claim your trial version</button>
                <p className="form-footer">By clicking the button, you are agreeing to our <span>Terms and Services</span> </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p className="attribution">
          Challenge by <a rel="noreferrer" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">Artur Abdullin</a>.
        </p>
      </footer>
    </>
  )
};