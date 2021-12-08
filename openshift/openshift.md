oc apply -f _filename_

oc get svc
oc expose svc _servicename_

# OpenShift Configurations
These are manual deployments that should only need to be done one-time.
## namespaces
each namespace
```
oc apply -f allow-http-and-https.yml
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