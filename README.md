# NFTea 🐸 ☕

### This is a web3 NFT marketplace app built using Nextjs. Supports Ethereum, Binance, Polygon, and Avalance

## Features:

- NextJS
- Static, Dynamic, Client-side rendered & Server-side rendered pages
- Incremental static regeneration
- Image optimization
- TailwindCSS
- Custom React hooks
- Blockchain-as-a-backend
- On-chain & off-chain data storage

### Static pages:
- Homepage
- login page
- signup page

### Server-side rendered pages:
- Dashboard

### Client-side rendered pages:
- `/[id].js` page for individual NFTs


# Development process

Initially, creating a web3 app looked too complicated for me to add to my portfolio. As a developer, I wanted to challenge myself into building something I wasn't familiar with. So I dived right in and did my best. I had no experience in building web3 applications and I still don't understand a lot of it. Therefore, I gathered all of the documentation on the tools I needed and got started. Here's how the process went: 
- Breaking the app into separate tasks, issues, features, and using a Kanban board to visualize the process. 
- Writing a spec doc and most importantly hand writing notes about how I would put pieces of logic together. I did a lot of planning before writing any code. This shortened the time I spent developing the app.
- Anticipating bugs and embaracing them. I used bugs as a guiding point. I used to hate bugs, now I use them to my advantage to guide me through solutions to complete a task. I also use bugs to test my code better. Since I know where the weak points are in the code and what is most likely to break, I could test more components/logic that would've been overlooked.
- Creating strict constraints for code reusability. I created pure components that I could use anywhere as well as custom hooks to avoid rewriting logic
- Testing critical logic and custom hooks
- Using user stories to avoid over-engineering the app
- Following a design I found to turn design into functional code
- Clean code and following best practices i.e YAGNI, DRY, etc...
- Separating my Git workflow from my master branch


# Technical details

## Frontend
- I used NextJS for the frontend mainly for two reasons. NextJS's image and performance optimizations. Since my app is image heavy, I decided to use NextJS. I also wanted to test out Incremental statitc regeneration for higher cache hit rates and see how the loading speed does. Finally, I had a few pages in mind that I wanted to statically pre-render, server-side render, and client-side render (via SWR).
- I also used Tailwind to style my app. 

## API
- I used SWR to fetch my data for it's data caching and revalidating benefits. I then used the `map` method and destructured JSON to shape my data for my components to consume. 

## Backend
- As a frontend developer who can also work in the backend, I made the mistake of building a fullstack app on my first attempt. I ended up spending more time working on my server code, APIs, and trying different data encryption libs for my database models/schemas instead of working on the frontend. I ripped out the backend and replaced it with Firebase 9. Along the way I came across Moralis, a web3 SDK for the web. I thought it would be interesting to build a web3 app even though I didn't know what it really was. So I decided to go with Moralis and thats how this app came about.

## Testing
- I used React Testing Library to test my custom hooks. 
- I also used MSW (MockServiceWorker) instead of mocking Axios and Fetch network requests to test the app better from a user's perspective


# Issues
There's a lot of issues and bottlenecks I ran into while building this app. I wasn't familiar with all of the constraints around NextJS since this is my first go at building a production ready app. Some of the issues were: 
- Client-side state/data conflicting with server-side rendering: The conflict was happening when I tried to access JSON data in my client before it was ready on the server. So what I did was use strict conditionals before I tried to use the data in my components. 
- Low Chrome Lighthouse performance scores: There were a lot of bottlenecks in the performance. I was getting `avoid enormous network requests` errors. I separated the `<MoralisProvider>` to it's own file and created my own Provider component. This slightly raised the score on Lighthouse. In vanilla React, I could wrap the `<MoralisProvider>` around the pages that needed it but in NextJS it was hard to do this because of it's file based routing. I looked at solutions for other similar issues such as using Redux in NextJS as well. In the end, I found that the slight bump in performance I got with using my own Provider and running the build fixed the issue, along with limiting the data received back from the API. Here are some before & after screenshots of my Lighthouse scores below.

# Screenshots

## Low score on web
<img width="1427" alt="web-low" src="https://user-images.githubusercontent.com/72423262/146656479-bdd08dc7-dcc8-4521-aa9d-10cf33229d07.png">

## Low score on mobile
<img width="1352" alt="mobile-low" src="https://user-images.githubusercontent.com/72423262/146656486-0c95b194-f9a5-41c9-a942-2aaafd7153c1.png">

## Better score on web
- After I optimized accessibility and performance
<img width="1415" alt="web-high" src="https://user-images.githubusercontent.com/72423262/146656497-f94c3243-45b7-43d9-8606-7f907ce8d172.png">


- These scores aren't what I was aiming for but it's a work in progress and I'm continously refactoring code and trying out new techniques to improve


# Final thoughts
- I'm glad I built this app because it pushed me to learn how to use bugs as guiding points instead of becoming frustrated. I now enjoy finding bugs and depend on them to get a feature done or issue closed. This is something that can't be taught and I'm glad I developed this trait which I maybe would've never did without this project.
- Something I should have implemented is state management and more testing if I had more time. 
- I also wanted to implement pagination and searching for NFTs on the dashboard page. I ran into some issues because since the page is pre-rendered on the server, I had no way to access the `window` object or any client-side state. Therefore, I would have to use client-side rendering. This being my first Nextjs app, this was the only solution I could find. I decided to stick to server-rendering because I wanted to try it out and practice it. 


I also included a documentation page in my project you can take a look at.
