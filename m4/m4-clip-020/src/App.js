import { ThemeProvider } from './components/contexts/ThemeContext';

import Layout from "./components/layout/Layout";



const App = ({ url }) => {


  return (
    <ThemeProvider>
      <Layout url={url} />
    </ThemeProvider>
  );
};

export default App;
