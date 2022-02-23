export const generateWeight = (start: number, until: number) => 
[...Array(until)].map((_, index) => start + index);