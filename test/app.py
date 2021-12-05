# app.py

from flask import Flask

# Initialize Flask.
app = Flask(__name__)

# Define routing.
@app.route('/')
def index():
    return 'Hello World!'

# Run the Flask app (127.0.0.1:5000 by default).
app.run()