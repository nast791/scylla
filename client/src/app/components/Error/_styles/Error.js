import styled from "styled-components";
import mediaQueries from "../../../utils/mediaQueries";

export const ErrorBody = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const ErrorImage = styled.img`
  width: 60px;
`;

export const ErrorText = styled.p`
  margin-left: 15px;
  font-size: 18px;
  
  @media ${mediaQueries.mobileL} { 
    font-size: 14px;
  }
`;