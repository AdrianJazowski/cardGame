<!-- @format -->

# Card Game

## Overview:

Implementation include the following functionality:

- All the cards for the player and dealer are visualized and the game functions as per rules.
- During the game the hands from every round and their result is saved and displayed in ‘Round History’.
- The game can be saved and loaded at any time.
- The game ranking is stored locally and can be viewed at any time
- The game can be reset at any time.

## Intruction

- Get Decks - gets decks from api - necessary at the beginning before the game starts
- Play - starts the round and draws cards for the dealer and the player
- bid - gets used for betting
- dobule down - based on the amount transferred to the bid, it can double the bet
- hit - takes a card from the deck
- state - ends the turn and should start the dealer's turn
- restart - restore the game to its initial settings

## Main Tech stack:

- React.js,
- Redux

## Getting started:

These instructions will get you a copy of the project up and running on your local machine.

## Installing:

First of all clone the repository to your local machine.

Check if you have node and npm installed.
Run these commands in your terminal:

### node -v

### npm -v

If you don't have, just go to https://nodejs.org/en/ and install right version.

After installation check if you have node_modules in your file structure.

If not, run this command in your terminal :

### npm install

Last you need to run the project by command:

### npm start

Brwoser will automatically open on eg. localhost:3000
