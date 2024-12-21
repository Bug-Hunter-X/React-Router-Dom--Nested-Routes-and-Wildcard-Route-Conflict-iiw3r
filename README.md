# React Router Dom: Nested Routes and Wildcard Route Conflict

This repository demonstrates a common issue encountered when using nested routes and a wildcard route together in React Router Dom.  The wildcard route (`*`) unintentionally intercepts requests intended for nested routes, preventing them from rendering correctly.

## Problem
When both nested routes and a wildcard route are defined, the wildcard route takes precedence.  This means that even if a nested route matches the URL, the wildcard route is selected instead, leading to unexpected behavior.

## Solution
The solution involves careful ordering and potentially restructuring of routes to ensure nested routes are matched before the wildcard route.  This might involve more specific path matching in your wildcard route, or reconsidering how the routing is structured.

## Setup
1. Clone this repository.
2. Navigate to the project directory: `cd react-router-dom-nested-wildcard`
3. Install dependencies: `npm install`
4. Run the application: `npm start`

The example demonstrates the problematic behavior and the corrected implementation.