import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #F5F5F5;
  border: 0.5px solid ${({theme}) => theme.colors.border};

  width: 100%;
  height: 162px;
  border-radius: 6px;
  margin-top: 4px;

  padding: 18px 45px 16px 12px;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ProgressMacros = styled.View`
  /* background-color: yellow; */
  height: 65%;

  justify-content: space-between;
`;
