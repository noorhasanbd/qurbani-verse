This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
Hi! This is my assignment project for Category-A8-Pineapple. I tried my best to make a website where people can look for cows and goats for Qurbani. It’s a React-based single-page application.

Links
Live Site: [Insert Your Vercel/Render Link Here]

GitHub Repo: [Insert Your Repo Link Here]

What is this?
Basically, QurbaniHat is like an online marketplace. If you need a cow or a goat, you can browse the list, see how much they weigh and how much they cost, and "book" them. I used a JSON file to store the animal data for now.

Features I added:
Home Page: Has a banner and some tips on how to pick a good animal.

Browse Animals: You can see all animals and even sort them by price (this was a bit tricky!).

Login/Register: You can create an account or just use Google Login because it’s faster.

Protected Routes: You can't see the animal details or your profile unless you are logged in.

Booking: A form to "book" your animal. It doesn't save to a database yet, but it shows a nice success toast!

My Profile: You can see your name and photo, and even update them if you want.

Responsive: I checked it on my phone, and it looks okay on mobile, tablet, and desktop.

Packages I Used
I installed these using npm install:

NextJs: The framework used for building the app.

Better Auth: For handling the authentication (Login/Google).

React Toastify: To show those "Success!" or "Error!" popups.

React Spring: I used this for some animations to make the site look more interesting.
