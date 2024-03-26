import React from 'react';
import './styles.css';
import Fb from '../public/Fb.png';
import bga from '../public/bga.gif';
import hd from '../public/hd.png';
const App = () => {
  return (
    <div>
      <header>
        <h1><img 
           height={30}
           src="./public/Fb.png" alt="" />
            Design with Abdinasir</h1>
        <nav>
          <a href="#">home</a>
          <a href="#">About Me</a>
          <a href="#">details</a>
          <a href="#"> profile</a>
        </nav>
      </header>
      <main className="container">
        
        <section className="hero-section">
          <h2>
            
            <img 
            height={300}
            src="./public/Fb.png" alt="" />
              
            <br />
           
            Hi, I'm Abdinasir,
            <br />
            A Digital Designer
          </h2>
          <p>
            Transforming Your Digital Vision into Reality: Innovative Web Designs
            by a Professional Web Designer!
          </p>
          <button>Start Project</button>
        </section>
        
        {}
      </main>
    
      <footer>
        <p>❤️❤️❤️❤️❤️❤️❤️❤️ku soo dhawaaw website ka  Abdinasir Ali mohamed markale soo dhawwaw 'welcome in here' welcome my websit ❤️❤️❤️❤️❤️❤️❤️❤️ </p>
      </footer>
    </div>
  );
};

export default App;


