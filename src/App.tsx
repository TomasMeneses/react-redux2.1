import { Provider } from "react-redux";



import store from "./store";

import AboutUs from "./components/AboutUs/AboutUs";
import Home from "./components/Home/Home";

import { ChakraProvider } from "@chakra-ui/react";

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <ChakraProvider>
          
            <Home />
            <AboutUs />
         
        </ChakraProvider>
      </Provider>
    </>
  );
};

export default App;
