import pymongo

myclient = pymongo.MongoClient("mongodb://localhost:27017/")

db = myclient["mydatabase"]

db.inventory.insert_one(
    {"item": "canvas",
     "qty": 100,
     "tags": ["cotton"],
     "size": {"h": 28, "w": 35.5, "uom": "cm"}})

dblist = myclient.list_database_names()
if "mydatabase" in dblist:
  print("The database exists.")