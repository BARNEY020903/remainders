/**
 * FAQ Data for Remainders
 * Used for content and can be converted to FAQ Schema
 */

export const faqData = [
  {
    question: "What is a life calendar?",
    answer: "A life calendar is a visual representation of your entire life span (typically 80 years) displayed as 4,160 weeks. Each week is represented as a dot or box, allowing you to see past, present, and future time at a glance, promoting intentional living."
  },
  {
    question: "How does a year calendar wallpaper work?",
    answer: "A year calendar wallpaper displays all 365 days of the current year as a grid on your phone lock screen. Each day is marked as it passes, providing daily visual progress tracking and helping maintain focus on time-limited goals throughout the year."
  },
  {
    question: "What is memento mori?",
    answer: "Memento mori is a Latin phrase meaning 'remember you must die.' It's a philosophical practice encouraging awareness of mortality to inspire purposeful, meaningful living. Digital tools like life calendars modernize this ancient Stoic principle for daily reflection and motivation."
  },
  {
    question: "How to set up a life calendar wallpaper?",
    answer: "Visit Remainders, enter your birth date, select your device model, and click Generate to create your personalized wallpaper URL. Copy the URL and set it as your lock screen wallpaper. The URL auto-updates daily without manual downloads."
  },
  {
    question: "What is the 4,160 weeks concept?",
    answer: "The 4,160 weeks concept represents an average 80-year human lifespan visualized weekly. Popularized by Tim Urban's 'Wait But Why,' this framework makes abstract lifetime feel tangible, motivating people to prioritize meaningful activities over trivial pursuits."
  },
  {
    question: "How can I visualize my remaining time?",
    answer: "Use Remainders by entering your birth date to generate a visual grid of your life. Completed weeks appear filled while remaining weeks show empty, creating powerful perspective on time's finite nature and encouraging intentional daily choices."
  },
  {
    question: "What are the best life calendar apps?",
    answer: "Top life calendar apps include Remainders (customizable wallpapers with plugins), Your Life in Weeks (iOS), and WeekendsCount. Remainders offers lock screen integration, custom themes, and plugins like habit tracking, quotes, and moon phases for enhanced motivation."
  },
  {
    question: "How does time visualization improve productivity?",
    answer: "Time visualization creates psychological urgency by making abstract future concrete. Seeing limited weeks remaining activates loss aversion, reduces procrastination, and shifts focus from trivial to meaningful tasks. Visual time tracking can increase goal completion rates significantly."
  },
  {
    question: "Can life calendars reduce anxiety?",
    answer: "Life calendars can paradoxically reduce anxiety by providing perspective. While confronting mortality initially feels uncomfortable, it helps distinguish real priorities from imaginary worries. Many users report decreased stress after adopting regular mortality awareness practices like life calendars."
  },
  {
    question: "What is a stoic life calendar?",
    answer: "A Stoic life calendar applies ancient Stoic philosophy to modern time tracking. It combines memento mori (mortality awareness) with visual week-by-week life representation, encouraging users to live virtuously, focus on controllables, and make each week count toward meaningful goals."
  },
  {
    question: "Is Remainders free to use?",
    answer: "Yes, Remainders is completely free. There's no registration required for basic use. Sign in with Google only if you want to save custom configurations, access the plugin marketplace, or get your personalized wallpaper URL that persists across devices."
  },
  {
    question: "Does Remainders store my data?",
    answer: "Remainders is privacy-first. Wallpapers are generated on-the-fly without storing personal data. If you sign in, only your preferences (birth date, theme choices, plugin configs) are stored in your Firebase account. No tracking, no data selling."
  },
  {
    question: "Can I customize my life calendar wallpaper?",
    answer: "Absolutely! Remainders offers extensive customization: choose between Life View or Year View, select from preset themes or create custom color schemes, adjust fonts and sizes, and add plugins like inspirational quotes, habit trackers, and moon phases to personalize your daily reminder."
  },
  {
    question: "How do I auto-update my wallpaper daily?",
    answer: "After generating your wallpaper URL, set it as a dynamic wallpaper using iOS Shortcuts or Android automation apps. The URL automatically refreshes to show the current day without manual updates. Detailed setup instructions are provided after you generate your wallpaper."
  },
  {
    question: "What devices are supported?",
    answer: "Remainders supports all major smartphones including iPhone (all models from 6 to 15 Pro Max), Samsung Galaxy, Google Pixel, OnePlus, and other Android devices. Select your specific device model for perfectly sized wallpapers optimized for your screen resolution."
  }
];

export function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}
