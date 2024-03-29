<!--
<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="FiFi" />

  &#xa0;
</div>
-->

<h1 align="center">Deki Helper</h1>

<p align="center">

  ![GitHub](https://img.shields.io/github/languages/top/jotrorox/fifi?style=flat-square)
  ![GitHub](https://img.shields.io/github/languages/count/jotrorox/fifi?style=flat-square)
  ![GitHub](https://img.shields.io/github/repo-size/jotrorox/fifi?style=flat-square)
  ![GitHub](https://img.shields.io/github/license/jotrorox/fifi?style=flat-square)
  ![GitHub](https://img.shields.io/github/issues/jotrorox/fifi?style=flat-square)
  ![GitHub](https://img.shields.io/github/stars/jotrorox/fifi?style=flat-square)
</p>

<!-- Status -->

<h4 align="center"> 
	🚧  FiFi 🚀 Under construction...  🚧
</h4> 

<hr>

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#dash-getting-started">Getting Started</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/jotrorox" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

Just a simple Discord Bot that provides a simple music bot.\
If you want to just use the bot, already hosted and configured click the <a href="https://discord.com/oauth2/authorize?client_id=1222674134744694885&permissions=36700160&scope=bot+applications.commands" target="_blank">Link</a>!

## :sparkles: Features ##

:heavy_check_mark: Slash Commands;\
:heavy_check_mark: Playing local LoFi music;\
:heavy_multiplication_x: Config using a toml file;\
:heavy_multiplication_x: Streaming LoFi;\
:heavy_multiplication_x: XP System;\
:heavy_multiplication_x: Simpler Docker Deploy;

## :rocket: Technologies ##

The following tools were used in this project:

- [NodeJS](https://nodejs.org/en)
- [DiscordJS](https://discord.js.org/)
- [Docker](https://www.docker.com/)


## :white_check_mark: Development Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com), [FFMPEG](https://ffmpeg.org/) and [NodeJS](https://nodejs.org/en) installed.

## :checkered_flag: Starting (Development Setup) ##

```bash
# Clone this project
$ git clone https://github.com/Jotrorox/FiFi

# Access
$ cd FiFi

# Install dependencies
$ npm install

# Add the bot Token
$ mv .env.example .env
$ nano .env

# Add the Music
# Put all the mp3 Files into the rsc folder

# Run the project
$ npm run dev
```

**If you encounter Problems just hit me up, I'm happy to help you get started**\
**You can do that over matrix: @jotrorox:matrix.org or Discord: https://discord.gg/Z7ADkZ9H** 

## :dash: Getting Started with Hosting ##

I will explain the Docker way here so please ensure you have Docker and Docker-Compose installed!
```bash
# Clone this project
$ git clone https://github.com/Jotrorox/FiFi

# Access
$ cd FiFi

# Add the Music
# Put all the mp3 Files into the rsc folder

# set the botToken
$ mv .env.example .env
$ nano .env

# Start the bot
$ docker compose up
```

## :memo: License ##

This project is under the MIT License. For more details, see the [LICENSE](LICENSE) file.


Made with :heart: by <a href="https://github.com/jotrorox" target="_blank">Jotrorox</a>

&#xa0;

<a href="#top">Back to top</a>
