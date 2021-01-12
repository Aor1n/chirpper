import { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { EmailInput, PasswordInput, UsernameInput } from '../components/inputs';
import { Button } from '../components/buttons';

import useFetch from '../hooks/useFetch';
import useLocalStorage from '../hooks/useLocalStorage';

export const Authentication = (props) => {
  const isLogin = props.match.path === '/login';
  const apiUrl = isLogin? '/users/login' : '/users';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false);
  const [{isLoading, response}, doFetch] = useFetch(apiUrl);
  const [token, setToken] = useLocalStorage('token');

  const currentPage = isLogin? 'Sign in' : 'Sign up';
  const pageHelper = isLogin? 'Need an account?' : 'Have an account?';
  const pageHelperLink = isLogin? '/register' : '/login';

  // console.log('isLoading/response/error', isLoading, response, error);
  console.log('token', token);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('data', email, password);
    const user = isLogin ? {email, password} : {email, password, username};
    doFetch({
      method: 'post',
      data: {
        user
      }
    });
  };

  useEffect(() => {
    if (!response) return;
    setToken(response.user.token);
    setIsSuccessfullSubmit(true);
  }, [response, setToken]);

  if (isSuccessfullSubmit) {
    return <Redirect to="/" />;
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h2 className="text-xs-center"> {currentPage} </h2>
            <p className="text-xs-center">
              <Link to={pageHelperLink}> {pageHelper} </Link>
            </p>
            <form onSubmit={handleSubmit}>
              <fieldset>
                {!isLogin &&
                <UsernameInput
                  inputContainerClass="form-group"
                  inputClass="form-control form-control-lg"
                  inputType="text"
                  inputPlaceholder="Username"
                  inputValue={username}
                  onChange={e => setUsername(e.target.value)}
                />
                }
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
                buttonName={currentPage}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};