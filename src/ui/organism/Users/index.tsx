import TableComponent from "../../molecules/TableComponent";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { useEffect } from "react";
import { Button, Flex } from "../../atoms";
import { fetchUsers, resetUsers } from "../../../store/users";

const COLUMNS = [
  {
    title: "id",
    name: "id",
  },
  {
    title: "name",
    name: "name",
  },
  {
    title: "phone",
    name: "phone",
  },
];

const Users = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.data);
  const loading = useSelector((state: RootState) => state.user.loading);
  const error = useSelector((state: RootState) => state.user.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) {
    return <Flex>Loading...</Flex>;
  }
  return (
    <div>
      <Button onClick={() => dispatch(resetUsers)}>Reset user list</Button>
      {error ? <Flex>{error}</Flex> : ""}
      <Button onClick={() => dispatch(fetchUsers)}>Insert user list</Button>
      <TableComponent data={user} columns={COLUMNS}></TableComponent>
    </div>
  );
};
export default Users;
