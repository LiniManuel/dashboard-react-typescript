import TableComponent from "../../molecules/TableComponent";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, resetPosts, RootState } from "../../../store";
import { useEffect } from "react";
import { Button, Flex } from "../../atoms";

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
  const error = useSelector((state: RootState) => state.post.error);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (loading) {
    return <Flex>Loading...</Flex>;
  }

  return (
    <div>
      <Button onClick={() => dispatch(resetPosts())}>Reset post list</Button>
      {error ? <Flex>{error}</Flex> : ""}
      <Button onClick={() => dispatch(fetchPosts())}>Insert post list</Button>
      <TableComponent data={post} columns={COLUMNS}></TableComponent>
    </div>
  );
};
export default ArticleTable;
