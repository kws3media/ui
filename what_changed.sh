#!/usr/bin/env bash
if [ "$1" ]; then
  pkg_version="$1"
else
  package_path="./packages/@kws3/ui/package.json";
  pkg_version="$(node -p "require('$package_path').version")"
fi

if [ "$2" ]; then
  _head="$2"
  _head="@kws3/ui@${_head}"
else
  _head="HEAD"
fi

latest_tag="@kws3/ui@${pkg_version}"
# git log $latest_tag..HEAD  --oneline
git log $latest_tag..$_head  --oneline  --stat --pretty=format:"%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset" --abbrev-commit  -- packages/@kws3/ui/*