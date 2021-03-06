import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SEO from '../components/seo'

import PageSpinner from '../components/Spinner/PageSpinner'
import SignupForm from '../components/Signup/SignupForm'

class Signup extends Component {
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
          <SEO title="Holepunch Signup" />
          <div className="container page__header">
            <h2>Sign up</h2>
          </div>
          <div className="container mb-5">
            <SignupForm />
          </div>
        </PageSpinner>
      </>
    )
  }
}

export default Signup
