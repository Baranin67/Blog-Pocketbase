migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xf5yys9brbs8axt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cyiygswq",
    "name": "tags",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xf5yys9brbs8axt")

  // remove
  collection.schema.removeField("cyiygswq")

  return dao.saveCollection(collection)
})
