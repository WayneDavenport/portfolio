#Mediaq

Mediaq is a sophisticated social platform that transforms personal media consumption into a gamified and structured journey. At its core, the application allows users to search for movies, TV shows, books, and video games from various sources and add them to a personal queue. Its standout feature is a unique "locking" system, which enables users to create dependencies between media items, requiring them to complete certain items or categories before "unlocking" others. This turns a simple backlog into a personalized progression system, complete with visual cues on the dashboard to track locked items and their keys. The experience is enhanced by social features like friend recommendations, detailed progress charts, and practical integrations with services like JustWatch for streaming availability and Green Man Gaming for affiliate-based game deals, making it a comprehensive tool for intentionally managing and sharing one's media life.

"dependencies": {
    "@hookform/resolvers": "^3.9.1",
    "@modelcontextprotocol/server-postgres": "^0.6.2",
    "@motionone/dom": "^10.18.0",
    "@next-auth/supabase-adapter": "^0.2.1",
    "@radix-ui/react-accordion": "^1.2.3",
    "@radix-ui/react-alert-dialog": "^1.1.6",
    "@radix-ui/react-avatar": "^1.1.2",
    "@radix-ui/react-dialog": "^1.1.6",
    "@radix-ui/react-dropdown-menu": "^2.1.6",
    "@radix-ui/react-icons": "^1.3.2",
    "@radix-ui/react-label": "^2.1.1",
    "@radix-ui/react-popover": "^1.1.6",
    "@radix-ui/react-radio-group": "^1.2.3",
    "@radix-ui/react-scroll-area": "^1.2.2",
    "@radix-ui/react-select": "^2.1.2",
    "@radix-ui/react-slider": "^1.2.2",
    "@radix-ui/react-slot": "^1.1.1",
    "@radix-ui/react-switch": "^1.1.2",
    "@radix-ui/react-tabs": "^1.1.3",
    "@radix-ui/react-toast": "^1.2.5",
    "@radix-ui/react-tooltip": "^1.1.8",
    "@react-three/drei": "^10.0.6",
    "@react-three/fiber": "^9.1.2",
    "@sendgrid/mail": "^8.1.4",
    "@supabase/supabase-js": "^2.47.3",
    "@vercel/postgres": "^0.10.0",
    "axios": "^1.7.9",
    "bcrypt": "^5.1.1",
    "bcryptjs": "^2.4.3",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.0.4",
    "date-fns": "^4.1.0",
    "embla-carousel-react": "^8.5.2",
    "fast-xml-parser": "^5.0.8",
    "framer-motion": "^12.0.1",
    "fs": "^0.0.1-security",
    "jsonwebtoken": "^9.0.2",
    "lodash": "^4.17.21",
    "lucide-react": "^0.468.0",
    "motion": "^12.12.1",
    "next": "^15.5.15",
    "next-auth": "^4.24.11",
    "next-themes": "^0.4.4",
    "nodemailer": "^7.0.13",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-hook-form": "^7.54.1",
    "react-icons": "^5.4.0",
    "react-page-tracker": "^0.3.1",
    "recharts": "^2.15.1",
    "sonner": "^1.7.4",
    "tailwind-merge": "^2.5.5",
    "tailwindcss-animate": "^1.0.7",
    "three": "^0.175.0",
    "zod": "^3.24.1",
    "zustand": "^5.0.2"
  },



📸 Picto-Nomo
Local-first photo transfer app with on-device AI categorization

Transfer photos from your phone to your PC over local WiFi using WebRTC, with intelligent AI-powered categorization - all without any cloud services!

✨ Features
🤖 Smart AI Categorization
Dual-mode AI: ExecuTorch ML model or heuristic fallback
11 Categories: Nature, Food, People, Documents, Memes, Animals, Architecture, Art, Sports, Vehicles, and more
Custom Categories: Create your own categories on the fly
On-device Processing: 100% privacy-first, no cloud needed
📤 Fast Local Transfer
WebRTC P2P: Direct peer-to-peer connection
Chunked Transfer: Handles large photos efficiently
Progress Tracking: Real-time progress per photo
Auto-discovery: mDNS/Bonjour + QR code fallback
🎨 Polished UX
Progress Indicators: Visual feedback for each photo upload
Toast Notifications: Non-intrusive success/error messages
Photo Preview: Double-tap to view full-screen
Category Filters: Organize and filter by category
Batch Operations: Select all, send multiple photos
💻 Web Receiver
Category Tabs: Filter received photos by category
Download Options: Download individual or all photos
Statistics: View counts and breakdown by category
Clean UI: Modern, responsive design

  "dependencies": {
    "@react-native-async-storage/async-storage": "^2.0.0",
    "@react-native-community/netinfo": "^11.4.1",
    "@react-native-ml-kit/image-labeling": "^2.0.0",
    "@react-navigation/native": "^7.0.0",
    "@react-navigation/stack": "^7.0.0",
    "expo": "~54.0.31",
    "expo-asset": "^12.0.0",
    "expo-blur": "~15.0.8",
    "expo-camera": "~17.0.10",
    "expo-dev-client": "~6.0.20",
    "expo-file-system": "~19.0.21",
    "expo-image-manipulator": "~13.0.6",
    "expo-image-picker": "~17.0.10",
    "expo-linear-gradient": "~15.0.8",
    "expo-network": "~8.0.8",
    "expo-status-bar": "~3.0.9",
    "react": "19.1.0",
    "react-native": "0.81.5",
    "react-native-executorch": "^0.6.0",
    "react-native-fast-tflite": "^1.1.0",
    "react-native-gesture-handler": "~2.28.0",
    "react-native-safe-area-context": "~5.6.0",
    "react-native-screens": "~4.16.0",
    "react-native-svg": "15.12.1",
    "react-native-webrtc": "^124.0.0",
    "react-native-zeroconf": "^0.14.0",
    "socket.io-client": "^4.8.1"
  },
  "private": true

picto-nomo/                    # React Native (Expo) mobile app
├── src/
│   ├── components/           # Atomic Design components
│   ├── screens/              # App screens
│   ├── services/             # Business logic
│   │   └── ai/              # AI classification services
│   ├── hooks/               # Custom React hooks
│   ├── context/             # React Context providers
│   └── navigation/          # Navigation setup

picto-reciever/               # React + Vite web receiver
├── src/
│   ├── components/          # UI components
│   ├── services/            # WebRTC & signaling
│   └── App.jsx
└── server/                  # Express signaling server
    └── index.js