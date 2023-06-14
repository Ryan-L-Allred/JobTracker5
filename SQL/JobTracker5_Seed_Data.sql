USE [JobTracker5];
GO


set identity_insert [UserType] on
insert into [UserType] ([Id], [Name]) VALUES (1, 'Admin');
insert into [UserType] ([Id], [Name]) VALUES (2, 'User');
set identity_insert [UserType] off

set identity_insert [UserProfile] on
insert into [UserProfile] (Id, [Name], Email, UserTypeId, FirebaseUserId) values (1, 'Alfredo', 'ryanallred91@gmail.com', 1, 'Mclm4dkubnMVAZG3W4hWFcc4gy02');  
insert into [UserProfile] (Id, [Name], Email, UserTypeId, FirebaseUserId) values (2, 'Evangelos', 'teacherman2000@hotmail.com', 2, 'nJOdGUJAqIgUqm2LPOiBve3lX5H3');
set identity_insert [UserProfile] off

set identity_insert [JobSite] on
insert into [JobSite] (Id, [Name]) values (1, 'On-Site');
insert into [JobSite] (Id, [Name]) values (2, 'Hybrid');
insert into [JobSite] (Id, [Name]) values (3, 'Remote');
set identity_insert [JobSite] off

set identity_insert [JobType] on
insert into [JobType] (Id, [Name]) values (1, 'Full-Time');
insert into [JobType] (Id, [Name]) values (2, 'Part-Time');
insert into [JobType] (Id, [Name]) values (3, 'Contract');
insert into [JobType] (Id, [Name]) values (4, 'Temporary');
insert into [JobType] (Id, [Name]) values (5, 'Volunteer');
insert into [JobType] (Id, [Name]) values (6, 'Internship');
set identity_insert [JobType] off

set identity_insert [ExperienceLevel] on
insert into [ExperienceLevel] (Id, [Name]) values (1, 'Internship');
insert into [ExperienceLevel] (Id, [Name]) values (2, 'Entry Level');
insert into [ExperienceLevel] (Id, [Name]) values (3, 'Associate');
insert into [ExperienceLevel] (Id, [Name]) values (4, 'Mid-Senior Level');
insert into [ExperienceLevel] (Id, [Name]) values (5, 'Director');
insert into [ExperienceLevel] (Id, [Name]) values (6, 'Executive');
set identity_insert [ExperienceLevel] off

--set identity_insert [Company] on
--insert into [Company] (Id, [Name], UserProfileId) values (1, 'National General', 2);
--insert into [Company] (Id, [Name], UserProfileId) values (2, 'MeridianLink', 2);
--insert into [Company] (Id, [Name], UserProfileId) values (3, 'HCA Healthcare', 2);
--insert into [Company] (Id, [Name], UserProfileId) values (4, 'Healthcare Bluebook', 2);
--insert into [Company] (Id, [Name], UserProfileId) values (5, 'U-Haul', 2);
--set identity_insert [Company] off

set identity_insert [Role] on
insert into [Role] (Id, Title, Company, [Location], Skills, IsRejected, IsAccepted, GotInterview, ExperienceLevelId, JobTypeId, JobSiteId, UserProfileId) values (1, 'Technical Resident', 'HCA Healthcare', 'Nashville, TN', 'Tech', 'No', 'No', 'Yes', 2, 1, 1, 2); 
insert into [Role] (Id, Title, Company, [Location], Skills, IsRejected, IsAccepted, GotInterview, ExperienceLevelId, JobTypeId, JobSiteId, UserProfileId) values (2, 'Software Developer in Test', 'Healthcare Bluebook', 'Brentwood, TN', 'Cypress', 'Ghosted', 'Ghosted', 'Ghosted', 2, 1, 3, 2);
insert into [Role] (Id, Title, Company, [Location], Skills, IsRejected, IsAccepted, GotInterview, ExperienceLevelId, JobTypeId, JobSiteId, UserProfileId) values (3, 'Software Developer', 'U-Haul', 'Phoenix, AZ', 'C#', 'Yes', 'No', 'Yes', 3, 1, 3, 2);
insert into [Role] (Id, Title, Company, [Location], Skills, IsRejected, IsAccepted, GotInterview, ExperienceLevelId, JobTypeId, JobSiteId, UserProfileId) values (4, 'Associate Software Integration Programmer', 'MeridianLink' , 'Costa Mesa, CA', 'KQL', 'No', 'No', 'Yes', 2, 1, 3, 2);
insert into [Role] (Id, Title, Company, [Location], Skills, IsRejected, IsAccepted, GotInterview, ExperienceLevelId, JobTypeId, JobSiteId, UserProfileId) values (5, '.NET API Developer', 'National General', 'Nashville, TN', '.NET', 'Yes', 'No', 'No', 3, 1, 3, 2);
set identity_insert [Role] off