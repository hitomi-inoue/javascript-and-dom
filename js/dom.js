//Task 1
//Access HTML element with id tag-line.
let tag = document.getElementById("tag-line");
//Access all h2 headings that belong to div with the class name bg-main-content.
let headings = document.querySelectorAll(".bg-main-content h2");
//Create the variable collect and assign it with content of tag-line.
let collect = `${tag.textContent}\n`;
//Loop through the array of headings and append the content of each heading to variable collect
for (let heading of headings) {
    collect += `${heading.textContent}\n`;
}
//After the loop, use alert to print collect
//Printed output:
alert(collect);




let when_to_launch = document.querySelectorAll(".bg-main-content .box")[12];


let children = `${when_to_launch.textContent}\n`;

let when_content = document.querySelectorAll(".bg-main-content .box p")[12];
//for () {
//    children += `\t${when_content.textContent}\n`;
//}


alert(children);
