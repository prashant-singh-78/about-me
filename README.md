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

## 📚 25-Question Bank Reference

The quiz draws from these 25 verified facts about Prashant:

| # | Question | Correct Answer |
|---|---|---|
| **1** | What does Prashant value most in a friend? | **Understanding** |
| **2** | What is Prashant's biggest life goal? | **To become a successful entrepreneur** |
| **3** | How many female friends does Prashant have? | **2** |
| **4** | What is Prashant's current love-life situation? | **He is single, with no current love-life scene** |
| **5** | What kind of support does Prashant expect from friends during difficult times? | **Support without judging him** |
| **6** | What makes Prashant angry the most? | **Disrespect or insults** |
| **7** | What is the most important quality in a true friend for Prashant? | **Understanding him without needing everything explained** |
| **8** | What does Prashant prefer when he is in a bad mood? | **Being alone with his thoughts** |
| **9** | How does Prashant usually react when a friend upsets him? | **He acts normal but feels hurt inside** |
| **10** | What does Prashant check before becoming close friends with someone? | **Whether their vibes match** |
| **11** | What is Prashant's friendship style with close friends? | **Funny and playful** |
| **12** | What does Prashant do when someone breaks his trust? | **It depends on the situation and the mistake** |
| **13** | How much does Prashant share with his close friends? | **Almost everything** |
| **14** | What does Prashant do when a friend is in trouble? | **Immediately looks for a solution** |
| **15** | What is one of Prashant's weaknesses in friendship? | **Overthinking small things** |
| **16** | What does Prashant often do in his free time? | **Sit alone, think, or plan his future** |
| **17** | What kind of life does Prashant dream of? | **A peaceful, happy, tension-free life** |
| **18** | What does Prashant do when he feels hurt inside? | **Stays alone and thinks things through** |
| **19** | What is Prashant's biggest fear? | **Not achieving his goals** |
| **20** | What is Prashant's favourite free-time vibe? | **Peaceful solitude, thinking, and relaxing** |
| **21** | How does Prashant react when he gets very angry? | **He reacts immediately in anger** |
| **22** | How does Prashant show loyalty to a friend? | **He stands by the friend even when the situation is difficult** |
| **23** | What might Prashant do when his friend group is quiet? | **Playfully tease his friends to make the atmosphere funny** |
| **24** | What kind of behaviour from friends irritates Prashant? | **It depends on the situation** |
| **25** | With whom does Prashant share his personal problems? | **Only with a trusted best friend** |

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
