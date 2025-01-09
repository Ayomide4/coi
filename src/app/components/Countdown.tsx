'use client'
import { useState, useEffect } from 'react';

export default function CountdownDisplay() {
  const [daysUntil, setDaysUntil] = useState(0);
  
  useEffect(() => {
    const calculateDays = () => {
      const eventDate = new Date(2025, 6, 11); // Month is 0-based, so 6 = July
      const today = new Date();
      
      // Reset time portion to ensure accurate day calculation
      today.setHours(0, 0, 0, 0);
      eventDate.setHours(0, 0, 0, 0);
      
      const diffTime = eventDate - today;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      setDaysUntil(diffDays);
    };

    // Calculate initially
    calculateDays();
    
    // Update daily
    const interval = setInterval(calculateDays, 24 * 60 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-4xl font-bold text-center py-8">
      {daysUntil} {daysUntil === 1 ? 'day' : 'days'} until the event
    </h1>
  );
}