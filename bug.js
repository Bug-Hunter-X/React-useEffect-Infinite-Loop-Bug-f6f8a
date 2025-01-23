```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an infinite loop because the component re-renders every time count changes,
    // and this effect runs every time the component re-renders, causing count to change again.
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```