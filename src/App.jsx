import './App.css';
import Home from './components/Home/Home.jsx';
import Footer from './components/Footer/Footer.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Layout from './components/Layout/Layout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
