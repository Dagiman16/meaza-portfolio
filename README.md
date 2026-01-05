# Meaza Yimer - Professional Portfolio Website

A clean, minimal portfolio website built with Next.js, featuring a modern card-based layout that showcases academic excellence and professional skills.

## 🌟 Features

- **Minimal Card Design**: Clean white cards on light gray background
- **Grid Layout**: Responsive masonry-style grid layout
- **Professional Typography**: Clean, readable fonts with proper hierarchy
- **Academic Excellence Showcase**: Highlighting Highest GPA Cup Award achievement
- **Skills Organization**: Categorized competencies in management, professional, and creative areas
- **Contact Integration**: Direct email and social media links
- **Resume Download**: PDF download functionality
- **Fully Responsive**: Optimized for all device sizes

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd meaza-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
meaza-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       └── MobileMenu.tsx
├── public/
│   ├── meaza-photo.jpg
│   └── resume.pdf
└── package.json
```

## 🎨 Design Overview

### Card-Based Layout
The portfolio uses a clean, minimal design with:
- **Light gray background** (#f3f4f6)
- **White cards** with subtle shadows
- **Rounded corners** (16px border radius)
- **Consistent spacing** and typography
- **Orange accent color** (#f97316) for highlights

### Grid System
- **3-column grid** on desktop
- **Single column** on mobile
- **Flexible card heights** based on content
- **Responsive breakpoints** for optimal viewing

## 📄 Content Sections

### 1. Hero Card (Portfolio)
- Name and professional introduction
- Call-to-action buttons
- Large profile photo with orange background
- Clean, minimal typography

### 2. About Card
- Personal story and background
- Academic achievements (without redundant GPA mentions)
- Small circular profile photo
- Social media links

### 3. Skills Card
- **Management Skills**: Strategic thinking, leadership, decision making
- **Professional Skills**: Communication, time management, problem solving
- **Creative & Personal**: Content creation, adaptability, quick learning

### 4. Achievements Card
- Highest GPA Cup Award highlight
- Academic excellence recognition
- Leadership demonstration
- Color-coded achievement categories

### 5. Experience Card
- Academic project leadership
- Content creation activities
- Collaborative work examples

### 6. Contact Card (Orange Background)
- Direct contact information
- Email and LinkedIn links
- Resume download button
- Professional opportunity statement

## 🛠 Technologies Used

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach

## 📱 Responsive Features

- **Mobile Navigation**: Collapsible menu for small screens
- **Flexible Grid**: Adapts from 3 columns to single column
- **Touch-Friendly**: Optimized button sizes and spacing
- **Readable Typography**: Scales appropriately across devices

## 🎯 Key Improvements

- **Removed Redundancy**: Eliminated repetitive GPA mentions
- **Clean Design**: Minimal, professional aesthetic
- **Better Organization**: Logical content flow and hierarchy
- **Enhanced Readability**: Improved typography and spacing
- **Professional Focus**: Emphasis on achievements and skills

## 🚀 Deployment

To build for production:

```bash
npm run build
npm start
```

The website can be deployed on:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any static hosting service

## 📄 Image Setup

Add Meaza's profile photo as `public/meaza-photo.jpg` for the portfolio to display correctly. The design includes two photo placements:
1. Large circular photo in the hero card
2. Small circular photo in the about card

## 🤝 Customization

To customize the portfolio:

1. **Content**: Update text content in `src/app/page.tsx`
2. **Colors**: Modify Tailwind color classes
3. **Layout**: Adjust grid columns and card arrangements
4. **Contact Info**: Update email and social media links
5. **Resume**: Replace `public/resume.pdf` with actual resume

## 🎨 Design Philosophy

The design follows modern web design principles:
- **Minimalism**: Clean, uncluttered interface
- **Hierarchy**: Clear content organization
- **Accessibility**: Readable fonts and proper contrast
- **Performance**: Optimized for fast loading
- **Professionalism**: Suitable for academic and professional contexts