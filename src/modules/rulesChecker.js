export default function rulesChecker(sudokuSet, newValue, numberPosition) {
  const numberCoordinates = numberPosition.split(''),
  sectionCoordinate = numberCoordinates[0]-1,
  rowCoordinate = numberCoordinates[1],
  columnCoordinate = numberCoordinates[2]

  if(sectionChecker(sudokuSet, newValue, sectionCoordinate)) {
    if(rowChecker(sudokuSet, newValue, sectionCoordinate, rowCoordinate)) {
      if(columnChecker(sudokuSet, newValue, sectionCoordinate, columnCoordinate)) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  } else {
    return false
  }

};

function sectionChecker(sudokuSet, newValue, sectionCoordinate) {
  var conditionCheck = 0;

  for (let row = 0; row < 3; row++) {
    for (let column = 0; column < 3; column++) {
      if (conditionCheck == 0 || conditionCheck == 1) {
        if (parseInt(newValue) === sudokuSet[sectionCoordinate][row][column]['value']) {
          conditionCheck++;
        } else {
          continue
        }
      } else {
        break
      }
    }
  }

  if (conditionCheck == 0) {
    return true;
  } else if (conditionCheck >= 1) {
    return false;
  }
};

function rowChecker(sudokuSet, newValue, sectionCoordinate, rowCoordinate) {
  var conditionCheck = 0;

  if (sectionCoordinate == 0 || sectionCoordinate == 1 || sectionCoordinate == 2) {
    for (let section = 0; section < 3; section++) {
      for (let column = 0; column < 3; column++) {
        if (conditionCheck == 0 || conditionCheck == 1) {
          if (parseInt(newValue) == sudokuSet[section][rowCoordinate][column]['value']) {
            conditionCheck++;
          } else {
            continue
          }
        } else {
          break
        }
      }
    }
  } else if (sectionCoordinate == 3 || sectionCoordinate == 4 || sectionCoordinate == 5) {
    for (let section = 0; section < 3; section++) {
      for (let column = 0; column < 3; column++) {
        if (conditionCheck == 0 || conditionCheck == 1) {
          if (parseInt(newValue) == sudokuSet[section+3][rowCoordinate][column]['value']) {
            conditionCheck++;
          } else{
            continue
          }
        } else {
          break
        }
      }
    }
  } else if (sectionCoordinate == 6 || sectionCoordinate == 7 || sectionCoordinate == 8) {
    for (let section = 0; section < 3; section++) {
      for (let column = 0; column < 3; column++) {
        if (conditionCheck == 0 || conditionCheck == 1) {
          if (parseInt(newValue) == sudokuSet[section+6][rowCoordinate][column]['value']) {
            conditionCheck++;
          } else {
            continue
          }
        } else {
          break
        }
      }
    }
  }

  if (conditionCheck == 0) {
    return true;
  } else if (conditionCheck >= 1) {
    return false;
  }
}

function columnChecker(sudokuSet, newValue, sectionCoordinate, columnCoordinate){
  var conditionCheck = 0;

  if (sectionCoordinate == 0 || sectionCoordinate == 3 || sectionCoordinate == 6) {
    for (let section = 0; section < 9; section += 3) {
      for (let row = 0; row < 3; row++) {
        if (conditionCheck == 0 || conditionCheck == 1) {
          if (parseInt(newValue) == sudokuSet[section][row][columnCoordinate]['value']) {
            conditionCheck++;
          } else {
            continue
          }
        } else {
          break
        }
      }
    }
  } else if (sectionCoordinate == 1 || sectionCoordinate == 4 || sectionCoordinate == 7) {
    for (let section = 1; section < 10; section += 3) {
      for (let row = 0; row < 3; row++) {
        if (conditionCheck == 0 || conditionCheck == 1) {
          if (parseInt(newValue) == sudokuSet[section][row][columnCoordinate]['value']) {
            conditionCheck++;
          } else {
            continue
          }
        } else {
          break
        }
      }
    }
  } else if (sectionCoordinate == 2 || sectionCoordinate == 5 || sectionCoordinate == 8) {
    for (let section = 2; section < 11; section += 3) {
      for (let row = 0; row < 3; row++) {
        if (conditionCheck == 0 || conditionCheck == 1) {
          if (parseInt(newValue) == sudokuSet[section][row][columnCoordinate]['value']) {
            conditionCheck++;
          } else {
            continue
          }
        } else {
          break
        }
      }
    }
  }

    
  if (conditionCheck == 0) {
    return true;
  } else if (conditionCheck >= 1) {
    return false;
  }
}