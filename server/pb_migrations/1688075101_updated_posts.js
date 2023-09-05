migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xf5yys9brbs8axt")

  // remove
  collection.schema.removeField("n1mnqign")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0lpqqy8m",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xf5yys9brbs8axt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n1mnqign",
    "name": "content",
    "type": "editor",
    "required": true,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("0lpqqy8m")

  return dao.saveCollection(collection)
})
