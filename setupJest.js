import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';

global.fetch = require('jest-fetch-mock');
jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
