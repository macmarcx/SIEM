#!/bin/bash
# Update script for SIEM Dashboard

echo "Updating project dependencies..."

npm update
npm cache clean --force

echo "Dependencies updated successfully!"
