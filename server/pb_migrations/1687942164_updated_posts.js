migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xf5yys9brbs8axt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i3oiskys",
    "name": "title",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": 100,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q60e3wtq",
    "name": "summary",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 300,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xf5yys9brbs8axt")

  // remove
  collection.schema.removeField("i3oiskys")

  // remove
  collection.schema.removeField("q60e3wtq")

  return dao.saveCollection(collection)
})
