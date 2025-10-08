import { useState, useEffect, useRef } from 'react';

/**
 * useFetch — generic data fetching hook with loading, error, and abort support
 */
export function useFetch(url, options = {}) {
    const [state, setState] = useState({ data: null, loading: true, error: null });
    const abortRef = useRef(null);

    useEffect(() => {
        if (!url) return;

        // Abort previous request if url changes
        if (abortRef.current) abortRef.current.abort();
        abortRef.current = new AbortController();

        setState({ data: null, loading: true, error: null });

        fetch(url, { ...options, signal: abortRef.current.signal })
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
                return res.json();
            })
            .then(data => setState({ data, loading: false, error: null }))
            .catch(err => {
                if (err.name === 'AbortError') return; // ignore cancelled requests
                setState({ data: null, loading: false, error: err.message });
            });

        return () => abortRef.current?.abort();
    }, [url]);

    return state;
}
