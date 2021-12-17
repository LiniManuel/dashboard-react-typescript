import TableComponent from "../../molecules/TableComponent";
import { useSelector } from "react-redux";
import {
  deleteEmployee,
  fetchEmoployees,
  postEmployee,
  RootState,
  useAppDispatch,
} from "../../../store";
import { useEffect } from "react";
import { Button, Flex } from "../../atoms";

const COLUMNS = [
  {
    title: "id",
    name: "id",
  },
  {
    title: "First Name",
    name: "first_name",
  },
  {
    title: "Last Name",
    name: "last_name",
  },
  {
    title: "email",
    name: "email",
  },
];

const AgentsTable = () => {
  const dispatch = useAppDispatch();
  const employees = useSelector((state: RootState) => state.employees.data);
  const loading = useSelector((state: RootState) => state.employees.loading);
  // const error = useSelector((state: RootState) => state.employees.error);

  useEffect(() => {
    dispatch(fetchEmoployees());
  }, []);

  const handleClick = async () => {
    const response = await dispatch(
      postEmployee({
        first_name: "Manuel",
        last_name: "Lini",
        email: "manuel@gmail.comn",
      })
    );
    if (response?.payload?.id) {
      dispatch(fetchEmoployees());
    }
  };

  const handleDelete = async (id: string) => {
    await dispatch(deleteEmployee(id));
    dispatch(fetchEmoployees());
  };

  if (loading) {
    return <Flex>Loading...</Flex>;
  }

  return (
    <Flex>
      <Button onClick={handleClick}>New</Button>
      <TableComponent
        data={employees}
        columns={COLUMNS}
        handleDelete={handleDelete}
      ></TableComponent>
    </Flex>
  );
};
export default AgentsTable;
