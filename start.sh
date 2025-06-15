#!/bin/bash

# Function to check and kill process on port
kill_port() {
    local port=$1
    if lsof -i :$port | grep LISTEN; then
        echo "Killing process on port $port..."
        lsof -i :$port | grep LISTEN | awk '{print $2}' | xargs -r kill -9
        sleep 2
    fi
}

# Function to start web app
start_web() {
    echo "Starting web application..."
    kill_port 8000
    cd /project/sandbox/user-workspace
    npm install
    npm run dev
}

# Function to start mobile app
start_mobile() {
    echo "Starting mobile application..."
    cd /project/sandbox/user-workspace/mobile
    npm install
    npm start
}

# Main script
case "$1" in
    "mobile")
        start_mobile
        ;;
    *)
        start_web
        ;;
esac
