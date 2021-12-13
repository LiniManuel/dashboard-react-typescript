import { Flex } from "../../..";
import { useNavigate } from "react-router-dom";
import { SIDEBAR_LINKS, capitalizeFirstLetter } from "../../../../utils";
import styled from "styled-components";
const NAMES = Object.keys(SIDEBAR_LINKS);
const Ul = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
`;
const Li = styled.li`
  height: 56px;
  list-style: none;
  display: flex;
  align-items: center;
  padding-left: 29px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    border-left-width: 5px;
    border-left-color: #dde2ff;
    border-left-style: solid;
    padding-left: 24px;
  }
`;
const A = styled.a`
  text-decoration: none;
  font-family: Mulish;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
  color: #dde2ff;
`;
const Sidebar = () => {
  const navigate = useNavigate();
  function handleClick(link: string) {
    navigate(link);
  }
  return (
    <Flex backgroundColor="tertiary" width="255px">
      <Ul>
        {NAMES.map((name, index) => (
          <Li
            key={`${index}-link`}
            onClick={() => handleClick(SIDEBAR_LINKS[name])}
          >
            <A>{capitalizeFirstLetter(name)}</A>
          </Li>
        ))}
      </Ul>
    </Flex>
  );
};
export default Sidebar;
