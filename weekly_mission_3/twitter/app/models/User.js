class User{
    constructor(id, username, name, bio, dateCreated, lastUpdated){
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdated = new Date()
    }

    get getUsername(){
        return this.username
    }

    set setUsetname(newUsername) {
        this.username = newUsername
    }
}

module.exports = User