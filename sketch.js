var Student ={
  name: "Anthony Backhurst",

  class: 7,
  roll_no: 254834,
  favorite_subject: "CTE | Career Technology Education",
  marks: [46,97,43,67]
}

function setup() {
  createCanvas(400, 400);
  console.log(Student.name);
  console.log(Student.class);
  console.log(Student.favorite_subject);
}

function draw() {
  background(220);
}