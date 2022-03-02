import awsgi
from flask_cors import CORS
from flask import Flask, jsonify, request
from datetime import datetime
import argparse


import boto3

BASE_ROUTE = "/chowstatus"

app = Flask(__name__)
CORS(app)

# dummy hello world message to check the api
# TODO: get the status of the message
@app.route(BASE_ROUTE,methods=["GET"])
def getStatus():
    return "hello world"

# Method responsible for the post request
@app.route(BASE_ROUTE,methods=["POST"])
def postToDB():

    # ap = argparse.ArgumentParser()
    args = request.args
    print('args = ',args.get("danger"))


    # dangerLevel = 5
    # currentMood = 5
    dangerLevel = int(args.get("danger"))
    currentMood = int(args.get("mood"))
    client = boto3.resource('dynamodb')
    table = client.Table("Status-dev")
    date_time = str(datetime.utcnow())
    print(table.table_status)

    if args is not None:
        table.put_item(Item= {'mood': currentMood,'date_time': date_time ,'danger_level': dangerLevel})
        return "post request"
    else:
        return "ERROR"

def handler(event,context):
    
    return awsgi.response(app,event,context)