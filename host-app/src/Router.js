import React from 'react';
import { BrowserRouter, Redirect, Route as BaseRoute, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';

const Home = React.lazy(() => import('./pages/Home'));
const ModuleOne = React.lazy(() => import('./pages/ModuleOne'));
const ModuleTwo = React.lazy(() => import('./pages/ModuleTwo'));
const ModuleThree = React.lazy(() => import('./pages/ModuleThree'));

const Route = ({ component: Component, ...restProps }) => {
  return (
    <BaseRoute 
      {...restProps}
      render={(props) => {
        console.log('path', props.location?.pathname)
        return (
        <ErrorBoundary key={props.location?.pathname}>
          <Component {...props} />
        </ErrorBoundary>
      )}} 
    />
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/module-1" exact component={ModuleOne} />
          <Route path="/module-2" exact component={ModuleTwo} />
          <Route path="/module-3" exact component={ModuleThree} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
