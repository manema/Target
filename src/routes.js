import routesPaths from './constants/routesPaths';
import HomeForm from './components/user/HomeForm';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';
import NotFoundPage from './containers/NotFoundPage';
import FirstTargetMenu from '../src/components/user/FirstTargetMenu';
import withMenu from '../src/components/common/withMenu';

const routes = [
  {
    path: routesPaths.index,
    component: HomeForm,
    exact: true,
    private: true
  },
  {
    path: routesPaths.login,
    component: LoginPage
  },
  {
    path: routesPaths.signUp,
    component: SignUpPage
  },
  {
    path: routesPaths.homeMenuNoTargets,
    component: withMenu(FirstTargetMenu)
  },
  {
    component: NotFoundPage
  },
];

export default routes;
