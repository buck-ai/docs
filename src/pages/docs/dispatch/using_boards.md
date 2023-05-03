---
title: Optimizing Your Dispatch Using Boards
description: Creating and Publishing Optimized Dispatch Boards for Maximized Revenue
---

A dispatch board is comprised of 2 things: technicians and jobs assigned to them. What makes Buck great is it generates dispatch boards that are superior in revenue and route optimization. Using the boards, if you publish them to your FSM software, you can ensure you're increasing your revenue and achieving more capacity with the same number of technicians. Differently than FSM dispatch boards, Buck.ai's boards represent a snapshot in time, the technicians who are available then and the jobs waiting to be assigned.

---

## Creating a Dispatch Board

To create a dispatch board, select Boards from the side menu. Pick a **date**, a **scenario**. **Technicians** in the scenario will automatically appear. You can remove any technician if you want. Optionally, you can turn on "**Select Jobs**" to pick the jobs you'll be dispatching. By default, all the jobs on the date of the board which are with the job types in the scenario that you've picked, will be included in the board.

{%loom-video source="https://www.loom.com/embed/7a40cd3d745849d4b17994d7e497044d" /%}

### Selecting a Scenario

Scenarios are configuration options for dispatch that might be saved as templates and used later. Every scenario can support multiple use-cases; they can be organized by trade, by working hours (after-hours, weekends, etc.). To learn more, visit [scenarios](/docs/dispatch/using_scenarios).

![Selecting Scenarios](dispatch_selecting_scenario.png)

### Picking Technicians

You can pick the technicians who'll be assigned jobs on the dispatch board by searching by their name from the search box below technicians. To remove a technician from the list, click on **x** next to technician. ![Dispatch Selecting Technicians](dispatch_selecting_technicians.png)

### Picking Jobs

Alternatively, you can opt to pick the jobs that will be assigned using the board you're creating. By default, all jobs that are for that date that satisfy the conditions in the scenario are included. To exclude a job, uncheck the checkbox next to the job you want excluded. Click **Save** to continue.

![Dispatch Selecting Jobs](dispatch_selecting_jobs.png)

---

## Understanding The Board

Every dispatch board generated in Buck.ai includes key pieces of information you should pay attention to. ![Dispatch Board Overview](dispatch_board_overview.png) One of the first pieces you'll notice is the potential revenue prediction. This relies on your historical data and your seasonal trends that are used by Buck to predict the revenue of those jobs, and potential revenue indicator shows the sum of our predictions. ![Dispatch Potential Revenue](dispatch_board_potential_revenue.png) Buck.ai uses different colors to denote different reasons for job assignments. You can find the legend next to the Job List headline. ![Dispatch Board Reasons](dispatch_board_reasons.png)

### Reassigning Jobs

You can only reassign jobs that are assigned by Buck.ai. You can't reassign jobs that are manually assigned prior to the board creation. To reassign any job, drag and drop the job the preferred technician's line and preferred time.

### Publishing The Board

Publishing the board means writing the assignments back to your FSM software. When you publish the board, you'll see a progress on the publish button until you see "No Publishable Assignments". Publishing takes approximately 1 second for each job, under normal API conditions. ![Dispatch Publishing](dispatch_publish.png)

### Manual Assignments

For various reasons, Buck.ai's algorithm may choose to leave some jobs unassigned. These reasons are discussed below. If you want to assign any of the unassigned jobs manually, you can drag&drop it to the preferred time and technician, or you can click on the technician icon on the table. ![Dispatch Manual Assign](dispatch_manual_assign.png)

---

## Understanding Buck.ai Dispatch

There are multiple reasons as to why Buck.ai assigns a call to a certain technician. Some of these factors are listed as follows:
  - Technician score on the job types
  - Scenario settings, such as best tech vs capacity or random tech on the business unit 
  - Technician's prior location and the distance to the job location 
  - Rules pertaining to that job, such as time preference, priority or subgroups 
  - Zones, if applicable, for that job and the technicians who are in that or neighboring zones 

### Check These Items First

Jobs are assigned according to perceived priority first. Perceived priority is determined by the job type, the tags that are used, and predicted revenue of the job. So if you think a job that should be last in the day is assigned as the first thing of the morning, check the rules and job type settings pertaining to priority. 

Next, Buck.ai creates a latent serviceable area for each dispatch board. That means the jobs that are too far away from the main cluster of jobs might be left unassigned unless they are too high priority. So the maximum dispatch distance setting matters a lot for these decisions.

### Troubleshooting

When you think something is wrong with the dispatch boards Buck.ai is generating, consult on this docs first. Check the [scenarios](/docs/dispatch/using_scenarios) and the [rules](/docs/dispatch/using_rules), and your [job type rankings](/docs/data/job_types#how-tech-rank-works).

If you can't solve the problem, please consult with the support team by opening a ticket. You can email to [support@buck.ai](mailto:support@buck.ai) or visit our support portal [here](https://buckai.zendesk.com).
