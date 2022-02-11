#!/bin/sh
##docker images build##
docker build --tag juanfbl93/app_one ./app_one/.
docker build --tag juanfbl93/app_two ./app_two/.
##docker images push##
docker push juanfbl93/app_one
docker push juanfbl93/app_two
##kubernetes##
kubectl apply -f applications-deployment.yaml
kubectl apply -f kong-ingress.yaml
kubectl apply -f kong-consumers.yaml