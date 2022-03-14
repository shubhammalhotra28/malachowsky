import awsgi
import boto3
from flask_cors import CORS
from flask import Flask, jsonify, request
from datetime import date, timedelta

BASE_ROUTE = "/chowlocation"

app = Flask(__name__)
CORS(app)
client = boto3.client('dynamodb', region_name='us-east-1')

@app.route(BASE_ROUTE, methods=['GET'])
def getLocations():
  try:
    #Initialize date as one week ago (7 days)
        currDate = date.today() - timedelta(days=7)
        
        #Set up dynamodb connections
        resource = boto3.resource('dynamodb',region_name='us-east-1')
        table = resource.Table("location")
        
        #Query for reported locations from past 7 days
        response = table.query(
            KeyConditionExpression = boto3.dynamodb.conditions.Key('timestamp').between(str(currDate), str(date.today()))
        )
        ratings = response['Items']
        
        return ratings
  except Exception as e:
      print(e)
      print(e.response['Error']['Message'])
      return e

@app.route(BASE_ROUTE,methods=["POST"])
def addLocation():
    try:
      resource = boto3.resource('dynamodb',region_name='us-east-1')
      table = resource.Table("location")

      lat = request.args.get('lat')
      lng = request.args.get('lng')

      response = table.put_item(
              Item={
                      'lat': lat,
                      'lng': lng,
                  }
          )
      return response
    except Exception as e:
        return {'error': str(e)}

def handler(event,context):
    return awsgi.response(app,event,context)

#{"httpMethod": "POST", "path": "/chowlocation", "queryStringParameters": {"lat":43.0755308,"lng":-77.6698865}}
#{"httpMethod": "GET", "path": "/chowlocation", "queryStringParameters": ""}