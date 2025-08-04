from flask import Flask, render_template, request, session, redirect, url_for

app = Flask(__name__)
app.secret_key = 'your-secret-key-here'

# Define the steps for the progress bar
REGISTRATION_STEPS = [
    {
        'id': 'account',
        'title': 'Create account',
        'description': 'Vitae sed mi luctus laoreet.',
        'route': 'step_account'
    },
    {
        'id': 'profile',
        'title': 'Profile information',
        'description': 'Cursus semper viverra facilisis et et some more.',
        'route': 'step_profile'
    },
    {
        'id': 'business',
        'title': 'Business information',
        'description': 'Pendibus eu quis ante.',
        'route': 'step_business'
    },
    {
        'id': 'theme',
        'title': 'Theme',
        'description': 'Faucibus nec enim leo et.',
        'route': 'step_theme'
    },
    {
        'id': 'preview',
        'title': 'Preview',
        'description': 'Iusto et officia maiores porro ad non quas.',
        'route': 'step_preview'
    }
]

def get_progress_steps(current_step_id):
    """Generate step data with status based on current step"""
    steps = []
    current_step_index = next((i for i, step in enumerate(REGISTRATION_STEPS) if step['id'] == current_step_id), 0)
    
    for i, step in enumerate(REGISTRATION_STEPS):
        step_data = step.copy()
        if i < current_step_index:
            step_data['status'] = 'completed'
        elif i == current_step_index:
            step_data['status'] = 'current'
        else:
            step_data['status'] = 'pending'
        steps.append(step_data)
    
    return steps, current_step_index + 1

@app.route('/')
def index():
    return redirect(url_for('step_account'))

@app.route('/registration/account')
def step_account():
    steps, current_step = get_progress_steps('account')
    return render_template('registration_step.html', 
                         steps=steps, 
                         current_step=current_step,
                         step_title='Create Account',
                         step_content='account_form.html')

@app.route('/registration/profile')
def step_profile():
    steps, current_step = get_progress_steps('profile')
    return render_template('registration_step.html', 
                         steps=steps, 
                         current_step=current_step,
                         step_title='Profile Information',
                         step_content='profile_form.html')

@app.route('/registration/business')
def step_business():
    steps, current_step = get_progress_steps('business')
    return render_template('registration_step.html', 
                         steps=steps, 
                         current_step=current_step,
                         step_title='Business Information',
                         step_content='business_form.html')

@app.route('/registration/theme')
def step_theme():
    steps, current_step = get_progress_steps('theme')
    return render_template('registration_step.html', 
                         steps=steps, 
                         current_step=current_step,
                         step_title='Choose Theme',
                         step_content='theme_form.html')

@app.route('/registration/preview')
def step_preview():
    steps, current_step = get_progress_steps('preview')
    return render_template('registration_step.html', 
                         steps=steps, 
                         current_step=current_step,
                         step_title='Preview',
                         step_content='preview_form.html')

@app.route('/api/next-step', methods=['POST'])
def next_step():
    """API endpoint to handle step navigation"""
    current_step_id = request.json.get('current_step')
    
    # Find current step index
    current_index = next((i for i, step in enumerate(REGISTRATION_STEPS) if step['id'] == current_step_id), 0)
    
    # Go to next step if available
    if current_index < len(REGISTRATION_STEPS) - 1:
        next_step = REGISTRATION_STEPS[current_index + 1]
        return {'success': True, 'next_route': url_for(next_step['route'])}
    
    return {'success': False, 'message': 'No more steps'}

@app.route('/api/prev-step', methods=['POST'])
def prev_step():
    """API endpoint to handle step navigation"""
    current_step_id = request.json.get('current_step')
    
    # Find current step index
    current_index = next((i for i, step in enumerate(REGISTRATION_STEPS) if step['id'] == current_step_id), 0)
    
    # Go to previous step if available
    if current_index > 0:
        prev_step = REGISTRATION_STEPS[current_index - 1]
        return {'success': True, 'prev_route': url_for(prev_step['route'])}
    
    return {'success': False, 'message': 'No previous steps'}

if __name__ == '__main__':
    app.run(debug=True)