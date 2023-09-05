migrate((db) => {
  const collection = new Collection({
    "id": "vtx8rt9tvo987pg",
    "created": "2023-06-28 08:52:32.643Z",
    "updated": "2023-06-28 08:52:32.643Z",
    "name": "tags",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "5upmxr5m",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [
      "CREATE INDEX `idx_g6XRYKT` ON `tags` (`name`)"
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vtx8rt9tvo987pg");

  return dao.deleteCollection(collection);
})
