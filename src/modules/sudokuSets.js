export default function sudokuSets() {

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const setNumber = parseInt(urlParams.get('set'))

  switch (setNumber) {
    case 1:
      return (
        [
          [[{ id : 100, value : 1}, { id : 101, value : 2}, { id : 102, value : 3}], 
          [{ id : 110, value : 0}, { id : 111, value : 5}, { id : 112, value : 0}], 
          [{ id : 120, value : 6}, { id : 121, value : 0}, { id : 122, value : 9}]],
  
          [[{ id : 200, value : 4}, { id : 201, value : 0}, { id : 202, value : 0}], 
          [{ id : 210, value : 0}, { id : 211, value : 8}, { id : 212, value : 9}], 
          [{ id : 220, value : 2}, { id : 221, value : 0}, { id : 222, value : 7}]],
  
          [[{ id : 300, value : 7}, { id : 301, value : 8}, { id : 302, value : 9}], 
          [{ id : 310, value : 0}, { id : 311, value : 0}, { id : 312, value : 6}], 
          [{ id : 320, value : 1}, { id : 321, value : 4}, { id : 322, value : 5}]],
  
          [[{ id : 400, value : 8}, { id : 401, value : 1}, { id : 402, value : 5}], 
          [{ id : 410, value : 0}, { id : 411, value : 0}, { id : 412, value : 4}], 
          [{ id : 420, value : 3}, { id : 421, value : 9}, { id : 422, value : 6}]],
  
          [[{ id : 500, value : 3}, { id : 501, value : 6}, { id : 502, value : 2}], 
          [{ id : 510, value : 8}, { id : 511, value : 9}, { id : 512, value : 0}], 
          [{ id : 520, value : 5}, { id : 521, value : 7}, { id : 522, value : 0}]],
  
          [[{ id : 600, value : 9}, { id : 601, value : 0}, { id : 602, value : 4}], 
          [{ id : 610, value : 0}, { id : 611, value : 5}, { id : 612, value : 3}], 
          [{ id : 620, value : 8}, { id : 621, value : 1}, { id : 622, value : 2}]],
  
          [[{ id : 700, value : 0}, { id : 701, value : 4}, { id : 702, value : 0}], 
          [{ id : 710, value : 7}, { id : 711, value : 0}, { id : 712, value : 1}], 
          [{ id : 720, value : 9}, { id : 721, value : 3}, { id : 722, value : 8}]],
  
          [[{ id : 800, value : 6}, { id : 801, value : 1}, { id : 802, value : 8}], 
          [{ id : 810, value : 0}, { id : 811, value : 0}, { id : 812, value : 3}], 
          [{ id : 820, value : 7}, { id : 821, value : 2}, { id : 822, value : 5}]],
  
          [[{ id : 900, value : 3}, { id : 901, value : 9}, { id : 902, value : 0}], 
          [{ id : 910, value : 5}, { id : 911, value : 0}, { id : 912, value : 8}], 
          [{ id : 920, value : 0}, { id : 921, value : 6}, { id : 922, value : 1}]],
        ]
      )
      break;
  
    case 2:
      return (
        [
          [[{ id : 100, value : 4}, { id : 101, value : 7}, { id : 102, value : 0}], 
          [{ id : 110, value : 0}, { id : 111, value : 2}, { id : 112, value : 0}], 
          [{ id : 120, value : 0}, { id : 121, value : 0}, { id : 122, value : 0}]],
  
          [[{ id : 200, value : 9}, { id : 201, value : 0}, { id : 202, value : 1}], 
          [{ id : 210, value : 3}, { id : 211, value : 0}, { id : 212, value : 0}], 
          [{ id : 220, value : 0}, { id : 221, value : 0}, { id : 222, value : 0}]],
  
          [[{ id : 300, value : 6}, { id : 301, value : 0}, { id : 302, value : 5}], 
          [{ id : 310, value : 0}, { id : 311, value : 8}, { id : 312, value : 4}], 
          [{ id : 320, value : 0}, { id : 321, value : 0}, { id : 322, value : 1}]],
  
          [[{ id : 400, value : 0}, { id : 401, value : 1}, { id : 402, value : 4}], 
          [{ id : 410, value : 6}, { id : 411, value : 0}, { id : 412, value : 0}], 
          [{ id : 420, value : 0}, { id : 421, value : 3}, { id : 422, value : 0}]],
  
          [[{ id : 500, value : 7}, { id : 501, value : 0}, { id : 502, value : 8}], 
          [{ id : 510, value : 2}, { id : 511, value : 0}, { id : 512, value : 3}], 
          [{ id : 520, value : 6}, { id : 521, value : 0}, { id : 522, value : 5}]],
  
          [[{ id : 600, value : 0}, { id : 601, value : 5}, { id : 602, value : 0}], 
          [{ id : 610, value : 0}, { id : 611, value : 0}, { id : 612, value : 9}], 
          [{ id : 620, value : 8}, { id : 621, value : 1}, { id : 622, value : 0}]],
  
          [[{ id : 700, value : 8}, { id : 701, value : 0}, { id : 702, value : 0}], 
          [{ id : 710, value : 5}, { id : 711, value : 9}, { id : 712, value : 0}], 
          [{ id : 720, value : 7}, { id : 721, value : 0}, { id : 722, value : 1}]],
  
          [[{ id : 800, value : 0}, { id : 801, value : 0}, { id : 802, value : 0}], 
          [{ id : 810, value : 0}, { id : 811, value : 0}, { id : 812, value : 4}], 
          [{ id : 820, value : 5}, { id : 821, value : 0}, { id : 822, value : 2}]],
  
          [[{ id : 900, value : 0}, { id : 901, value : 0}, { id : 902, value : 0}], 
          [{ id : 910, value : 0}, { id : 911, value : 2}, { id : 912, value : 0}], 
          [{ id : 920, value : 0}, { id : 921, value : 9}, { id : 922, value : 8}]],
        ]
      )
      break;
  
    case 3:
      return (
        [
          [[{ id : 100, value : 2}, { id : 101, value : 0}, { id : 102, value : 5}], 
          [{ id : 110, value : 4}, { id : 111, value : 0}, { id : 112, value : 0}], 
          [{ id : 120, value : 0}, { id : 121, value : 0}, { id : 122, value : 0}]],

          [[{ id : 200, value : 0}, { id : 201, value : 0}, { id : 202, value : 7}], 
          [{ id : 210, value : 9}, { id : 211, value : 6}, { id : 212, value : 0}], 
          [{ id : 220, value : 0}, { id : 221, value : 8}, { id : 222, value : 0}]],

          [[{ id : 300, value : 0}, { id : 301, value : 0}, { id : 302, value : 6}], 
          [{ id : 310, value : 0}, { id : 311, value : 2}, { id : 312, value : 0}], 
          [{ id : 320, value : 0}, { id : 321, value : 4}, { id : 322, value : 5}]],

          [[{ id : 400, value : 9}, { id : 401, value : 8}, { id : 402, value : 0}], 
          [{ id : 410, value : 5}, { id : 411, value : 7}, { id : 412, value : 0}], 
          [{ id : 420, value : 0}, { id : 421, value : 0}, { id : 422, value : 0}]],

          [[{ id : 500, value : 0}, { id : 501, value : 7}, { id : 502, value : 4}], 
          [{ id : 510, value : 8}, { id : 511, value : 0}, { id : 512, value : 2}], 
          [{ id : 520, value : 6}, { id : 521, value : 3}, { id : 522, value : 0}]],

          [[{ id : 600, value : 0}, { id : 601, value : 0}, { id : 602, value : 0}], 
          [{ id : 610, value : 0}, { id : 611, value : 6}, { id : 612, value : 9}], 
          [{ id : 620, value : 0}, { id : 621, value : 5}, { id : 622, value : 7}]],

          [[{ id : 700, value : 7}, { id : 701, value : 5}, { id : 702, value : 0}], 
          [{ id : 710, value : 0}, { id : 711, value : 6}, { id : 712, value : 0}], 
          [{ id : 720, value : 3}, { id : 721, value : 0}, { id : 722, value : 0}]],

          [[{ id : 800, value : 0}, { id : 801, value : 2}, { id : 802, value : 0}], 
          [{ id : 810, value : 0}, { id : 811, value : 5}, { id : 812, value : 1}], 
          [{ id : 820, value : 4}, { id : 821, value : 0}, { id : 822, value : 0}]],

          [[{ id : 900, value : 0}, { id : 901, value : 0}, { id : 902, value : 0}], 
          [{ id : 910, value : 0}, { id : 911, value : 0}, { id : 912, value : 2}], 
          [{ id : 920, value : 5}, { id : 921, value : 0}, { id : 922, value : 8}]],
        ]
      )
      break;
  
    case 4:
      return (
        [
          [[{ id : 100, value : 0}, { id : 101, value : 6}, { id : 102, value : 0}], 
          [{ id : 110, value : 0}, { id : 111, value : 0}, { id : 112, value : 4}], 
          [{ id : 120, value : 8}, { id : 121, value : 7}, { id : 122, value : 1}]],

          [[{ id : 200, value : 0}, { id : 201, value : 0}, { id : 202, value : 5}], 
          [{ id : 210, value : 0}, { id : 211, value : 9}, { id : 212, value : 6}], 
          [{ id : 220, value : 3}, { id : 221, value : 0}, { id : 222, value : 2}]],

          [[{ id : 300, value : 7}, { id : 301, value : 0}, { id : 302, value : 2}], 
          [{ id : 310, value : 0}, { id : 311, value : 1}, { id : 312, value : 0}], 
          [{ id : 320, value : 0}, { id : 321, value : 0}, { id : 322, value : 0}]],

          [[{ id : 400, value : 5}, { id : 401, value : 0}, { id : 402, value : 0}], 
          [{ id : 410, value : 0}, { id : 411, value : 3}, { id : 412, value : 0}], 
          [{ id : 420, value : 0}, { id : 421, value : 0}, { id : 422, value : 7}]],

          [[{ id : 500, value : 0}, { id : 501, value : 7}, { id : 502, value : 1}], 
          [{ id : 510, value : 0}, { id : 511, value : 5}, { id : 512, value : 0}], 
          [{ id : 520, value : 8}, { id : 521, value : 2}, { id : 522, value : 0}]],

          [[{ id : 600, value : 3}, { id : 601, value : 0}, { id : 602, value : 0}], 
          [{ id : 610, value : 0}, { id : 611, value : 7}, { id : 612, value : 0}], 
          [{ id : 620, value : 0}, { id : 621, value : 0}, { id : 622, value : 5}]],

          [[{ id : 700, value : 0}, { id : 701, value : 0}, { id : 702, value : 0}], 
          [{ id : 710, value : 0}, { id : 711, value : 8}, { id : 712, value : 0}], 
          [{ id : 720, value : 7}, { id : 721, value : 0}, { id : 722, value : 6}]],

          [[{ id : 800, value : 5}, { id : 801, value : 0}, { id : 802, value : 9}], 
          [{ id : 810, value : 2}, { id : 811, value : 6}, { id : 812, value : 0}], 
          [{ id : 820, value : 4}, { id : 821, value : 0}, { id : 822, value : 0}]],

          [[{ id : 900, value : 6}, { id : 901, value : 8}, { id : 902, value : 7}], 
          [{ id : 910, value : 1}, { id : 911, value : 0}, { id : 912, value : 0}], 
          [{ id : 920, value : 0}, { id : 921, value : 2}, { id : 922, value : 0}]],
        ]
      )
      break;
  
    default:
      return (
        [
          [[{ id : 100, value : 0}, { id : 101, value : 0}, { id : 102, value : 0}], 
          [{ id : 110, value : 0}, { id : 111, value : 0}, { id : 112, value : 0}], 
          [{ id : 120, value : 0}, { id : 121, value : 0}, { id : 122, value : 0}]],

          [[{ id : 200, value : 0}, { id : 201, value : 0}, { id : 202, value : 0}], 
          [{ id : 210, value : 0}, { id : 211, value : 0}, { id : 212, value : 0}], 
          [{ id : 220, value : 0}, { id : 221, value : 0}, { id : 222, value : 0}]],

          [[{ id : 300, value : 0}, { id : 301, value : 0}, { id : 302, value : 0}], 
          [{ id : 310, value : 0}, { id : 311, value : 0}, { id : 312, value : 0}], 
          [{ id : 320, value : 0}, { id : 321, value : 0}, { id : 322, value : 0}]],

          [[{ id : 400, value : 0}, { id : 401, value : 0}, { id : 402, value : 0}], 
          [{ id : 410, value : 0}, { id : 411, value : 0}, { id : 412, value : 0}], 
          [{ id : 420, value : 0}, { id : 421, value : 0}, { id : 422, value : 0}]],

          [[{ id : 500, value : 0}, { id : 501, value : 0}, { id : 502, value : 0}], 
          [{ id : 510, value : 0}, { id : 511, value : 0}, { id : 512, value : 0}], 
          [{ id : 520, value : 0}, { id : 521, value : 0}, { id : 522, value : 0}]],

          [[{ id : 600, value : 0}, { id : 601, value : 0}, { id : 602, value : 0}], 
          [{ id : 610, value : 0}, { id : 611, value : 0}, { id : 612, value : 0}], 
          [{ id : 620, value : 0}, { id : 621, value : 0}, { id : 622, value : 0}]],

          [[{ id : 700, value : 0}, { id : 701, value : 0}, { id : 702, value : 0}], 
          [{ id : 710, value : 0}, { id : 711, value : 0}, { id : 712, value : 0}], 
          [{ id : 720, value : 0}, { id : 721, value : 0}, { id : 722, value : 0}]],

          [[{ id : 800, value : 0}, { id : 801, value : 0}, { id : 802, value : 0}], 
          [{ id : 810, value : 0}, { id : 811, value : 0}, { id : 812, value : 0}], 
          [{ id : 820, value : 0}, { id : 821, value : 0}, { id : 822, value : 0}]],

          [[{ id : 900, value : 0}, { id : 901, value : 0}, { id : 902, value : 0}], 
          [{ id : 910, value : 0}, { id : 911, value : 0}, { id : 912, value : 0}], 
          [{ id : 920, value : 0}, { id : 921, value : 0}, { id : 922, value : 0}]],
        ]
      )
      break;
  }
}