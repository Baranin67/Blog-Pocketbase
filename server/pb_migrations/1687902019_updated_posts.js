migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xf5yys9brbs8axt")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_n84zD4R` ON `posts` (`name`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "plqnultc",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 100,
      "pattern": "[a-z0-9-]*"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xf5yys9brbs8axt")

  collection.indexes = []

  // remove
  collection.schema.removeField("plqnultc")

  return dao.saveCollection(collection)
})
