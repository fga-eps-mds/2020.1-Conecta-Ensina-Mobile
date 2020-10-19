import '@testing-library/jest-native/extend-expect';
import React, {useContext} from 'react';
import Routes from '../../src/routes/index';
import Login from  '../../src/pages/Login/index';
import {render, fireEvent} from '@testing-library/react-native';
import {act} from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from '../../src/contexts/auth.js'

//Silence warning
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');


describe(('testing Login page'),()=>{

  test(('should renders background'), ()=>{
    const {getByTestId} = render(<Login/>);
    const background = getByTestId('background');

    expect(background).toBeDefined();
  });


  test(('should renders logo'), ()=>{
    const {getByTestId} = render(<Login/>);
    const logo = getByTestId('Logo');

    expect(logo.props.source).toEqual({ testUri: '../../../src/assets/logo.png' });
  });


  test(('should renders Icon'), ()=>{
    const {getByTestId} = render(<Login/>);
    const icon = getByTestId('Icon');

    expect(icon.props.source).toEqual({ testUri: '../../../src/assets/user_white.png' });
  });


  test(('button "Registrar-se" should be pressable'), async ()=>{
    const component = (
      <NavigationContainer>
        <AuthProvider>
          <Routes/>
        </AuthProvider>
      </NavigationContainer>  
    );
  
    const {getByText} = render(component);
    await act(async ()=>{
      const RegistrarButton = getByText('Registre-se');
      const EntrarButton = await getByText('Entrar');
  
      fireEvent.press(RegistrarButton);
      //Por enquanto o teste abaixo não funciona
      fireEvent.press(EntrarButton);
    })

    
  });
  test(('should be match snapshot'),()=>{
    const page = render(<Login/>).toJSON();

    expect(page).toMatchSnapshot();
  })
}); 

