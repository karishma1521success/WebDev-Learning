//To convert an array into the excel file
//step1: Install :   npm i json-as-xlsx
//step2: 
import xlsx from "json-as-xlsx"
// or require
let xlsx = require("json-as-xlsx")

//step:3
let data = [
  {
    sheet: "Adults",  
    columns: [    // columns represent the heading we want for our excel sheet columns
      { label: "User", value: "user" }, // Top level data    
      { label: "Age", value: (row) => row.age + " years" }, // Custom format
      { label: "Phone", value: (row) => (row.more ? row.more.phone || "" : "") }, // Run functions
    ],
    content: [    // this is an array of object means data which we want to convert into excel sheet
      { user: "Andrea", age: 20, more: { phone: "11111111" } },
      { user: "Luis", age: 21, more: { phone: "12345678" } },
    ],
  },
  {
    sheet: "Children",
    columns: [
      { label: "User", value: "user" }, // Top level data
      { label: "Age", value: "age", format: '# "years"' }, // Column format
      { label: "Phone", value: "more.phone", format: "(###) ###-####" }, // Deep props and column format
    ],
    content: [
      { user: "Manuel", age: 16, more: { phone: 9999999900 } },
      { user: "Ana", age: 17, more: { phone: 8765432135 } },
    ],
  },
]// here no of objects represent no of sheets so we can clearly see there is two object inside the data array so two sheet will create one of adults and another is children


let settings = {
  fileName: "MySpreadsheet", // Name of the resulting spreadsheet
  extraLength: 3, // A bigger number means that columns will be wider
  writeMode: "writeFile", // The available parameters are 'WriteFile' and 'write'. This setting is optional. Useful in such cases https://docs.sheetjs.com/docs/solutions/output#example-remote-file
  writeOptions: {}, // Style options from https://docs.sheetjs.com/docs/api/write-options
  RTL: true, // Display the columns from right-to-left (the default value is false)
}

xlsx(data, settings) // Will download the excel file