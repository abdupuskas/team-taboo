'use client';

import { useEffect, useRef } from 'react';
import { getSocket } from '../lib/socket';

export function useSocket() {
  const socketRef = useRef(getSocket());

  useEffect(() => {
    const socket = socketRef.current;
    if (!socket.connected) {
      socket.connect();
    }

    return () => {
      // Don't disconnect on unmount — we want persistent connection
    };
  }, []);

  return socketRef.current;
}
