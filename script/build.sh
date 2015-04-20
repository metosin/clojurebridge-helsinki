#!/bin/bash


lein prod
cp -r ./resources/static/* gh-pages
