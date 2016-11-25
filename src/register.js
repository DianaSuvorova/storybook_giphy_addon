import React from 'react';
import addons from '@kadira/storybook-addons';
import Panel from './panel';


// Register the addon with a unique name.
addons.register('diana.suvorova/giphyTab', (api) => {
  // Also need to set a unique name to the panel.
  addons.addPanel('diana.suvorova/giphyTab', {
    title: 'a giph for you ',
    render: () => (
      <Panel api={api} />
    ),
  });
});
