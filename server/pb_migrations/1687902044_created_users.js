migrate((db) => {
  const collection = new Collection({
    "id": "b06s7xms4t9a0j9",
    "created": "2023-06-27 21:40:44.655Z",
    "updated": "2023-06-27 21:40:44.655Z",
    "name": "users",
    "type": "auth",
    "system": false,
    "schema": [],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("b06s7xms4t9a0j9");

  return dao.deleteCollection(collection);
})
