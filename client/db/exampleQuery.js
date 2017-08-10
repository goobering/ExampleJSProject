// CREATE
/////////////////

// Insert a single document (i.e. table row) into a collection (i.e. a table)
//
// db.inventory.insertOne(
//    { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
// )

// Insert multiple documents into a collection
//
// db.inventory.insertMany([
//    { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
//    { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
//    { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
// ])

// RETRIEVE
/////////////////

// Find all documents in a collection
//
// db.inventory.find( {} )

// Find all documents in a collection where the status field equals "D"
//
// db.inventory.find( { status: "D" } )

// Find all documents in a collection where the status field equals "D" or "A"
//
// db.inventory.find( { status: { $in: [ "A", "D" ] } } )

// Find all documents in a collection where the status field equals "A" AND
// the qty field is less than 30
//
// db.inventory.find( { status: "A", qty: { $lt: 30 } } )

// UPDATE (pretty massive PITA)
/////////////////
// Update the first document found where the item field equals "paper"
// 
// uses the $set operator to update the value of the size.uom field to "cm" and
// the value of the status field to "P",
//
// uses the $currentDate operator to update the value of the lastModified field 
// to the current date. If lastModified field does not exist, $currentDate will create the field. See $currentDate for details.
//
// db.inventory.updateOne(
//    { item: "paper" },
//    {
//      $set: { "size.uom": "cm", status: "P" },
//      $currentDate: { lastModified: true }
//    }
// )

// Completely replace the values of every field in an object *apart from ID* with the 
// values of another field (this looks more usable than the above method)
//
// db.inventory.replaceOne(
//    { item: "paper" },
//    { item: "paper", instock: [ { warehouse: "A", qty: 60 }, { warehouse: "B", qty: 40 } ] }
// )

// DELETE 
// These behave very similarly to remove(), but remove() is being deprecated 
// and they've come up with this (mongo -version should give 3.2 or higher),
// which is more consistent with all the above methods.
/////////////////
// Deletes all documents from a collection
//
// db.inventory.deleteMany({})

// Deletes all documents that match a condition
// This deletes all documents in the inventory collection where the status field equals "A"
//
// db.inventory.deleteMany({ status : "A" })

// Delete a single document that matches a condition
// This deletes the first document in the inventory collection where the status field equals "D"
// 
// db.inventory.deleteOne( { status: "D" } )