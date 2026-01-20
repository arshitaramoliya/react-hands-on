import { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';

export default function SearchBar({ onSearch, placeholder = 'Search...' }) {
    const [query, setQuery] = useState('');
    const debounced = useDebounce(query, 400);

    // Trigger search only after user stops typing for 400ms
    useState(() => { onSearch?.(debounced); }, [debounced]);

    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder={placeholder}
                style={{
                    width: '100%', padding: '10px 36px 10px 14px',
                    border: '1px solid #ddd', borderRadius: '8px',
                    fontSize: '14px', outline: 'none',
                }}
            />
            {query && (
                <button
                    onClick={() => { setQuery(''); onSearch?.(''); }}
                    style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#999' }}
                >✕</button>
            )}
        </div>
    );
}
