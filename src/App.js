import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="text-indigo-900">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
