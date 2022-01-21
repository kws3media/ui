#!/usr/bin/env bash

pretty_format=""
pkg_version=""
head_pointer="HEAD"

if [ "$1" ]; then
  pkg_version="$1"
else
  package_path="./packages/@kws3/ui/package.json";
  pkg_version="$(node -p "require('$package_path').version")"
fi

if [ "$2" ]; then
  head_pointer="$2"
  head_pointer="@kws3/ui@${head_pointer}"
fi

latest_tag="@kws3/ui@${pkg_version}"

if [ -t 1 ] ; then
  git log $latest_tag..$head_pointer  --oneline  --stat --pretty=format:"%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset" --abbrev-commit  -- packages/@kws3/ui/*
else
  git log $latest_tag..$head_pointer  --oneline  --stat --abbrev-commit  -- packages/@kws3/ui/*
fi
