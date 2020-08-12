let fs = require("fs");

class Visitor {
    constructor(fullName, age, dateOfVisit, timeOfVisit, comments, VisitorAssistedBy) {
        (this.fullName = fullName),
        (this.age = age),
        (this.dateOfVisit = dateOfVisit),
        (this.timeOfVisit = timeOfVisit),
        (this.comments = comments),
        (this.VisitorAssistedBy = VisitorAssistedBy);
    }

    save() {
        let path = "visitor_" + this.fullName + ".json";
        if (fs.existsSync(path)) {
            throw Error("File already exists");
        }

        fs.writeFile(path, JSON.stringify(this, null, 2), err => {
            if (err) {
                throw "Your information is not saved";
            } else {
                console.log("Successfully saved your information");
            }
        });
    }

    load() {
        let path = "visitor_" + this.fullName + ".json";
        if(!fs.existsSync(path)){
            throw Error("File doesn't exist")
        }
        fs.readFile(path, (err, data) => {
            try {
                if (err) {
                    throw err;
                }

                data = JSON.parse(data);
            } catch (err) {
                throw err;
            }
           return data;
        });
    }
}

module.exports = Visitor;
