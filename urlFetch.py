import json
from urllib.request import urlopen
url = "https://www.example.com/get-data"
response = urlopen(url)
json_obj = json.loads(response.read())
json_obj = list(json_obj) #json_obj should be list/array of dictionaries

#file = open('data.json')
#data = json.load(file) #data is a list/array of dictionaries

def sortAndPrint(data):
    data = sorted(data, key = lambda i: i['id'])
    for entry in data:
        print(entry['id'], end="  ")
        print(entry['name'])


sortAndPrint(json_obj)