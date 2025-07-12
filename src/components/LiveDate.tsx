'use client';

import { useState, useEffect } from 'react';
import { Text } from '@/components/ui/text';

export default function LiveDate({ serverDate }: { serverDate: string }) {
  const [date, setDate] = useState(new Date(serverDate));

  useEffect(() => {
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
      <Text variant="secondary" className="whitespace-nowrap">{formatDate(date)}</Text>
    </div>
  );
} 