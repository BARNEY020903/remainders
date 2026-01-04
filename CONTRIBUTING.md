# Contributing to Remainders

<img align="right" height="160" src="/public/logo.png" alt="Remainders-Logo">

**Welcome, contributor!** We're excited you're here. Remainders is built on the contributions of developers like you who believe in helping people live more intentionally.

This guide will help you get started with contributing to the project. Whether you're fixing a bug, adding a feature, or improving documentation, your contribution matters.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-remainders.vercel.app-black)](https://remainders.vercel.app/)
[![GitHub Issues](https://img.shields.io/badge/Issues-Welcome-green)](https://github.com/Ti-03/remainders/issues)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Local Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/remainders.git
   cd remainders
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Test wallpaper generation**
   - Year View: `http://localhost:3000/api/wallpaper?viewMode=year&width=1170&height=2532`
   - Life View: `http://localhost:3000/api/wallpaper?viewMode=life&birthDate=1990-01-01&width=1170&height=2532`

## 📁 Project Structure

```
app/
├── api/wallpaper/         # Wallpaper generation API
│   ├── route.tsx          # Main API endpoint
│   ├── year-view.tsx      # Year view renderer
│   └── life-view.tsx      # Life view renderer
├── layout.tsx             # Root layout
└── page.tsx               # Home page
components/                # React components
├── BirthDateInput.tsx     # Birth date picker
├── DeviceSelector.tsx     # Device selection UI
├── ThemeColorPicker.tsx   # Color theme picker
├── ViewModeToggle.tsx     # Year/Life view toggle
└── SetupInstructions.tsx  # Setup guide
lib/
├── calcs.ts               # Date/time calculations
├── devices.ts             # Device presets
└── types.ts               # TypeScript types
```

## 💡 How to Contribute

### Reporting Bugs
- Check if the bug has already been reported in [Issues](https://github.com/Ti-03/remainders/issues)
- Create a new issue with:
  - Clear, descriptive title
  - Steps to reproduce
  - Expected vs actual behavior
  - Screenshots (if applicable)
  - Device/browser information

### Suggesting Features
- Open an issue first to discuss the feature
- Explain the use case and why it's valuable
- Be open to feedback and alternative approaches

### Submitting Pull Requests

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
   Use clear branch names:
   - `feature/add-month-view`
   - `fix/calendar-alignment`
   - `docs/update-readme`

2. **Make your changes**
   - Write clean, readable code
   - Follow existing code style and patterns
   - Test your changes thoroughly

3. **Commit your changes**
   ```bash
   git commit -m "feat: add ISO 8601 week start option"
   ```
   Use conventional commit format:
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style/formatting
   - `refactor:` - Code refactoring
   - `perf:` - Performance improvements
   - `test:` - Adding tests
   - `chore:` - Maintenance tasks

4. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```
   Then open a PR on GitHub with:
   - Clear description of what changed and why
   - Screenshots/videos for UI changes
   - Reference related issues (e.g., "Closes #123")

5. **Address review feedback**
   - Be responsive to comments
   - Make requested changes
   - Push updates to the same branch

## 🎨 Code Guidelines

### TypeScript
- Use TypeScript for type safety
- Define types in `lib/types.ts` when used across files
- Avoid `any` types when possible

### React Components
- Use functional components with hooks
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks or utilities

### Styling
- Use Tailwind CSS utility classes
- Follow existing color scheme and spacing patterns
- Ensure responsive design for all screen sizes

### API Routes
- Edge runtime for performance (`export const runtime = 'edge'`)
- Validate query parameters
- Handle errors gracefully with appropriate status codes
- Document parameter requirements

## 🧪 Testing

Before submitting a PR:
- [ ] Test locally with `npm run dev`
- [ ] Test different device sizes (if UI changes)
- [ ] Test both Year and Life views (if applicable)
- [ ] Check for console errors/warnings
- [ ] Verify TypeScript compiles (`npm run build`)



## ❓ Questions?

Feel free to:
- Open an issue for questions
- Start a discussion
- Reach out to maintainers

---

**Thank you for contributing to Remainders!** Every contribution, no matter how small, helps make this project better for everyone. 🎉
