Project Name: QurbaniHat
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

How to run this locally
Clone this repo.

Run npm install to get all the folders.

Create a .env file and put your environment variables there.

Run npm run dev.

Challenges I faced
Sorting: Figuring out how to make the price sort from low to high took me a while.

Better Auth: Learning how to implement the update user feature using Better Auth concepts.

Reloading: Making sure the page doesn't throw errors when reloading on different routes
