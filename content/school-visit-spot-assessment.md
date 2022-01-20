School visit spot assessment
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|id|Unique ID of the spot assessment conducted for a class during a school visit|str|Yes|Auto generated|-||
|2|schoolVisitId|Unique ID of the record of a particular school visit done by a mentor/ monitor|str|Yes|Foreign Key|-||
|3|visitClassId|Class observed in the visit|str|Yes|Filled|-||
|4|subjectTermId|Subject observed in the said classes in the visit|str|Yes|Filled|-||
|5|questionAsked|No. of questions to be asked by the mentor/ monitor |int|Yes|Master Codes|Spot Assessment Codes||
|6|correctAnswers|No. of questions answered correctly by students|int|Yes|Filled|-||
