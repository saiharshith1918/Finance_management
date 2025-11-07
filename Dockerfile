# 1️⃣ Base image
FROM node:20-alpine AS base

# 2️⃣ Working directory
WORKDIR /app

# 3️⃣ Copy package files
COPY package*.json ./

# 4️⃣ Install dependencies
RUN npm install --legacy-peer-deps

# 5️⃣ Copy the rest of the source code (includes prisma folder)
COPY . .

# 6️⃣ Generate Prisma client
RUN npx prisma generate || echo "Skipping prisma generate"

# 7️⃣ Build Next.js app
RUN npm run build

# 8️⃣ Expose port
EXPOSE 3001

# 9️⃣ Start the app
CMD ["npm", "run", "start"]
