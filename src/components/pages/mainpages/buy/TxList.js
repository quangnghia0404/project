import React from 'react';


export default function TxList({ txs }) {
    if (txs.length === 0) return null;

    return (
        <>
            {txs.map(item => (
                <div key={item} className=''>
                    <div className=''>
                        <p style={{ color: "green" }}>{item.hash}</p>
                    </div>
                </div>
            ))}
        </>
    );
}