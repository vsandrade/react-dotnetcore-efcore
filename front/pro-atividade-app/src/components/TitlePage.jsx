import React from 'react';

export default function TitlePage({ title, children }) {
    return (
        <div className='d-flex justify-content-between align-items-end mt-2 pb-3 border-bottom border-1'>
            <h1 className='m-0 p-0'>{title}</h1>
            {children}
        </div>
    );
}
