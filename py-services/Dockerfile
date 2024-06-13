# py-services/Dockerfile
FROM python:3.12.4-slim AS builder

WORKDIR /usr/src/app/py-services

COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

FROM python:3.12.4-slim

WORKDIR /usr/src/app/py-services

# copy installed dependencies from builder stage
COPY --from=builder /usr/local/lib/python3.12 /usr/local/lib/python3.12
COPY --from=builder /usr/local/bin /usr/local/bin

COPY . .

EXPOSE 8000

CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8000"]