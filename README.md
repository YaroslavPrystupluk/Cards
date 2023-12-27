You need to create a page where the receptionist can create cards describing scheduled doctor appointments.
The page should include:
Header (header) of the page:
- in the upper left corner - the logo. You can use any logo
in the right corner - Login button. After successful authorization it should change to the "Create Visit" button.
Under Header - form for filtering visits. There should be 3 fields in this form:
search by visit title/content
search by status (Open/Done) (visit has passed or not yet)
urgency of the visit (High, Normal, Low).
Under the filters form there is a list of created visits.
Teamwork
On this project all students are divided into groups of three. Students can distribute tasks among themselves. When submitting the project, it is necessary to indicate in the Readme.md file who performed which part of the task.
Technical requirements
When a user visits the page for the first time, there should be an inscription No items have been added on the board. The same inscription should appear if the user has no added cards (for example, he deleted them all).
After clicking on the Login button, a modal window appears where the user enters his email and password. If it is correct, the list of previously created visits is displayed on the page.
When you click on the Create Visit button, a modal window appears where you can create a new card.
To create classes, you should use the class syntax from ES6.
You can use fetch or axios to execute AJAX requests.
After executing any AJAX requests, the page should not reload. When adding/removing a card and other similar operations, the entire list of cards should not be reloaded from the server. It is necessary to use data from the server response and Javascript to update the information on the page.
When refreshing the page or closing it, previously added notes should not disappear.
It is desirable to divide the project into modules using ES6 modules.
Modal window "Create visit"
The modal window should contain:

A drop-down list (select) with a choice of doctor. Depending on the selected doctor, fields that need to be filled in for the visit to this doctor will appear below this drop-down list.
There should be three options in the drop-down list - Cardiologist, Dentist, Therapist.
After selecting a doctor from the drop-down list, the fields to make an appointment with that doctor should appear below it. Several fields are the same for all three doctors:
purpose of visit
brief description of the visit
drop-down field - urgency (regular, priority, urgent)
FULL NAME
Also, each of the doctors has their own unique fields to fill out. If the Cardiologist option is selected, the following fields additionally appear for entering information:
normal blood pressure
body mass index
cardiovascular disease
age
If the Dentist option is selected, you must additionally fill in:
date of last visit
If the Therapist option is selected, you must additionally fill in:
age
Create button. When you click on the button, an AJAX request is sent to the corresponding address, and if the response contains information about the newly created card, the card is created in the Board of visits on the page, the modal window is closed.
Close button - closes the modal window without saving information and creating a card. Clicking on the area outside the modal window - closes the modal window as well.
All input fields, regardless of the selected option, except for the field for additional comments - are mandatory for data entry. Validation for data correctness is not necessary.
Card describing the visit
A card that is created on click appears on the task board. It should look something like this:
Interface
It should contain:
The full name that was entered when the card was created
The doctor the person has an appointment with
Show more button. By clicking on it, the card expands, and the rest of the information that was entered when creating the visit appears
Edit button. If you click on it, instead of the text content of the card, a form appears where you can edit the entered fields. The same as in the modal window when creating a card
An icon with a cross in the upper right corner, if you click on it, the card will be deleted.
Visit Filters
Card filter (input field for entering search text by title or description of visit, dropdown list by status, dropdown list by priority) you need to do on the front-end - that is, when you change the value of any form element (selected item in the dropdown list, entered something in the input) you filter the list of cards previously received from the server, and display the new information on the screen.

The system should be similar to filters in online stores (for example, on the left here).

Classes
JavaScript code must necessarily contain such classes:

Modal class (pop-up window);
Visit class (describing fields and methods common for all visits to any doctor);
child classes VisitDentist, VisitCardiologist, VisitTherapist;
The methods and properties of each class you need to think about on your own. If necessary, you can add other classes as well.

Implementation requirements
The design can be anything you want, but must have.

AJAX part
All the necessary documentation for interacting with the AJAX server can be found here.
Optional task of advanced complexity
When creating a visit card, perform validation of the correctness of the entered data. Rules for validation can be made up by yourself (for example, normal blood pressure should be a number and should be in the range from 50 to 160).
Add the ability for the user to move cards around the board using Drag&Drop method. Such manipulation of a card does not affect the location of other cards. After dragging a card, there is no need to "memorize" its new location. When the page is reloaded, it can return to its original location.
