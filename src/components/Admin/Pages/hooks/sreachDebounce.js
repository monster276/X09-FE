import { useState, useEffect  } from "react";

function SreachDeBounce(value,delay) {
    const [debounceValue, setDebounceValue] = useState(value);

        useEffect(() =>{
            const handler = setTimeout(() => setDebounceValue(value), delay);

            return () => clearTimeout(handler);
        }, [value]);

    return debounceValue;   
}
export default SreachDeBounce;