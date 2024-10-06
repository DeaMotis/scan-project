import { useState, useEffect } from 'react';
import { debounce } from 'lodash';

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = debounce(() => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }, 100);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}

export default useWindowSize;