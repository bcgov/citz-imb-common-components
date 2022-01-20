![Lifecycle:Experimental](https://img.shields.io/badge/Lifecycle-Experimental-339999)
[![](https://github.com/jpoehnelt/in-solidarity-bot/raw/main/static//badge-flat.png)](https://github.com/apps/in-solidarity)
![GitHub](https://img.shields.io/github/license/bcgov/citz-imb)

# CITZ IMB Monorepo

## Applications and their projects

- Software Licences and Application Management (SLAM) tool
  - SLAM-APP
  - SLAM-API

## How to Contribute

Please note that this project is released with a [Contributor Code of Conduct](Code_of_Conduct.md). By participating in this project you agree to abide by its terms.

### Smart Commits

This repo is connected to our on-premise JIRA server and utilizes the [Smart Commits](https://bigbrassband.com/git-integration-for-jira/documentation/smart-commits.html) functionality to update tickets.

Commits must start with the ticket number and may have the following actions (multiples ok):
- #comment
- #assign
- #label
- transition:
  - #selected-for-dev
  - #in-progress
  - #ready-for-review
  - #done
  - #cancelled

### Devcontainers
[Developing inside a Container](https://code.visualstudio.com/docs/remote/containers)
 1. install [Docker for Desktop](https://www.docker.com/products/docker-desktop)
 2. install [VSCode](https://code.visualstudio.com/Download)
 3. install remote-containers extension
 4. clone repo locally
 5. open in vscode
 6. when prompted, install the recommended extensions
 7. when prompted, Reopen in Container.  May take quite a while the first time for the image to build

 The image will be built, with a volume pointing to your source code.  It will do an npm install and then start serving all projects

 ### CICD Pipeline
 Commits and Pull Requests to the Main branch trigger the CICD pipeline.  The Pipeline will build the image, run tests, and deploy to prod.  If the commit contains the __#label release__ smart commit tag, it will then deploy to test environment.  After User Acceptance Testing is approved, it will then deploy to production.  Deployment to both test and prod trigger a notification in our Teams workspace.