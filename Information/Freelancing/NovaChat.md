# NovaChat

Anonymous **random 1:1 chat** with email/password accounts, built as a single deployable Flask app.

## What this is

NovaChat is a lightweight “meet someone new” chat experience:

- Create an account (email + password)
- Click **Find match** to get paired with a random online user
- Chat in real time (Socket.IO / WebSockets)
- Delete your own messages, clear the room, or leave and rematch

## Responsible use / safety notice

This project is intended for **educational and legitimate use**. If you deploy it publicly:

- **Age gate**: restrict access to adults (18+) if your jurisdiction requires it.
- **Moderation**: add reporting/blocking and rate limits before public launch.
- **No guarantees**: random chat can expose users to harmful content; deploy responsibly.
- **Privacy**: do not log sensitive content; protect credentials; rotate secrets if leaked.

## Tech stack

- **Backend**: Flask + Flask‑SocketIO
- **Auth**: Flask‑Login (session cookies), password hashing via Werkzeug
- **DB**: SQLAlchemy (SQLite locally, Postgres on Render via `DATABASE_URL`)
- **Frontend**: TailwindCSS (CDN) + vanilla JS in `templates/index.html`

## Features

- **Email/password authentication** (register, login, logout)
- **Random matching queue** (private 1:1 room)
- **Realtime messaging** with typing indicator
- **Message timestamps**
- **Delete your messages**
- **Clear chat history** for the room
- **Presence**: online user count + session duration

## Local development

```bash
cd d:\Freelancing\lets-chat-main\lets-chat-main
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

Open `http://127.0.0.1:5000`.

## Deploy on Render

### Create services

- Create a **PostgreSQL** database in Render (recommended).
- Create a **Web Service** (Python runtime) from your GitHub repo.

### Environment variables (Render → Web Service → Environment)

- **`SECRET_KEY`**: a long random string
- **`DATABASE_URL`**: Render Postgres internal URL
- **`SOCKETIO_ASYNC_MODE`**: `gevent`

### Build + start

- **Build Command**

```bash
pip install -r requirements.txt
```

- **Start Command**

```bash
gunicorn -k geventwebsocket.gunicorn.workers.GeventWebSocketWorker -w 1 -b 0.0.0.0:$PORT app:app
```

## Repository hygiene

- Secrets are ignored via `.gitignore` (`.env`, keys, credentials, etc.).
- Generated reports (docx/pdf) are ignored.
