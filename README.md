# Responsive Web Application

A modern, responsive web application with user authentication and navigation dashboard.

## Features

- **User Authentication**: Secure login system with username and password validation
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, modern interface with gradient backgrounds and smooth animations
- **Navigation Dashboard**: Five large square buttons for quick access to popular websites
- **Session Management**: Automatic session handling with localStorage
- **Interactive Elements**: Hover effects, click animations, and ripple effects

## Login Credentials

- **Username**: `admin`
- **Password**: `password123`

## File Structure

```
webapp/
├── index.html      # Login page
├── home.html       # Dashboard/home page
├── style.css       # All styling and responsive design
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## How to Use

1. Open `index.html` in your web browser
2. Enter the login credentials:
   - Username: `admin`
   - Password: `password123`
3. Click "Login" to access the dashboard
4. On the home page, click any of the five navigation buttons to open external links:
   - **Search**: Opens Google
   - **GitHub**: Opens GitHub
   - **YouTube**: Opens YouTube
   - **LinkedIn**: Opens LinkedIn
   - **Stack Overflow**: Opens Stack Overflow
5. Use the "Logout" button to return to the login page

## Technical Details

### Authentication
- Client-side authentication using localStorage
- Session persistence across browser sessions
- Automatic redirection based on authentication status
- Protection against unauthorized access

### Responsive Design
- Mobile-first approach
- CSS Grid for button layout
- Flexible breakpoints for different screen sizes
- Touch-friendly interface on mobile devices

### Animations & Effects
- Smooth page transitions
- Button hover and click effects
- Form validation with visual feedback
- Ripple effects on button clicks
- Shake animation for login errors

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript features
- CSS Grid and Flexbox support required

## Customization

### Changing Login Credentials
Edit the `validCredentials` object in `script.js`:
```javascript
const validCredentials = {
    username: 'your-username',
    password: 'your-password'
};
```

### Modifying Navigation Links
Update the `data-url` attributes in `home.html`:
```html
<button class="nav-button" data-url="https://your-link.com">
    <div class="button-icon">🔗</div>
    <div class="button-text">Your Link</div>
</button>
```

### Styling Changes
Modify `style.css` to change colors, fonts, or layout:
- Main gradient: `.body` background property
- Button colors: `.nav-button` background property
- Typography: `font-family` properties

## Security Note

This is a demonstration application with client-side authentication. In a production environment, authentication should be handled server-side with proper security measures including:
- Encrypted password storage
- HTTPS connections
- Server-side session management
- CSRF protection
- Input validation and sanitization
