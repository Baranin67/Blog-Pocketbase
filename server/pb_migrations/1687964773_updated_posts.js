migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xf5yys9brbs8axt")

  // remove
  collection.schema.removeField("kldmsyq1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rw3lvuix",
    "name": "tags",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "vtx8rt9tvo987pg",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": [
        "id"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xf5yys9brbs8axt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kldmsyq1",
    "name": "tags",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("rw3lvuix")

  return dao.saveCollection(collection)
})
