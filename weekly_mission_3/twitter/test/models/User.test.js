const User = require('./../../app/models/User')

describe("Test para User", () => {
    test("Requerimiento 1: Creación de User", () => {
        const user = new User(1, "JorgeDavid", "Jorge", "Bio") //, "dateCreated", "lastUpdate"
        expect(user.id).toBe(1)
        expect(user.username).toBe("JorgeDavid")
        expect(user.name).toBe("Jorge")
        expect(user.bio).toBe("Bio")
        // expect(user.dateCreated).toBe("dateCreated")
        // expect(user.lastUpdated).toBe("lastUpdated")
    })

    test("Requerimiento 2: Fechas en atributos de User", () => {
        const user = new User(1, "jorgedavid", "jorge", "Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })
})