# CMPG-323-Overview-31655815
## Table of contents
* [Projects](#read)
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
#### Project 1
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

#### Project 3
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

#### Project 4
# CMPG-323-Project-4-31655815
Testing &amp; RPA
## Table of contents
* [Read First](#read)
* [Setup](#setup)
* [App (How To)](#App)
* [Requirements](#Requirements)

## Read First
* My Project Works I followed the rubric and implemented what was asked
* I Followed all the Requirements


## App (How To)
* The "Log In" Automation Logs in for you with the secure saved credentials.
* When you are logged in you can Populate the Website with the given data on the Excel sheet by Using The "Insert All Data" Automation.
* You can also the different delete Automations to Delete all the Categories , Devices and Zones.
* The Tests are integrated in every Automation.
* If you are logged out make sure you log in first or use a Automation that logs in first.
* I did not add one big Flowchart for all the automations , because it doesn’t make sense to Insert,Update,view and then Delete all the data.
* So The Delete Automations can be done separate.

## Setup
To run this project, install it locally
The Proses is Hosted on the UiPath Orchestrator
[![Uploading orca.png…]()](https://user-images.githubusercontent.com/70144724/197791921-34808f86-c130-4374-b721-c3c72b1d5e6f.png)

* [Requirements](#Requirements)
	
## Requirements the was Followed
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

### Project Setup
* Clone your GitHub repository 2
Install UiPath Studio 1
* Create a new UiPath process named 
‘Connected Office Web Application –
User Acceptance Testing

### User Acceptance Testing
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
* Read the data from Excel into a data 
table in UiPath
Ensure that the data is readable and 
iterated over in UiPath
* UI Automation: For each record in the data table, 
navigate to the URL in the browser 
that allows data to be entered to 
create a new record
* Insert the fields from each record into 
the fields on the web application to 
create a new record on the web 
application
* Click the ‘submit’ button on the web 
application to create a new record on 
the web application once the data 
fields have been inserted
*Navigate to the URL where you can 
view the newly created record on the 
web application

### Record Results 
* If the item was created successfully, 
update the data table record to 
depict that the record passed testing. 
* If the item was not created, update 
the data table to depict that the 
record failed testing
* Update the Excel spreadsheet with 
the testing results (Test Results tab 
of the Excel file provided)

### Deploy Solution
*Publish the UiPath solution to the 
UiPath Orchestrator

### Project Documentation 
* Ensure that the ReadMe.md file in 
the GitHub repository explains how 
the user would use the report

### Create a reference list document that contains all sites visited and used to complete the project

#### Project 5
# CMPG-323-Project-5-31655815

Reporting & Monitoring
## Table of contents
* [Read First](#read)
* [Setup](#setup)
* [(How To)](#App)
* [Requirements](#Requirements)

## Read First
* I Followed all the Requirements on the rubric and implemented what was asked.
* All needed documents is added in this Repo
* Please mark the Reference Document in the Repo.
* I tried connecting to the provided excel file directly but for some reason it didn’t let me create a live connection. 
* After that I decided to host use the SQL database on Azure but, this also did not work because my subscription is not valid anymore , I tried creating a new subscription and create a new database but this also needed up unsuccessful.



## (How To)
* This Project is created in Power Bi with 3 main pages
* - High-Level Metrics
* - Device Monitoring
* - Device Registration

## Setup
To run this project.
The Project can be opened in Power BI , The needed database is also added.
ensure that dit file is conected.

* [Requirements](#Requirements)
	
## Requirements that was Followed
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

### Project Setup
* Clone your GitHub repository 
* Install Power BI
* Configure the Connection 
to Data Sources
* Create a live connection to the data 
sources that will be used as part of 
the visualisations to be created
* Ensure that the data connection is 
secure
* Ensure that the data sources are 
appropriately mapped, where 
necessary


### Implement Data Manipulation
* Ensure that the datasets are cleaned 
and all duplicates are removed
* Ensure that all imported data fields 
are associated to the correct data 
types
* Create at least one calculated 
column to enhance the quality of 
your dataset
* Create at least one key measure that 
will enhance the quality of your 
visualisations

### Report Development
## High-Level Metrics 
* Add a summary view that shows 
business stakeholders a high-level 
view of the ‘important’ data. 
* This generally would refer to counts 
of data points based on information 
that could impact decision making.

## Device Monitoring
* Create a visual that allows the user 
to monitor devices per category
* Create a visual that allows the user 
to monitor devices per zone
* Create a visual that allows the user 
to monitor online versus offline 
devices (status should depict 
whether a device is online or offline)

## Device Registration 
* Create a visual that allows the user 
to see how many devices have been 
registered over a timespan
* Create a visual that allows the user 
to see how many categories of 
devices have been created
* Create a visual that allows the user 
to see how many zones contain 
registered devices on a timeline

## Filtering 
* Make use of filters that can be 
applied across pages and visuals
* Add a filter for users to filter the 
report based on device category
* Add a filter for users to filter the 
report based on device platform
* Add a filter for users to filter the 
report based on device zone
* Add a filter for users to filter the 
report based on device registration 
date

### Project Documentation 
* Ensure that the ReadMe.md file in 
the GitHub repository explains how 
the user would use the report

### Create a reference list document that contains all sites visited and used to complete the project
