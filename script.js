/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((record)=>{
    console.log(record)
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(printRecord);
}
function printRecord(record) {
  if(record.profession==="developer")
    console.log(record)
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4,name:"susan",age:"20",profession:"intern"});
  arr.map((record)=>{
    if(record.id==4)
      console.log(record)
  });
  
}

function removeAdmin() {
  //Write your code here, just console.log
  let index=-1;
  arr.map((record)=>{
    if(record.profession=="admin")
     index=record.id;
  });
  arr.splice(index,1);
  console.log(arr)
}

function concatenateArray() {
  //Write your code here, just console.log
  let new_arr = [
    { id: 4, name: "Mritunjay", age: "22", profession: "Backend developer" },
    { id: 5, name: "Rajeev", age: "25", profession: "Frontend developer" },
    { id: 6, name: "Ravi", age: "26", profession: "DBA" },
  ];
  result=arr.concat(new_arr);
  console.log(result)
}
