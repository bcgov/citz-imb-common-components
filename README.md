![Lifecycle:Experimental](https://img.shields.io/badge/Lifecycle-Experimental-339999)
[![](https://github.com/jpoehnelt/in-solidarity-bot/raw/main/static//badge-flat.png)](https://github.com/apps/in-solidarity)
![GitHub](https://img.shields.io/github/license/bcgov/citz-imb)

# CITZ IMB Monorepo

## Applications

- Software Licences and Application Management (SLAM) tool

## How to Contribute

Please note that this project is released with a [Contributor Code of Conduct](Code_of_Conduct.md). By participating in this project you agree to abide by its terms.

### Smart Com mits

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

Temp - Git test