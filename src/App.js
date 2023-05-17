import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './Components/map.css';


function App() {
  return (
    <div>
      <div>
      <Navbar />
      </div>
      <div className = 'container'>
      <section class="bg-gray text-dark p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div class="d-sm-flex align-items-center justify-content-between">
            <div>
                <h1>Cloud  <span class="text-warning">Integration Project</span></h1>
              
            </div>
            <img class="img-fluid w-50" src="images/frontend-4342425_1280.png" alt=""/>
        </div>
       </section>
        </div>

        <div className = "container">
      <h1>Contact Us</h1>
      <ul>
        <li>
          Email: steve@gmail.com
        </li>
        <li>
          Phone Number : 0540246994
        </li>
      <il className = 'map-h2'>Click Here 
       </il>
      <iframe className ='google-map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12785.514435332032!2d3.0245679!3d36.7614838!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb33225490931%3A0xcfc19f0953b60033!2sGoMyCode%20Algeria!5e0!3m2!1sfr!2sdz!4v1683231402843!5m2!1sfr!2sdz"></iframe>
      
      </ul>
      </div>
      <Footer />
      </div>
  );
}

export default App;