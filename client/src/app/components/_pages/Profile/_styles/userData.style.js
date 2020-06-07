import styled from "styled-components";

export const UserBody = styled.section`
  padding-top: 80px;
`;
export const UserForm = styled.form`
  display: flex;
  justify-content: space-between;
`;
export const UserAvatar = styled.label`
  position: relative;
  width: 350px;
  min-width: 350px;
  height: 350px;
  margin-right: 5%;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`;
export const UserAvatarInput = styled.input`
  display: none;
`;
export const UserAvatarImage = styled.img`
  width: 100%;
`;
export const UserAvatarIcon = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  width: 30px;
`;
export const UserAnketa = styled.div`
  flex: 1;
`;
export const UserAnketaItem = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const UserAnketaLabel = styled.p`
  width: 200px;
  min-width: 200px;
`;
export const UserAnketaInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 15px;
  border: 1px solid gray;
  border-radius: 5px;
`;
