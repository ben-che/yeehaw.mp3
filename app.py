from flask import Flask, render_template

app = Flask(__name__, template_folder='./views/public')


@app.route('/')
def render_app():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)