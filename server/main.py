from flask import Flask
from flask_cors import CORS
from db import get_mongo_db_collection


database = get_mongo_db_collection()

try:
    database.command('ping')
    print('succeful ping')
except Exception as e:
    print(e)

app = Flask(__name__)
CORS(app)

database = database.get_database("users")


@app.route('/users/createUser', methods=['POST'])
def create_user(): 
    pass 

@app.route('/users/getUser/<email>/<password>', methods=['GET'])
def get_user(email, password): 
    pass 

@app.route('/users/getWeight/<user>', methods=['GET'])
def get_weight(user): 
    pass

@app.route('/users/getHeight/<user>', methods=['GET'])
def get_height(user): 
    pass

@app.route('/users/setWeight/<user>', methods=['POST'])
def set_weight(user): 
    pass

@app.route('/users/setHeight/<user>', methods=['POST'])
def set_height(user): 
    pass

@app.route('/users/getName/<users>', methods=['GET'])
def get_name(user): 
    pass


if __name__ == "__main__":
    app.run(debug=True)