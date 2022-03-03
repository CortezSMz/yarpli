from flask import Flask, render_template, jsonify, request


app = Flask(__name__)


# sanity check route
@app.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify('pong!')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5080)
