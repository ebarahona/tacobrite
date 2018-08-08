import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render () {
    if (this.props.formType === 'login') {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <p>Welcome back</p>
            <p>Please enter your email and password to log in.</p>
            {this.props.navLink}

            <label>Email address
              <input
                type='text'
                onChange={this.update('email')} />
            </label>

            <label>Password
              <input type='password'
                onChange={this.update('password')} />
            </label>

            <p>{this.props.errors}</p>

            <button>Log In</button>
          </form>
        </div>
      );
    } else {
      return (
        <div className='main-form'>
          <form className='login-form' onSubmit={this.handleSubmit}>
            <p className='welcome-main'>Welcome back</p>
            <p className='welcome-sub'>Create an account.</p>
            {this.props.navLink}

            <label className='user-form-field'>Email address
              <input
                type='text'
                onChange={this.update('email')} />
            </label>

            <div className='names'>
              <label className='first-name'>First Name
                <input
                  type='text'
                  onChange={this.update('first_name')} />
              </label>

              <label className='last-name'>Last Name
                <input
                  type='text'
                  onChange={this.update('last_name')} />
              </label>
            </div>

            <label className='user-form-field'>Password
              <input
                type='password'
                onChange={this.update('password')} />
            </label>

            <p>{this.props.errors}</p>

            <p>Your password must be at least 8 characters</p>
            <p>By signin up, I agree to give Eventlite a 5 star rating on google.</p>

            <button>Sign Up</button>

          </form>
        </div>
      );
    }
  }
}

export default withRouter(SessionForm);
