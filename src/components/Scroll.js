import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflow: 'scroll', height: '90vh', width: '75vw'}}>
            { props.children }
        </div>
    );

}

export default Scroll;