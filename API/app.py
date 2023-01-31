from flask import Flask
from flask_cors import CORS
import requests
import time
import json
import random
from os.path import exists
import collections

app = Flask(__name__)
CORS(app)

global json_package


def choose_color():
    colors = ['#d9cae0', '#D02841', '#F58B57', '#C1CA23', '#CBDFDF', '#F1D7B6', '#652293']
    return random.choice(colors)


def choose_image():
    images = ['https://imageio.forbes.com/specials-images/imageserve/5ed00f17d4a99d0006d2e738/0x0.jpg?format=jpg&crop=4666,4663,x154,y651,safe&height=416&width=416&fit=bounds',
              'https://www.billboard.com/wp-content/uploads/2022/10/kanye-west-tidal-15-2022-billboard-1548.jpg',
              'https://cdn.theatlantic.com/thumbor/OpP78fMxzMtI9qEsjwtZUS-X0Ws=/0x0:6000x3375/960x540/media/img/mt/2022/12/GettyImages_1384447523_copy/original.jpg',
              'https://static.politico.com/5b/f2/28712c134a51b4a6d40d994ca235/celebrity-birthdays-june-5-june-11-89014.jpg',
              'https://nypost.com/wp-content/uploads/sites/2/2020/07/kanye-west-2-copy.jpg?quality=75&strip=all','https://bi.im-g.pl/im/25/db/1b/z29212197Q,Kanye-West.jpg ',
              'https://parade.com/.image/t_share/MTkzMjc5NDI3MTg5MTU1NzQ3/kanye-west-net-worth.jpg']
    return random.choice(images)


def get_data():
    api = requests.get('https://api.kanye.rest')
    return api.json()['quote']


def change_json():
    data = {
        "quote": get_data(),
        "image": choose_image(),
        "color": choose_color()
    }
    return data


def make_json():
    if exists('quotes.json'):
        with open('quotes.json', "r") as file:
            data_json = json.load(file)
            quotes = data_json['kanye_quotelist']
            file.close()
            if len(quotes) == 7:
                with open('quotes.json', 'w') as json_file:
                    x = collections.deque(quotes)
                    x.rotate(1)
                    x = list(x)
                    x[0] = change_json()
                    data_json['kanye_quotelist'] = x
                    json.dump(data_json, json_file, indent=2)
                    json_file.close()
            else:
                with open('quotes.json', 'w') as json_file:
                    quotes.append(change_json())
                    data_json['kanye_quotelist'] = quotes
                    json.dump(data_json, json_file, indent=2)
                    file.close()
    else:
        with open('quotes.json', 'w') as file:
            data_json = {
                'kanye_quotelist': [
                    {
                        "quote": get_data(),
                        "image": choose_image(),
                        "color": choose_color()
                    }
                ]
            }
            data = json.dumps(data_json, indent=2)
            file.write(data)
            file.close()
    return None





@app.route('/kanye')
def kanye():
    while True:
        make_json()
        time.sleep(86400)
