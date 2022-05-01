const User = require('./../../app/models/User')

describe("Prueba de jest", () => {
    test("prueba 1", () => {
        const user = new User(1, "JorgeDavid", "Jorge", "Bio", "dateCreated", "lastUpdate")
        expect(user.id).toBe(1)
        expect(user.username).toBe("JorgeDavid")
        expect(user.name).toBe("Jorge")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")git 
        expect(user.lastUpdated).toBe("lastUpdated")
    })
})