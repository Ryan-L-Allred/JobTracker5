USE [master]

IF db_id('JobTracker5') IS NULL
		CREATE DATABASE [JobTracker5]
GO

USE [JobTracker5]
GO

DROP TABLE IF EXISTS [CompanyRole];
DROP TABLE IF EXISTS [Role];
--DROP TABLE IF EXISTS [Company];
DROP TABLE IF EXISTS [ExperienceLevel];
DROP TABLE IF EXISTS [JobType];
DROP TABLE IF EXISTS [JobSite];
DROP TABLE IF EXISTS [UserProfile];
DROP TABLE IF EXISTS [UserType];

CREATE TABLE [UserType] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] nvarchar(255) NOT NULL
)
GO

CREATE TABLE [UserProfile] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] nvarchar(255) NOT NULL,
  [Email] nvarchar(255) NOT NULL,
  [UserTypeId] int NOT NULL,
  [FirebaseUserId] nvarchar(255) UNIQUE NOT NULL
)
GO

--CREATE TABLE [Company] (
--  [Id] int PRIMARY KEY IDENTITY(1, 1),
--  [Name] nvarchar(255) NOT NULL,
--  [UserProfileId] int NOT NULL
--)
--GO

CREATE TABLE [Role] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Title] nvarchar(255) NOT NULL,
  --[CompanyId] int NOT NULL,
  [Company] nvarchar(255) NOT NULL,
  [Salary] nvarchar(255) NOT NULL,
  [Location] nvarchar(255) NOT NULL,
  [Skills] nvarchar(255),
  [IsRejected] nvarchar(255) NOT NULL,
  [IsAccepted] nvarchar(255) NOT NULL,
  [GotInterview] nvarchar(255) NOT NULL,
  [ExperienceLevelId] int NOT NULL,
  [JobTypeId] int NOT NULL,
  [JobSiteId] int NOT NULL,
  [UserProfileId] int NOT NULL
)
GO

CREATE TABLE [ExperienceLevel] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] nvarchar(255) NOT NULL
)
GO

CREATE TABLE [JobType] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] nvarchar(255) NOT NULL
)
GO

CREATE TABLE [JobSite] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] nvarchar(255) NOT NULL
)
GO

--CREATE TABLE [CompanyRole] (
--  [Id] int PRIMARY KEY IDENTITY(1, 1),
--  [RoleId] int NOT NULL,
--  [CompanyId] int NOT NULL
--)
--GO

ALTER TABLE [UserProfile] ADD FOREIGN KEY ([UserTypeId]) REFERENCES [UserType] ([Id])
GO

--ALTER TABLE [Company] ADD FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
--GO

ALTER TABLE [Role] ADD FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
GO

ALTER TABLE [Role] ADD FOREIGN KEY ([ExperienceLevelId]) REFERENCES [ExperienceLevel] ([Id])
GO

--ALTER TABLE [Role] ADD FOREIGN KEY ([CompanyId]) REFERENCES [Company] ([Id])
--GO

ALTER TABLE [Role] ADD FOREIGN KEY ([JobTypeId]) REFERENCES [JobType] ([Id])
GO

ALTER TABLE [Role] ADD FOREIGN KEY ([JobSiteId]) REFERENCES [JobSite] ([Id])
GO

--ALTER TABLE [CompanyRole] ADD FOREIGN KEY ([CompanyId]) REFERENCES [Company] ([Id])
--GO

--ALTER TABLE [CompanyRole] ADD FOREIGN KEY ([RoleId]) REFERENCES [Role] ([Id])
--GO