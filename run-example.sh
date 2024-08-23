#!/bin/bash

if [ -z "$EXAMPLE" ]; then
  echo "EXAMPLE environment variable is not set"
  exit 1
fi

set -x
echo $EXAMPLE
cd ./frameworks/$EXAMPLE
pwd
./run.sh