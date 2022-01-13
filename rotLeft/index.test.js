const rotLeft = require('./index')

describe("left rotation", () => {
    
    it("test 1", () => {
        const rotations = 4
        const list = [1,2,3,4,5]
        const result = rotLef(list, rotations)
        expect(result).toEqual([5, 1, 2, 3, 4])
    })

    it("test 2", () =>{
        const rotations = 10
        const list = [41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51]
        const result = rotLef(list, rotations)
        expect(result).toEqual([77,97,58,1,86,58,26,10,86,51,41,73,89,7,10,1,59,58,84,77])
    })

    it("test 3", () => {
        const rotations = 13
        const list = [33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97]
        const result = rotLeft(list, rotations)
        expect(result).toEqual([87, 97, 33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60])
    })
})

