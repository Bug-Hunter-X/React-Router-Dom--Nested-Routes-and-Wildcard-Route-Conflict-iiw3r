```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
This code uses the `*` wildcard to match any path not matched by the previous routes. However, if you are using nested routes, you might encounter a problem.  The wildcard route will always be matched before the nested routes, which means nested routes won't work as expected. 

For example, let's say you have nested routes like this:
```javascript
<Route path="/users" element={<Users />} >
  <Route path=":id" element={<UserDetail />} />
</Route>
```
If you also have a wildcard route, the `UserDetail` component will never be rendered because the wildcard route will always match first. 