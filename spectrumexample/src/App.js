import './App.css';
import {
  Provider,
  defaultTheme,
  darkTheme,
  Text
} from "@adobe/react-spectrum";

import Third from './Third';
import Fourth from './Fourth';

function App() {
  return (
    <Provider theme={defaultTheme}  >
    <>
      <Text>Hello World</Text> <br />
      <Fourth/>
    </>
    </Provider>
  );
}

export default App;
