// Q2: Insert a Customer Document
db.Customers.insertOne({
    name: "John Doe",
    email: "john@example.com",
    address: "123 Main St",
    purchases: 500
})

// Q3: Retrieve All Customers
db.Customers.find().pretty()

// Q4: Update a Customer’s Address
db.Customers.updateOne(
    { name: "John Doe" },
    { $set: { address: "456 New St" } }
)

// Q5: Query Customers with Purchases Over a Certain Amount
db.Customers.find({ purchases: { $gt: 300 } })

// Q6: Remove a Customer
db.Customers.deleteOne({ name: "John Doe" })

// Q8: Insert Students into "Students" Collection
db.Students.insertMany([
    { name: "Alice", age: 14, grade: "8th" },
    { name: "Bob", age: 15, grade: "9th" }
])

// Q9: Query Students Older Than a Specific Age
db.Students.find({ age: { $gt: 14 } })

// Q10: Update a Student’s Grade
db.Students.updateOne(
    { name: "Alice" },
    { $set: { grade: "9th" } }
)

// Q11: Insert Teachers into "Teachers" Collection
db.Teachers.insertMany([
    { name: "Mr. Smith", subject: "Math", experience: 10 },
    { name: "Ms. Johnson", subject: "Science", experience: 8 }
])

// Q12: Query Teachers by Subject or Experience
db.Teachers.find({ subject: "Math" })
db.Teachers.find({ experience: { $gt: 5 } })

// Q13: Update a Teacher’s Experience
db.Teachers.updateOne(
    { name: "Mr. Smith" },
    { $set: { experience: 12 } }
)

// Tasks Related to "PWSKILLS" Database

db.createCollection("Employees")  

db.Employees.insertMany([
    { name: "Alice", position: "Manager", salary: 50000 },
    { name: "Bob", position: "Developer", salary: 60000 }
]) 

db.Employees.find().pretty()  

db.Employees.drop() 

db.dropDatabase() 


