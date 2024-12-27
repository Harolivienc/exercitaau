import React, { useState } from 'react';

function MyComponent() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleEnter(event) {
    const enter = { x: event.clientX, y: event.clientY };
    setPosition({ x: enter.x, y: enter.y });
  }

  return (
    <div onMouseEnter={handleEnter}>
      Position: x={position.x}, y={position.y}
    </div>
  );
}
