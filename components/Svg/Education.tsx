import React from 'react';
import { EducationContainer } from './styles';

type EducationProps = {
  black: string;
};

export default function Education({ black }: EducationProps): JSX.Element {
  return (
    <EducationContainer
      xmlns="http://www.w3.org/2000/svg"
      height="32px"
      viewBox="0 0 24 24"
      width="32px"
      fill={black}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
    </EducationContainer>
  );
}