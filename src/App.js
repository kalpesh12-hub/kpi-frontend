// import {useState} from "react";
// import "./App.css";
// import Home from "./components/Home/Home";
// import Navbar from "./components/Navbar/Navbar";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import About from "./components/Home/About";
// import DataAnalytics from "./components/Home/DataAnalytics";
// import Contact from "./components/Pages/Contact";
// import DataAdvisory from "./components/Home/DataAdvisory";
// import DataEngineering from "./components/Home/DataEngineering";
// import CaesStudies1 from "./components/CaseStudies/CaesStudies1";
// import CaseMainTemp from "./components/CaseStudies/CaseMainTemp";
// import CaseStudies2 from "./components/CaseStudies/CaseStudies2";
// import Caesstudies3 from "./components/CaseStudies/Caesstudies3";
// import SelectKpi from "./components/Kpi/SelectKpi";
// import FormPage from "./components/Kpi/Formpage";
// import Healthcare from "./components/Kpi/Kpidata/Healthcare";
// import Fmcg from "./components/Kpi/Kpidata/Fmcg";
// import Dropdown from "../src/components/Kpi/KpiTables/components/Dropdown";
// import DataTable from "../src/components/Kpi/KpiTables/components/Datatable";

// function App() {
//   const handleFormSubmit = () => {
//     // Handle the form submission logic here if needed
//     console.log("Form submitted!");
//   };

//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedSubcategory, setSelectedSubcategory] = useState('');

//   const handleDropdownSelect = (category, subcategory) => {
//     setSelectedCategory(category);
//     setSelectedSubcategory(subcategory);
//   };
//   return (
//     <>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About/>}/>
//           <Route path="/data-analytics" element={<DataAnalytics/>}/>
//           <Route path="/contact-us" element={<Contact/>}/>
//           <Route path="/data-advisory" element={<DataAdvisory/>}/>
//           <Route path="/data-engineering" element={<DataEngineering/>}/>
//           <Route path="/case-1" element={<CaesStudies1/>}/>
//           <Route path="/case-2" element={<CaseStudies2/>}/>
//           <Route path="/case-3" element={<Caesstudies3/>}/>
//           <Route path="/case-studies" element={<CaseMainTemp/>}/>
//           <Route path="/form" element={<FormPage/>}/>
//           <Route path="/kpi" element={<SelectKpi/>}/>
//           <Route

//           />
//           <Route path="/healthcare" element={<Healthcare />} />
//           <Route path="/fmcg" element={<Fmcg/>} />
//           <Route path="/kpi" element={<SelectKpi/>}/>
//           <Route  path="/fjg" element={<Dropdown/>} onSelect={handleDropdownSelect} />
//           <Route path="/jff" element={<DataTable/>} category={selectedCategory} subcategory={selectedSubcategory} />


          
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;



// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';


import SelectKpi from './components/Kpi/SelectKpi';
import FormPage from './components/Kpi/Formpage';
import Healthcare from './components/Kpi/Kpidata/Healthcare';
import Fmcg from './components/Kpi/Kpidata/Fmcg';
import Finance from './components/Kpi/Kpidata/Finance';
// import Dropdowns from './components/Dropdown';
// import DataTable from './components/Datatable';
import Logo from '../src/assets/sceniuz.svg';
import Dropdowns from "../src/components/Kpi/KpiTables/components/Dropdown";
 import Sales from './components/Kpi/Kpidata/Sales';
 import It from './components/Kpi/Kpidata/It';
 import Communication from './components/Kpi/Kpidata/Communication';
 import Operation from './components/Kpi/Kpidata/Operation';
 import PrManagement from './components/Kpi/Kpidata/PrManagement';
 import Customer from './components/Kpi/Kpidata/Customer';
 import ContactFormKPI from './components/SendKpi/ContactFormKPI';
 import SampleCard from './components/SampleCard';
 import Marketing from './components/Kpi/Kpidata/Marketing';
 import ScrollToTop from './components/SrollTop';


function App() {
  // const [selectedCategory, setSelectedCategory] = useState('');
  // const [selectedSubcategory, setSelectedSubcategory] = useState('');

  // const handleDropdownSelect = (category, subcategory) => {
  //   setSelectedCategory(category);
  //   setSelectedSubcategory(subcategory);
  // };

  return (
    <>
      <Router>
        < ScrollToTop  />
        <Navbar />
        <Routes>
          <Route path="/" element={<SelectKpi />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/data-analytics" element={<DataAnalytics />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/data-advisory" element={<DataAdvisory />} />
          <Route path="/data-engineering" element={<DataEngineering />} />
          <Route path="/case-1" element={<CaseStudies1 />} />
          <Route path="/case-2" element={<CaseStudies2 />} />
          <Route path="/case-3" element={<Caesstudies3 />} />
          <Route path="/case-studies" element={<CaseMainTemp />} /> */}
          <Route path="/form" element={<FormPage />} />
          {/* <Route path="/kpi" element={} /> */}
          <Route path="/HR" element={<Healthcare />} />
          <Route path="/fmcg" element={<Fmcg />} />
          <Route path="/finance" element={<Finance/>} />
          <Route path="/Sales" element={<Sales/>} />
          <Route path='/it' element={<It/>} />
          <Route path="/communication" element={<Communication/>} />
          <Route path="/operation" element={<Operation/>} />
          <Route path="/project-managment" element={<PrManagement/>} />
          <Route path="/customer" element={<Customer/>} />
          <Route path="/Send-Kpi" element={<ContactFormKPI/>} />
          <Route path="/Card" element={<SampleCard/>} />
          <Route path='/Marketing' element={<Marketing/>} />
        
        </Routes>
      </Router>
     
    </>
  );
}

export default App;
