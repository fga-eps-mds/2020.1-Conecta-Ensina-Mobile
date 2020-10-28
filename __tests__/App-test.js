/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {jest} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.useFakeTimers();

it('renders correctly', async () => {
  renderer.create(<App />);
});
