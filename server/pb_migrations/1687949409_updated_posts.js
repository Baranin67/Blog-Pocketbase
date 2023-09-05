migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xf5yys9brbs8axt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kfr52j92",
    "name": "views",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xf5yys9brbs8axt")

  // remove
  collection.schema.removeField("kfr52j92")

  return dao.saveCollection(collection)
})
