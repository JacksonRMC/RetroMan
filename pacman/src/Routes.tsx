import React from 'react';
import Switch, { Route } from 'react-router-dom';

import { GamePage } from './pages/GamePage/GamePage';
import { MazePage } from './pages/MazePage/MazePage';
import { SpritePage } from './pages/SpritePage/SpritePage';
import { WayFindingPage } from './pages/WayFindingPage/WayFindingPage';

const ExampleComponent: React.FC = () => {
  return (
    <>
      <div>WOrking</div>
    </>
  )
};
export const Routes: React.FC = () => {
  return (
    <React.Component>
      <Route path="/" element={<ExampleComponent />}>
        <GamePage />
      </Route>
      <Route path="/sprites">
        <SpritePage />
      </Route>
      <Route path="/maze">
        <MazePage />
      </Route>
      <Route path="/way-finding">
        <WayFindingPage />
      </Route>
    </React.Component>
  );
};
