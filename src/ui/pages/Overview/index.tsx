import { useDispatch } from "react-redux";
import { setDecrement, setIncrement } from "../../../store";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/applicationStore";
import { Flex, Button, Text } from "../../atoms";

const Overview = () => {
  const dispatch = useDispatch();

  const value = useSelector((state: RootState) => state.counter.value);

  return (
    <div>
      <Flex flexDirection="column">
        <Button onClick={() => dispatch(setIncrement(value))}>+</Button>
        <Text>{value}</Text>
        <Button
          onClick={() => dispatch(setDecrement(value))}
          disabled={value <= 0 ? true : false}
        >
          -
        </Button>
      </Flex>
    </div>
  );
};
export default Overview;
