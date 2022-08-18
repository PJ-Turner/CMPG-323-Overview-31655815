# CMPG-323-Overview-31655815
## Project 1

Create and Configure GitHub
Repository
Create a repository named ‘CMPG
323 Overview - <add your student
number>
Create the following Milestones:
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

## Project 2

Create and Configure
GitHub Repository
Create a repository named ‘CMPG
323 Project 2 - <add your student
number>’

Create a ReadME.md file that will
be used to describe your project
and how stakeholders are to use
the report that you have developed

Project Progress Ensure that the report has been
committed and pushed to source
control throughout the project

Ensure that the GitHub project has
been updated iteratively throughout
the project to demonstrate how
progress was made

Prepare the
Data Source
Configure the Database Create a SQL Server with a secure
service account username and
password on Azure

Create a F1 tier (free) database on
the Azure SQL Server

Run the provided SQL script that
will create the relevant tables

Project Setup Create the API project Clone your GitHub repository 2
Create a new .NET Core Web API
project

Connect the API to the data
source
Scaffold the database into the
project (connect the project to the
database)

Apply dependency injection - add
the scaffolded DBContext to the
Startup.cs

Functionality Build Device Management
Functionality
Create a GET method that retrieves
all Device entries from the
database

Create a GET method that will
retrieve one Device from the
database based on the ID parsed
through

Create a POST method that will
create a new Device entry on the
database

Create a PATCH method that will
update an existing Device entry on
the database

Create a DELETE method that will
delete an existing Device entry on
the database

Add a private method in the API
that checks if a Device exists
(based on the ID parsed through)
before editing or deleting an item

Build Zone Management
Functionality
Create a GET method that retrieves
all Zone entries from the database

Create a GET method that will
retrieve one Zone from the
database based on the ID parsed
through

Create a POST method that will
create a new Zone entry on the
database

Create a PATCH method that will
update an existing Zone entry on
the database

Create a DELETE method that will
delete an existing Zone entry on
the database

Add a private method in the API
that checks if a Zone exists (based
on the ID parsed through) before
editing or deleting an item

Create a GET method that retrieves
all devices within a specific zone
(based on the zone ID that is
parsed through)

Build Category
Management Functionality
Create a GET method that retrieves
all Category entries from the
database

Create a GET method that will
retrieve one Category from the
database based on the ID parsed
through

Create a POST method that will
create a new Category entry on the
database

Create a PATCH method that will
update an existing Category entry
on the database

Create a DELETE method that will
delete an existing Category entry
on the database

Add a private method in the API
that checks if a Category exists
(based on the ID parsed through)
before editing or deleting an item

Create a GET method that retrieves
all devices within a specific
category (based on the category ID
that is parsed through)

Create a GET method that will
return the number of zones that are
associated to a specific category
(use the device entity to join the
data)

Project Closeout
Security Ensure that authentication has
been set up to restrict access to the
API

Ensure that no credentials are
stored on GitHub

Web API Cloud Hosting Create an API Service (connected
to an F1 tier (free) service plan)

Publish your API to the service
hosted on Azure and ensure the
API is secure and accessible

Project Documentation Ensure that the ReadMe.md file in
the GitHub repository explains how
the user would use the API

Create a reference list document
that contains all sites visited and
used to complete the project
