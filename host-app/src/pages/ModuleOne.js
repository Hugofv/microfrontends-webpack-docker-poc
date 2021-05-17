import React, { useEffect } from 'react';
const Module1 = React.lazy(() => import('module1/Module1'));

const ModuleOne = () => {
  return (
    <Module1 />
  );
}

export default ModuleOne;
