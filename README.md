# ✨ Shine Beauty Parlour — Luxury Salon Experience

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Sanity CMS](https://img.shields.io/badge/Sanity_CMS-v3-F03E2F?style=for-the-badge&logo=sanity)](https://www.sanity.io/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?style=for-the-badge&logo=supabase)](https://supabase.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A premium, full-stack web application for **Shine Beauty Parlour**, designed to provide a seamless booking and browsing experience for luxury beauty services. Built with a focus on aesthetics, performance, and dynamic content management.

---

## 🚀 Key Features

- **💎 Premium UI/UX**: Modern, responsive design using Tailwind CSS with a custom luxury color palette.
- **⚡ Performance First**: Powered by Next.js 15 App Router for blazing-fast page loads and SEO optimization.
- **📝 Dynamic Content Management**: Fully integrated with Sanity CMS for managing services, team members, testimonials, and gallery images without touching code.
- **📬 Contact & Bookings**: Integrated with Supabase for reliable contact form submissions and lead management.
- **🎨 Custom Animations**: Subtle micro-animations and smooth transitions for a premium feel.
- **📱 Fully Responsive**: Optimized for all devices, from mobile phones to high-resolution desktops.

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) (App Router), [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4.0)
- **CMS**: [Sanity.io](https://www.sanity.io/)
- **Database/Backend**: [Supabase](https://supabase.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 🏗️ Architecture

The project follows a modern headless architecture:

1.  **Frontend**: Next.js handles the rendering and routing. It uses Server Components for data fetching from Sanity to ensure fast First Contentful Paint (FCP).
2.  **Content Layer**: Sanity CMS provides a structured content platform. The `/studio` route allows salon owners to update services and team information in real-time.
3.  **Data Layer**: Supabase is used as the primary database for storing user-submitted data via the contact form.

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or higher
- A Sanity project ID
- A Supabase project URL and Anon Key

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/jaygupta-exe/shinebeautyparlor.git
    cd shinebeautyparlor
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Variables**:
    Create a `.env.local` file in the root directory and add the following (see `.env.example` for details):
    ```env
    NEXT_PUBLIC_SANITY_PROJECT_ID=your_id
    NEXT_PUBLIC_SANITY_DATASET=production
    NEXT_PUBLIC_SUPABASE_URL=your_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
    ```

4.  **Run the development server**:
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) to see the result.

---

## 📂 Project Structure

```text
├── app/               # Next.js App Router (Website & Admin)
│   ├── (website)/     # Public facing pages
│   └── (admin)/       # Sanity Studio route
├── components/        # Reusable UI components
├── lib/               # Utility functions (Sanity/Supabase clients)
├── public/            # Static assets
├── sanity/            # Sanity CMS schemas and config
└── supabase-setup.sql # Database schema for Supabase
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Jay Gupta**
- GitHub: [@jaygupta-exe](https://github.com/jaygupta-exe)

---

*Developed with ❤️ for Shine Beauty Parlour.*
