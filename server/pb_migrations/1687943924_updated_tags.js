migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vtx8rt9tvo987pg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3np700q9",
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
  const collection = dao.findCollectionByNameOrId("vtx8rt9tvo987pg")

  // remove
  collection.schema.removeField("3np700q9")

  return dao.saveCollection(collection)
})
