import logo from './logo.svg';
import './App.css';
import myface from "./myface.jpeg"
import bfp_logo from "./berkeley_food_pantry.png"
import sewa_logo from "./sewa_logo.png"
import scheme_logo from "./scheme_logo.png"
import ants_logo from "./ants_logo.png"
import github_logo from"./github_logo.png"
import email_logo from "./email_logo.png"
import linkedin_logo from "./linkedin_logo.png"



function App() {
  return (   
    <div className="General">

      <div className="Top-text">
        <body>
          <br></br>
          <bold>about</bold>
        </body>
      </div>

      <body>
        <br></br>
        <div class="container">
          <div class="text_left">
            <p>
              <bold>hi there,</bold> <br></br>
              I’m Aditya Bhandari!<br></br>
              A Versatile Leader, <br></br>
              Driven Innovator, <br></br>
              FinTech Enthusiast, <br></br>
              and Golden Bear.
            </p>
          </div>
          <div class="image">
            <img src={myface} />
          </div>
        </div>
      </body>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="Top-text">
        <body>
          <bold>experiences</bold>
        </body>
      </div>
      
      <body>
        <div class="container">
        <div class="bfp">
            <img src={bfp_logo} />
          </div>
          <div class="bfp_text">
            <p>
              Currently working on building<br></br>
              a stand-alone web app to aid<br></br>
              in the ease and efficiency of <br></br>
              the Berkeley Food Pantry's <br></br>
              food distribution system.
            </p>
          </div>
        </div>
      </body>

      <body>
        <div class="container">
          <div class="sewa_text">
            <p>
              Led a student team of<br></br>
              10 to research and build<br></br>
              strategies to combat<br></br>
              food insecurity in the<br></br>
              Bay Area
            </p>
          </div>
          <div class="sewa">
            <img src={sewa_logo} />
          </div>
        </div>
      </body>
      <br></br>

      <div className="Top-text">
        <body>
          <br></br>
          <bold>projects</bold>
        </body>
      </div>

      <br></br>
      <br></br>

      <body>
        <div class="container">
          <div class="scheme">
              <img src={scheme_logo} />
          </div>
          <div class="ants">
              <img src={ants_logo} />
          </div>
        </div>
      </body>

      <body>
        <div class="container">
          <div class="scheme_text">
            <p>
              Used Python to build 
              <br></br>
              an interpreter for a  
              <br></br>
              subset of the Scheme 
              <br></br>
              programming language
            </p>
          </div>
          <div class="ants_text">
            Created a tower defense  
            <br></br>
            game using Object-Oriented 
            <br></br>
            Programming principles 
            <br></br>
            in Python
          </div>
        </div>
      </body>

      <br></br>

      <div className="Top-text">
        <body>
          <br></br>
          <bold>contact</bold>
        </body>
      </div>

      <br></br>
      <br></br>

      <body>
        <div class="container">
          <div class="github">
              <img src={github_logo} />
          </div>
          <div class="email">
              <img src={email_logo} />
          </div>
          <div class="linkedin">
              <img src={linkedin_logo} />
          </div>
        </div>
      </body>

      
      <body>
      <div class="github_text">
        <a href="https://github.com/adityabhandari252/" target="_blank">github</a> 
        <a style={{ marginLeft: '19rem'}} href="mailto:adityabhandari@berkeley.edu">email</a>
        <a style={{ marginLeft: '19.5rem'}} href="https://www.linkedin.com/in/adityabhandari25/" target="_blank">linkedin</a> 
      </div>
      </body>

      <br></br>
      <br></br>
      <br></br>
      <br></br>


      
    </div>
  );
}

export default App;
