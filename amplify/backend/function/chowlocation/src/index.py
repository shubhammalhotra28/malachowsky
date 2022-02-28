import awsgi
import boto3
from flask_cors import CORS
from flask import Flask, jsonify, request

BASE_ROUTE = "/chowlocation"

app = Flask(__name__)
CORS(app)
client = boto3.client('dynamodb', region_name='us-east-1')

@app.route(BASE_ROUTE, methods=['GET'])
def getLocations():
    return jsonify(data=client.scan(TableName="location"))

@app.route(BASE_ROUTE,methods=["POST"])
def addLocation():
    lat = request.args.get('lat')
    lng = request.args.get('lng')

    client.put_item(TableName="location", Item={
        'lat': {'S': lat},
        'lng': {'S': lng},
    })

    response = {
      'statusCode': 200,
      'body': "Position: "+str(lat)+" "+str(lng),
      'headers': {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
        },
    }
    return response

def handler(event,context):
    return awsgi.response(app,event,context)

#{"httpMethod": "POST", "path": "/chowlocation", "queryStringParameters": {"lat":43.0755308,"lng":-77.6698865}}
#{"httpMethod": "GET", "path": "/chowlocation", "queryStringParameters": ""}