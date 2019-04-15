import React from 'react';
import { AppContext } from '../App/AppProvider';

export default function({ firstVisit }) {
  return (
    <AppContext.Consumer>
      {({ firstVisit }) =>
        firstVisit ? <div>Please add to your portfolio</div> : null
      }
    </AppContext.Consumer>
  );
}
