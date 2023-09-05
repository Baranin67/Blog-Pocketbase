migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("13loxvlqs42ic0y");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "13loxvlqs42ic0y",
    "created": "2023-06-28 08:57:07.328Z",
    "updated": "2023-06-28 08:57:07.328Z",
    "name": "posts_tags",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mzwf2m2r",
        "name": "post",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "xf5yys9brbs8axt",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "id"
          ]
        }
      },
      {
        "system": false,
        "id": "pc30vjtv",
        "name": "tag",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "vtx8rt9tvo987pg",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "id"
          ]
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
})
