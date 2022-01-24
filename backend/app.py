from flask import Flask
from backend import api

def create_app(config_object="backend.settings"):
    app = Flask(__name__)
    app.config.from_object(config_object)
    register_blueprints(app)
    return app

def register_blueprints(app):
    app.register_blueprint(api.views.blueprint)
    return None
