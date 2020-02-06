"""
Flask: A minimal web application
"""

from flask import Flask

app = Flask(__name__)



app.config["COUNT"] = 0


@app.route("/")
def printRequersts():

    
    with open("thread_writes", "a+") as file:
        file.write(str(app.config["COUNT"]))
        file.write("\n")
        file.close()
    app.config["COUNT"] += 1
    return "Hello"


if __name__ == "__main__":
    print("running")
    app.run(debug=True)
