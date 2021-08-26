const fs = require('fs');
const IGNORE = ["css", "js", "img", "sass"]

const folders = fs.readdirSync("../", { withFileTypes: true })
.filter(dirent => dirent.isDirectory())
.map(dirent => dirent.name)
.filter(folder => (!(folder.indexOf(".") + 1)) && !IGNORE.find(I => I === folder));
console.log(folders);


let text = folders.map(folder => {return {data:
`<article class="article" style="--bgn: url(../${folder}/img.png)">
    <a href="./${folder}/index.html">
        <span>${folder}</span>
    </a>
</article>`
}
});

fs.writeFileSync("./thing.json", JSON.stringify(text))



