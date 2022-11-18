import {getStorybookUI} from '@storybook/react-native';

import './storybook.requires';

const StorybookUIRoot = getStorybookUI({
  isUIHidden: false,
});

export default StorybookUIRoot;
