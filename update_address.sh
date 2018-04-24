#!/bin/bash

if [ $# -ne 2 ]; then
   echo "Usage: ./update_address.sh <old address> <new address>"
   exit 0
fi

grep -Rl --exclude=README.md --exclude-dir=node_modules $1 | xargs sed -i "s/$1/$2/g"
