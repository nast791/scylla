import styled from "styled-components";
import mediaQueries from "../../../../utils/mediaQueries";

export const AccountBody = styled.section`
  padding-top: 80px;
`;

export const AccountWrapper = styled.div`
  display: flex;
  
  @media ${mediaQueries.tabletL} { 
    display: block;
  }
`;

export const AccountAvatar = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  
  @media ${mediaQueries.tabletL} { 
    margin: 0 auto;
  }
`;

export const AccountAvatarImage = styled.img`
  width: 100%;
`;

export const AccountMain = styled.div`
  flex: 1;
  margin-left: 60px;
  
  @media ${mediaQueries.tabletL} { 
    flex: none;
    margin-top: 30px;
    margin-left: 0;
  }
`;

export const AccountHeader = styled.h1`
  font-weight: 600;
  font-size: 28px;
`;

export const AccountItem = styled.p`
  padding: 5px 0;
`;
