import awsgi
from flask_cors import CORS
from flask import Flask, jsonify, request
import boto3
from datetime import date, timedelta

app = Flask(__name__)
CORS(app)

@app.route("/chowMap",methods=["GET"])
def getLocations():
    try:
        #Initialize date as one week ago (7 days)
        currDate = date.today() - timedelta(days=7)
        
        #Set up dynamodb connections
        resource = boto3.resource('dynamodb', region_name='us-east-1')
        table = resource.Table("Location")
        
        #Query for reported locations from past 7 days
        response = table.query(
            KeyConditionExpression = boto3.dynamodb.conditions.Key('date').between(str(currDate), str(date.today()))
        )
        locations = response['Items']
        
        return locations
    except Exception as e:
        print(response['Error']['Message'])

def handler(event,context):
    return awsgi.response(app,event,context)