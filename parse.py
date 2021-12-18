import json

file = open('data.json')
data = json.load(file) #data is a list/array of dictionaries
data = sorted(data, key = lambda i: i['id'])
for entry in data:
    print(entry)

file.close()