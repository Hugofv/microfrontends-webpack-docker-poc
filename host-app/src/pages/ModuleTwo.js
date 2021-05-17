import React from 'react';
const Module2 = React.lazy(() => import('module2/Module2'));

const ModuleTwo = () => {
  return (
    <Module2 />
  );
}

export default ModuleTwo;
