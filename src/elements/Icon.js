import styled from "styled-components";

export const IconWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  font-size: 8rem;
  color: ${(props) => props.theme.colors.icon};
`;
