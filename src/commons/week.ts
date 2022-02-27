import { getDay } from 'date-fns'


export type Week = {
  day: string;
  active: boolean;
}

export const week: Week[] = [
  { day: 'Domingo', active: false }, // 0
  { day: 'Segunda-feira', active: false },
  { day: 'Terça-feira', active: false },
  { day: 'Quarta-feira', active: false },
  { day: 'Quinta-feira', active: false },
  { day: 'Sexta-feira', active: false },
  { day: 'Sábado', active: false }, // 6
]

export function getCardAllDays(currentDate: Date): Week[] {
  const days: Week[] = []

  const indexActiveDay = getDay(currentDate);

  const weekUpdatedIsActive = week.map((day: Week, index: number) => {
    if (index === indexActiveDay) {
      return {...day, active: true}
    }
    return day
  })

  // Se o dia active for 0 ou 6 

  const verifyFirstDayWeek = (index: number) => 
    (indexActiveDay === 0) && 6  === index;

  const verifyLastDayWeek = (index: number) => 
    (indexActiveDay === 6) && 0  === index;

  //Add of first
  weekUpdatedIsActive.map((day: Week, index: number) => {
    if (verifyFirstDayWeek(index)) {
      days.push(weekUpdatedIsActive[index])
    } else if (indexActiveDay - 1 === index) {
      days.push(weekUpdatedIsActive[index])
    }
  })

  //Add of active
  weekUpdatedIsActive.map((day: Week) => day.active && days.push(day))
  
  //Add of last
  weekUpdatedIsActive.map((day: Week, index: number) => {
    if (verifyLastDayWeek(index)) {
      days.push(weekUpdatedIsActive[index])
    } else if (indexActiveDay + 1 === index) {
      days.push(weekUpdatedIsActive[index])
    }
  })

  return days;
}
