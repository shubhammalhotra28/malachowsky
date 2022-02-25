import awsgi
from flask_cors import CORS
from flask import Flask, jsonify, request

BASE_ROUTE = "/chowstatus"

app = Flask(__name__)
CORS(app)

@app.route(BASE_ROUTE,methods=["GET"])
def getStatus():
    return "hello world"

def handler(event,context):
    return awsgi.response(app,event,context)