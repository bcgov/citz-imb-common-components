# OpenShift Configurations
These are manual deployments that should only need to be done one-time, or when updated.
## namespaces
each namespace
```
oc apply -f network-policies.yml
```
## database
### pgadmin
tools namespace only
```
oc apply -f pgadmin-deploy.yml
```
### postgresql
dev, test, and prod namespaces
```
oc apply -f postgres-deploy.yml
```