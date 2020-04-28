"""
Exam question #17: AJAX
"""

from flask import Flask, render_template, request, redirect, url_for
import json
from time import sleep

app = Flask(__name__)
app.debug = True

# This app uses a global variable. Bad practice, but would you rather initialize a database?
THELIST = [
    "This is one item",
    "This is one more item",
    "The third item"
]

@app.route("/")
def index():
    return app.send_static_file("index.html")

@app.route("/list")
def getlist():
    return json.dumps(THELIST)

@app.route("/add", methods=["POST"])
def add():
    text = request.get_json().get("text", "")
    if text != "":
        sleep(2)
        THELIST.append(text)
    return ""
    


if __name__ == "__main__":
    app.run()