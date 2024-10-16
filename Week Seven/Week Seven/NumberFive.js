// Question 
let data = [
    { district: "kampala", rainfall: 120 },
    { district: "Gula", rainfall: 80 },
    { district: "Mbarara", rainfall: 95 },
];

// Solution 
let data = [
    { district: "Kampala", rainfall: 120 },
    { district: "Gulu", rainfall: 80 },
    { district: "Mbarara", rainfall: 95 },
  ];
  
  for (let i = 0; i < data.length; i++) {
    console.log("District: " + data[i].district + ", Rainfall: " + data[i].rainfall + "mm");
  }
  