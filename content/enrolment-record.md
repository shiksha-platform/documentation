Enrolment-Record
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|id|Unique ID of the combination of classid and studentId|str|Yes|Auto generated|-||
|2|acadyear|Academic year |str|Yes|Master Code|Acad Year Codes||
|3|studentId|Unique ID of the student|str|Yes|Student Registry|-||
|4|classId|Unique ID of the class and section the student belong to in that academic year|str|Yes|filled|-||
|5|subjectTermId|Array of subject ids that are applicable to the student in that academic year|str|Yes|filled|Term mapped to Subject Category||
|6|streamId|Stream (if applicable) of the student in that academic year|str|Yes|filled|-||
