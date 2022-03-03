FROM python:3.8
RUN mkdir -p /usr/src/app/server
WORKDIR /usr/src/app/server
COPY requirements.txt .
RUN pip install --upgrade pip --no-cache-dir -r requirements.txt
COPY . .
CMD ["python", "client.py"]
