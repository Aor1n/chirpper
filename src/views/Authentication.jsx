import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EmailInput, PasswordInput } from '../components/inputs';
import { Button } from '../components/buttons';
import axios from 'axios';

export const Authentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  };
  console.log(isSubmitting)

  useEffect(() => {
    if (!isSubmitting) return;

    axios('https://conduit.productionready.io/api/users/login', {
      method: 'post',
      data: {
        user: {
          email: 'm@mail.ru',
          password: '123s'
        }
      }
    })
    .then(res => {
      console.log('response', res);
      setIsSubmitting(false);
    })
    .catch(err => {
      console.error('error', err);
      setIsSubmitting(false);
    })
  });

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h2 className="text-xs-center">Login</h2>
            <p className="text-xs-center">
              <Link to="/register">Need an account?</Link>
            </p>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <EmailInput
                  inputContainerClass="form-group"
                  inputClass="form-control form-control-lg"
                  inputType="email"
                  inputPlaceholder="Email"
                  inputValue={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <PasswordInput 
                  inputContainerClass="form-group"
                  inputClass="form-control form-control-lg"
                  inputType="password"
                  inputPlaceholder="Password"
                  inputValue={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </fieldset>
              <Button 
                buttonClass="btn btn-lg btn-primary pull-xs-right"
                buttonType="submit"
                disabled={isSubmitting}
                buttonName="Sign in"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};