import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />

        <Routes>
          <Route path="/" element={
            <div>
              <iframe className="model-iframe" src="https://mohsin2moon.github.io/gt/"></iframe>
              <About />
              <Experience />
              <Tech />
              <Works />
              <Feedbacks />
              <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
              </div>
            </div>
          } />

          <Route path="/home" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
