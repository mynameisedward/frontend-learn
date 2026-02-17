import { useState } from "react";

export function useCount(initialValue) {
    const [count, setCount] = useState(initialValue)

    const decrement = () => {setCount(count - 1)};
    const increment = () => {setCount(count + 1)};

    return { count, increment, decrement }
}