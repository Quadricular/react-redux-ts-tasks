import React, { Suspense } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Fallback from './components/common/Fallback';

const Tasks = React.lazy(() => import('./pages/Tasks'));
const PageNotFound = React.lazy(() => import('./components/common/PageNotFound'));

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Fallback />}>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/tasks" />} />
          <Route path="/tasks" component={Tasks} />
          <Route render={() => <PageNotFound />} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
