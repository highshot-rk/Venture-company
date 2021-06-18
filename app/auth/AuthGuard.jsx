import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import AppContext from "app/appContext";

class AuthGuard extends Component {
  constructor(props, context) {
    super(props);
    let { routes } = context;

    this.state = {
      authenticated: true,
      routes
    };
  }

  componentDidMount() {
    if (!this.state.authenticated) {
      this.redirectRoute(this.props);
    }
  }

  componentDidUpdate() {
    if (!this.state.authenticated) {
      this.redirectRoute(this.props);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.authenticated !== this.state.authenticated;
  }

  static getDerivedStateFromProps(props, state) {
    const { location, user } = props;
    const { pathname } = location;
    const matched = state.routes.find(r => r.path === pathname);
    const authenticated =
      matched && matched.auth && matched.auth.length
        ? matched.auth.includes(user.role)
        : true;

    return {
      authenticated
    };
  }

  redirectRoute(props) {
    const { location } = props;
    const { pathname } = location;
  }

  render() {
    let { children } = this.props;
    const { authenticated } = this.state;

    // return <Fragment>{children}</Fragment>;

    return authenticated ? <Fragment>{children}</Fragment> : null;
  }
}

AuthGuard.contextType = AppContext;

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(AuthGuard);
