from environs import Env
from pathlib import Path

env = Env()
env.read_env()

ENV = env.str("FLASK_ENV", default="production")
DEBUG = ENV = "development"
SECRET_KEY = "not-so-secret"
DEBUG_TB_ENABLED = DEBUG
