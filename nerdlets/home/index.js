import React from 'react';
import App from './App';

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class HomeNerdlet extends React.Component {
  render() {
    return (
      <div style={{margin: "2rem"}}>
        <App />
      </div>
    )
  }
}
