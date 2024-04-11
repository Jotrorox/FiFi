<h1 align="center">FiFi</h1>

<p align="center">
  <img src="https://img.shields.io/github/languages/top/jotrorox/fifi?style=flat-square" alt="GitHub Top Language Badge">
  <img src="https://img.shields.io/github/languages/count/jotrorox/fifi?style=flat-square" alt="GitHub Language Count Badge">
  <img src="https://img.shields.io/github/repo-size/jotrorox/fifi?style=flat-square" alt="GitHub Repository Size Badge">
  <img src="https://img.shields.io/github/license/jotrorox/fifi?style=flat-square" alt="GitHub License Badge">
  <img src="https://img.shields.io/github/issues/jotrorox/fifi?style=flat-square" alt="GitHub Issues Badge">
  <img src="https://img.shields.io/github/stars/jotrorox/fifi?style=flat-square" alt="GitHub Stars Badge">
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

:heavy_check_mark: Slash Commands\
:heavy_check_mark: Streaming LoFi\
:heavy_multiplication_x: XP System\
:heavy_check_mark: Simpler Docker Deploy

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

# Add the bot Token to env on Windows
$ set DISCORD_TOKEN=<yourDiscordToken>
# Add the bot Token to env on Linux/macOS
$ export DISCORD_TOKEN=<yourDiscordToken>

# Add the Music
# Put all the mp3 Files into the rsc folder

# Run the project
$ npm run dev
```

**If you encounter Problems just hit me up, I'm happy to help you get started**\
**You can do that over matrix: @jotrorox:matrix.org or Discord: https://discord.gg/RVr4cceFUt** 

## :dash: Getting Started with Docker ##

I will explain the Docker way here so please ensure you have Docker installed!
```bash
# Pull the project
$ docker pull jotrorox/fifi

# Start the bot
$ docker run -e DISCORD_TOKEN=<yourDiscordToken> jotrorox/fifi
```

## :memo: License ##

This project is under the MIT License. For more details, see the [LICENSE](LICENSE) file.


Made with :heart: by <a href="https://github.com/jotrorox" target="_blank">Jotrorox</a>

&#xa0;

<a href="#top">Back to top</a>
