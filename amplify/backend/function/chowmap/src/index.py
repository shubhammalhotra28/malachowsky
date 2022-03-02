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
    # try:
    #Initialize date as one week ago (7 days)
    date_ = datetime.today() - timedelta(days=7)
        
        #Set up dynamodb connections
    client = boto3.resource('dynamodb')
    table = client.Table("location-dev")
        
    #Query for reported locations from past 7 days

    response = table.query(
        IndexName='timestamp-index',
        KeyConditionExpression=Key('timestamp').between(str(date_), str(datetime.today())))


    # response = table.query(
    #     KeyConditionExpression = Key('timestamp').between(str(date_), str(datetime.today()))
    # # )
    # print("response = ",response['Items'])
    # locations = response['Items']
        
    # return locations
    # except Exception as e:
        # print(e)
        # print(e.response['Error']['Message'])
    return response

def handler(event,context):
    return awsgi.response(app,event,context)