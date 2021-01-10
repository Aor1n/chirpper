import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { GlobalFeed, Article } from './views';

export default () => {
  return (
    <Switch>
      <Route path='/' component={GlobalFeed} exact /> {/* 
          exact нужен чтобы перекрыть дефолтное поведение роутеров, 
          так как ищет и находит по первому совпадению - по /слэшу/ 
        */}
      <Route path='/articles/:slug' component={Article} />
    </Switch>
  )
}