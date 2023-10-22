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

CORS(app, origins=["http://127.0.0.1:5173"])


database = database["users"]



@app.route('/users/createUser', methods=['POST'])
def create_user():     
    user_data = request.get_json()
    database.insert_one(user_data)
    return jsonify({"message": "User created"}) 

<<<<<<< HEAD
@app.route('/users/getUser/<user>', methods=['GET'])
def get_user(user): 
    user_data = database.find_one({"user": user})
=======
@app.route('/users/getUser', methods=['POST'])
def login_user():
    user_data = request.get_json()
    email = user_data.get('email')
    password = user_data.get('password')
    user_data = database.find_one({"email": email, "password": password})
>>>>>>> e716f133020f4c9f7bbbdc7a19afebc0e46830de
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
        return jsonify({"familyHistory": user_data["FamilyHistory"]})
    return jsonify({"message": "User not found or height data missing"}, 404)

@app.route('/users/setWeight/<user>', methods=['POST', 'GET'])
def set_weight(user): 
    weight_data = request.get_json()
    if not weight_data or "weight" not in weight_data:
        return jsonify({"message": "Invalid request data"}, 400)  # Return a 400 Bad Request response

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
    height_data = request.get_json()
    if not height_data or "familyHistory" not in height_data:
        return jsonify({"message": "Invalid request data"}, 400)  # Return a 400 Bad Request response

    result = database.update_one({"email": user}, {"$set": {"familyHistory": height_data["familyHistory"]}})
    if result.modified_count > 0:
        return jsonify({"message": "FamilyHistory updated"})
    return jsonify({"message": "User not found or FamilyHistory update failed"}, 404)

@app.route('/users/getName/<user>', methods=['GET', 'POST'])
def get_name(user): 
    user_data = database.find_one({"email": user})
    if user_data and "name" in user_data:
        return jsonify({"name": user_data["name"]})
    return jsonify({"message": "User not found or name data missing"}, 404)




if __name__ == "__main__":
    app.run(debug=True)