# rs-services/Dockerfile
FROM rust:latest AS builder

WORKDIR /usr/src/app/rs-services

# copy src code
COPY . .

# build
RUN cargo install --path .

# use a smaller base image for the runtime (with a compatible glibc version)
FROM debian:bookworm-slim

# set working directory for runtime stage
WORKDIR /usr/local/bin

# copy binary from builder image
COPY --from=builder /usr/local/cargo/bin/rs-services .

EXPOSE 3002

CMD ["rs-services"]