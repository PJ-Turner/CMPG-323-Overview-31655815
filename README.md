# CMPG-323-Overview-31655815
## Table of contents
* [Progects](#read)
* [Read First](#read)
* [Setup](#setup)
* [App (How To)](#App)
* [General info](#general-info)
* [Requirements](#Requirements)

I will add the .gitnore fole to my main directory of the project. The purpose of this file will be to exclude certain files from commits to my main branch. This will be my tester files that I use to insure that my code is working, these files will not be crucial to the working of my project and may cause  errors.

My branching strategy consists of the following branches:

- Master 
- Develop
- Feature: to develop new features that branches off the develop branch 
- Release: assist in the development of a new production release; typically split from the develop branch and has to be merged back into both develop and master
- Hotfix: also helps in preparing for a release, whereas hotfix branches are created in response to bugs that have been identified and need to be corrected; this allows developers to continue working on their own improvements on the develop branch while the bug is being fixed.

There will be one Repository with 5 different projects.

- Project 1 Submission: Deadline –
18 August
- Project 2 Submission: Deadline –
8 September
2 
- Project 3 Submission: Deadline –
29 September
- Project 4 Submission: Deadline –
20 October
- Project 5 Submission: Deadline –
3 November
- Exam (POE) Submission:
Deadline – 18 November
Create the following Labels:
- Class
- Project
- Training

Add a ReadME.md file to the
repository
In the ReadME.md, address which
repositories will be created and used
for each project

In the ReadME.md, provide a
diagram explaining project and
repository context and how they are
integrated

In the ReadME.md, explain the
branching strategy to be used within
each project

In the ReadME.md, explain the use
of a .gitignore file within each project

In the ReadME.md, explain the
storage of credentials and sensitive
information

GitHub Project
Create and configure GitHub project
Create a GitHub Kanban project 1
Link the GitHub repository to the project

Ensure that the project is named
appropriately

Ensure that the project has a
description adequately describing the
project

Add the following columns:
- Linked Assessment (field
type = text)
- Due Date (field type = date)
- Sprint (field type = single
select; add all 8 of the sprints
as options with sprint start
and end date)
- Effort (in Hours) (field type =
number)

Create and populate project
views
Create a table view within the project
named ‘Tabular View’
- Add Milestone, Label, Linked
Pull Request and Repository
as fields to the view
- Hide the Assignees field

Create a board view within the
project, named ‘Status View’
- Group by Status

Create a board view within the
project, named ‘Sprint View’
- Group by Sprint

Create a table view within the
project, named ‘Linked Assessment
View’
- Group by Linked Assessment

Create an additional customised
view that provides you with additional
insight into your semester progress

Populate the ‘Tabular View board’
with the following as tasks:
- All CMPG 323 classes
- All CMPG 323 training time
required to upskill and
complete projects
- All estimated tasks required
to complete all CMPG 323
projects
- All CMPG 323 project
submissions (with deadlines
attached to milestones)
- All tasks associated to
completing the CMPG 323
Portfolio of Evidence (POE)

Create and configure project
charts
Add the following charts to the
project:
- Number of Items by Label
- Number of Items by Status
- Number of Items by Sprint
- Burndown Chart


## Read First
* My Project has some Errors I tried to resolve them but some things are still not working properly
* By Implementing the Dependency Injection 80% was working but some things just dont want to
* I Followed all the Requirments


## App (How To)
* This App Gives you a Log In Screen where you can Regester or log in.
* When you are loged in you can access the Datebase , Change, edit , Update , Delete or View Data.
* You Will se you have Caregories , Devices and Zones.

## Setup
To run this project, install it locally
IT is Hosted on Azure at https://connectedoffice-p3-31655815.azurewebsites.net

## General info
This project is ASP.NET Core MVC Web Application ,implementing coding principles and design patterns aligning to the 
requirements of the project.
* [Requirements](#Requirements)
	
## Requirements
### GitHub Administration
* Create and Configure GitHub Repository
* Create a ReadME.md file 
* Ensure that the solution has been 
committed and pushed to source 
control throughout the project
* Ensure that the GitHub project has 
been updated iteratively throughout 
the project to demonstrate how 
progress was made
* Create a new development branch 
* Connect the Web App to 
the data source
* Add the connection string to your 
hosted database in the 
appsettings.json file

### Design Pattern Implementation
* Create Repository Classes
* Create a repository class that will 
contain all data access operations 
relating to Devices
* Create a repository class that will 
contain all data access operations 
relating to Zones
*Create a repository class that will 
contain all data access operations 
relating to Categories

### Transfer data access operations
* Transfer all data access operations 
from the Devices controller to the 
Devices Repository class
* Transfer all data access operations 
from the Zones controller to the 
Zones Repository class
* Transfer all data access operations 
from the Categories controller to the 
Categories Repository class

### Implement repository classes
* Implement the use of the Device 
repository class in the Device 
controller in place of data access 
operations that have been 
transferred to the repository class
* Implement the use of the Zone 
repository class in the Zone 
controller in place of data access 
operations that have been 
transferred to the repository class
* Implement the use of the Category 
repository class in the Category 
controller in place of data access 
operations that have been 
transferred to the repository class


### Security 
* Ensure that no credentials are 
stored on GitHub
* Web API Cloud Hosting Create an App Service (connected 
to an F1 tier (free) service plan)
* Publish your App to the service 
hosted on Azure and ensure the 
App is secure and accessible
* Project Documentation Ensure that the ReadMe.md file in 
the GitHub repository explains how 
the user would use the App

### Create a reference list document that contains all sites visited and used to complete the project
