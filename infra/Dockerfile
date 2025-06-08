# Stage 1: Install dependencies and build the app
FROM node:22-alpine AS builder

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set working directory
WORKDIR /app

ENV NODE_ENV=production

# Copy only the lockfile and package.json first for better caching
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the app
COPY . .

# Build the SvelteKit app
RUN pnpm run build

# Stage 2: Run the app with only necessary files
FROM node:22-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV TZ=Europe/Vienna

# Copy pnpm and Node dependencies from builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./

# Expose the default port (customize if needed)
EXPOSE 3000

# Start the Node server (the output of @sveltejs/adapter-node)
CMD ["node", "build"]
