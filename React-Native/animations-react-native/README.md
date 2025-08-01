Great! Let’s break down **`useRef`**, **`useState`**, and **`useEffect`** — all super important React hooks — so you understand how they differ and when to use each.

# cardImagem

---

### 1. **`useState`** — For managing *state* and causing *re-renders*

* Stores **reactive** values — when you update it, React *re-renders* the component to reflect the change.
* Ideal for values that affect what your UI displays or behaves.

**Example:**

```js
const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>Increment</button>
<p>Count: {count}</p>
```

* Clicking the button updates `count`, triggers a re-render, and the new count shows in the UI.

---

### 2. **`useEffect`** — For handling *side effects* after rendering

* Runs **code after render** — e.g., data fetching, subscriptions, timers, manually manipulating DOM.
* Can run:

  * After every render,
  * Only once on mount,
  * Or only when certain dependencies change.
* Doesn’t trigger a render itself but can cause re-renders if it updates state.

**Example:**

```js
useEffect(() => {
  console.log('Component mounted or count changed:', count);

  return () => {
    console.log('Cleanup on unmount or before count changes');
  };
}, [count]); // Runs after `count` changes
```

---

### 3. **`useRef`** — For *mutable references* that persist without re-renders

* Stores a **mutable value that won’t cause re-render** when updated.
* Commonly used to:

  * Hold DOM references (`ref` to an element),
  * Keep track of mutable variables across renders without triggering updates.
* Changes to `.current` don’t cause React to re-render.

**Example:**

```js
const countRef = useRef(0);

const handleClick = () => {
  countRef.current += 1;  // Updates without re-render
  console.log('Count ref:', countRef.current);
};
```

* `countRef.current` persists between renders.
* Changing it won’t cause UI to update; it’s just a place to keep data.

---

### When to use which?

| Hook        | What it stores                    | Triggers Re-render?              | When to use it                                                          |
| ----------- | --------------------------------- | -------------------------------- | ----------------------------------------------------------------------- |
| `useState`  | State that affects UI             | Yes                              | For reactive data that, when changed, should update UI                  |
| `useEffect` | Side effects                      | No (but can update state inside) | For running code after render (e.g., fetching data, event listeners)    |
| `useRef`    | Mutable value or DOM element refs | No                               | For values you want to persist without re-render or to access DOM nodes |

---

### Example combining all three:

```js
import React, { useState, useEffect, useRef } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  const previousCount = useRef(0);

  useEffect(() => {
    previousCount.current = count;  // Keep track of previous count after each render
  }, [count]);

  return (
    <div>
      <p>Current count: {count}</p>
      <p>Previous count: {previousCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

* `count` is state — updates cause the component to re-render.
* `previousCount` uses `useRef` to store the last count value without causing a re-render.
* `useEffect` runs after every change to `count`, updating `previousCount.current`.

---

### Summary:

* **`useState`** — for **state** you want React to track and re-render on changes.
* **`useEffect`** — for **side effects** after renders or when dependencies change.
* **`useRef`** — for **mutable refs** or variables that persist *without* causing re-renders.

---

If you want, I can help with some specific example or use case you’re working on!
