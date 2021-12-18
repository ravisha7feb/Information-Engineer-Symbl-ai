import json
from urllib.request import urlopen
url = "https://www.example.com/get-data"
response = urlopen(url)

json_obj = json.loads(response.read())
print(json_obj)

