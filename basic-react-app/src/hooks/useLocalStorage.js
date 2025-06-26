import { useState, useEffect } from 'react';

/**
 * useLocalStorage — syncs state with localStorage
 * Drop-in replacement for useState that persists across page reloads
 */
export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const stored = localStorage.getItem(key);
            return stored !== null ? JSON.parse(stored) : initialValue;
        } catch {
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (err) {
            console.warn(`useLocalStorage: failed to write key "${key}"`, err);
        }
    }, [key, value]);

    const remove = () => {
        localStorage.removeItem(key);
        setValue(initialValue);
    };

    return [value, setValue, remove];
}
