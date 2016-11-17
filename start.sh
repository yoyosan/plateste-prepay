#!/bin/bash

export tmuxsessionname='webdriver-manager'

tmux new -d -s $tmuxsessionname
tmux send -t $tmuxsessionname "webdriver-manager start" ENTER
