import awsgi
from flask_cors import CORS
from flask import Flask, jsonify, request

BASE_ROUTE = "/chowlocation"

app = Flask(__name__)
CORS(app)

@app.route(BASE_ROUTE, methods=['GET'])
def testFunc():
    response = {
      'statusCode': 200,
      'body': 'Test Function',
      'headers': {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
        },
    }
    return response


@app.route(BASE_ROUTE,methods=["POST"])
def updateLocation():
    response = {
      'statusCode': 200,
      'body': 'Pos Stored',
      'headers': {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
        },
    }
    return response

def handler(event,context):
    return awsgi.response(app,event,context)