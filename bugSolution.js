```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<Users />}>
          <Route path=":id" element={<UserDetail />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Move the wildcard route to the end  */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
By placing the wildcard route at the end of the route definitions, we ensure that more specific routes are checked first. This resolves the conflict and allows the nested routes to function correctly.