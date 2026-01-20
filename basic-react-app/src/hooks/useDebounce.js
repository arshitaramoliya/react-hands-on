import { useState, useEffect } from 'react';

/**
 * useDebounce — delays updating a value until after delay ms of no changes
 * Common use: search inputs, autocomplete, form auto-save
 */
export function useDebounce(value, delay = 300) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
}
