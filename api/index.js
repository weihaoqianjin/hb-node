let fs = require('fs')
let path = require('path')
let join = path.join
let apiMap = {}

function getJsonFiles(jsonPath){
    let jsonFiles = [];
    function findJsonFile(path){
        let files = fs.readdirSync(path);
        files.forEach(function (item, index) {
            let fPath = join(path,item);
            let stat = fs.statSync(fPath);
            if(stat.isDirectory() === true) {
                findJsonFile(fPath);
            }
            if (stat.isFile() === true) { 
              jsonFiles.push(fPath);
            }
        });
    }
    findJsonFile(jsonPath);
    return jsonFiles
}

let files = getJsonFiles('api');
files.forEach(item => {
    let model = require(item)
    console.log(model)
})