import React, { Suspense } from 'react';
import Router from './Router';
import GlobalStyles from './globalStyles';

const App = () => {
  return (
    <Suspense fallback="Loading">
      <GlobalStyles />
      <Router />
    </Suspense>
  );
}

export default App;
