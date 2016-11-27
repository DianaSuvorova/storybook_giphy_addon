import { configure } from '@kadira/storybook';


function loadStories() {
  require('../dist');
}

configure(loadStories, module);
