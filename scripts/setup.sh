#!/bin/bash
# Setup script for SIEM Dashboard

echo "Starting environment setup...."

# Update and install Node.js
echo "Checking Node.js..."
if ! command -v node &> /dev/null
then
    echo "Node.js is not installed. Installing..."
    curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
    sudo apt-get install -y nodejs
else
    echo "Node.js is already installed!"
fi

# Install project dependencies
echo "Installing project dependencies..."
npm install

echo "Setup complete!"
