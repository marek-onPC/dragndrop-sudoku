export default function finishChecker(sudokuSet) {
  var initialState = true

  sudokuSet.forEach(sudokuSection => {
    sudokuSection.forEach(sudokuRow => {
      sudokuRow.forEach(sudokuNumber => {
        if (sudokuNumber['value'] == 0)
          initialState = false
      });
    });
  });

  return initialState
}