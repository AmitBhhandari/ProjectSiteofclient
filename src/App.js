import React from "react";
import { Route } from "react-router-dom";

import About from "./Components/Pages/about";
import ContactUs from "./Components/Pages/ContactUs";
import ServiceList from "./Components/Pages/services";

import Navigation from "./Components/Layouts/nav";
import Body from "./Components/Layouts/main";
import Footer from "./Components/Layouts/footer";

import LandingPage from "./Components/Pages/home";




const services = [
  {
    id: 1,
    name: 'Hardware Installation',
    description: 'We can install new hardware components in your computer, such as a graphics card, RAM, or storage drives.',
    link: 'https://example.com/hardware-installation',
  },
  {
    id: 2,
    name: 'Software Installation',
    description: 'We can install and configure new software on your computer, such as operating systems, productivity tools, or games.',
    link: 'https://example.com/software-installation',
  },
  {
    id: 3,
    name: 'Virus Removal',
    description: 'We can remove viruses, malware, and other malicious software from your computer to keep it running smoothly and securely.',
    link: 'https://example.com/virus-removal',
  },
];


function App() {
  return (
    <div>
      <Navigation />
      <br></br>
      {/* <Body /> */}

      <Route path="/aboutUs" exact>
        {" "}
        <About />
      </Route>

      <Route path="/home" exact>
        {" "}
        <Body />
      </Route>

      <Route path="/contactUs" exact>
        {" "}
        <ContactUs />
      </Route>

      <Route path="/service">
      <ServiceList  services={services} />
     </Route>

      <Route path="/" exact>
        {" "}
        <Body />
      </Route>

    

      <Footer />
    </div>
  );
}

export default App;
