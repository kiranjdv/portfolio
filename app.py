from flask import Flask, render_template, request, redirect, url_for
from datetime import datetime

app = Flask(__name__)

# In-memory storage for feedback
feedback_entries = []

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        message = request.form.get('message')
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        
        # Save to our in-memory list
        feedback_entries.append({
            'name': name,
            'email': email,
            'message': message,
            'timestamp': timestamp
        })
        
        # We can pass a success variable to the template or just re-render
        return render_template('contact.html', success=True, feedbacks=reversed(feedback_entries))

    return render_template('contact.html', feedbacks=reversed(feedback_entries))

if __name__ == '__main__':
    app.run(debug=True, port=5000)
