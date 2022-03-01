import awsgi
from flask_cors import CORS
from flask import Flask, jsonify, request
import boto3
from datetime import date

app = Flask(__name__)
CORS(app)

@app.route("/chowMap",methods=["GET"])
def getLocations():
    try:
        #Initialize date as one week ago (7 days)
        date = date.today() - date.timedelta(days=7)
        
        #Set up dynamodb connections
        client = boto3.client('dynamodb')
        resource = boto3.resource('dynamodb')
        table = resource.Table("Location")
        
        #Query for reported locations from past 7 days
        response = table.query(
            KeyConditionExpression = Key('date').between(date, date.today())
        )
        locations = response['Items']
        
        return locations
    except Exception as e:
        print(e.response['Error']['Message'])

def handler(event,context):
    return awsgi.response(app,event,context)