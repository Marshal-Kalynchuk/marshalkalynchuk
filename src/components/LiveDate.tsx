'use client';

import { useState, useEffect } from 'react';
import { Text } from '@/components/ui/text';

export default function LiveDate() {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    // Set initial date on client mount
    setDate(new Date());

    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'America/Edmonton',
    });
  };

  return (
    <div>
      <Text variant="secondary" className="whitespace-nowrap">my time: {date ? formatDate(date) : '...'}</Text>
    </div>
  );
} 