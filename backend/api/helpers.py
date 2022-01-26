import requests
import json

baseURL = "https://api.henrikdev.xyz"


def getRank():
    response = requests.get(f"{baseURL}/valorant/v1/mmr/na/Beifong%20Toph/earth")
    jsonResponse = response.json()
    rank = jsonResponse["data"]["currenttierpatched"]
    return f"{rank}"
