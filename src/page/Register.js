import axios from 'axios';
import React from 'react';
import validator from 'validator';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      errors: {},
      success: false,
    };
  }

  handChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleConfirmPassword = (e) => {
    this.setState({
      confirmPassword: e.target.value,
    });
  };

  validateForm = () => {
    const { email, password, confirmPassword } = this.state;
    const errors = {};
    let isValid = true;

    if (!validator.isEmail(email)) {
      errors.email = 'email not valid';
      isValid = false;
    }
    if (password.trim().length < 4) {
      errors.password = 'pass word not valid';
      isValid = false;
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = 'wrong';
      isValid = false;
    }
    this.setState({
      errors,
    });
    return isValid;
  };

  handleRegister = async (e) => {
    const data = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };
    console.log(data);

    const isValid = this.validateForm();
    if (!isValid) {
      return;
    } else {
      alert('register');
    }

    await axios
      .post('https://reqres.in/api/register', data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { email, errors, password, confirmPassword } = this.state;
    return (
      <div id='login'>
        <h1 className='text-center text-black heading pt-5'>Facebook</h1>
        <div className='container'>
          <div
            id='login-row'
            className='row justify-content-center align-items-center'
          >
            <div id='login-column' className='col-md-6'>
              <div id='login-box' className='col-md-12'>
                <form id='login-form' className='form' action='' method='post'>
                  <h3 className='text-center text-info text-white'>
                    Register account
                  </h3>
                  <div className='form-group'>
                    <div>
                      <input
                        type='email'
                        value={email}
                        className='form-control'
                        placeholder='Email'
                        onChange={(e) => this.handChangeEmail(e)}
                      />
                      <p>{errors.email} </p>
                    </div>
                  </div>
                  <br />
                  <div className='form-group password-box'>
                    <input
                      type='password'
                      value={password}
                      className='form-control'
                      placeholder='Password'
                      autoComplete='on'
                      onChange={(e) => this.handleChangePassword(e)}
                    />
                    {errors.password}
                  </div>
                  <br />
                  <div className='form-group password-box'>
                    <input
                      type='password'
                      value={confirmPassword}
                      className='form-control'
                      placeholder='Confirm password'
                      autoComplete='on'
                      onChange={(e) => this.handleConfirmPassword(e)}
                    />
                    {errors.confirmPassword}
                  </div>

                  <div className='form-group'>
                    <br />
                    <button
                      type='button'
                      className='btn btn-info btn-md '
                      onClick={(e) => this.handleRegister(e)}
                    >
                      <h1>Register</h1>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
