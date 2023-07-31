# Git Branch, Commit & Label Standards

<details>
  <summary>TL/DR</summary>
  
### Branch Name

``` Boo
Format: <jira_project_abbreviation>-<ticket_number> OR <jira_project_abbreviation>-<ticket_number>-<short_summary>
// Example: ccom-153 OR ccom-153-comment-endpoint
```

### Commit Summary

``` Boo
Format: <summary> <topics>
// Example: Added comment auth, fix typo #feature #fix
```
> [!NOTE]
> _50 characters or less._  
> _Use only #feature #fix or #BREAKING topics._

> [!IMPORTANT]
> Add the [GitHub Labels](github-issue/pull-request-labels) to your repo.

<br />

</details>

## Table of Contents

- [Git Branch Names](#git-branch-names) - Naming convension.
- [Git Commit Summaries](#git-commit-summaries) - Formatting and labels.
- [GitHub Issue/Pull Request Labels](github-issue/pull-request-labels) - Accepted GitHub labels.

<br />

***

## Git Branch Names
Follow this convention when naming your branches.  
The first format is required, but the second format is acceptable as it may improve readability.

``` Boo
Required Format: <jira_project_abbreviation>-<ticket_number>
// Example: ccom-153
```
``` Boo
Accepted Alternative Format: <jira_project_abbreviation>-<ticket_number>-<short_summary>
// Example: ccom-153-comment-endpoint
```

> [!NOTE]
> **Use case for alternative format**: _More easily identifiable branch name, such as when looking through a list of branches._

<br />

***

## Git Commit Summaries
Follow this convention when summarizing your commits.  
The goal of the `summary` is to be short and descriptive.  
The goal of the `topic` is to give context to [GitHub Workflows] so they can label pull requests.

``` Boo
Required Format: <summary> <topics>
// Examples:
// 1. Added boilerplate comment module #feature
// 2. Added env vars #BREAKING
// 3. Added comment POST endpoint #feature
// 4. Added comment GET endpoint #feature
// 5. Added comment auth, fix typo #feature #fix
```
> [!NOTE]
> _Entire message must be 50 characters or less._  
> _Topics must start with # symbol._  
> _Can have multiple topics, seperated by spaces._
> _Use only the accepted topics from below._

### Accepted Topics

Topic | Description
--- | --- |
`#feature` | Introduces new functionality.
`#fix` | Resolves a bug, issue, typo, or security vulnerability.
`#BREAKING` | An env var was changed and requires extra attention from developers. Alternatively, for packages, means a breaking change was added that would require users of the package to make changes to their code.

<br />

***

## GitHub Issue/Pull Request Labels
Add these labels to your GitHub repo, see [creating labels].  
The goal with these was to be short and concise so developers can get context of a pull request at a glance.

Label | Suggested Color | Description
--- | --- | --- |
`Feature` | ![#12D294](https://placehold.co/10x10/12D294/12D294.png) `#12D294` | Introduces new functionality.
`Fix` | ![#EC24E2](https://placehold.co/10x10/EC24E2/EC24E2.png) `#EC24E2` | Resolves a bug, issue, typo, or security vulnerability.
`BREAKING` | ![#B60205](https://placehold.co/10x10/B60205/B60205.png) `#B60205` | An env var was changed and requires extra attention from developers. Alternatively, for packages, means a breaking change was added that would require users of the package to make changes to their code.
`Dependency` | ![#FBCA04](https://placehold.co/10x10/FBCA04/FBCA04.png) `#FBCA04` | Additions or changes to version of a dependency (based on changes to package.json or similar).
`Tests` | ![#5319E7](https://placehold.co/10x10/5319E7/5319E7.png) `#5319E7` | Additions or changes to test files (such as *.test.ts or *.spec.ts).
`Docs` | ![#C5DEf5](https://placehold.co/10x10/c5def5/c5def5.png) `#C5DEf5` | Additions or changes to documentation (based on changes to docs/ directory or *.md files).
`UI` | ![#EFC89B](https://placehold.co/10x10/EFC89B/EFC89B.png) `#EFC89B` | Additions or changes to style sheet files or similar.
`CONFIG` | ![#EFC89B](https://placehold.co/10x10/EFC89B/EFC89B.png) `#EFC89B` | Additions or changes to .env template files and config files such as eslint and prettier.
`Docker` | ![#21364B](https://placehold.co/10x10/21364B/21364B.png) `#21364B` | Additions or changes to Dockerfiles or docker compose.
`OpenShift` | ![#EBC65D](https://placehold.co/10x10/EBC65D/EBC65D.png) `#EBC65D` | Additions or changes to files within openshift/ directory.
`GitHub` | ![#FCCAA1](https://placehold.co/10x10/FCCAA1/FCCAA1.png) `#FCCAA1` | Additions or changes to files within .github/ directory.
`App` | ![#B95EF2](https://placehold.co/10x10/B95EF2/B95EF2.png) `#B95EF2` | Additions or changes to files within frontend/client directory.
`API` | ![#1D76DB](https://placehold.co/10x10/1D76DB/1D76DB.png) `#1D76DB` | Additions or changes to files within backend/server directory.
`DB` | ![#528017](https://placehold.co/10x10/528017/528017.png) `#528017` | Additions or changes to files associated with a database or database integration (such as entities, repositories, services, and migrations when using Typeorm).

<br />

***
[Return to Top](#git-branch,-commit-&-label-standards)

<!-- Link References -->
[GitHub Workflows]: https://docs.github.com/en/actions/using-workflows/about-workflows  
[creating labels]: https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels#creating-a-label
