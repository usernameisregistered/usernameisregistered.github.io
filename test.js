const fs = require("fs");
let content = fs
  .readFileSync(
    "D:\\personal\\code\\usernameisregistered.github.io\\output\\chapter\\10013_100001.html"
  )
  .toString();
let hrefReg = /<a[^href]*href=\"([^\"]*)\"/g;
let replacelinks = {};
content = content.replace(hrefReg, (match, $1) => {
  if ($1[0] === ".") {
    replacelinks[$1] = "/chapter";
    return match.replace($1, `/chapter`);
  }
  return match
});
for (let key in replacelinks) {
    content = content.replaceAll(key, replacelinks[key]);
}
fs.writeFileSync(
  "D:\\personal\\code\\usernameisregistered.github.io\\output\\chapter\\10013_100001.html",
  content
);
