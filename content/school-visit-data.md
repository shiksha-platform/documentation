School visit data
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|schoolVisitId|Unique ID of the record of a particular school visit done by a mentor/ monitor|str|Yes|Auto generated|-||
|2|schoolId|School code|int|Yes|School Registry|-||
|3|schoolName|School Name|str|Yes|School Registry|-||
|4|district|District of the school|str|Yes|Master Codes|Location code||
|5|block|Block of the school|str|Yes|Master Codes|Location code||
|6|cluster|Cluster of the school|str|Yes|Master Codes|Location code||
|7|visitType|Type of visit (Mentoring or monitoring visit)|str|Yes|Master Codes|-|Options: Mentor, Monitor|
|8|visitUsernameId|ID of the visiting mentor or monitor|int|Yes|Monitor Registry|-||
|9|visitDate|Date of the visit|date|Yes|filled|-||
|10|visitClassId|Class(es) observed in the visit|int|Yes|filled|-|String of multiple numbers|
|11|subjectTermId|Subject(s) observed in the said classes in the visit|int|No|filled|Term mapped to Subject Category|String of multiple subject IDs|
