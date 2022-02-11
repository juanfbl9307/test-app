#!/bin/sh
docker build --tag juanfbl93/app_one ./app_one/.
docker build --tag juanfbl93/app_two ./app_two/.
docker push juanfbl93/app_one
docker push juanfbl93/app_two
