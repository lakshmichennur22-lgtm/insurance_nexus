#!/bin/bash

### --- Java --- ###
echo "Checking Java..."
if command -v java >/dev/null 2>&1; then
    echo "Java already installed."
    java -version
else
    echo "Java not found. Installing OpenJDK 17..."
    sudo apt update -y
    sudo apt install -y openjdk-17-jdk
    echo "Java installation completed."
fi


### --- Node.js --- ###
echo "Checking Node.js..."
if command -v node >/dev/null 2>&1; then
    echo "Node.js already installed."
    node -v
else
    echo "Node.js not found. Installing Node.js..."
    sudo apt update -y
    sudo apt install -y nodejs npm
    echo "Node.js installation completed."
fi


### --- Maven --- ###
echo "Checking Maven..."
if command -v mvn >/dev/null 2>&1; then
    echo "Maven already installed."
    mvn -v
else
    echo "Maven not found. Installing Maven..."
    sudo apt update -y
    sudo apt install -y maven
    echo "Maven installation completed."
fi


### --- Python3 --- ###
echo "Checking Python3..."
if command -v python3 >/dev/null 2>&1; then
    echo "Python3 already installed."
    python3 --version
else
    echo "Python3 not found. Installing Python3..."
    sudo apt update -y
    sudo apt install -y python3 python3-pip
    echo "Python3 installation completed."
fi

echo "---------------------------------------"
echo "All installations completed successfully."
echo "---------------------------------------"