import { UAParser } from 'ua-parser-js';

export const isMobileOrTablet = (userAgent: string): boolean | undefined => {
    const parser = new UAParser(userAgent);
    const device = parser.getDevice();

    if (device) {
        switch (device.type) {
            case 'mobile':
            case 'wearable':
            case 'tablet':
                return true;
            default:
                return false;
        }
    }
};
