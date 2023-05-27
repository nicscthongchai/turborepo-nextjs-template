FROM node:16-alpine AS pruner
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .
RUN yarn global add turbo
RUN turbo prune --docker --scope=web

FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=pruner /app/out/full .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN yarn global add pnpm && pnpm i --frozen-lockfile
RUN pnpx turbo run build --filter=web

FROM node:16-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=builder /app/apps/web/public ./apps/web/public
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD [ "node", "apps/web/server.js", "--color=16m" ]