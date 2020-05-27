import styled from "styled-components";
import Icon from "../../../../img/search.svg";

export const SearchBody = styled.div`
  margin-left: 15px;
`;
export const SearchInput = styled.input`
  width: 230px;
  height: 32px;
  padding: 0 30px 0 15px;
  border-radius: 5px;
  border: 1px solid gray;
  background-image:url(${Icon});
  background-repeat: no-repeat;
  background-size: auto 20px;
  background-position: right 5px top 50%;
  font-size: 15px;
`;
