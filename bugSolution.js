```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // The empty dependency array ensures that this effect runs only once after the component mounts.
    // Adding dependencies like [count] would trigger the useEffect every time count updates, preventing the loop but may be undesirable depending on your needs.
    console.log('Component mounted');
  }, []);

  return <div>Count: {count}</div>;
}
export default MyComponent; 
```