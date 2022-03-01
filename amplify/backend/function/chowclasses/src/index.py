import awsgi
from flask_cors import CORS
from flask import Flask, jsonify, request
import boto3
from datetime import date

app = Flask(__name__)
CORS(app)

#Get the ratings from the past week
@app.route("/chowClasses",methods=["GET"])
def getRatings():
    try:
        #Initialize date as one week ago (7 days)
        date = date.today() - date.timedelta(days=7)
        
        #Set up dynamodb connections
        client = boto3.client('dynamodb')
        resource = boto3.resource('dynamodb')
        table = resource.Table("Class_Rating")
        
        #Query for reported locations from past 7 days
        response = table.query(
            KeyConditionExpression = Key('date').between(date, date.today())
        )
        ratings = response['Items']
        
        return ratings
    except Exception as e:
        print(e.response['Error']['Message'])
        
#Submit a new class rating
@app.route("/SubmitRating", methods=["POST"], content_types=['application/json'])
def submitRatings():
    request = app.current_request.json_body
    try:
        #Set up dynamodb connections
        client = boto3.client('dynamodb')
        resource = boto3.resource('dynamodb')
        table = resource.Table("Class_Rating")
        # Insert into dynamodb
        lesson_interest = request['lesson_interest']
        difficulty = request['difficulty']
        comedy_level = request['comedy_level']
        date = request['date']
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