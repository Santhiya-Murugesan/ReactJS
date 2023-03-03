// import logo from './logo.svg';
import './App.css';
// import Home from './home';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Hello from './Components/HelloWorld/helloworld.js';
import Congrats_cards from './Components/CongratsCards/congratscards.js';
import SuperOverLeague from './Components/SuperOverLeague/super-over-league.js';
import SocialButton from './Components/Social Button/socialButton';
import NotificationsApplication from './Components/Notifications Application/NotificationsApplication';
import LoginDesign from './Components/Login Design/loginDesign';
import Technologycards from './Components/Technology cards/Technologycards.js';
import ResuableBanners from './Components/ResuableBanners/ResuableBanners';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Counter from './Components/ReactHook/ReactHook';
import Fruits from './Components/Fruits Counter/FruitsCounter.js';
import Feedbackapp from './Components/FeedbackApp/FeedbackApp';
import Response from './Components/FeedbackApp/Feedbackapp1';
import Datefun from './Components/Datefunction/date';
import Mobiles from './Components/jsonAss/jsonassign';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<ResuableBanners/>}/> */}
          <Route path='/'  element={[<ResuableBanners/>,<Hello/>]}/>
          <Route path='/login'  element={[<ResuableBanners/>,<LoginDesign/>]}/>
          <Route path='/Notify'  element={[<ResuableBanners/>,<NotificationsApplication/>]}/>
          <Route path='/SocialBtn'  element={[<ResuableBanners/>,<SocialButton/>]}/>
          <Route path='/SuperOver'  element={[<ResuableBanners/>,<SuperOverLeague/>]}/>
          <Route path='/tech'  element={[<ResuableBanners/>,<Technologycards/>]}/>
          <Route path='/congrats'  element={[<ResuableBanners/>,<Congrats_cards/>]}/>
          <Route path='/counter'  element={[<ResuableBanners/>,<Counter/>]}/>
          <Route path='/fruit'  element={[<ResuableBanners/>,<Fruits/>]}/>  
          <Route path='/feed'  element={[<ResuableBanners/>,<Feedbackapp/>]}/>
          <Route path='/response'  element={[<ResuableBanners/>,<Response/>]}/>
          <Route path='/date'  element={[<ResuableBanners/>,<Datefun/>]}/>
          <Route path='/mob'  element={[<ResuableBanners/>,<Mobiles/>]}/>
        </Routes>
      </BrowserRouter>


      {/* <BrowserRouter>
        <Routes>
        <Route path='/'  element={<Mymenu/>}/>
          <Route path='/home' element={<Menu/>,<Home/>}/>
          <Route path='about' element={<Menu/>,<About/>}/>
          </Routes>
      </BrowserRouter>
   */}
    </>
  );
}
export default App;