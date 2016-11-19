#!/bin/bash

export tmuxsessionname='webdriver-manager'

tmux kill-session -t $tmuxsessionname
