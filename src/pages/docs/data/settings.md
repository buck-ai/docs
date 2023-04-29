---
title: Syncing with Your Legacy Systems
description: How does Buck.ai Data Sync Work?
---

Buck.ai automatically fetches and syncs your data every few hours. However, you can manually fetch your data as well.

---

## Buck.ai Data Sync Overview

Buck.ai is designed to work in conjunction with your legacy FSM software. To learn more, you can go to [integrations](/docs/account/integrations). After the first data import, your data is refreshed between 4 to 24 hours depending on the data type. 

### What are we importing?

Buck imports all the relevant data to job assignment decisions, including but not limited to the following:

  - Technicians
  - Business Units
  - Job Types
  - Customers
  - Jobs
  - Invoices
  - Tags
  - Technician Shifts
  - Non-job Appointments

### Fetching Your Data manually

You can fetch your data manually if you need to. Go to Fetch Data tab on your Data App and click "Sync All". ![Fetch All](fetch_all.png)

### Setting Up Revenue Score Calculation Range

By default, Buck.ai uses all job data in your FSM software to calculate the ranking lists for technicians. However, you can tell Buck.ai what's the date range you want your scores to be calculated for. For example, you can opt for using only last 6 months of data for revenue scores. To do this, go to Settings in your Data App and change the range from the Settings tab, and click **Save Changes**. ![Job Score Range](range.png)


