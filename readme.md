## Required
- node ^8.9.4
- npm ^5.6.0
- webpack ^3.11.0 < 4 (global installation)

## After cloning
Create .env files in client and server dirs

**client/.env**\
DEV=true (or empty for production)

**server/.env**\
DEV=true (or empty for production)\
PORT=\
DB_NAME=\
DB_USER=\
DB_PASS=\
DB_HOST=\
DB_PORT=\
GOOGLE_ID=123qwe123qwe.apps.googleusercontent.com (for example)\
GOOGLE_SECRET=qqwEQwe12qweq2 (for example)\
OAUTH_CALLBACK_URL=http://127.0.0.1:3000/api/auth/google/callback (for example, if PORT == 3000)\
SESSION_SECRET=qweqwe (for example)

## Starting
- start your mongo server
- npm run start (in server dir, or *npm run dev* for development)
- webpack (in client dir)
