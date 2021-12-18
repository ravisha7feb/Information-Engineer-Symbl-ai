json_obj = [] #list of dictionaries with id and name as keys
#one element is a dictionary like: {"id": 1, "name": "Name"}

n = int(input("Enter number of items: "))

for i in range(n):
    id = int(input("Enter your id: "))
    name = input("Enter the name: ")
    entry = {"id": id, "name": name}
    json_obj.append(entry)
    
#check if correctly input taken

for d in json_obj:
    print(d["id"], end="  ")
    print(d["name"])
    





