import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

// import Loading from '../common/Loading';
import FirstTargetMenu from '../components/user/FirstTargetMenu';

class FirstTargetMenuPage extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.clicked !== prevProps.clicked) {
      this.render();
    }
  }

  render() {
    console.log(this.props.clicked);
    return (
      <FirstTargetMenu clicked={this.props.clicked} />
    );
  }
}

FirstTargetMenuPage.propTypes = {
  clicked: object.isRequired
}

const mapState = state => ({
  clicked: state.getIn(['map', 'clicked'])
});

export default connect(mapState)(FirstTargetMenuPage);