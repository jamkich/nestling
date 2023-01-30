from flask import Flask
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

def get_data():
    api = requests.get('https://api.kanye.rest')
    api = api.json()
    return api['quote']
    
@app.route('/kanye')
def kanye():
    quote = get_data()
    return

app.run()
