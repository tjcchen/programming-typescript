namespace App {
  type GitRepo = {};

  Network.get<GitRepo>('https://api.github.com/repos/Microsoft/typescript');

  Network.HTTP.get('GET');

  Network.TCP.listenOn;

  Network.Connection;
}