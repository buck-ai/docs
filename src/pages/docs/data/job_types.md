---
title: Managing Your Job Types
description: Managing Your Job Types on Buck.ai
---

Job type is a meta-class of the jobs your company is performing day in and day out. There are numerous approaches to how your job types should be setup, and Buck.ai advocates for a balance between being too generalistic and too narrow. If your job types are too wide, that generally results in not accurately being able to understand where your technicians' performances are suffering. If they are classifying your job too narrowly, then it means you're missing the big picture.

---

## Why Job Types are Important?

Job types are the cornerstones of dispatch intelligence on Buck.ai. If your job types are configured properly, chances are you'll be repeating 99% success rate each time you automate your dispatch ops. A poorly configured job type setup almost always yield poor results, regardless of the classification results coming out of our algorithms. ![Job Types](job_types_1.png)

---

## Job Types Overview

Job types, like other entities in your account, are listed as a table and can be searched or filtered for simpler views. You can see if your job types are manually managed, enabled on Buck.ai, active on your FSM, their score type, their priority and total revenue.

### Filtering Job Types

You can filter job types by any combination of:

  - If they're manually managed (you've manually altered the tech ranking)
  - If they're active on your FSM software
  - If they're enabled on Buck.ai 
  - Their score type 
  - Their priority

![Job Types Filtered](job_types_2.png)

### Searching for Job Types

You can search the technicians by their name. You have to type at least 4 letters to start a search. ![Job Type Search](job_types_3.png)

---

## Managing a Job Type 

You can manage a job type by clicking on its name or on the **Pencil** icon on the table.

### Setting Up Priority

Job type priorities in Buck.ai set the batting order on how your jobs are dispatched. Buck.ai looks at the job priorities at hand and starts from Urgent jobs, followed up by High Priority jobs, then Normal and Low. So, setting up your job type priorities accurately matters a lot for the quality of your results.

You can set the priority by using the Priority dropdown, from Urgent to Low. We typically recommend Urgent job types not to exceed 10% of your total job types, and High priority ones should not be exceeding 30% for optimal performance. ![Job Type Priority](job_types_4.png)

### Picking a Scoring Algorithm

Buck.ai comes out of the box with two scoring algorithms that automatically run on your jobs every 24 hours. One of them prioritizes revenue generation, the other is generally for upsells. ![Job Scores](job_types_5.png)

#### Revenue Score

Revenue score is triggered when a technician goes to an appointment, performs the job regularly and the client is billed for the repair/inspection or maintenance. This scoring is important for job types where you don't observe too many up-sells, and on-time and efficient completion of a job matters more. We typically recommend Revenue Score for service jobs, maintenances, warranties.

#### Sales Score

Sales score is triggered when a technician is dispatched to a location, but is unable to complete the repair or maintenance because there's a replacement that needs to be made. In this effort, the technician generally sells an estimate to the client, which results in another appointment to be performed by another technician or team. Buck.ai looks into related jobs of a client to understand the relationship between them, in order to be able to give the up-selling credit to the technician who started it all in the first place.

{% callout type="warning" title="Which Score Should I Pick?" %}
In a nutshell, if the repair/maintenance/inspection performance matters more to you, you should pick the Revenue Score.

If lead conversion of up-sells matter more to you, than you should be picking the Sales Score for the job type. 

Once you pick the scoring and Save Changes, your technicians are re-ranked based on the scoring type you picked.
{% /callout %}

### Job Duration

Buck.ai learns your job durations from your data, but if you want to explicitly set the job duration for any job type, you can use the duration field for that. Buck will be using the duration you pick instead of the data.

### Job-Related Tags

Buck.ai can trigger related tags for each job type. This feature is especially useful if you're using our Omnichannel app. You can set the tags which you want to be fired automatically during call booking using the tags dropdown. ![Job Types](job_types_6.png)

### Problem Description Templates

Similarly to tags, Buck.ai can auto-populate the job description or summary field with the templates you're setting up for that job type. That way, your CSRs won't have to remember the questions they need to be asking based on job-types, they auto-populate once the pick the job type using Omnichannel. ![Job Description](job_types_7.png)

---

## How TechRank Works?

Buck.ai uses a proprietary technology (TechRank) to rank your technicians automatically once your data is imported. You don't have to do anything, Buck.ai ranks them out of the box. The ranking list, in which technicians are ranked based on their scores on a descending order, is used for determining who's the best technician available for any job or booking.

### Manually Ranking Your Technicians

Your technicians are automatically ranked by the scoring type that you selected for your job type. However, if you want to manually rank your technicians, it's also possible. Click on **Edit** next to your technicians ranking list on your job type. Now, you can drag & drop your technicians to the order that you think is better, and click **Save Changes** to persist your preferences. ![Job Type Manual Ranking](job_types_8.png)

### Adding New Techs to the Job Type

Whenever you hire a new tech, since he has no data on your FSM software, he's like nobody for Buck.ai. So, if you'd like to add that technician (or any technician, for that matter) to your job type ranking list, you can do that using the **Add Technician** button below the list. Once you're done, don't forget to save your changes.
