import React from 'react';
import AppContext from '../../context';
import GeneralView from '../../views/GeneralView/GeneralView';

const MenuRoute = () => (
  <AppContext.Consumer>
    {(context) => (
      <>
        {context.linkInfo.map((item, index) => (
          <GeneralView key={index} {...item} />
        ))}
      </>
    )}
  </AppContext.Consumer>
);

export default MenuRoute;
