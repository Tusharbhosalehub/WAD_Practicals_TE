
// CREATE
use ("CrudDb")
db.createCollection("courses")

db.courses.insertOne({
    name: "Onkar",
    price: 0,
    assignments: 10,
    projects: 5
})

// let a=db.courses.find({price:0})
// console.log(a)

// console.log(a.count())
// console.log(a.toArray())

// Update
db.courses.updateOne({price:0}, {$set:{price:100}})

db.courses.updateMany({price:0}, {$set:{price:1000}})

// Delete

db.courses.deleteOne({price: 100})
db.courses.deleteMany({price: 1000})