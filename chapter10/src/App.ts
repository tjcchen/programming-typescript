namespace App {
  type GitRepo = {};

  Network.get<GitRepo>('https://api.github.com/repos/Microsoft/typescript');
}