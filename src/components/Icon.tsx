import React from 'react';

export const Icon = (name: string) => {
    switch(name) {
        case 'vanderbilt':
            return <img src={'../../vanderbilt.svg'} alt="img"/>
        case 'alchemantic':
            return <img src={'../../alchemantic.svg'}alt="img"/>
        case 'zocdoc':
            return <img src={'../../zocdoc.svg'} alt="img" />
        default:
            return;
    }
}

