import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'views/Home';
import Zabiegi from 'views/Zabiegi';
import Kontakt from 'views/Kontakt';
import Cennik from 'views/Cennik';
import Onas from 'views/O_nas';

function Root() {
  return (
    <MainTemplate>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/zabiegi" component={Zabiegi} />
          <Route path="/kontakt" component={Kontakt} />
          <Route path="/cennik" component={Cennik} />
          <Route path="/onas" component={Onas} />
        </Switch>
      </BrowserRouter>
    </MainTemplate>
  );
}

export default Root;
