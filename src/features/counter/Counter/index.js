import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../counterSlice";
import { Button, Typography, Flex, Input } from "antd";

const { Title } = Typography;

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const [ incrementValue, setIncrementValue ] = useState(2);
    const dispatch = useDispatch();

    const handleInputChange = e => {
        setIncrementValue(e.target.value);
    };

    return (
        <Flex gap={30} style={{backgroundColor:'rgba(224, 210, 191, 0.834)',padding:30,borderRadius:12}} vertical>
            <Flex gap={15}>
            <Button type="primary" onClick={() => dispatch(decrement())}>Decrement</Button>
            <Title level={4}>{count}</Title>
            <Button type="primary" onClick={() => dispatch(increment())}>Increment</Button>
            </Flex>
            <Flex gap={15}>
                <Input value={incrementValue} type="number" onChange={handleInputChange}></Input>
                <Button type="primary" onClick={dispatch(incrementByAmount(incrementValue || 0))}>Add Amount</Button>
            </Flex>
        </Flex>
    )
}

export default Counter;