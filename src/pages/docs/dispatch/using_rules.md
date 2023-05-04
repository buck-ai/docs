---
title: Using Rules
description: Customizing AI Behaviour with Your Rules
---

Rules play a critical rule in your dispatch setup. You can move forward with the default configuration, and create as many scenarios as you want, but rules is for exceptional behaviour that happens everyday in your office.

---

## Rules Types

When it comes to rules, Buck.ai allows multiple rule types so you can customize the finest details of your dispatch automation. Rule types are priority, time preference, job to subgroup, tag to subgroup and zone to subgroup.

### Priority Rules

No two jobs are equal, at least most of the time. Two leaking faucet calls might be drastically different if one of them has an equipment older than 10 years. Priority rules modify the relevant priority of the job, by using tags. In this rule type, you can tell Buck.ai if a job has a certain tag, it should be applying a different priority than what the job type dictates for. It's expecially useful for normal calls with exceptional opportunities. 

To add a priority rule, click on __New Rule__ and select Priority as the rule type. Select the tag and the priority level, and click **Submit**. ![Dispatch Rules Priority](dispatch_rules_priority.png)

### Time Preference Rules

Time preference rules are about the customer's preferences, and how to implement them on dispatch assignments. Some customers might prefere morning or afternoon appointments, or particular time slots different than your usual arrival windows. You can't change your arrival windows for a customer. In that case, you can use the time preference windows to map tags to scheduling the job.

To create a time preference rule, click on New Rule and selet __Time Preference__ as the rule type. Select the tag to be applied to the rule, select the start and end times, and click Submit. ![Dispatch Rules Time](dispatch_rules_time.png)

### Job Type to Subgroup Rules

If you have created your subgroups, it's time to use them! Buck.ai has multiple rule types pertaining to subgroups, and job-type to subgroup rules is one of them. 

This rule ensures that if a job is assigned to a certain business unit, the job is assigned only to the subgroup, and no other technician in the business unit. 

To create a rule of this type, click on __New Rule__, select __Job Type to Subgroup__ as the rule type, select the business unit, job type and subgroup. Click __Submit__ when you're done. ![Dispatch Rules Job Type to Subgroup](dispatch_rules_jtsg.png)

### Tag to Subgroup Rules

This rule type ensures if a job is assigned to a certain business unit, and has a particular tag, it is assigned to a particular subgroup and no one else from the team.

To create a rule of this type, click on __New Rule__, select  __Tag to Subgroup__ as the rule type, select business unit, tag and the subgroup. Click __Submit__ when you're done. ![Dispatch Rules Tag to Subgroup](dispatch_rules_ttsg.png)


### Zone to Subgroup Rules

If you're using [zones](/docs/dispatch/using_zones), chances are you may want only a particular group of technicians in a business unit to be assigned to a zone, and no one else. Zone to Subgroup ensures that.

To create a rule of this type, click on __New Rule__, select  __Zone to Subgroup__ as the rule type, select business unit, zone and the subgroup. Click __Submit__ when you're done. ![Dispatch Rules Zone to Subgroup](dispatch_rules_ztsg.png)

---

## Ordering Rules

Alongside creating your own rules for execution, you can also set the batting order for them for even more fine-tuning the implementation. For instance, you can opt to have time preference calls to run on top of your priority calls, and so on. You can also order the calls in a particular rule type between one-another.

### Ordering Rule Types

You can order rule types by dragging and dropping the collapsed rule type panels. Rule types above the list are superior to the ones that are below. Here's a short video example for that. 

{%loom-video source="https://www.loom.com/embed/5edab64f79374feb81eed0d1e1f500f3" /%}

### Ordering Rules in a Rule Type

Similar to ordering rule types, you can order the rules within the same type. Once again, the rule above the others is superior. Here's a short video example for that.
{%loom-video source="https://www.loom.com/embed/1853163afd5b47dd96a45dee516156bc" /%}

