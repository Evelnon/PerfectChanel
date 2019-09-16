# PerfectChanel

Instructions
Please see the following user stories below, outlining the business requirements for a simple To-do
list application. Implement the user stories using the following guidelines:
• Consider the guidelines from the Scrum Guide for product increments. A desirable solution is
simple and elegant.
• We recommend spending about three hours to implement your solution.
• You must implement a SPA using Typescript consuming data from a Web API solution using
C#.
o For the SPA, consider using React or another JavaScript framework.
o For the Web API, consider using .NET Framework or .NET Core.
• Keep the use of external packages to a minimum.
• Clean code is more important than implementing all the user stories.
Expected output
Your solution should be zipped and sent to your agent to send back to Perfect Channel.
The solution should contain all your source code, plus a markdown file answering the following
questions:
• How long did you spend on your solution?
• How do you build and run your solution?
• What assumptions did you make when implementing your solution?
• Why did you pick the design that you did?
• If you were unable to complete any user stories, outline why and how would you have liked
to implement them.
User story 1
Title
As a user, I want to be able to see my list of to-dos, so I can easily see my completed and pending
tasks.
Acceptance criteria
1. It should be possible to see all tasks:
o Each task will be represented by a simple text description.
o Two main tasks groups: pending and completed tasks.
▪ Depending on the type (completed vs pending) the task will be displayed on
a different group.
2. Initially, this list will be empty.
User story 2
Title
As a user, I want to be able to add new tasks, so I can have new to-dos in my list.
Acceptance criteria
1. The user should be able to enter a task description.
2. The user should be able to add this previous description to his or her to-do list
3. The added to-do will be displayed as a pending task
User story 3
Title
As a user, I want to be able to change the status existing tasks, so I can complete it or mark it as
pending.
Acceptance criteria
1. The user should be able to pick a task and change its status:
• If the task is pending it will become completed
• If the task is completed it will become pending
2. The to-do list should be updated accordingly, moving tasks between groups.
