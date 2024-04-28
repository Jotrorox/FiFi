{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs
    pkgs.javascript-typescript-langserver
  ];

  shellHook = ''
    npm i
  '';
}
