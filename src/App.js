import './App.css';
import styled from 'styled-components'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Footer from './components/Footer';
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from './firebase';
import Spinner from "react-spinkit";

function App() {
const [loading] = useAuthState(auth)

if(loading) {
  return(
    <AppLoading>
      <AppLoadingContents>
       

        <Spinner name="ball-spin-fade-loader" color="#4B59F7" fadeIn="none" />


      </AppLoadingContents>
    </AppLoading>
  )
}

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
     <Switch>
       <Route path="/" exact component={Home} />
     </Switch>
     <Footer />
    </Router>
  );
}

const AppLoading = styled.div`
display: grid;
place-items: center;
height: 100vh;
width: 100%;

`;

const AppLoadingContents = styled.div`

text-align: center;
padding-bottom: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;


export default App;
