# Prashant Friendship Quiz ❤️
### *“How Well Do You Know Prashant?”*

An interactive, responsive, neon-gaming style friendship quiz website built with **pure HTML5, CSS3, and Vanilla JavaScript**. Test how well friends know Prashant's personality, friendship style, habits, life choices, and dreams!

---

## 🚀 Features

- **🎮 Cyber Neon Gaming UI**: Dark mode glassmorphic interface with electric cyan, neon purple, and hot pink accents, floating ambient lights, and smooth interactive animations.
- **🎲 Dynamic 6-Question Sessions**: Randomly selects 6 unique questions from an authentic 25-question bank on every run—no repeats in the same session.
- **🔀 Shuffled Answer Options**: All 4 options are shuffled randomly every round while strictly preserving correct answer validation.
- **⚡ Instant Interactive Feedback**: Shows immediate feedback ("*Correct! 🔥*" or "*Oops, not quite! 😅*") with contextual notes about Prashant.
- **🔒 Anti-Cheat & Double-Click Protection**: Answers lock instantly once selected to guarantee accurate scoring.
- **🏆 Exact 3-Tier Results**:
  - **Score 5–6 / 6**: `YOU ARE A CLONE OF PRASHANT! 👽`
    *“Bro, you know Prashant so well that you might actually be his clone! 😂🔥”*
  - **Score 3–4 / 6**: `YOU ARE THE BEST FRIEND OF PRASHANT! 🏆`
    *“Congratulations! ❤️ You know Prashant really well. You're one of the people who truly understand him!”*
  - **Score 0–2 / 6**: `YOU NEED TO KNOW PRASHANT BETTER ❤️`
    *“Haha, bro! 😂 You still have a lot to learn about Prashant. Spend more time with him and try again!”*
- **📝 Comprehensive Answer Review**: Friends can review all 6 questions from their session, comparing their chosen answers side-by-side with the correct answers.
- **📤 Share Result**: Supports the modern **Web Share API** (on mobile and supported browsers) and automatically falls back to copying the custom share message to the clipboard with an animated toast notification.
- **🎉 Built-in Canvas Confetti**: Custom, dependency-free particle burst for celebrating high scores.
- **📶 100% Offline & Client-Side**: No backend, no node build steps, no API keys, and no CDNs required. Works completely offline right from your local file system.

---

## 📂 Project Structure

```text
├── index.html       # Semantic HTML5 markup, screen layouts & accessible controls
├── style.css        # Neon-gaming cyberpunk theme, responsive design & keyframes
├── script.js        # Question bank (25 Qs), shuffle engine, quiz logic & confetti
└── README.md        # Documentation, question reference & customization guide
```

---

## 💻 How to Run

1. Simply double-click **`index.html`** or right-click and open it with any web browser (Chrome, Edge, Firefox, Safari, Brave, Opera, etc.).
2. That's it! No local server, terminal command, or installation is needed.

---


## 🛠️ Customization Guide

### Editing or Adding Questions
Open [`script.js`](./script.js) and locate the `QUESTION_BANK` array:
```javascript
{
  id: 26,
  category: "New Category",
  question: "Your custom question here?",
  correctAnswer: "The exact correct answer",
  options: [
    "The exact correct answer",
    "Distractor option 1",
    "Distractor option 2",
    "Distractor option 3"
  ],
  explanation: "Contextual explanation shown after answering."
}
```

### Changing Colors or Neon Glows
Open [`style.css`](./style.css) and customize the `:root` variables:
```css
:root {
  --neon-cyan: #00f0ff;
  --neon-purple: #a855f7;
  --neon-pink: #ec4899;
  --neon-green-glow: #05ffa1;
}
```

---

## 📱 Browser Compatibility

- Google Chrome (Desktop & Android)
- Apple Safari (macOS & iOS)
- Mozilla Firefox
- Microsoft Edge
- Brave / Opera / Samsung Internet

---

*Made with ❤️ for Prashant & Friends.*
