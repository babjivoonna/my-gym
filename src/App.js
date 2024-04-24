// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import Footer from './Components/Footer/Footer';
// import Hero from './Components/Hero/Hero';
// import Join from './Components/Join/Join';
// import Plans from './Components/Plans/Plans';
// import Programs from './Components/Programs/Programs';
// import Reason from './Components/Reasons/Reason';
// import Testimonials from './Components/Testimonials/Testimonials';
// import CreateDietPlan from './Pages/CreateDietPlan';
// function App() {
//   return (
//     <div className="App">
//      <Routes>
//         <Route path="/createDietPlan" Component={CreateDietPlan}/>
//       </Routes>
//       <Hero/>
//       <Programs/>
//       <Reason/>
//       <Plans/>
//       <Testimonials/>
//       <Join/>
//       <Footer/>
//     </div>
//   );
// }

// export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Join from './Components/Join/Join';
import Plans from './Components/Plans/Plans';
import Programs from './Components/Programs/Programs';
import Reason from './Components/Reasons/Reason';
import Testimonials from './Components/Testimonials/Testimonials';
import CreateDietPlan from './Pages/CreateDietPlan';
import AllDietPlans from './Components/Diets/AllDietPlans';
import UserExercisePractise from './ExercisePractise/UserExercisePractise';


function App() {
  return (
    <div className="App">
      {/* <Hero/>
      <Programs/>
      <Reason/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footer/> */}
       
      <Routes>
        <Route path="/" element={<CommonComponents />} />
        <Route path="/createDietPlan" element={
          
            <CreateDietPlan />
        } />
        <Route path="/exercisePractice" element={<UserExercisePractise/>}/>
      </Routes>
    </div>
  );
}

function CommonComponents() {
  return (
    <>
     <Hero/>
      <Programs/>
      <AllDietPlans/>
      <Reason/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footer/>
      {/* Nested route for CreateDietPlan */}
    </>
  );
}

export default App;

