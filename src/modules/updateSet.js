export default function updateSet(currentSet, numberPosition, numberValue) {
  const numberCoordinates = numberPosition.split('')

  currentSet[numberCoordinates[0]-1][numberCoordinates[1]][numberCoordinates[2]]['value'] = parseInt(numberValue);
  
  return currentSet; 
}