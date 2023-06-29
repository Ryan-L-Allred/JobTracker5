USE [JobTracker5];
GO


set identity_insert [UserType] on
insert into [UserType] ([Id], [Name]) VALUES (1, 'Admin');
insert into [UserType] ([Id], [Name]) VALUES (2, 'User');
set identity_insert [UserType] off

set identity_insert [UserProfile] on
insert into [UserProfile] (Id, [Name], Email, UserTypeId, FirebaseUserId) values (1, 'Alfredo', 'ryan@ryan.com', 1, 'lCzV2EAfIHQVp1JlLLwmCBJuAlj1');  
insert into [UserProfile] (Id, [Name], Email, UserTypeId, FirebaseUserId) values (2, 'Evangelos', 'evangelos@hotmail.com', 2, 'CZlkLGBe9lcPwF8owVsuIX1yPGj2');
insert into [UserProfile] (Id, [Name], Email, UserTypeId, FirebaseUserId) values (3, 'Jack', 'jackrabbitslim94@yahoo.com', 2, 'fHu3VOtiZHazh5VhmpI7W5Mifqx1');
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
insert into [ExperienceLevel] (Id, [Name]) values (1, '0-2 Years');
insert into [ExperienceLevel] (Id, [Name]) values (2, '3-5 Years');
insert into [ExperienceLevel] (Id, [Name]) values (3, '6-8 Years');
insert into [ExperienceLevel] (Id, [Name]) values (4, '9-12 Years');
insert into [ExperienceLevel] (Id, [Name]) values (5, '13-15 Years');
insert into [ExperienceLevel] (Id, [Name]) values (6, '16+ Years');
set identity_insert [ExperienceLevel] off

--set identity_insert [Company] on
--insert into [Company] (Id, [Name], UserProfileId) values (1, 'National General', 2);
--insert into [Company] (Id, [Name], UserProfileId) values (2, 'MeridianLink', 2);
--insert into [Company] (Id, [Name], UserProfileId) values (3, 'HCA Healthcare', 2);
--insert into [Company] (Id, [Name], UserProfileId) values (4, 'Healthcare Bluebook', 2);
--insert into [Company] (Id, [Name], UserProfileId) values (5, 'U-Haul', 2);
--set identity_insert [Company] off

set identity_insert [Role] on
insert into [Role] (Id, Title, Company, Salary, [Location], Skills, IsRejected, IsAccepted, GotInterview, ExperienceLevelId, JobTypeId, JobSiteId, UserProfileId) values (1, 'Technical Resident', 'HCA Healthcare', '$5,000/year', 'Nashville, TN', 'Tech', 'No', 'No', 'Yes', 2, 1, 1, 3); 
insert into [Role] (Id, Title, Company, Salary, [Location], Skills, IsRejected, IsAccepted, GotInterview, ExperienceLevelId, JobTypeId, JobSiteId, UserProfileId) values (2, 'Software Developer in Test', 'Healthcare Bluebook', '$700,000/hr', 'Brentwood, TN', 'Cypress', 'Ghosted', 'Ghosted', 'Ghosted', 2, 1, 3, 3);
insert into [Role] (Id, Title, Company, Salary, [Location], Skills, IsRejected, IsAccepted, GotInterview, ExperienceLevelId, JobTypeId, JobSiteId, UserProfileId) values (3, 'Software Developer', 'U-Haul', '$65,000/year', 'Phoenix, AZ', 'C#', 'Yes', 'No', 'Yes', 3, 1, 3, 3);
insert into [Role] (Id, Title, Company, Salary, [Location], Skills, IsRejected, IsAccepted, GotInterview, ExperienceLevelId, JobTypeId, JobSiteId, UserProfileId) values (4, 'Associate Software Integration Programmer', 'MeridianLink', '$57-65k', 'Costa Mesa, CA', 'KQL', 'No', 'No', 'Yes', 2, 1, 3, 3);
insert into [Role] (Id, Title, Company, Salary, [Location], Skills, IsRejected, IsAccepted, GotInterview, ExperienceLevelId, JobTypeId, JobSiteId, UserProfileId) values (5, '.NET API Developer', 'National General', '$70k/year', 'Nashville, TN', '.NET', 'Yes', 'No', 'No', 3, 1, 3, 3);
set identity_insert [Role] off