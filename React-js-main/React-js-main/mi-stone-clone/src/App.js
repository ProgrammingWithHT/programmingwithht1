
import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import {BrowserRouter, BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Slider from './components/Slider.js'
import data from './data/data.json'
import Offers from './components/Offers.js'
import Heading from './components/Heading.jsx'
import StarProduct from './components/StarProduct.js'
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js'
import HotAccessories from './components/HotAccessories.js'
import ProductReviews from './components/ProudctReviews.js'
import Videos from './components/Videos.js'
import Banner from './components/Banner.js'
import Footer from './components/Footer.js'
import NavOption from './components/NavOption'

function App() {
  return (
    <Router>

      <PreNavbar/>
      <Navbar/>
      <Routes>
        <Route exact path='/miphones' element={<NavOption miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>}/>
        <Route exact path='/redmiphones' element={<NavOption miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>}/>
        <Route exact path='/tv' element={<NavOption miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>}/>
        <Route exact path='/laptops' element={<NavOption miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>}/>
        <Route exact path='/lifestyle' element={<NavOption miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>}/>
        <Route exact path='/home' element={<NavOption miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>}/>
        <Route exact path='/audio' element={<NavOption miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>}/>
        <Route exact path='/accessories' element={<NavOption miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>}/>
      </Routes>
      {/* <NavOption miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/> */}
      
      <Slider start={data.banner.start}/>
      <Offers />
      <Heading text="STAR PRODUCTS"/>
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES"/>
      <HotAccessoriesMenu />

      <Routes>
        <Route exact path='/' element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
        <Route exact path='/smartDevice' element={<HotAccessories music={data.hotAccessories.smartDevice} musicCover={data.hotAccessoriesCover.smartDevice} />} />
        <Route exact path='/home' element={<HotAccessories music={data.hotAccessories.home} musicCover={data.hotAccessoriesCover.home} />} />
        <Route exact path='/lifeStyle' element={<HotAccessories music={data.hotAccessories.lifeStyle} musicCover={data.hotAccessoriesCover.lifeStyle} />} />
        <Route exact path='/mobileAccessories' element={<HotAccessories music={data.hotAccessories.mobileAccessories} musicCover={data.hotAccessoriesCover.mobileAccessories} />} />        
      </Routes>

      <Heading text='PRODUCT REVIEWS' />
      <ProductReviews productReviews={data.productReviews}/>

      <Heading text='VIDEOS' />
      <Videos videos={data.videos} />

      <Heading text='IN THE PRESS' />
      <Banner banner={data.banner} />

      <Footer footer={data.footer} />

    </Router>
  );
}

export default App;
