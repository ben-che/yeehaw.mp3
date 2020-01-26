import json

from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__, static_folder='./views/public',
            static_url_path="", template_folder='./views/public')
cors = CORS(app)


@app.route('/sentiment', methods=['post'])
@cross_origin()
def render_app():
    data = request.get_json()
    print(data)
    sentiment_text = data['sentimentText']
    print(sentiment_text)
    return {'response': 200, 'body': 'test'}




if __name__ == '__main__':
    app.run()
