#!/usr/bin/env bash
package_path="./packages/@kws3/ui/package.json";
pkg_version="$(node -p "require('$package_path').version")"
latest_tag="@kws3/ui@${pkg_version}"
# git log $latest_tag..HEAD  --oneline
git log $latest_tag..HEAD  --oneline --graph --pretty=format:"%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset" --abbrev-commit  -- packages/@kws3/ui/*