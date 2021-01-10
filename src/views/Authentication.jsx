import { Link } from 'react-router-dom';
import { EmailInput, PasswordInput } from '../components/inputs';
import { Button } from '../components/buttons';

export const Authentication = () => {
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h2 className="text-xs-center">Login</h2>
            <p className="text-xs-center">
              <Link to="/register">Need an account?</Link>
            </p>
            <form>
              <fieldset>
                <EmailInput />
                <PasswordInput />
              </fieldset>
              <Button 
                buttonClass="btn btn-lg btn-primary pull-xs-right"
                buttonType="submit"
                buttonName="Sign in"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};