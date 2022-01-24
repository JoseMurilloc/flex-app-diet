import React, { useEffect, useState } from 'react';
import { getCardAllDays, Week } from '../../commons/week';
import { 
  CardDay, 
  CardDayText, 
  Container
} from './styles';


const WeekList: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(
    () => new Date()
  );
  const [weekDays, setWeekDays] = useState<Week[]>([])

  useEffect(()=> {
    const week = getCardAllDays(currentDate)
    setWeekDays(week)
  },[])
  
  return (
    <Container>
      {weekDays.map(day => (
        <CardDay key={day.day} isActive={day.active}>
          <CardDayText isActive={day.active}>{day.day}</CardDayText>
        </CardDay>
      ))}
    </Container>
  );
}

export default WeekList;