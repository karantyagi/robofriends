import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className='tc grow bg-light-green w-25 br3 pa2 ma2 dib bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h3 className={'f4'}>{name}</h3>
                <p className={'f6'}>{email}</p>
            </div>
        </div>
    );
}

export default Card;