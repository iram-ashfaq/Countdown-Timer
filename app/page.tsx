"use client"
import React from 'react';
import CountdownTimer from '../components/CountdownTimer';

export default function Home() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}> Countdown Timer</h1>
      <CountdownTimer initialSeconds={60} /> {/* Timer starts at 60 seconds */}
    </div>
  );
    
 

}

