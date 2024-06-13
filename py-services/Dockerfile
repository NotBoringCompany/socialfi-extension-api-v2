# py-services/Dockerfile
FROM python:3.8-slim

WORKDIR /usr/src/app/py-services

COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8000"]