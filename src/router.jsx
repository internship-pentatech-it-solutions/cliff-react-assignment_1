import { createBrowserRouter } from "react-router-dom";
import About from "./routes/About.jsx";
import Contact from "./routes/Contact.jsx";
import Shop from "./routes/Shop.jsx";
import App from "./App.jsx";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/shop", element: <Shop /> },
  { path: "/about", element: <About /> },
  { path: "/contacts", element: <Contact /> },
]);
