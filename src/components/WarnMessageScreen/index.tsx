import React from 'react';
import { 
  MessageNotMealFound,
  DescriptionNotMealFound
 } from './styles';

type WarnMessageScreenProps = {
  messageMain: string;
  messageDescription: string;
}

export function WarnMessageScreen(
  {messageMain, messageDescription}: WarnMessageScreenProps
) {
  return (
    <>
      <MessageNotMealFound>
        {messageMain}
      </MessageNotMealFound>
      <DescriptionNotMealFound>
        {messageDescription}
      </DescriptionNotMealFound>
    </>
  );
}
