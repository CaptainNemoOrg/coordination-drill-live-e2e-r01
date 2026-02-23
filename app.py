"""Coordination Drill Live E2E R01 - Minimal Flask App"""
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return jsonify({"status": "ok", "service": "coordination-drill-live-e2e-r01"})

@app.route('/health')
def health():
    return jsonify({"health": "healthy"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
