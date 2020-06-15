import styled from "styled-components";

export const ContainerBody = styled.div`
  display: ${(props) => props.flex ? 'flex' : 'block'};
  justify-content: ${(props) => props.flex && (props.flex !== 'jc-start') ? 'space-between' : ''};
  align-items: ${(props) => props['flex-v'] && (props['flex-v'] !== 'ai-start') ? 'center' : ''};
  max-width: 1200px; // изменяемая величина
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
`;