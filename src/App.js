import "./App.css";
import { useState, useEffect, CSSProperties } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
// import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';
import Forgotpass from "./pages/Forgotpass";
import  Registerpage from  "./pages/Registerpage";
import Loginpage from "./pages/Loginpage";
import Success from "./components/Success";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous operation (e.g., fetching data)
    const fetchData = async () => {
      try {
        // Simulating delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  



  


  return (
    <div className="App">
      {/* {!spinner && <div>Your content</div>}; */}
       <div className="">
       <ClipLoader color={'#123abc'} loading={loading}  size={150}  className="loader-top"/>
       </div>
      {!loading && (
        <div>
          <Routes>
          <Route path="/" exact element={<Loginpage/>} />
          <Route path="/register" exact element={<Registerpage/>} />
          <Route path="/forgotpassword" exact element={<Forgotpass/>} />
          <Route path="/success" exact element={<Success/>} />
        </Routes>
        </div>
      )}

{/*      
      <Routes>
          <Route path="/" exact element={<Loginpage />} />
        </Routes> */}
    </div>
  );
}

export default App;
