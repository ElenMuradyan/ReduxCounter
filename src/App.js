import Counter from "./features/counter/Counter";
import { Flex } from 'antd';
import './styles/global.css';

const App = () => {
  return (
    <Flex align="center" justify="center" className="counter_container">
    <Counter/>  
    </Flex>
  )
};
export default App;