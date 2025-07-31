#!/bin/bash
cd /home/kavia/workspace/code-generation/smart-light-control-system-142411/bluetooth_light_backend
npm run lint
LINT_EXIT_CODE=$?
if [ $LINT_EXIT_CODE -ne 0 ]; then
  exit 1
fi

