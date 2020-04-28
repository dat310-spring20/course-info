"""
Exam question #15: Flask templates
"""

from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# This app uses a global variable. Bad practice, but would you rather initialize a database?
PLAYERS = [
    { "name": "John <strong>Doe</strong>", "score": "13"},
    { "name": "<em>Mary Jane</em>", "score": "21"},
    { "name": "Lars <s>Kongen</s>", "score": "4"}
]

@app.route("/")
def index():
    return render_template("index.html", players=PLAYERS)

@app.route("/empty")
def empty():
    return render_template("index-solution.html", players=[])

# TODO: add route /add to add new player with name from form and redirects to the index page.


if __name__ == "__main__":
    app.run()