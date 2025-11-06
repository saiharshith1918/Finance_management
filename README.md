<img width="1470" alt="Screenshot 2024-12-10 at 9 45 45 AM" src="https://github.com/user-attachments/assets/1bc50b85-b421-4122-8ba4-ae68b2b61432">

# 💸 Finance Management System

A full-stack finance management web application built to simplify expense tracking, automate budget alerts, and manage bills seamlessly.

## 🚀 Live Demo
🔗 [Finance Management System](https://finance-management-9z7e-git-main-saiharshith1918s-projects.vercel.app)

---

## 🧠 About the Project
This app allows users to securely manage their expenses, track transactions, and monitor budgets in one place.

- 🔐 **Authentication** powered by [Clerk](https://clerk.com)
- 🗄️ **Database & ORM** using **Prisma + Supabase**
- 📦 **Storage** for receipts and files handled via **Supabase Storage**
- 🧾 **Gemini API** integration for automatic bill scanning and data extraction
- 📧 **Inngest + Resend** for automated budget email notifications
- 🧰 **Arcjet Middleware** for security, bot protection, and rate limiting
- 🧱 **Dashboard UI** built with [shadcn/ui](https://ui.shadcn.com)
- ⚡ Deployed on [Vercel](https://vercel.com)

---

## 🧩 Tech Stack
**Frontend:** Next.js 15, TailwindCSS, shadcn/ui  
**Backend:** Prisma ORM, Supabase  
**Auth:** Clerk  
**AI API:** Gemini API  
**Email Automation:** Inngest + Resend  
**Security:** Arcjet  
**Deployment:** Vercel  

---

### Make sure to create a `.env` file with following variables -

```
DATABASE_URL=
DIRECT_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY=

RESEND_API_KEY=

ARCJET_KEY=
```


## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/saiharshith1918/Finance_management.git
cd Finance_management

