import { Flex, Text, Button } from "../../atoms";
import { DefaultStyledProps } from "../../helper";
import { ReactElement } from "react";

interface Props extends DefaultStyledProps {
  data: any[];
  columns: { title: string; name: string }[];
  handleDelete?: (id: string) => void;
}

const TableComponent = ({
  data = [],
  columns,
  handleDelete,
  ...rest
}: Props): ReactElement => {
  const onClickDelete = (id: string) => {
    if (handleDelete && id) {
      handleDelete(id);
    }
  };

  return (
    <Flex
      flexDirection="column"
      width="100%"
      boxShadow="0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"
      {...rest}
      padding="16px"
    >
      <Flex padding="20px" alignItems="baseline">
        {columns.map(({ title }, index) => (
          <Flex key={`${index}-header`} width={`calc(100%/ ${columns.length})`}>
            <Flex width="100%">
              <Text
                fontSize="16px"
                fontWeight={700}
                letterSpacing={0}
                lineHeight="16px"
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
              >
                {title}
              </Text>
            </Flex>
          </Flex>
        ))}
        <Flex width="100px" />
      </Flex>
      {data.map((row, index) => (
        <Flex
          key={`${index}-data`}
          height="56px"
          alignItems="center"
          paddingLeft="20px"
          paddingRight="20px"
        >
          {columns.map((column, index) => (
            <Flex
              key={`${index}-column`}
              width={`calc(100%/ ${columns.length})`}
            >
              <Flex width={`calc(100%/ ${columns.length})`}>
                <Text
                  fontSize="16px"
                  fontWeight={400}
                  letterSpacing={0}
                  lineHeight="16px"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  width="200px"
                >
                  {row[column.name]}
                </Text>
              </Flex>
            </Flex>
          ))}
          <Flex width="100px" onClick={() => onClickDelete(row?.id)}>
            <Button>X</Button>
          </Flex>
        </Flex>
      ))}
      ;
    </Flex>
  );
};

export default TableComponent;
