import awsgi
from flask_cors import CORS
from flask import Flask, jsonify, request
import boto3
# from datetime import date
from datetime import datetime, timedelta
from boto3.dynamodb.conditions import Key, Attr
app = Flask(__name__)
CORS(app)

@app.route("/chowMap",methods=["GET"])
def getLocations():
    #Set up dynamodb connections
    client = boto3.resource('dynamodb')
    table = client.Table("location-dev")
    
    #Initialize date as one week ago (7 days)
    last_week = datetime.today() - timedelta(days=7).strfttime("%Y-%m-%d")
    now = datetime.today().strfttime("%Y-%m-%d")
        
    fe = Key('timestamp').between(last_week, now)
        
    #Query for reported locations from past 7 days
    response = table.scan(
        IndexName='timestamp-index',
        FilterExpression = fe
        #KeyConditionExpression=Key('timestamp').eq(str(datetime.today())))
    )

    return response

def handler(event,context):
    return awsgi.response(app,event,context)