let Visitor = require("../nodeFileIO.js");

describe("Visitor", ()=>{
  let ofentse = new Visitor("Ofentse Sambo", 
                        25, 
                        "22 September 2019", 
                        "12:54", 
                        "Everything was just fine and the stuff was friendly", 
                        "Teboho Lekhalo"
                      );
  let sbongile = new Visitor("Sbongile Vilakazi", 
                        25, 
                        "12 May 2019", 
                        "12:54", 
                        "The person who assisted me was rude", 
                        "Kurtlin Hendricks"
                      );
  
  it("should check if save() is defined", ()=>{
      

      expect(ofentse.save).toBeDefined()
  })

  it("should check if load()  is defined", ()=>{
      
      ofentse.load()
      sbongile.load()
      expect(ofentse.load).toBeDefined()
  })

  it("should throw file doesn't exit", ()=> {
    let John = new Visitor(
      "John Cena"
    )
    expect(function() {
      John.load()
    }).toThrow(Error("File doesn't exist"))
  })
})

describe("Visitor", () => {

const fs = require('fs')
let merriam = new Visitor("Merriam Montsho",
                          44, 
                          "22 December 2019", 
                          "14:24", 
                          "Everything was just fine and the stuff was friendly", 
                          "Teboho Lekhalo")

it("should test data in JSON file", async () => {
  await merriam.save()

  fs.readFile('visitor_Merriam Montsho.json','utf-8', (err, data) => {
    
        if(err){
          throw "File doesn't exist"
      }else{
      expect(
        {
          "fullName": "Merriam Montsho",
          "age": 44,
          "dateOfVisit": "22 December 2019",
          "timeOfVisit": "14:24",
          "comments": "Everything was just fine and the stuff was friendly",
          "VisitorAssistedBy": "Teboho Lekhalo"
        }).toEqual(JSON.parse(data))
      }
    })
  })

  fs.unlink('visitor_Merriam Montsho.json', (err) => {
    if(err){
      throw Error(err);
    }
  })
})

