# **Star Wars Dice Discord Bot**

Do you play Fantasy Flight's Star Wars RPG using Discord? Then this bot is for you! This bot responds to a user's chat command with a dice pool and the net total of that pool, using custom emoji to display your requested dice roll. This bot requires very little 'coding' knowledge to setup, and is incredibly easy to get running and use. You can follow the steps below, or jump right to the [TL;DR](https://github.com/kalebhermes/swdice-discord/blob/kalebhermes-readme/README.md#tldr) if you're comfortable with Node and Discord Bots. 

![Dice](https://github.com/kalebhermes/swdice-discord/blob/kalebhermes-readme/img/readme/title-image.png?raw=true)

# Step 1: Create your App

To start, you're going to need to create a Discord application. The application allows creation of a Bot, which can make calls to the Discord API. Visit the [discordapp.com App Page](https://discordapp.com/developers/applications/me) and log into your Discord account. Click **New Application**. You'll need to enter a name for your application. This will also be the bot's username in Discord, so choose wisely. You can add a description if you'd like, but it's not necessary. 

![Create App Window](https://raw.githubusercontent.com/kalebhermes/swdice-discord/7a44da7ee713b22c2fe5baf2c456116ed6ab095a/img/readme/new-app-window.png)

Ignore the **Redirect URI(s)**. This bot doesn't make use of this field. While you're here, you can upload an icon image. I've included an image at */extras/icon.png* that meets the requirements, but you're free to create your own, or leave it blank. This is purely aesthetic. You should see the following screenshot after your application is created!


![Application Window](https://raw.githubusercontent.com/kalebhermes/swdice-discord/7a44da7ee713b22c2fe5baf2c456116ed6ab095a/img/readme/app-window.png)



# Step 2: Create your Bot and add it to your Server

Now that you've created an application, we're going to create a Bot for that application. Click **Create a Bot User** followed by **Yes, Do it.**.

![Bot Window](https://raw.githubusercontent.com/kalebhermes/swdice-discord/7a44da7ee713b22c2fe5baf2c456116ed6ab095a/img/readme/bot-window.png)

You should now see your Bot listed like in the screenshot above. You can now add your Bot as a user in Discord Server. In order to add a Bot to your server, you'll need Manage Server permissions for your server. The following steps are the only way to add a Bot to a server, as Bot's can't user invite links.

> 1. Find your Discord App's **Client ID** in the upper left corner of the *APP DETAILS* section on the Discord Developer Dashboard.
> 2. Replace **APP_ID** in following URL with your **Client ID** --> https://discordapp.com/oauth2/authorize?client_id=APP_ID&scope=bot
> 3. Visit that URL, you'll be presented a dropdown with all of the server's you have Manage Server Permissions for. See screenshot below. 
> 4. Pick the server you want to add your Bot to. Click ~~**Connect**~~.
> 5. Your Bot should now be listed in the *Offline Users* section in the user list of your Discord server. 

### Add Screenshot of Connect Bot Screen. 

# Step 3: Clone code and install dependencies. 

First, the easy part. Download the Bot's code [here]() or clone the code using git. If you downloaded the code, unzip the folder.

#### Add Link for Downloading Code

Next we need to install Node. This part may seem daunting if you don't have any 'coding' experience, but I promise, it's not hard! This application uses a node framework called [Discord.js](https://discord.js.org/), and requires Node.js to run. You can download Node from the following. 

> 1. Visit the [Node.js download page](https://nodejs.org/en/download/) to find all versions of Node.
> 2. Click [here for a Windows installer](https://nodejs.org/dist/v6.9.5/node-v6.9.5-x86.msi)
> 3. Click [here for Mac installer](https://nodejs.org/dist/v6.9.5/node-v6.9.5.pkg)

After the download finishes, and you've run the package, you can open a terminal window, *Terminal.app* on Mac, or *Command Prompt* on Windows and type the command **node --version**. You should see the version of Node you've installed printed in the window. If you don't, you haven't properly installed Node. See [here](https://docs.npmjs.com/getting-started/installing-node) for more info on installing Node. 

Now that you've installed Node, you can install the dependencies that our Bot requires. Open a terminal window and navigate to the directory where you've cloned our code. Once there, run the command

>npm install

A lot of text will scroll by while the code's dependencies are installed.

# Step 4: Add emoji to Server

Before running our bot, we're going to add the icons for the dice and their symbols to our server's emoji list. You can do this by opening **Server Settings** in Discord and navigating to the **emoji** tab. 

![Emoji Tab](https://raw.githubusercontent.com/kalebhermes/swdice-discord/7a44da7ee713b22c2fe5baf2c456116ed6ab095a/img/readme/emoji-window.png)

Click **Add emoji** in the upper right, and navigate to the *img* folder included with the code. There are two folders, *dice emoji* and *icon emoji*. Add each image without changing the prefilled names. You should now be able to type :emoji-name: into any chat channel on your server and it will be replaced with the correct image. This will be used later by the bot to display the dice and their results. 

>Ex: :success: should be replaced with the Success icon. 

# step 5: Update *staticValues.js*

Our code has variables that are different for everyone that runs this Bot. We keep those values in *staticValues.js*. To get that setup, follow the steps below. 

> 1. Rename *staticValues.example.js* to *staticValues.js*. 
> 2. Find your Bot's Token in the Discord Developer Dashboard. It can be found in the **APP BOT USER** box in the middle of the page. You'll need to **click to reveal** your Bot token. **NOTE: Keep this secret. Anyone that has this token can use it to manipulate your servers!**
> 3. Paste your Bot Token in *staticValues.js* between the quotes associated with **botToken**.

We're also going to need to fill in the emoji ID's for each of the emoji we added. This part can be a little tedious, but you only need to do it once. To do this, follow the steps below.

> 1. Open Discord, and type \:success: in the window.
> 2. Copy the 18 numbers that are in the chat window. 
> 3. Use those numbers to replace the xxxxxxxxxxxxxxxxxx in the line *'Success': '<:success:xxxxxxxxxxxxxxxxxx>'*.
> 4. Do this for each of the remaining die faces, as well as each of the dice emoji.

# Step 6: Run Bot

Open a *Terminal* or *Command Prompt* window, ensure you're in our code's directory and run the following command

> node sw-dice.js

You should see the Bot reply with the following in the window

> I am ready!

![Terminal Command and Reply](https://raw.githubusercontent.com/kalebhermes/swdice-discord/7a44da7ee713b22c2fe5baf2c456116ed6ab095a/img/readme/terminal-command-reply.png)

You'll now notice that the bot is listed as *Online* in the sidebar. Try giving it a roll command like

> /roll 2g 2p

You should see the Bot reply to you with the results of the dice roll. 

![Results and Sidebar](https://raw.githubusercontent.com/kalebhermes/swdice-discord/7a44da7ee713b22c2fe5baf2c456116ed6ab095a/img/readme/results.png)

# Usage

Now that you've got the Bot installed and running, you can use it in the following ways.

> * /roll and /r are both valid initiators. 
> * Start with a number, representing the number of dice you want to roll, followed by a letter, representing the type of die you want to roll.
> * Use y, g, b, r, p, k and f to represent the dice.
>     * y for Yellow Die
>     * g for Green Die
>     * b for Blue Die
>     * r for Red Die
>     * p for Purple Die
>     * k for Black Die
>     * f for White or Force Die
> * /roll 1y 2g 2p would roll 1 Yellow Die, 2 Green Dice and 2 Purple Dice. 
> * /r 2g 1r 1b 1k would roll 2 Green Dice, 1 Red Die, 1 Blue Die and 1 Black Die. 
> * /roll 2f would roll 2 White or Force Dice. 


# TL;DR

1. [Create a Discord Application](https://discordapp.com/developers/applications/me)
2. Create a Discord Bot
3. Add Bot to Server
4. [Clone code and install Node](https://nodejs.org/en/download/), run npm install to install dependencies.
5. Add emoji to Server.
6. Update *staticValues.js* with Bot Token and emoji IDs
7. Run bot



