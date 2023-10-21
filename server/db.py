from pymongo import MongoClient

import os

from dotenv import load_dotenv



def get_mongo_db_collection(): 
    dotenv_path = os.path.join(os.path.dirname(__file__), '.env')

    load_dotenv(dotenv_path)

    MONGODB_URI = os.getenv("MONGODB_URI")
    try: 
        client = MongoClient(MONGODB_URI)
        db = client.get_database('cluster0')
        
        return db
    except Exception as e:
        print("Error occured: ", e)
        return None

# from db import get_mongo_db_collection
