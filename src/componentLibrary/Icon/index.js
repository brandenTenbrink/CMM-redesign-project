import React from 'react';

import Checkmark from './Checkmark';
import Error from './Error';
import LeftCaret from './LeftCaret'

const Icon = props => {
    switch(props.name) {
        case 'Checkmark':
            return <Checkmark {...props} />
        case 'Error':
            return <Error {...props} />
        case 'LeftCaret':
            return <LeftCaret {...props} />
        default:
            return <div />
    }
}

export default Icon