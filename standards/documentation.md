# Documentation Standards

<details>
  <summary>TL/DR</summary>
  
When starting a project, set up a basic README and Wiki. The README serves as a landing page, linking to the Wiki and standards documents. Additional READMEs can be used to explain technical details at a directory level. On the other hand, the Wiki is primarily for non-developers, providing broader information about the application such as onboarding, architecture, user stories, and tutorials.

``` Boo
── Root-level README // Landing page, provides useful links.
── Non-root-level README // Technical directory details.
── Wiki // Information hub for everyone, especially non-developers.
```

<br />

</details>

## Table of Contents

- [Starting a Project](#starting-a-project) - **Start Here!**
- [What To Use READMEs For](#what-to-use-readmes-for) - Technical information.
- [What To Use The Wiki For](#what-to-use-the-wiki-for) - End-user / product oriented language.

<br />

***

## Starting a Project
Follow these guidelines when first starting a new project.

Create the basic root level README and basic Wiki pages before coding begins.
 - The basic README should include a link to your Wiki's home page, as well as a list of links to developer standards, contributing documents, and guidelines.
 - The basic Wiki should include pages for user stories, personas, roadmaps, interested parties, architecture diagrams, and entity relationship diagrams.
 - Use the homepage of your Wiki as a table of contents.

> [!NOTE]
> Once development has started, look to the sections below on what to add to the Wiki and READMEs.

<br />

***

## What To Use READMEs For
Besides the root level README, which is meant to be a landing page, the purpose of all other READMEs should be to explain the technical details of a directory in the application.

_Examples of where you might find a README and what they'd be used for:_

``` Boo
.
├── .github
|   ├── workflows // How workflows work and when they're triggered.
|   └── helpers // What workflows use each helper and what function they provide.
├── src
|   ├── frontend // Decision logs, commands, explanation of directory structure. 
|   |   └── src
|   |       ├── components // Explanation of standards when writing and working with components, links to standards documents.
|   |       └── pages
|   └── backend // Decision logs, commands, explanation of directory structure. 
└── README.md // Landing page for repo, links to Wiki, links to API docs and environments,
              // standards documents and guidelines, explanation of directory structure. 
```

> [!NOTE]
> READMEs should link to standards documents.  
> It is suggested to keep standards/guidelines documents in either a standards directory at root level or in Wiki pages.


<br />

***

## What To Use The Wiki For
The Wiki should primarily be used to support everyone who isn't a developer. When a user wants to learn more about your application, you should direct them to the Wiki.

_Below is a list of required and potential Wiki pages:_

``` Boo
── Homepage (required) // Table of contents for the rest of the Wiki.
── Onboarding (required) // Steps to onboard a new developer. Includes starting tasks that new developers can try.
── Architecture (required) // From high-level to low-level diagrams of how the application works.
    ── ERD // Entity Relationship Diagram and explanations of how each table is used.
    ── DAL // Data Access Layer or how ORM (Object Relational Mapper) works.
    ── ADR / ADL // Architectural Decision Records / Log
── Personas
── User Stories
── Roadmap
── Interested Parties
── ERD // Entity Relationship Diagram and explanations of how each table is used.
── DAL // Data Access Layer or how ORM (Object Relational Mapper) works.
── How To // Tutorials for the end-user on how to use the application.
```

<br />

***

[Return to Top](#documentation-standards)
