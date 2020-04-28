"""
Exam question #15: Flask templates
"""

from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)
app.debug = True

# This app uses a global variable. Bad practice, but would you rather initialize a database?
PLAYERS = [
    { "name": "John <strong>Doe</strong>", "score": 13},
    { "name": "<em>Mary Jane</em>", "score": 21},
    { "name": "Lars <s>Kongen</s>", "score": 4}
]

@app.route("/")
def index():
    return render_template("index-solution.html", players=PLAYERS)

@app.route("/empty")
def empty():
    return render_template("index-solution.html", players=[])

@app.route("/add", methods=["POST"])
def add():
    name = request.form.get("name", "")
    if len(name) > 0:
        PLAYERS.append({ "name": name, "score": 0})
    return redirect(url_for("index"))


if __name__ == "__main__":
    app.run()