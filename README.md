# Campus Marketplace 🎓

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.0.0-black?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC?logo=tailwind-css&logoColor=white)
![Appwrite](https://img.shields.io/badge/Appwrite-1.0.0-F02E65?logo=appwrite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)
![Last Commit](https://img.shields.io/github/last-commit/yourusername/campus-marketplace)
![Stars](https://img.shields.io/github/stars/yourusername/campus-marketplace?style=social)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fcampus-marketplace)
[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/campus-marketplace)

</div>

A modern, secure, and user-friendly marketplace platform designed specifically for university students to buy and sell items within their campus community.

<div align="center">
  <img src="public/demo.gif" alt="Campus Marketplace Demo" width="600px" />
</div>

## 🌟 Features

<details>
<summary><strong>Secure Authentication</strong></summary>

- 🔐 University email verification
- 👥 Role-based access control
- 🔑 Secure password management
- ⏱️ Session management
- 📱 OAuth integration (Google, GitHub)
- 🔄 Password reset functionality
- 📧 Email verification system

</details>

<details>
<summary><strong>User Profiles</strong></summary>

- 👤 Detailed user information
- 🏫 University-specific profiles
- ✅ Profile verification system
- 🖼️ Avatar support
- 📱 Responsive profile design
- 🔒 Privacy settings
- 📊 User activity tracking

</details>

<details>
<summary><strong>Marketplace</strong></summary>

- 📝 Item listings
- 🔍 Search and filter capabilities
- 📂 Category-based organization
- 💰 Price negotiation
- 🖼️ Image upload support
- 📍 Location-based filtering
- ⭐ Rating and review system
- 💬 In-app messaging

</details>

<details>
<summary><strong>Admin Dashboard</strong></summary>

- 👥 User management
- 🛡️ Content moderation
- 📊 Analytics and reporting
- ⚙️ System configuration
- 📈 Performance metrics
- 🔔 Notification management
- 📝 Content approval system

</details>

## 🚀 Tech Stack

<details>
<summary><strong>Frontend</strong></summary>

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Notifications**: Sonner Toast
- **State Management**: React Context
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Icons**: Lucide Icons
- **Animations**: Framer Motion

</details>

<details>
<summary><strong>Backend</strong></summary>

- **Service**: Appwrite Backend-as-a-Service
- **API**: RESTful Architecture
- **Authentication**: Appwrite Auth
- **Database**: Appwrite Database
- **Storage**: Appwrite Storage
- **Real-time**: Appwrite Realtime
- **Functions**: Appwrite Functions
- **Security**: JWT, OAuth2

</details>

<details>
<summary><strong>Development Tools</strong></summary>

- **Linting**: ESLint
- **Formatting**: Prettier
- **Type Checking**: TypeScript
- **Version Control**: Git
- **Testing**: Jest, React Testing Library
- **CI/CD**: GitHub Actions
- **Documentation**: TypeDoc
- **Performance**: Lighthouse

</details>

## 📋 Prerequisites

- Node.js 18.x or later
- npm or yarn
- Appwrite Account
- Git
- Modern web browser
- Code editor (VS Code recommended)

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/campus-marketplace.git
   cd campus-marketplace
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory:
   ```env
   NEXT_PUBLIC_APPWRITE_ENDPOINT="your-appwrite-endpoint"
   NEXT_PUBLIC_APPWRITE_PROJECT_ID="your-project-id"
   NEXT_PUBLIC_APPWRITE_DATABASE_ID="your-database-id"
   NEXT_PUBLIC_APPWRITE_USERS_COLLECTION_ID="users"
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## 🏗️ Project Structure

```
campus-marketplace/
├── app/
│   ├── api/           # API routes
│   ├── auth/          # Authentication pages
│   ├── dashboard/     # Dashboard pages
│   └── profile/       # Profile pages
├── components/
│   ├── ui/           # Reusable UI components
│   └── hooks/        # Custom React hooks
├── lib/
│   ├── appwrite.ts   # Appwrite configuration
│   └── utils.ts      # Utility functions
└── public/           # Static assets
```

## 🔐 Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `NEXT_PUBLIC_APPWRITE_ENDPOINT` | Appwrite API endpoint | Yes | - |
| `NEXT_PUBLIC_APPWRITE_PROJECT_ID` | Appwrite project ID | Yes | - |
| `NEXT_PUBLIC_APPWRITE_DATABASE_ID` | Appwrite database ID | Yes | - |
| `NEXT_PUBLIC_APPWRITE_USERS_COLLECTION_ID` | Users collection ID | Yes | "users" |
| `NEXT_PUBLIC_APP_URL` | Application URL | Yes | "http://localhost:3000" |
| `NEXT_PUBLIC_APP_NAME` | Application name | No | "Campus Marketplace" |
| `NEXT_PUBLIC_APP_DESCRIPTION` | Application description | No | "University marketplace platform" |

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run integration tests
npm run test:integration

# Run e2e tests
npm run test:e2e

# Generate coverage report
npm run test:coverage
```

## 📦 Deployment

The application can be deployed to various platforms:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [Railway](https://railway.app)
- [Heroku](https://heroku.com)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the [TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Follow the existing code style

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work - [YourGithub](https://github.com/yourusername)
- [Contributors](https://github.com/yourusername/campus-marketplace/graphs/contributors)

## 🙏 Acknowledgments

- [Appwrite](https://appwrite.io/) for the backend infrastructure
- [Next.js](https://nextjs.org/) for the amazing React framework
- [Shadcn/ui](https://ui.shadcn.com/) for the beautiful components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) for the type safety
- All contributors who have helped shape this project

## 📞 Support

- 📧 Email: support@campusmarketplace.com
- 💬 Discord: [Join our server](https://discord.gg/campusmarketplace)
- 📱 Twitter: [@CampusMarket](https://twitter.com/CampusMarket)
- 📚 Documentation: [docs.campusmarketplace.com](https://docs.campusmarketplace.com)

## 🌟 Show your support

Give a ⭐️ if this project helped you!

---

<div align="center">
  Made with ❤️ for the university community
</div>
