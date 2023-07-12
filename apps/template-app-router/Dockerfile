FROM node:16-alpine AS pruner
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .
RUN yarn global add turbo
RUN turbo prune --docker --scope=template-pages-router

FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=pruner /app/out/full .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN yarn global add pnpm && pnpm i --frozen-lockfile
RUN pnpx turbo run build --filter=template-pages-router

FROM node:16-alpine AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder --chown=nextjs:nodejs /app/apps/template-pages-router/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/template-pages-router/.next/static ./apps/template-pages-router/.next/static
COPY --from=builder /app/apps/template-pages-router/public ./apps/template-pages-router/public
USER nextjs
EXPOSE 3001
CMD node apps/template-pages-router/server.js --color=16m