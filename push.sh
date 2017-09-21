#!/bin/bash
git add .
if [ "$1" ]; then
  git commit -m "$1"
else
  echo -n "Enter commit description: "
  read message
  git commit -m "$message"
fi
git push origin master
