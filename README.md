# Project Title

### Health Connect

## Overview

A self carried EMR that allows patients to have a holistic view of their health and the ability to choose and share relevant data with various medical services providers.


### Problem

There currently is not a centralized electronic medical records system that any doctor’s office can access in Canada. Many people also do not have a family doctor in Canada. In fact, many people rely solely on various medical clinics and walk-in doctors and also end up having to advocate for their own health. People end up having to repeat why they are seeking medical care in addition to having various medical providers piece together the building blocks of their health history which results in possible errors through miscommunication. This problem also applies to people who do have family doctors but have to see other specialists, emergency doctors or walk-in clinic doctors for any other reasons. 

### User Profile

- must have a smartphone and be over 18+
- wants to advocate for own medical care
- may not have a family doctor
- wants to take control of their own health and track own health data
- users could possibly be people who own health tracking devices such as an Apple Watch or Fitbit


### Features

**Health Overview**

This is the **home dashboard screen**. It shows a user’s current health snapshot with some default stats as well as has buttons linking to History, Tests, and Referrals


**History**

This is the page where a user can decide to view past appointments as well as medications prescribed. There are two possible options here, Appointments and Medications

**Appointments**

Displays a list of past appointments with doctor name, date and reason for appointment

**Appointment Single Page**

Displays a static record of appointment, shows details parameter which is not visible on Appointments list page

**Add New Appointment Page**
Allows user to add an appointment record with a form that has four parameters: provider, reason, details( not visible on Appointments List page), and Date

**Appointment Edit Page**

Allows user the ability to edit details of an appointment record with an additional details parameter
Medications
Displays a list of medications prescribed with DIN number and date

**Referrals**

Displays a list of referral doctors with their names and specializations

**Tests**

This shows a user’s test history and has different categories that allow a user to select what tests they would like to view such as Blood Tests

**Individual Test page**

This shows in a visual format, the user’s specific test result. It will be displayed with visualizations to aid in user understanding of results


## Implementation

### Tech Stack

React
Express

**Client libraries**
React
React-router
Axios

**Server Libraries**
Express

**Other**
MaterialUI
** Possibly D3js


### APIs

No external APIs,  will be making Express API 

### Sitemap
![HealthConnect Mockups SiteMap](https://github.com/gracelau/healthconnect-client/assets/11990799/f9e16163-456b-435e-b3bb-c121328ce837)



### Mockups
![HealthConnect-Login](https://github.com/gracelau/healthconnect-client/assets/11990799/e71689b8-98f6-4302-bd47-2f36e28b761e)


![HealthConnect-Home](https://github.com/gracelau/healthconnect-client/assets/11990799/51564df2-e6a0-4847-8273-a064b42c1aa5)

![HealthConnect-History](https://github.com/gracelau/healthconnect-client/assets/11990799/6e88fe2b-2d8a-4bcb-9596-22281f0aeac7)
![HealthConnect Appointments](https://github.com/gracelau/healthconnect-client/assets/11990799/b14cf886-ddd5-4f80-8e25-3b0c07639c3d)
![HealthConnect Mockups Add New Appointment](https://github.com/gracelau/healthconnect-client/assets/11990799/8150573b-5900-41f7-b37b-6c61f3b91aca)
![HealthConnect Mockups Edit Appointment](https://github.com/gracelau/healthconnect-client/assets/11990799/a4555135-4312-4ff3-b8ce-3bacc8150655)

![HealthConnect Mockups Appointment](https://github.com/gracelau/healthconnect-client/assets/11990799/086b7cc6-78e6-40e1-aeb1-09e1866760b6)
![HealthConnect Mockups Medications](https://github.com/gracelau/healthconnect-client/assets/11990799/06d6567c-8d5e-4975-86b8-f2acdc5f73b5)

![HealthConnect Mockups Referrals](https://github.com/gracelau/healthconnect-client/assets/11990799/2fae302a-0bc9-4049-8878-63cf1bcd1a40)








### Data

All data will be coming from the express API to the front end. 
There will be a JSON file for each page:
- Appointments
- Medications
- Referrals
- Tests (optional)


### Endpoints

**GET /history/appointments**

Gets a user's appointment history list


Response:

{

“id”: 1,

“Provider”: Dr.Kwong,

“Reason”: Blood pressure,

“timestamp”: 1712988328

}



**POST /history/appointments/:id**

User can add their own appointments here

Parameters:
- id: appointment id
- provider: doctor name
- reason: reason for visit
- details: additional details (not visible on appointments list page)
- timestamp: date of appointment

Response:

{

“id”: 1,

“Provider”: Dr.Kwong,

“Reason”: Blood pressure,

“Details”:Had confusion, blurry vision, dizziness, fainted and also nausea and sleepiness,

“timestamp”: 1712988328

}


**PUT /history/appointments/:id/edit**

User can update their appointment history

Parameters:

- id: appointment id
- provider: doctor name
- reason: reason for visit
- timestamp: date of appointment

Response:

{

“id”: 1,

“Provider”: Dr.Kwong,

“Reason”: Blood pressure,

“Details”:Had confusion, blurry vision, dizziness, fainted and also nausea and sleepiness,

“timestamp”: 1712988328

}

**GET /history/medications**

Users can see their medications history list here

Parameters:

- id: medication id
- name: medication name
- DIN: drug interaction number ( unique identifier for each drug)
- timestamp : the date prescription was issued

Response:

{

“id”: 1,

Name”: Hydrocortisone,

“DIN”: 1234567,

“timestamp”: 1712988340

}


**GET /referrals**

Users can see their referrals for specialists here

Parameters:
- id: id of referral
- name: name of provider
- type: specialization

{

“id”: 1,

“Name”: Dr.Chang,

“Type”: Cardiologist

}

### Auth

No auth will be used, assuming the user is logged in already.

## Roadmap
**Create Client**

React project with routes and boilerplate pages

**Create Server**

Express server with routing and placeholder responses as well as JSON files for appointments, medications and referrals


**Feature: Home Page/Dashboard**

Main login page with some default user stats displayed
Placeholder Chart Image
Buttons that link to other page: History, Tests, Referrals



**Feature View History > Appointments**

- Implement view appointments page
- Create GET/history/appointments
**all get requests are pulling from express server API

**Feature View Appointment**

Create GET /history/appointments/:id

**Feature Add Appointment**

Create form inputs for new appointment
Create POST /history/appointments/new
States for add appointment

** all post requests are writing to a JSON file


**Feature: Edit Appointment**

Create form fields that output existing data from API
Create PUT /history/appointments/edit
States for edit appointment


**Feature: Medications Page**

Create GET /history/medications to display list of medications data from Express AP medications.json file

**Feature Referrals Page**

Create GET /referrals to display list of specialist referrals data from Express API referrals.json file
## Nice-to-haves


- Tests with charts using D3JS
- Individual pages for Medications and Referrals along with add, edit functionality
- Delete functionality for Appointments
- functional login page with JWT tokens and auth













