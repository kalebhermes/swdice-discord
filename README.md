# swdice-discord

##TL;DR

1. [Create a Discord Application](https://discordapp.com/developers/applications/me)
2. Create a Discord Bot
3. Add Bot to Server
4. [Clone code and install Node](https://nodejs.org/en/download/)
5. Add emoji to Server
6. Update emoji ID's 
7. Run bot

## Step 1: Create your App

First thing's first. You're going to need to create a Discord app. The app allows creation of a Bot, which can make calls to the Discord API. 

![Create App Window](https://raw.githubusercontent.com/kalebhermes/swdice-discord/7a44da7ee713b22c2fe5baf2c456116ed6ab095a/img/readme/new-app-window.png)

Visit the [discordapp.com App Page](https://discordapp.com/developers/applications/me). You'll need to be logged in. Click **New Application**. You'll need to enter a name for your application. This will also be the bot's username in Discord, so choose wisely. You can add a description if you'd like, but it's not necessary. 

![Application Window](https://raw.githubusercontent.com/kalebhermes/swdice-discord/7a44da7ee713b22c2fe5baf2c456116ed6ab095a/img/readme/app-window.png)

Ignore the **Redirect URI(s)**. This bot doens't make use of this field.

## Step 2: Create your Bot and add it to your Server

Now that you've created an app, you can create a Bot for that app. Click **Create a Bot User** followed by **Yes, Do it.**.

![Bot Window](https://raw.githubusercontent.com/kalebhermes/swdice-discord/7a44da7ee713b22c2fe5baf2c456116ed6ab095a/img/readme/bot-window.png)

You should now see your Bot listed. You can now log your Bot into your Discord Server. In order to add a Bot to your server, you'll need Manage Server permissions for your server. This is the only way to add a Bot, it cannot use invite links.

Copy the link below, but before you visit the page, replace **APP_ID** with your Discord App's Client ID. This is found in the upper left corner of the page. You'll be taken to a page with a dropdown listing all of the Servers that you have Manage Server permissions for. Pick the one you'd like and click ~~**Connect**~~

https://discordapp.com/oauth2/authorize?client_id=APP_ID&scope=bot

## Step 3: Clone code and install dependencies. 

This part may seem daunting if you don't have any experience with code, but I promise, it's not hard! This application uses a framework called [Discord.js](), and required Node.js to run. Visit the [Node.js download page](https://nodejs.org/en/download/) and download the correct version for your OS. You can verify that it was installed correctly by opening a terminal window and typing

> node --version

You should see the version number printed as a reply to your command. If you recieve and error, Node wasn't installed correctly. 

Now that you've installed the correct depencenty, you can install the dependencies that our Bot required. Open a terminal window and navigate to the directory. Once there, run the command

>npm install

A lot of text will scroll by but once everthing finshes, you should be ready to run your Bot. You'll need to copy your Bot's Token and paste it at the bottom of our code. Place your Bot's token between the quotes.

![Client Login](https://raw.githubusercontent.com/kalebhermes/swdice-discord/7a44da7ee713b22c2fe5baf2c456116ed6ab095a/img/readme/client-login.png)

## Step 4: Add emoji to Server

There's one last thing we need to do before running our bot. You'll now need to add the die logos and the die faces to the Server's emoji list. You can do this by opening Server Settings in Discord and navigating to the **emoji** tab. 

![Emoji Tab](https://raw.githubusercontent.com/kalebhermes/swdice-discord/7a44da7ee713b22c2fe5baf2c456116ed6ab095a/img/readme/emoji-window.png)

Click **Add emoji** in the upper right, and navigate to the *img* folder included with the code. There are two folders, *dice emoji* and *icon emoji*. Add each image, the names are already correct. You should now be able to type :emoji-name: into any chat channel in the server and it will be replaced with the correct image. This will be used later by the bot to disply the dice and their results. 

## Step 5: Run Bot

Ensure you're in our code's directory and run the following command

> node sw-dice.js

You should see the Bot reply with the following in the terminal

> I am ready!

![Terminal Command and Reply](https://raw.githubusercontent.com/kalebhermes/swdice-discord/7a44da7ee713b22c2fe5baf2c456116ed6ab095a/img/readme/terminal-command-reply.png)

You'll now notice that the bot is listed as a user in the sidebar, and should be logged in. Try giving it a roll command like

> /roll 2g 2p

You should see the Bot reply to you with the results of the dice roll. 

![Results and Sidebar](https://raw.githubusercontent.com/kalebhermes/swdice-discord/7a44da7ee713b22c2fe5baf2c456116ed6ab095a/img/readme/results.png)
