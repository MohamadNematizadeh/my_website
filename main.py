from flask import Flask , render_template

app = Flask("my websit")
names = ["پروژه تشخیص چهره","پروژه طراحی سایت دیج کالا","پروژه آب و هوای"]
images = ["static/image/projket/face_Recognition.jpg","static/image/projket/digikala.png","static/image/projket/temps.jpg"]
file =  "static/cv/Mohamad Nematizadeh.pdf"

@app.route("/")
def home():
    return render_template("index.html",image=images,name=names, file_cv= file)

@app.route("/login")
def login():
    return render_template("login.html")
