from flask import Blueprint, jsonify, request, make_response, Response
from werkzeug.wrappers import Response
from werkzeug.exceptions import HTTPException
from .helpers import getRank

blueprint: Blueprint = Blueprint(
    "api", __name__, url_prefix="/api", static_folder="../static"
)


@blueprint.get("/home")
def home():
    return jsonify(getRank())


@blueprint.get("/rank")
def rank():
    return jsonify(getRank())
