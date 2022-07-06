import ls from './assets/images/ls.png'
import twitter from './assets/images/Twitter-Icon.png'
import facebook from './assets/images/Facebook-Icon.png'
import insta from './assets/images/Instagram-Icon.png'
import git from './assets/images/GitHub-Icon.png'
import mail from './assets/images/Mail.png'
import linkedin from './assets/images/linkedin.png'
import './App.css';

function App() {
  return (
    <div class='main'>
      <div>
      <img class='ls' src={ls} alt="ls" ></img>
      <div class= 'main2'>
      <h1 class='name'>Laura Smith </h1>
      <p style={{color: "white", textAlign: "center", color:"#F3BF99"}}>Frontend Developer</p>
      <p style={{color: "white", textAlign: "center", fontSize: "small", marginTop: "0px", padding: "0px"}}>laurasmith.website</p>
      <button type='button' class='btne'><img src={mail} alt="fail image" />Email</button>
      <button class='btnl'><img src={linkedin} alt='fail' />LinkedIn</button>
      <h3 style={{color: "white" , padding: "10px"}}>About</h3>
      <p class= 'about'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
      <h3 style={{color: "white" , padding: "10px"}}>Interests</h3>
      <p class= 'about'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
    </div>
    <div class= 'main3'>
      <img src={twitter} alt='twiter logo fail' style={{marginLeft: "65px"}}></img>
      <img src={facebook} alt='logo fail' style={{marginLeft: "20px"}}></img>
      <img src={insta} alt=' logo fail' style={{marginLeft: "20px"}}></img>
      <img src={git} alt=' logo fail' style={{marginLeft: "20px"}}></img>

    </div>
    </div>
    </div>
    
    
  );
}

export default App;
