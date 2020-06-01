import { useEffect, useState } from 'react';
import { isMobileOrTablet } from './deviceUtils';

export const useIsUsingMobileOrTablet = () => {
    const [isUsingMobileOrTablet, setIsUsingMobileOrTablet] = useState<boolean>(
        false
    );

    useEffect(() => {
        if (typeof navigator !== 'undefined' && navigator.userAgent) {
            if (isMobileOrTablet(navigator.userAgent)) {
                setIsUsingMobileOrTablet(true);
            }
        }
    }, []);

    return isUsingMobileOrTablet;
};
