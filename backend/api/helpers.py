import requests
import json

baseURL = "https://api.henrikdev.xyz"


def getRank(user, tag):
    response = requests.get(f"{baseURL}/valorant/v1/mmr/na/{user}/{tag}")
    jsonResponse = response.json()
    rank = jsonResponse["data"]["currenttierpatched"]
    return f"{rank}"
