import React, { Suspense } from 'react';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import Fallback from './components/common/Fallback';
import type { History } from 'history';

const Tasks = React.lazy(() => import('./features/Tasks'));
const PageNotFound = React.lazy(() => import('./components/common/PageNotFound'));

export default function RouterSuspense({ history }: { history: History }): JSX.Element {
  return (
    <Router history={history}>
      <Suspense fallback={<Fallback />}>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/tasks" />} />
          <Route path="/tasks" component={Tasks} />
          <Route render={() => <PageNotFound />} />
        </Switch>
      </Suspense>
    </Router>
  );
}
