from flask import Flask, render_template, request, jsonify
from email.message import EmailMessage
import smtplib

app = Flask(__name__)

@app.route("/")
def home():

    # loads index page
    return render_template("index.html")


@app.route("/sendemail",methods=["POST"])
def sendemail():

    name = request.form["name"]
    subject = request.form["subject"]
    email = request.form["email"]
    message = request.form["message"]

    sender_email="your_email@gmail.com"
    sender_password="app_password"

    msg=EmailMessage()

    msg["Subject"]=subject
    msg["From"]=sender_email
    msg["To"]=sender_email

    msg.set_content(
f'''
Name : {name}

Email : {email}

Message :
{message}
'''
)

    try:

        server=smtplib.SMTP("smtp.gmail.com",587)

        server.starttls()

        server.login(sender_email,sender_password)

        server.send_message(msg)

        server.quit()

        return jsonify("success")

    except Exception as e:

        return jsonify("error")


if __name__=="__main__":

    app.run(debug=True)