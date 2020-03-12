"""
AJAX async example
"""

from time import sleep
from flask import Flask, request

app = Flask(__name__)


@app.route("/delay", methods=["GET"])
def getplace():
    
    sleep(5)

    return ""


@app.route("/")
def index():
    return app.send_static_file("async.html")


if __name__ == "__main__":
    app.run(debug=True)
