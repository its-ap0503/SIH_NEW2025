# Multilingual Campus Chatbot

A comprehensive multilingual conversational AI assistant for campus offices that supports Hindi, English, Tamil, Marathi, and Bengali languages.

## Features

- **Multilingual Support**: Supports 5 languages (Hindi, English, Tamil, Marathi, Bengali)
- **Automatic Language Detection**: Detects user's preferred language from input
- **Context-Aware Conversations**: Maintains conversation context across multiple turns
- **Campus FAQ System**: Handles queries about fees, scholarships, timetables, library, exams, and admissions
- **Human Handoff**: Seamless escalation to human agents for complex queries
- **Privacy Compliant**: GDPR-compliant data handling
- **Analytics Dashboard**: Tracks conversation metrics and language usage
- **Responsive Design**: Works on desktop and mobile devices
- **Dark Mode Support**: Toggle between light and dark themes
- **Conversation Export**: Export chat history for record-keeping

## Quick Start

### Prerequisites
- VS Code (Visual Studio Code)
- Live Server Extension (recommended)
- Modern web browser

### Installation

1. **Download the files**: You should have these three files:
   - `index.html`
   - `style.css`
   - `app.js`

2. **Open in VS Code**:
   - Open VS Code
   - Go to `File > Open Folder`
   - Select the folder containing these files

3. **Install Live Server Extension** (if not already installed):
   - Open VS Code Extensions (`Ctrl+Shift+X`)
   - Search for "Live Server"
   - Install the "Live Server" extension by Ritwick Dey

4. **Run the Application**:
   - Right-click on `index.html` in VS Code
   - Select "Open with Live Server"
   - The application will open in your default browser
   - Default URL will be `http://127.0.0.1:5500/index.html`

### Alternative Methods to Run

#### Method 1: Direct File Opening
- Simply double-click `index.html` to open in your browser
- All functionality will work except some advanced features

#### Method 2: Python HTTP Server
If you have Python installed:
```bash
# Navigate to the project folder in terminal
cd path/to/your/project

# Python 3
python -m http.server 8000

# Open http://localhost:8000 in your browser
```

#### Method 3: Node.js HTTP Server
If you have Node.js installed:
```bash
# Install http-server globally
npm install -g http-server

# Navigate to project folder and run
http-server

# Open the provided URL in your browser
```

## File Structure

```
multilingual-campus-chatbot/
├── index.html          # Main HTML file
├── style.css           # CSS styles and responsive design
├── app.js              # JavaScript application logic
└── README.md           # This documentation file
```

## Usage Guide

### Basic Usage

1. **Language Selection**: Use the language dropdown in the header to switch between languages
2. **Quick Actions**: Click on pre-built buttons for common queries
3. **Text Input**: Type your question in the text box and press Enter or click Send
4. **Voice Integration**: The bot automatically detects your language preference

### Features Overview

#### Quick Actions
- Fee Payment
- Scholarships  
- Timetable
- Library Hours
- Exam Schedule
- Admissions

#### Settings Panel
- Dark/Light mode toggle
- Notification preferences
- Chat history export
- Analytics dashboard
- Privacy controls

#### Analytics Dashboard
- Total conversations count
- Most popular language
- Top query categories
- Usage patterns visualization

### Language Support

| Language | Script | Sample Query |
|----------|--------|--------------|
| English  | Latin  | "What are the fee payment deadlines?" |
| Hindi    | Devanagari | "फीस कब तक जमा करनी है?" |
| Tamil    | Tamil  | "கல்விக் கட்டணம் எப்போது செலுத்த வேண்டும்?" |
| Marathi  | Devanagari | "फी केव्हा भरावी लागते?" |
| Bengali  | Bengali | "ফি কবে জমা দিতে হবে?" |

## Customization

### Adding New FAQ Content

Edit the `campusFAQ` object in `app.js`:

```javascript
campusFAQ: {
  newTopic: {
    en: "English response",
    hi: "हिंदी उत्तर",
    ta: "தமிழ் பதில்",
    mr: "मराठी उत्तर", 
    bn: "বাংলা উত্তর"
  }
}
```

### Adding New Languages

1. Add language to `supportedLanguages` array
2. Add translations to all content objects
3. Update language detection patterns
4. Add to quick actions and UI text

### Styling Customization

The app uses CSS custom properties (variables) for easy theming:

```css
:root {
  --color-primary: rgba(33, 128, 141, 1);
  --color-background: rgba(252, 252, 249, 1);
  /* Modify these values to change the theme */
}
```

## Technical Architecture

### Frontend Technologies
- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern layout with Flexbox/Grid, custom properties
- **Vanilla JavaScript**: No external dependencies
- **Local Storage**: Data persistence
- **Responsive Design**: Mobile-first approach

### Key Components

1. **Language Engine**: Automatic detection and switching
2. **Intent Recognition**: Keyword-based query classification  
3. **Context Manager**: Conversation state management
4. **Analytics Engine**: Usage tracking and insights
5. **Privacy Layer**: GDPR-compliant data handling

### Browser Compatibility
- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## Development

### Adding Features

1. **New Intent Recognition**: Add keywords to `intents` object in `processUserMessage()`
2. **New UI Components**: Add HTML structure and corresponding CSS
3. **New Analytics**: Extend `analytics` object and dashboard functions

### Code Organization

- **HTML**: Semantic structure with accessibility attributes
- **CSS**: BEM methodology with utility classes
- **JavaScript**: Modular functions with clear separation of concerns

### Performance Optimization

- Minimal external dependencies
- Lazy loading of non-critical features
- Efficient DOM manipulation
- Local storage for persistence

## Troubleshooting

### Common Issues

1. **Files not loading properly**:
   - Ensure all three files are in the same folder
   - Use Live Server extension for proper CORS handling

2. **Language not switching**:
   - Clear browser cache and reload
   - Check browser console for JavaScript errors

3. **Styles not applying**:
   - Verify `style.css` is in the same directory
   - Check for CSS syntax errors

4. **JavaScript not working**:
   - Open browser Developer Tools (F12)
   - Check Console tab for error messages
   - Ensure `app.js` is properly linked

### Browser Console

Press F12 to open Developer Tools and check the Console for any error messages.

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support
For technical support or questions:
- Check the troubleshooting section above
- Review browser console for error messages
- Ensure all files are properly organized

## Future Enhancements

- Voice recognition and speech synthesis
- Integration with campus management systems
- Advanced analytics and reporting
- Multi-campus support
- Mobile app version
- WhatsApp/Telegram bot integration

---

**Note**: This application runs entirely in the browser and doesn't require a backend server for basic functionality. All data is stored locally in the browser's local storage.
