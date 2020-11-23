/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {expect, jest, test} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.useFakeTimers();
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

it('renders correctly', async () => {
  renderer.create(<App />);
});
