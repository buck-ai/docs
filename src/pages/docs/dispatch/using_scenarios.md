---
title: Using Scenarios
description: How to Use Dispatch Scenarios for DRY Dispatch Practices?
---

At Buck.ai, we use a principle called DRY, an acronym for Don't Repeat Yourself, to prevent code from written more than once for the same purpose. We've implemented the same logic to Buck.ai, creating dispatch scenarios that allow you to create dispatch templates and save them for later use.

---

## Scenarios Overview

You can access to your scenarios from Dispatch side menu. Scenarios overview screen provides a searchable list to your scenarios, the time that they are last run, and relevant actions.

### What is a Scenario?

A scenario is a template of dispatch settings that are saved for later use. For example, for some dispatch decisions, you can opt to start techs from their homes or from the office. Or, you can say for the HVAC teams you wouldn't want your techs to drive more than 30 miles between jobs, or choose to auto-run your scenarios every 30 minutes and update your FSM software.

A scenario is a set of options where you can save all those preferences, so that you don't have to set them up again before the next dispatch run.

{% callout type="warning" title="Who Can Edit a Scenario?" %}
A change in the scenario settings will affect all the dispatch board that will be created using that scenario. Therefore, regular users or admins are not allowed to edit the scenarios. Only a specific user type called __Account Supervisor__ is allowed to edit the scenario. Please consult with the customer support for further guidance.
{% /callout %}

### Scenario Settings

You can click on the scenario title to edit the scenario. There are two tabs pertaining to edit a scenario, Settings and Options. These pages are visible only to users with the right permissions.

![Dispatch Scenario Settings](dispatch_scenario_settings.png)

Please consult with the following table for reference on settings and relevant behaviour.

| Setting   | Behaviour    |
|--------------- | --------------- |
| Work Time Start   | Changes the dispatch board start time for all techs   |
| Work Time End   | Changes the dispatch board end time for all techs   |
| Street Address | Changes the start address for all techs who are starting their day from the office. |
| Business Units | The list of business units that will be dispatched through the scenario. A business unit can be added to multiple scenarios. Affects settings like Fallback to Team Member or Respect Assigned Business Unit. |
| Technicians | List of technicians who'll be dispatched through the scenario. All techs in the business unit will populate here once the business unit is selected. |
| Job Types | Job types that will be dispatched through the scenario. Other job types won't be assignable for Buck.ai, however, pre-assigned jobs with other job types will be visible on your dispatch board for reference. |


### Scenario Options

Scenario options is where you override Buck.ai's default behaviour. Please consult with the following table for reference on each setting and relevant behaviour. 

![Dispatch Scenario Options](dispatch_scenario_options.png)


| Setting   | Behaviour    |
|--------------- | --------------- |
| Best Technician vs. Capacity | Should Buck assign best calls to best techs, or, should it distribute the workload evenly to the workforce? |
| Dispatch Distance | What's the maximum distance you want your technicians to drive between jobs? |
| Lunch Break Options | Do you want Buck.ai to provide a lunch break time on the dispatch board, and if yes, what would be the time and how long? |
| Technician Start Point | Where do your technicians start their day? From their homes, or your office? |
| Disable Drive Time Inclusion | Buck.ai uses real-time traffic data to calculate distances between locations, so that we can make more accurate assignments. You may disable this if you're clocking your technicians for drive times as well. |
| Technician Start Point After Unavailability | Where do you want your technicians to start after being unavailable? Last location, office, or home? |
| Respect Scheduled Times for Jobs | Your CSRs are setting times when booking the call. Buck can change those times to maximize revenue, or leave them untouched. What's your preference? |
| Call Grouping | Works best for maintenance/warranty jobs; this ensures your technician will be completing his day in a smaller serviceable area, allowing him to complete max number of jobs.|
| Respect Assigned Team | Should Buck search for the best tech in the business unit of the job, or should it search for it in the entire job-type ranking list? |
| Assign Technician Based on Customer History | Should Buck.ai prioritize the techs who has been at the location before? |
|Treat all calls as unassigned | This option tells Buck.ai to treat all calls as reassignable except the ones that are tagged with the tags you select. |
| Fallback to Random Team Member | If there's no tech available in the job type ranking list, Buck.ai assigns the job to a random tech from the business unit. |
| Allow Weekends on CallIQ | Do you want Omnichannel to recommend technicians who have shifts on the weekends as well? |
| Auto-Run | Set this scenario to auto-run on its own every N minutes/hours on weekdays. |
| Auto-Update | Automatically publish the boards to your FSM software once they become available. |
| Zone-based Dispatch | Use [Zones](/docs/dispatch/using_zones) in your dispatch configuration |
| Include First-calls in Zone Based Dispatch | Find the first call in the zone close to technician’s starting address |
| Scheduling Headstart | Start scheduling jobs from N minutes later after the board is created. |

---

## Quos porro ut molestiae

Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur.

### Voluptatem quas possimus

Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.

Possimus saepe veritatis sint nobis et quam eos. Architecto consequatur odit perferendis fuga eveniet possimus rerum cumque. Ea deleniti voluptatum deserunt voluptatibus ut non iste. Provident nam asperiores vel laboriosam omnis ducimus enim nesciunt quaerat. Minus tempora cupiditate est quod.

### Id vitae minima

Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.

Voluptas beatae omnis omnis voluptas. Cum architecto ab sit ad eaque quas quia distinctio. Molestiae aperiam qui quis deleniti soluta quia qui. Dolores nostrum blanditiis libero optio id. Mollitia ad et asperiores quas saepe alias.

---

## Vitae laborum maiores

Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur.

### Corporis exercitationem

Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.

Possimus saepe veritatis sint nobis et quam eos. Architecto consequatur odit perferendis fuga eveniet possimus rerum cumque. Ea deleniti voluptatum deserunt voluptatibus ut non iste. Provident nam asperiores vel laboriosam omnis ducimus enim nesciunt quaerat. Minus tempora cupiditate est quod.

### Reprehenderit magni

Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.

Voluptas beatae omnis omnis voluptas. Cum architecto ab sit ad eaque quas quia distinctio. Molestiae aperiam qui quis deleniti soluta quia qui. Dolores nostrum blanditiis libero optio id. Mollitia ad et asperiores quas saepe alias.
