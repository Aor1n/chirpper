import { useState } from 'react';
import { Link } from 'react-router-dom';

import { EmailInput, PasswordInput } from '../components/inputs';
import { Button } from '../components/buttons';

import useFetch from '../hooks/useFetch';

export const Authentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [{isLoading, response, error}, doFetch] = useFetch('/users/login');

  console.log('fff', isLoading, response, error);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('data', email, password);
    doFetch({
      method: 'post',
      data: {
        user: {
          email: 'm@mail.ru',
          password: '123s'
        }
      }
    });
  };
  // console.log(isLoading);

  
  // useEffect(() => {
  //   console.log('effect was triggered');
  //   document.title = email;
  // }); // позволяет работать с sideeffect(все, что не относится к реакту)
  //     // первый раз используется сразу после первого рендера
  //     // также используется после всех последующих перерендеров!
      
  //   useEffect(() => {
  //     console.log('effect was triggered, []');
  //     document.title = email;
  //   }, [email]) // позволяет создавать зависимости для изменения. Изменение произойдет только после того,
  //          // как зависимости изменились
  //          // ЕСЛИ массив остался пустым, то хук используется только после первого рендера!

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
                disabled={isLoading}
                buttonName="Sign in"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};