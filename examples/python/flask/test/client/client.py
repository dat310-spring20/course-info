import threading
import requests

def doget():
    requests.get("http://localhost:5000/")
    print("did request")


threads = []
for i in range(1, 101):
    t = threading.Thread(target=doget)
    threads.append(t)
for t in threads:
    t.start()
