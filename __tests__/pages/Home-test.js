import '@testing-library/jest-native/extend-expect';
import React, {useContext} from 'react';
import Routes from '../../src/routes/index';
import SquareButton from '../../src/components/SquareButton';
import Home from  '../../src/pages/Home';
import {render, fireEvent} from '@testing-library/react-native';
import {act} from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from '../../src/contexts/auth.js';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');


describe(('testing Home page'),()=>{

  test(('should be match snapshot'),()=>{
    const page = render(<Home/>).toJSON();
    expect(page).toMatchSnapshot();
  });

  test(('should render squareButtons'),()=>{
    const {getByText, getByTestId} = render(<Home/>)
    const squareButton1 = getByText('Reforço Escolar');
    const squareButton2 = getByText('Idiomas');
    const squareButton3 = getByText('Vestibular');

    expect(squareButton1.props.children).toBe('Reforço Escolar');
    expect(squareButton2.props.children).toBe('Idiomas');
    expect(squareButton3.props.children).toBe('Vestibular');

  
  })

}); 
