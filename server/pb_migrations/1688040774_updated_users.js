migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b06s7xms4t9a0j9")

  collection.viewRule = "@request.data.username != \"\""
  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b06s7xms4t9a0j9")

  collection.viewRule = null
  collection.createRule = null

  return dao.saveCollection(collection)
})
