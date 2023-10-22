#main.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from db import get_mongo_db_collection


database = get_mongo_db_collection()



try:
    database.command('ping')
    print('succeful ping')
except Exception as e:
    print(e)

app = Flask(__name__)

CORS(app, origins=["http://127.0.0.1:5173"], supports_credentials=True)

database = database["users"]


def get_combined(user): 
    user_data = database.find_one({"email": user})
    return jsonify({"height": user_data["height"], "weight" : user_data["weight"], "age": user_data["age"], "familyHistory" : user_data["familyHistory"]})

def apply_ml(user): 
    pass 

def return_ml():
    pass

def return_combined(): 
    pass

@app.route('/users/createUser', methods=['POST'])
def create_user():     
    user_data = request.get_json()
    database.insert_one(user_data)
    return jsonify({"message": "User created"}) 

@app.route('/users/getUser/<email>/<password>', methods=['GET'])
def get_user(email, password): 
    user_data = database.find_one({"email": email, "password": password})
    if user_data:
        return jsonify(user_data)
    return jsonify({"message": "User not found"}, 404)

@app.route('/users/getWeight/<user>', methods=['GET'])
def get_weight(user): 
    user_data = database.find_one({"email": user})
    if user_data and "weight" in user_data:
        return jsonify({"weight": user_data["weight"]})
    return jsonify({"message": "User not found or weight data missing"}, 404)

@app.route('/users/getHeight/<user>', methods=['GET'])
def get_height(user): 
    user_data = database.find_one({"email": user})
    if user_data and "height" in user_data:
        return jsonify({"height": user_data["height"]})
    return jsonify({"message": "User not found or height data missing"}, 404)

@app.route('/users/getAge/<user>', methods=['GET'])
def get_age(user): 
    user_data = database.find_one({"email": user})
    if user_data and "age" in user_data:
        return jsonify({"age": user_data["age"]})
    return jsonify({"message": "User not found or age data missing"}, 404)

@app.route('/users/getFamilyHistory/<user>', methods=['GET'])
def get_FamilyHistory(user): 
    user_data = database.find_one({"email": user})
    if user_data and "familyHistory" in user_data:
        return jsonify({"familyHistory": user_data["familyHistory"]})
    return jsonify({"message": "User not found or height data missing"}, 404)

@app.route('/users/setWeight/<user>', methods=['POST'])
def set_weight(user): 
    weight_data = request.get_json()
    if not weight_data or "weight" not in weight_data:
        return jsonify({"message": "Invalid request data"}, 400)
    
    result = database.update_one({"email": user}, {"$set": {"weight": weight_data["weight"]}})
    if result.modified_count > 0:
        return jsonify({"message": "Weight updated"})
    return jsonify({"message": "User not found or weight update failed"}, 404)


@app.route('/users/setHeight/<user>', methods=['POST', 'GET'])
def set_height(user): 
    height_data = request.get_json()
    if not height_data or "height" not in height_data:
        return jsonify({"message": "Invalid request data"}, 400)  # Return a 400 Bad Request response

    result = database.update_one({"email": user}, {"$set": {"height": height_data["height"]}})
    if result.modified_count > 0:
        return jsonify({"message": "Height updated"})
    return jsonify({"message": "User not found or height update failed"}, 404)


@app.route('/users/setAge/<user>', methods=['POST', 'GET'])
def set_age(user): 
    weight_data = request.get_json()
    if not weight_data or "age" not in weight_data:
        return jsonify({"message": "Invalid request data"}, 400)  # Return a 400 Bad Request response

    result = database.update_one({"email": user}, {"$set": {"age": weight_data["age"]}})
    if result.modified_count > 0:
        return jsonify({"message": "Age updated"})
    return jsonify({"message": "User not found or age update failed"}, 404)


@app.route('/users/setFamilyHistory/<user>', methods=['POST', 'GET'])
def set_familyHistory(user): 
    family_history = request.get_json()
    if not family_history or "familyHistory" not in family_history:
        return jsonify({"message": "Invalid request data"}, 400)  # Return a 400 Bad Request response

    result = database.update_one({"email": user}, {"$set": {"familyHistory": family_history["familyHistory"]}})
    if result.modified_count > 0:
        return jsonify({"message": "FamilyHistory updated"})
    return jsonify({"message": "User not found or FamilyHistory update failed"}, 404)

@app.route('/users/getName/<user>', methods=['GET', 'POST'])
def get_name(user): 
    user_data = database.find_one({"email": user})
    if user_data and "name" in user_data:
        return jsonify({"name": user_data["name"]})
    return jsonify({"message": "User not found or name data missing"}, 404)

@app.route('/users/getUser', methods=['OPTIONS'])
def options_user():
    return '', 200

@app.route('/users/getCongregate/<user>', mehtods=['GET'])
def get_congregate(user): 
    return get_combined(user)

@app.route('/users/getLearn/<user>', methods=['GET'])
def get_learn(user): 
    return
    



@app.route('/direct/getData', methods=['GET'])
def get_data(data):
    pass 

@app.route('/direct/sendData', methods=['POST'])
def send_data(data): 
    pass



if __name__ == "__main__":
    app.run(debug=True)
    