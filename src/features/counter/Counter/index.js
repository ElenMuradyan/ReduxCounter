import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount, decrementByAmount } from "../counterSlice";
import { Button, Typography, Flex, Input } from "antd";

const { Title } = Typography;

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const [ incrementValue, setIncrementValue ] = useState(2);
    const dispatch = useDispatch();

    const handleInputChange = e => {
        setIncrementValue(e.target.value);
    };
    const handleAddAmount = () => {
        dispatch(incrementByAmount(Number(incrementValue) || 0)); 
    };

    return (
        <Flex gap={30} style={{backgroundColor:'rgba(224, 210, 191, 0.834)',padding:30,borderRadius:12}} vertical>
            <Flex gap={15} align="center" justify="center">
            <Button type="primary" onClick={() => dispatch(decrement())}>Decrement</Button>
            <Title level={4}>{count}</Title>
            <Button type="primary" onClick={() => dispatch(increment())}>Increment</Button>
            </Flex>
            <Flex gap={15}>
            <Button type="primary" onClick={() => dispatch(decrementByAmount(Number(incrementValue)||0))}>Subtract Amount</Button>
                <Input value={incrementValue} type="number" onChange={handleInputChange} />
                <Button type="primary" onClick={handleAddAmount}>Add Amount</Button>
            </Flex>
            <Title level={4} style={{textAlign:'center',opacity:'0.5'}}>A little program created using react-redux</Title>
        </Flex>
    )
}

export default Counter;