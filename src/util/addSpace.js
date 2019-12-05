function addSpace(str) {
  var prev_upper = true
  var ret = ""
  for (var i = 0; i < str.length; i++) {
    let char = str.charAt(i)
    let upper = (char == char.toUpperCase())
    
    // add a space
    if (upper && !prev_upper) {
      ret = ret.concat(" ")
    } 
    ret = ret.concat(char)
    prev_upper = upper
  }
  return ret
}

export default addSpace;