import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';
import fetchMock from 'jest-fetch-mock';
//global.fetch = require('jest-fetch-mock');

// eslint-disable-next-line no-undef
jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
fetchMock.enableMocks();
