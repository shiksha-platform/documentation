Parent bank details
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|parentId|ID of the student|int|Yes|Foreign Key|-||
|2|bankId|ID of the bank where student account exists|int|Yes|Foreign Key|-||
|3|branchId|IFSC code of the bank|str|Yes|Foreign Key|-||
|4|bankName|Name of the Bank|char|Yes|Master Codes|Bank Codes||
|5|branchName|Name of the Bank Branch|char|Yes|Master Codes|Branch Codes||
|6|accountno|Account Number|int|Yes|Filled|-||
|7|accountType|Type of Account|str|Yes|Master Codes|Acc Type Codes||
|8|accountHolderName|Name of Account Holder|str|Yes|Filled|-||
