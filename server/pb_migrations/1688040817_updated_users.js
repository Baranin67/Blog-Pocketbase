migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b06s7xms4t9a0j9")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b06s7xms4t9a0j9")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = ""

  return dao.saveCollection(collection)
})
