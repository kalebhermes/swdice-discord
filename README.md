# swdice-discord

## Step 1: Create your App

First thing's first. You're going to need to create a Discord app. The app allows creation of a Bot, which can make calls to the Discord API. 

Visit the [discordapp.com App Page](https://discordapp.com/developers/applications/me). You'll need to be logged in. Click **New Application**. You'll need to enter a name for your application. This will also be the bot's username in Discord, so choose wisely. You can add a description if you'd like, but it's not necessary. 

Ignore the **Redirect URI(s)**. This bot doens't make use of this field.

## Step 2: Create your Bot and add it to your Server

Now that you've created an app, you can create a Bot for that app. Click **Create a Bot User** followed by **Yes, Do it.**. You should now see your Bot listed. You can now log your Bot into your Discord Server. In order to add a Bot to your server, you'll need Manage Server permissions for your server. This is the only way to add a Bot, it cannot use invite links.

Copy the link below, but before you visit the page, replace **APP_ID** with your Discord App's Application ID. This is found in the upper right corner of the page. You'll be taken to a page with a dropdown listing all of the Server's that you have Manage Server permissions for. Pick the one you'd like and click ~~**Connect**~~

https://discordapp.com/oauth2/authorize?client_id=APP_ID&scope=bot

## Step 3: Clone code and install dependencies. 

This part may seem daunting if you don't have any experience with code, but I promise, it's not hard! This application uses a framework called [Discord.js](), and required Node.js to run. Visit the [Node.js download page](https://nodejs.org/en/download/) and download the correct version for your OS. You can verify that it was installed correctly by opening a terminal window and typing

> node --version

You should see the version number printed as a reply to your command. If you recieve and error, Node wasn't installed correctly. 

Now that you've installed the correct depencenty, you can install the dependencies that our Bot required. Open a terminal window and navigate to the directory. Once there, run the command

>npm install

You should now be ready to run your Bot. You'll need to copy your Bot's Token and paste it at the bottom of our code. Place your Bot's token between the quotes.

>client.login("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"); 
