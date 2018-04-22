
import telebot
import flask
import sys
from bot import bot


server = flask.Flask(__name__)


@server.route('/{}'.format(secret), methods=['POST'])
def webhook():
    if flask.request.headers.get('content-type') == 'application/json':
        json_string = flask.request.get_data().decode('utf-8')
        update = telebot.types.Update.de_json(json_string)
        bot.process_new_updates([update])
        return 'Hello flask'
    else:
        flask.abort(403)


@server.route('/', methods=["GET"])
def index():
    bot.remove_webhook()
    bot.set_webhook(url="https://dimakit.pythonanywhere.com/{}".format(secret))
    return "!", 200

if __name__ == '__main__':
    args = sys.argv
    if len(args) > 1:
        if str(args[1]) == '-local':
            start_bot()

    server.run(host="0.0.0.0", port=os.environ.get('PORT', 5000))
