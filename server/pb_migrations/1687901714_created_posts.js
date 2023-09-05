migrate((db) => {
  const collection = new Collection({
    "id": "xf5yys9brbs8axt",
    "created": "2023-06-27 21:35:14.832Z",
    "updated": "2023-06-27 21:35:14.832Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ewmwxhxz",
        "name": "is_private",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "bdbzaitf",
        "name": "content",
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
        "id": "dqsthmx7",
        "name": "thumbnail",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpeg",
            "image/png",
            "image/webp",
            "image/svg+xml"
          ],
          "thumbs": [],
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xf5yys9brbs8axt");

  return dao.deleteCollection(collection);
})
