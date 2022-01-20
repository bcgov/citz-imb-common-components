# OpenShift Configurations
These are manual deployments that should only need to be done one-time, or when updated.
## namespaces
each namespace
```
oc replace -f network-policies.yml
oc replace -f deploy-api.yml
```
## database
### pgadmin
tools namespace only
```
oc replace -f pgadmin-deploy.yml
```
### postgresql
dev, test, and prod namespaces
```
oc replace -f postgres-deploy.yml
```