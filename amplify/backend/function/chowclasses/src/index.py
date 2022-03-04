import awsgi
from flask_cors import CORS
from flask import Flask, jsonify, request
import boto3
from datetime import date, timedelta

app = Flask(__name__)
CORS(app)

#Get the ratings from the past week
@app.route("/chowClasses",methods=["GET"])
def getRatings():
    try:
        #Initialize date as one week ago (7 days)
        currDate = date.today() - timedelta(days=7)
        
        #Set up dynamodb connections
        resource = boto3.resource('dynamodb',region_name='us-east-1')
        table = resource.Table("classRating")
        
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
        
#Submit a new class rating
@app.route("/SubmitRating", methods=["POST"])
def submitRatings():
    args = request.args
    try:
        #Set up dynamodb connections
        resource = boto3.resource('dynamodb',region_name='us-east-1')
        table = resource.Table("Class_Rating")
        # Insert into dynamodb
        lesson_interest = args.get("lesson_interest")
        difficulty = args.get("difficulty")
        comedy_level = args.get("comedy_level")
        date = args.get("date")
        response = table.put_item(
            Item={
                    'lesson_interest': lesson_interest,
                    'difficulty': difficulty,
                    'comedy_level': comedy_level,
                    'date': date
                }
        )
        return response
    except Exception as e:
        return {'error': str(e)}

def handler(event,context):
    return awsgi.response(app,event,context)