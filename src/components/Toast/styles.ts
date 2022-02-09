import styled from 'styled-components/native';
import { MotiView } from 'moti';
import { Status } from '../../contexts/toast/types';
import { darken, lighten } from 'polished';

type ToastStatusProps = {
  status: Status;
}

const applyPolishDarken = (statusColor: string) => darken(0.3, statusColor) 
const applyPolishLighten = (statusColor: string) => lighten(
  0.2, statusColor
)

export const Container = styled(MotiView)<ToastStatusProps>`
  position: absolute;
  bottom: 30px;

  align-self: center;

  background-color: ${({status, theme}) => 
    applyPolishLighten(theme.colors.status[status])
  };
  
  padding: 6px 30px;
  border-radius: 10px;
`;

export const Message = styled.Text<ToastStatusProps>`
  color: ${({status, theme}) => 
    applyPolishDarken(theme.colors.status[status])
  };
`;
