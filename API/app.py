from flask import Flask
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

api = requests.get('https://api.kanye.rest')
@app.route('/')
def hello():
    return "Hello WORLD!"


