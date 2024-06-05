// src/App.js
import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Menu from './components/Menu';
import { OrderProvider } from './context/OrderContext';
import { ReservationProvider } from './context/ReservationContext';
import ReservationForm from './components/ReservationForm';
import ReservationList from './components/ReservationList';
import { ReviewsProvider } from './context/ReviewsContext';

function App() {
  return (
    
    <OrderProvider>
      <ReservationProvider>
        <ReviewsProvider>
          <div className="App">
            <LandingPage />
            <section id="menu">
              <Menu />
            </section>
            
            <section id="reservation">
              <ReservationForm />
              <ReservationList />
            </section>
          </div>
        </ReviewsProvider>
      </ReservationProvider>
    </OrderProvider>
  );
}

export default App;
