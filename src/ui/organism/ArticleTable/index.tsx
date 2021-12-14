import TableComponent from "../../molecules/TableComponent";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, RootState } from "../../../store";
import { useEffect } from "react";
import { Flex } from "../../atoms";

const COLUMNS = [
  {
    title: "id",
    name: "id",
  },
  {
    title: "userId",
    name: "userId",
  },
  {
    title: "title",
    name: "title",
  },
];

const ArticleTable = () => {
  const dispatch = useDispatch();
  const post = useSelector((state: RootState) => state.post.data);
  const loading = useSelector((state: RootState) => state.post.loading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (loading) {
    return <Flex>Loading...</Flex>;
  }

  return (
    <div>
      <TableComponent data={post} columns={COLUMNS}></TableComponent>
    </div>
  );
};
export default ArticleTable;
