import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className='tc grow bg-light-green w-15 br3 pa2 ma2 dib bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h5 className={'f5'}>{name}</h5>
                <p className={'f7'}>{email}</p>
            </div>
        </div>
    );
}

export default Card;