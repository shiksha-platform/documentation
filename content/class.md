Class
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|classId|Unique ID of the class within the school|str|Yes|Auto generated|-||
|2|name|Name of the class|char|Yes|Master Codes|-||
|3|schoolId|The ID of the school in which the class is|str|Yes|School Registry|-||
|4|section|The name of the section for that class|char|No|Filled|-||
|5|gradeLevelTermId|Grade of the class|int|Yes|Master Codes|Terms mapped to gradeLevel category|Standard/grade|
|6|teacherId|Array of teacherIds teaching this classId|str|Yes|Filled|-||
|7|frameworkId|ID of the framework associated with classId|int|Yes|Filled|-||
