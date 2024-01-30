import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

import Component 8 from '/Component 8';
import Property 1=Frame 87 from '/Property 1=Frame 87';
import Property 1=Frame 88 from '/Property 1=Frame 88';
import Saly-38 from '/Saly-38';
import Property 1=Frame 89 from '/Property 1=Frame 89';
import Saly-10 from '/Saly-10';
import Landing Page from '/Landing Page';
import Saly-19 from '/Saly-19';

import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      <Route path=/Component 8 element={<Component 8 />} />
<Route path=/Property 1=Frame 87 element={<Property 1=Frame 87 />} />
<Route path=/Property 1=Frame 88 element={<Property 1=Frame 88 />} />
<Route path=/Saly-38 element={<Saly-38 />} />
<Route path=/Property 1=Frame 89 element={<Property 1=Frame 89 />} />
<Route path=/Saly-10 element={<Saly-10 />} />
<Route path=/Landing Page element={<Landing Page />} />
<Route path=/Saly-19 element={<Saly-19 />} />
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      
case "/Component 8":
    title = "";
    metaDescription = "";
    break;



case "/Property 1=Frame 87":
    title = "";
    metaDescription = "";
    break;



case "/Property 1=Frame 88":
    title = "";
    metaDescription = "";
    break;



case "/Saly-38":
    title = "";
    metaDescription = "";
    break;



case "/Property 1=Frame 89":
    title = "";
    metaDescription = "";
    break;



case "/Saly-10":
    title = "";
    metaDescription = "";
    break;



case "/Landing Page":
    title = "";
    metaDescription = "";
    break;



case "/Saly-19":
    title = "";
    metaDescription = "";
    break;


    </Routes>
  );
}
export default App;
