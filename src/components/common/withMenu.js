import React, { Component } from 'react';
import Map from '../common/Map';


function withMenu(WrappedComponent) {
  return class withMenu extends Component {
    constructor(props) {
      super(props);
      console.log('a');
    }

    render() {
      return (
        <div className="home_menu">
          <div className="menu_area">
            <WrappedComponent />
          </div>
          <Map />
        </div>
      );
    }
  };
}

export default withMenu;
