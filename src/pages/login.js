import React from 'react'
import PropTypes from 'prop-types'
import SEO from '../components/seo'

import PageSpinner from '../components/Spinner/PageSpinner'
import LoginForm from '../components/Login/LoginForm'

class Login extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool,
  }

  static defaultProps = {
    isLoading: false,
  }

  render() {
    const { isLoading } = this.props
    
    return (
      <>
        <PageSpinner isLoading={isLoading}>
          <SEO title="Holepunch Login" />
          <div className="container page__header">
            <h2>Login</h2>
          </div>
          <div className="container mb-5">
            <LoginForm />
          </div>
        </PageSpinner>
      </>
    )
  }
}

export default Login
