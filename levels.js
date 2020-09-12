const levels = [
  [
    [1,0,0,0,0,0,0,0,0,0,0,1], 
    [0,0,0,0,0,2,2,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,2,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,2,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,5,2,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,2,2,0,0,0,0],
    [0,0,0,0,4,4,0,0,0,0,0,0],
    [0,0,0,0,0,0,4,0,0,0,0,0],
    [0,0,0,2,4,4,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,2,0,0,0,0,0,0],
    [0,0,0,0,0,0,2,0,0,0,0,0],
    [0,0,0,0,4,4,0,0,0,0,0,0],
    [0,0,0,0,0,0,4,4,4,4,0,0],
    [0,0,0,0,0,2,0,0,0,0,0,0],
    [0,0,0,0,0,0,2,0,0,0,0,0],
    [0,0,0,0,2,2,0,0,0,0,0,0],
    [0,0,2,2,2,2,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,4,4,4,2,0,0,0,0,0,0],
    [0,0,0,0,0,0,4,4,0,0,0,0],
    [0,0,0,4,4,4,0,0,0,0,6,0],
    [1,1,0,0,0,2,0,0,0,0,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
  ], 
  [
    [0,0,0,0,0,0,0,0,0,0,0,0], 
    [0,0,0,0,0,2,2,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,2,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,2,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,5,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,4,4,0],
    [0,0,0,0,0,0,0,0,0,0,4,0],
    [0,0,0,0,0,0,0,0,4,0,4,0],
    [0,0,0,0,0,0,0,0,4,0,2,0],
    [0,0,0,0,0,0,0,0,0,4,4,0],
    [0,0,0,0,0,0,0,0,2,0,0,0],
    [0,0,0,0,0,0,0,0,4,4,4,0],
    [0,0,0,0,0,0,0,4,4,0,0,0],
    [0,0,0,0,0,0,0,0,0,2,2,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,4,0,0,4,0],
    [0,0,0,0,0,4,0,2,2,0,0,0],
    [0,0,0,0,0,0,0,2,4,0,0,0],
    [0,0,0,0,0,0,0,4,2,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,4,4,0,0,0,0,0],
    [0,0,0,4,4,4,0,0,0,0,6,0],
    [2,2,2,2,2,2,2,2,2,2,2,2],
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
  ],
  [
    [0,0,0,0,0,0,0,0,0,0,0,0], 
    [0,0,0,0,0,2,2,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,2,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,2,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,5,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,2,0,0],
    [0,0,0,0,0,0,0,4,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,4,0,0],
    [0,0,0,0,0,0,0,4,0,0,2,0],
    [0,0,0,0,0,4,0,2,0,2,4,0],
    [0,0,0,0,2,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,4,0,2,0,4,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,2,0],
    [0,0,0,0,0,0,0,2,2,2,0,0],
    [0,0,0,0,0,0,2,2,0,0,0,0],
    [0,0,0,0,0,4,0,2,2,2,0,0],
    [0,0,0,0,0,0,0,0,2,0,0,0],
    [0,0,0,0,0,0,0,4,0,0,0,0],
    [0,0,0,0,0,2,2,0,0,0,0,0],
    [0,0,0,0,0,0,0,2,0,0,0,0],
    [0,0,4,0,0,0,0,0,2,0,6,0],
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
  ], 
  [
    [0,0,0,0,0,0,0,0,0,0,0,0], 
    [0,0,0,0,0,2,2,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,2,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,2,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,5,2,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,2,2,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,2,0,0,0,0,0,0],
    [0,0,0,0,0,4,4,0,0,0,0,0],
    [0,0,4,0,0,0,0,0,0,0,0,0],
    [0,0,2,0,0,4,4,0,0,0,0,0],
    [0,0,0,0,0,0,0,4,0,0,0,0],
    [0,0,0,2,2,2,2,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0], 
    [0,0,0,4,0,0,0,0,0,0,0,0], 
    [0,4,0,4,4,0,0,0,0,0,0,0], 
    [0,2,0,0,0,0,0,0,4,0,0,0], 
    [0,2,2,2,0,0,0,0,0,0,0,0], 
    [0,0,0,0,0,0,0,0,0,0,0,0], 
    [0,0,0,4,4,0,0,0,0,0,0,0], 
    [0,0,0,0,0,0,4,0,0,0,0,0], 
    [0,0,0,0,2,4,4,0,0,0,0,0], 
    [0,0,2,0,0,0,0,0,0,0,6,0], 
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
  ], 
  [
    [0,0,0,0,0,0,0,0,0,0,0,0], 
    [0,0,0,0,0,2,2,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,2,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,2,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,5,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,2,2,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,2,0,0,0,0],
    [0,0,0,0,0,0,0,2,0,0,0,0],
    [0,0,0,0,0,0,0,2,0,0,0,0],
    [0,0,0,0,0,2,2,2,0,0,0,0],
    [0,0,0,0,2,0,0,2,2,0,0,0],
    [0,0,0,0,0,0,0,2,0,0,0,0],
    [0,0,0,0,0,0,0,0,4,0,0,0],
    [0,0,0,4,0,0,0,2,0,0,0,0],
    [0,0,0,0,0,0,0,2,0,0,0,0],
    [0,0,0,0,0,0,2,2,0,0,0,0],
    [0,0,0,0,0,4,0,2,2,0,0,0],
    [0,0,4,0,0,0,0,0,2,0,0,0],
    [0,0,0,0,0,0,0,4,0,0,0,0],
    [0,0,0,0,0,2,2,0,0,0,0,0],
    [0,0,0,0,0,2,0,0,0,0,0,0],
    [0,0,0,2,0,0,0,0,0,0,6,0],
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
  ], 
]

window.levels = levels;