import React from 'react';
import { storiesOf } from '@kadira/storybook';


storiesOf('Thing', module)
  .add('a button', () => (
    <button>Button</button>
  ))
  .add('another button', () => (
    <button>another Button</button>
  ));
