import React, { useState } from 'react';

const Counter = () => {
    const [num, setNumber] = useState(0); //num에는 0이 들어가고 SetNumber는 num의 set 함수

    const increase = () => {
        setNumber(num + 1) //num의 초기값은 0
    };

    const decrease = () => {
        setNumber(num - 1)
    };

    return (
        <div>
            <buttom onClick={increase}>+1</buttom>
            <buttom onClick={decrease}>-1</buttom>
            <p>{num}</p>
        </div>
    );
};

export default Counter;