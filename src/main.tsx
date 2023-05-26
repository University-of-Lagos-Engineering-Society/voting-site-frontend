import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import VotingForm from './pages/VotingForm'
import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "vote",
        element: <VotingForm />,
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
