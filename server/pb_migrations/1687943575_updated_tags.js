migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vtx8rt9tvo987pg")

  collection.indexes = []

  // remove
  collection.schema.removeField("w1wnimxv")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vtx8rt9tvo987pg")

  collection.indexes = [
    "CREATE INDEX `idx_g6XRYKT` ON `tags` (`name`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w1wnimxv",
    "name": "name",
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
})
