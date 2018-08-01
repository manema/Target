import React from 'react';

import WelcomeMenu from '../user/WelcomeMenu';
import withMenu from '../common/withMenu';
import '../../styles/homePage.css';

const HomeForm = () => {
  const EnhancedComponent = withMenu(WelcomeMenu);
  return <EnhancedComponent />;
};

export default HomeForm;
