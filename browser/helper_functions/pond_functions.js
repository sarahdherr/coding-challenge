// UTILITY FUNCTIONS:

// takes in P or S movement and changes the degrees pointed (0 = North)
const directions = {
  'P': (deg) => {
    const newDeg = (deg - 90) % 360
    return normalizeDegs(newDeg)
  },
  'S': (deg) => {
    const newDeg = (deg + 90) % 360
    return normalizeDegs(newDeg)
  }
}

// if degrees become negative, converts it to a degree between 0 and 360
function normalizeDegs (deg) {
  if (deg < 0) deg += 360
  return deg
}

// converts orientation from compass direction to degrees
const orientationToDegs = {
  'N': 0,
  'E': 90,
  'S': 180,
  'W': 270
}

// converts orientation from degrees to compass directions
const degsToOrientation = {
  0: 'N',
  90: 'E',
  180: 'S',
  270: 'W'
}

// moves duck forward based on orientation and (x, y) coordinates
const forward = {
  'N': ([x, y]) => [x, (y + 1)],
  'E': ([x, y]) => [(x + 1), y],
  'W': ([x, y]) => [(x - 1), y],
  'S': ([x, y]) => [x, (y - 1)]
}

// splits the string and grabs the index passed in (as position)
function spaceParse (str, position) {
  return str.split(' ')[position]
}


// POND FUNCTION:

// Pond constructor function, has upper-right coordinates as integers
function Pond (str) {
  this.gridX = spaceParse(str, 0)
  this.gridY = spaceParse(str, 1)
}

// DUCK FUNCTIONS:

// takes a starting position as string and creates an instance of Duck
Pond.prototype.duck = function (strInput) {
  return new Duck(strInput, [this.gridX, this.gridY])
}

// Duck constructor function, has coordinates as an array [x, y], orientation as string, and the ducks pond dimensions
function Duck (str, pondDims) {
  this.coordinates = [ +spaceParse(str, 0), +spaceParse(str, 1) ]
  this.orientation = spaceParse(str, 2)
  this.pondSize = pondDims
}

// MOVE FUNCTIONS:

// if the next move from the duck is outside of the pond, then the move is not made
function validatePondBounds (next, previous, bounds) {
  if (next[0] <= bounds[0] && next[1] <= bounds[1] && next[0] > -1 && next[1] > -1) return next
  return previous
}

// takes the series of steps as a string, loops through them and performs the needed changes to the duck position
Duck.prototype.move = function (strInput) {
  const movementArr = strInput.split('')
  movementArr.forEach(step => {
    if (step === 'S' || step === 'P') {
      this.orientation = rotate(step, this.orientation)
    } else if (step === 'F') {
      const nextStep = forward[this.orientation](this.coordinates)
      this.coordinates = validatePondBounds(nextStep, this.coordinates, this.pondSize)
    } else {
      console.log('Invalid input')
    }
  })
  return this // allows for chaining (ie. `duck1.move('FFS').move('PFSP')` )
}

// takes in the movement ('P' or 'S') and orientation and returns the new orientation
function rotate (step, orientation) {
  const startDegrees = orientationToDegs[orientation]
  const endDegrees = directions[step](startDegrees)
  return degsToOrientation[endDegrees]
}

export default Pond
