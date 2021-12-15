# NFTea 🐸 ☕

### This is a web3 NFT marketplace app built using Nextjs. Supports Ethereum, Binance, Polygon, and Avalance

## Features:

- NextJS
- Static, Client-side rendered & Server-side rendered pages
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

### SSR pages:
- Dashboard


# Development process

Initially, creating a web3 app looked too complicated for me to add it to my portfolio. As a developer, I wanted to challenge myself into building something I wasn't familiar with. So I dived right in and did my best. I had no experience in building web3 applications and I still don't understand a lot of it. Therefore, I gathered all of the documentation on the tools I needed and got started. Here's how the process went: 
- Breaking the app into separate tasks, issues, features, and using a Kanban board to visualize the process. 
- Writing a spec doc and most importantly hand writing notes about how I would put pieces of logic together. I did a lot of planning before writing any code. This shortened the time I spent developing the app so much that I don't think I can write code without proper planning.
- Anticipating bugs and embaracing them. I used bugs as a guiding point. I used to hate bugs, now I use them to my advantage to guide me through fixing a bug and finding solutions to complete a task
- Creating strict requirements for code reusability. I created pure components that I could use anywhere as well as custom hooks to avoid rewriting logic
- Testing critical logic and custom hooks
- Using user stories to avoid over-engineering the app
- Following a design I found to turn design into functional code
- Clean code and following best practices ie DRY
- Separating my Git workflow from my master branch


# Technical details

## Frontend
- I used NextJS for the frontend mainly for two reasons. NextJS's image and performance optimizations. Since my app is image heavy, I decided to use NextJS. I also wanted to test out Incremental statitc regeneration for higher cache hit rates and see how the loading speed does. Finally, I had a few pages in mind that I wanted to statically pre-render, server-side render, and client-side render (via SWR).
- I also used Tailwind to style my app. 

## API
- I used SWR to fetch my data for it's caching and revalidating benefits. I then used the `map` method and destructuring JSON to shape my data for my components to consume. 

## Backend
- As a frontend developer who can also work in the backend, I made the mistake of building a fullstack app on my first attempt. I ended up spending more time working on my backend code and logic instead of working on the frontend. I ripped out the backend and replaced it with Firebase 9. Along the way I came across Moralis, a web3 SDk for the web. I thought it would be interesting to build a web3 app even though I didn't know what it really was. 

## Testing
- I used React Testing Library to test my custom hooks. I also attempted to use MSW (MockServiceWorker) but had no luck. I'll be reading up on the documentation soon to learn it.


# Final thoughts
- I'm glad I built this app because it pushed me to learn how to use bugs as guiding points instead of becoming frustrated. I now enjoy finding bugs and depend on them to get a feature done or issue closed. This is something that can't be taught and I'm glad I developed this trait which I maybe would've never did without this project.
- Something I should have implemented is state management and more testing if I had more time. 

I also included a documentation page in my project you can take a look at.

