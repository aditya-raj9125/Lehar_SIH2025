# LEHAR - Localized Early-warning & Hazard Assessment for Response

A unified platform for coastal hazard reporting and monitoring, designed to empower coastal resilience through technology, community engagement, and real-time intelligence.

## 🌊 Overview

LEHAR (Localized Early-warning & Hazard Assessment for Response) addresses the critical gap in real-time coastal hazard monitoring by combining citizen science, social media intelligence, and advanced AI analytics. This creates a unified system that enables faster response times and better decision-making during ocean-related emergencies across India's 7,500 km coastline.

## ✨ Features

### 🚨 Citizen Reporting
- **Mobile-first interface** for easy hazard reporting
- **Media upload** support (photos/videos)
- **GPS location** tagging with manual override
- **Offline-first** capabilities for remote areas
- **Anonymous reporting** option

### 🗺️ Interactive Mapping
- **Real-time visualization** of hazard reports
- **Dynamic hotspot detection** based on report density
- **Layer management** for different data sources
- **Advanced filtering** by hazard type, time, and source

### 📊 Dashboard & Analytics
- **Real-time metrics** and key performance indicators
- **AI-powered insights** with NLP analysis
- **Social media trends** monitoring
- **Hazard classification** and urgency detection

### 🤖 AI & NLP Engine
- **Automatic hazard classification** from descriptions
- **Sentiment analysis** of social media posts
- **Keyword extraction** and trend detection
- **Multilingual support** for regional accessibility

## 🏗️ Architecture

### Frontend
- **React.js** with modern hooks and functional components
- **Vite** for fast development and building
- **Responsive design** with mobile-first approach
- **Subtle black/white theme** for professional appearance

### Backend
- **Supabase** for database, authentication, and storage
- **PostgreSQL** for structured data management
- **Edge Functions** for serverless computing
- **Real-time subscriptions** for live updates

### Data Flow
1. **Citizen reports** → Supabase Database
2. **Media uploads** → Supabase Storage
3. **NLP processing** → Edge Functions
4. **Real-time updates** → Dashboard & Maps
5. **Social media** → AI analysis → Database

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd disha-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` (Vite default port)

### Building for Production

```bash
npm run build
npm run preview
```

## 📱 Pages & Components

### Core Pages
- **HomePage** - Landing page with feature overview
- **ReportForm** - Citizen hazard reporting interface
- **Dashboard** - Analytics and real-time monitoring
- **MapViewer** - Interactive hazard visualization
- **CitizenGuide** - User instructions and safety information
- **About** - Platform information and team details

### Key Components
- **Header** - Navigation and branding
- **Footer** - Links and platform information
- **Form Components** - Reusable input elements
- **Chart Components** - Data visualization
- **Map Components** - Geographic data display

## 🎨 Design System

### Color Palette
- **Primary**: Black (#000000)
- **Background**: White (#ffffff)
- **Accents**: Various shades of gray
- **Theme**: Subtle black/white aesthetic

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Scales appropriately across devices

### Components
- **Cards**: Consistent border radius and shadows
- **Buttons**: Primary (black) and secondary (gray) variants
- **Forms**: Clean input styling with focus states
- **Navigation**: Clear hierarchy and active states

## 🔧 Configuration

### Supabase Setup
1. Create a new Supabase project
2. Set up database tables for reports, users, and social media
3. Configure storage buckets for media uploads
4. Set up Edge Functions for NLP processing
5. Configure real-time subscriptions

### Database Schema
```sql
-- Reports table
CREATE TABLE reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  hazard_type TEXT,
  description TEXT NOT NULL,
  location JSONB,
  media_urls TEXT[],
  urgency TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Social media posts table
CREATE TABLE social_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  content TEXT NOT NULL,
  platform TEXT,
  sentiment TEXT,
  location JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 📊 Data Sources

### Citizen Reports
- **Hazard descriptions** with text analysis
- **Geotagged locations** for precise mapping
- **Media attachments** for visual evidence
- **User metadata** for verification

### Social Media Integration
- **Twitter/X** posts with hazard keywords
- **Facebook** public posts and comments
- **YouTube** comments and descriptions
- **Real-time monitoring** and sentiment analysis

### External APIs
- **Weather services** for meteorological data
- **Satellite imagery** for coastal monitoring
- **Government databases** for official warnings

## 🔒 Security & Privacy

### Authentication
- **Supabase Auth** for user management
- **Role-based access** control
- **Secure session** management

### Data Protection
- **Encrypted storage** for sensitive information
- **GDPR compliance** for user privacy
- **Anonymous reporting** options
- **Data retention** policies

## 🌐 Deployment

### Production Build
```bash
npm run build
```

### Hosting Options
- **Vercel** - Recommended for React apps
- **Netlify** - Static site hosting
- **AWS S3 + CloudFront** - Scalable hosting
- **Supabase Hosting** - Integrated backend hosting

### Environment Variables
Ensure all environment variables are set in your hosting platform:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Code Standards
- **ESLint** configuration for code quality
- **Prettier** for consistent formatting
- **React best practices** and hooks
- **Responsive design** principles

## 📚 Documentation

### API Reference
- **Supabase Client** integration
- **Component Props** documentation
- **State Management** patterns
- **Routing** configuration

### User Guides
- **Citizen Reporting** instructions
- **Dashboard Usage** guide
- **Map Navigation** help
- **Mobile App** features

## 🚨 Emergency Response

### Integration Points
- **INCOIS** early warning systems
- **NDMA** disaster management protocols
- **State authorities** for local response
- **Emergency services** coordination

### Alert System
- **Real-time notifications** for officials
- **Escalation protocols** for high-urgency events
- **Multi-channel alerts** (SMS, email, app)
- **Public awareness** campaigns

## 📈 Roadmap

### Phase 1 (Current)
- ✅ Basic platform structure
- ✅ Citizen reporting interface
- ✅ Dashboard and analytics
- ✅ Interactive mapping

### Phase 2 (Next)
- 🔄 Advanced NLP processing
- 🔄 Social media integration
- 🔄 Mobile app development
- 🔄 Offline capabilities

### Phase 3 (Future)
- 📋 Machine learning models
- 📋 Predictive analytics
- 📋 International expansion
- 📋 Advanced visualization

## 📞 Support

### Contact Information
- **Email**: support@leharplatform.com
- **Documentation**: docs.leharplatform.com
- **Community**: community.leharplatform.com

### Emergency Contacts
- **National Emergency**: 112
- **Coast Guard**: 1554
- **Weather Helpline**: 1800-180-1717

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **INCOIS** for ocean monitoring expertise
- **NDMA** for disaster management guidance
- **Coastal communities** for feedback and testing
- **Open source community** for amazing tools and libraries

---

**Built with ❤️ for coastal resilience and community safety**

---

## 🏛️ Government Initiative

LEHAR is a **Government of India Initiative** designed to protect India's coastal communities through advanced hazard monitoring and citizen reporting systems. The platform serves as a critical component of India's disaster management infrastructure, working in coordination with:

- **NDRF** (National Disaster Response Force)
- **INCOIS** (Indian National Centre for Ocean Information Services)  
- **NDMA** (National Disaster Management Authority)
- **Coast Guard** and other emergency services

This platform represents India's commitment to leveraging technology and citizen engagement for enhanced coastal safety and disaster preparedness.
