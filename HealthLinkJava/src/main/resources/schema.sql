-- Schema for HealthLink Clinic Management System

-- Department table
CREATE TABLE DEPARTMENT (
    DId INT PRIMARY KEY IDENTITY,
    DName NVARCHAR(100) NOT NULL,
    DDescription NVARCHAR(255)
);

-- Doctor table
CREATE TABLE DOCTOR (
    DrId INT PRIMARY KEY IDENTITY,
    DrFirstName NVARCHAR(50),
    DrMiddleName NVARCHAR(50),
    DrLastName NVARCHAR(50),
    DrBirthday DATE,
    DrSex NVARCHAR(10),
    DrPhone NVARCHAR(20),
    DrAddress NVARCHAR(255),
    DrSpecialty NVARCHAR(100),
    DId INT,
    FOREIGN KEY (DId) REFERENCES DEPARTMENT(DId)
);

-- Patient table
CREATE TABLE PATIENT (
    PId INT PRIMARY KEY IDENTITY,
    PFirstName NVARCHAR(50),
    PMiddleName NVARCHAR(50),
    PLastName NVARCHAR(50),
    PBirthDate DATE,
    PSex NVARCHAR(10),
    PPhone NVARCHAR(20),
    PAddress NVARCHAR(255),
    PInsurance NVARCHAR(100)
);

-- Clinic Room table
CREATE TABLE CLINIC_ROOM (
    CRId INT PRIMARY KEY IDENTITY,
    CRName NVARCHAR(100),
    CRDescription NVARCHAR(255),
    CRStatus NVARCHAR(50)
);

-- Appointment table
CREATE TABLE APPOINTMENT (
    APId INT PRIMARY KEY IDENTITY,
    DrId INT,
    PId INT,
    CRId INT,
    APStatus NVARCHAR(50),
    APReason NVARCHAR(255),
    APDateTimes DATETIME,
    APUpdateAt DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (DrId) REFERENCES DOCTOR(DrId),
    FOREIGN KEY (PId) REFERENCES PATIENT(PId),
    FOREIGN KEY (CRId) REFERENCES CLINIC_ROOM(CRId)
);

-- Medical Record table
CREATE TABLE MEDICAL_RECORD (
    MRId INT PRIMARY KEY IDENTITY,
    DrId INT,
    PId INT,
    APId INT,
    MRDiagnosis NVARCHAR(500),
    MRMethod NVARCHAR(500),
    MRTestResult NVARCHAR(500),
    FOREIGN KEY (DrId) REFERENCES DOCTOR(DrId),
    FOREIGN KEY (PId) REFERENCES PATIENT(PId),
    FOREIGN KEY (APId) REFERENCES APPOINTMENT(APId)
);

-- Category Medicine table
CREATE TABLE CATEGORY_MEDICINE (
    CMId INT PRIMARY KEY IDENTITY,
    CMName NVARCHAR(100),
    CMQuantity INT,
    CMPrice DECIMAL(10,2),
    CMDescription NVARCHAR(255)
);

-- Prescription table
CREATE TABLE PRESCRIPTION (
    PRId INT PRIMARY KEY IDENTITY,
    MRId INT,
    PRNote NVARCHAR(255),
    PRDate DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (MRId) REFERENCES MEDICAL_RECORD(MRId)
);

-- Prescription Detail table
CREATE TABLE PRESCRIPTION_DETAIL (
    PDId INT PRIMARY KEY IDENTITY,
    PRId INT,
    CMId INT,
    PDUnitPrice DECIMAL(10,2),
    PDQuantity INT,
    PDDuration NVARCHAR(50),
    PDGuide NVARCHAR(255),
    FOREIGN KEY (PRId) REFERENCES PRESCRIPTION(PRId),
    FOREIGN KEY (CMId) REFERENCES CATEGORY_MEDICINE(CMId)
);

-- Work Schedule table
CREATE TABLE WORK_SCHEDULE (
    WSId INT PRIMARY KEY IDENTITY,
    DrId INT,
    WSDate DATE,
    WSStartTime TIME,
    WSEndTime TIME,
    FOREIGN KEY (DrId) REFERENCES DOCTOR(DrId)
);

-- Invoice table
CREATE TABLE INVOICE (
    IId INT PRIMARY KEY IDENTITY,
    APId INT,
    PRId INT,
    ITotal DECIMAL(10,2),
    IPaymentMethod NVARCHAR(50),
    IDate DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (APId) REFERENCES APPOINTMENT(APId),
    FOREIGN KEY (PRId) REFERENCES PRESCRIPTION(PRId)
);

-- Insert sample data
INSERT INTO DEPARTMENT (DName, DDescription) VALUES ('Cardiology', 'Heart related treatments');
INSERT INTO DEPARTMENT (DName, DDescription) VALUES ('Neurology', 'Brain and nervous system');

INSERT INTO DOCTOR (DrFirstName, DrLastName, DrSpecialty, DId) VALUES ('Sarah', 'Miller', 'Cardiology', 1);
INSERT INTO DOCTOR (DrFirstName, DrLastName, DrSpecialty, DId) VALUES ('James', 'Wilson', 'Neurology', 2);

INSERT INTO PATIENT (PFirstName, PLastName, PPhone) VALUES ('Alice', 'Johnson', '123456789');
INSERT INTO PATIENT (PFirstName, PLastName, PPhone) VALUES ('Robert', 'Smith', '987654321');

INSERT INTO CLINIC_ROOM (CRName, CRStatus) VALUES ('Room 101', 'Available');
INSERT INTO CLINIC_ROOM (CRName, CRStatus) VALUES ('Room 102', 'Available');