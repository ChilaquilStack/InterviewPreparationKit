const rotLeft = (array = [], rotations = 0) => {
    while(rotations > 0) {
        const temp = array.shift()
        array.push(temp)
        rotations--
    }
    return array
}

module.exports = rotLeft