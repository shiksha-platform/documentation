Posting
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|id|Primary ID of the posting table|int|Yes|Auto generated|-||
|2|teacherId|ID of the teacher for which posting info is stored|int|Yes|Foreign Key|-||
|3|schoolId|ID of the school where the teacher was posted at that time|int|Yes|Foreign Key|-||
|4|joiningDesignation|Designation of the teacher at time of joining that posting|str|Yes|Master Codes|Designation Codes||
|5|leavingDesignation|Designation of the teacher while leaving that posting|str|Yes|Master Codes|Designation Codes||
|6|joiningDate|Date of joining in that posting|date|Yes|Filled|-||
|7|releivingDate|Date of relieving from that posting|date|Yes|Filled|-||
|8|serviceType|Current nature of appointment of the teacher (Contractual, adhoc, regular)|str|Yes|Master Codes|Appointment codes||
|9|reason|Reason of closure of that posting|str|Yes|Filled|-||
|10|gradeCategoryId|Grades that teacher was teaching at that time|int[]|Yes|Foreign Key|Terms mapped to gradelevel category||
|11|subjectTermId|Subjects that teacher was teaching at that time|int[]|Yes|Foreign Key|Term mapped to Subject Category||
