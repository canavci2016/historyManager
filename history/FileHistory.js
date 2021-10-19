const fs = require('fs');

module.exports = class FileHistory {

    constructor(name) {
        this.fileName = name;
    }

    write(content) {
        fs.writeFileSync('./' + this.fileName, content);
    }

    read() {
        return fs.readFileSync('./' + this.fileName);
    }
}