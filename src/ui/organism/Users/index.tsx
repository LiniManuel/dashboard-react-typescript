import TableComponent from "../../molecules/TableComponent";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { useEffect } from "react";
import { Flex } from "../../atoms";
import { fetchUsers } from "../../../store/users";

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

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) {
    return <Flex>Loading...</Flex>;
  }
  return (
    <div>
      <TableComponent data={user} columns={COLUMNS}></TableComponent>
    </div>
  );
};
export default Users;
