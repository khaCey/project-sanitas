CREATE TABLE `Patient` (
    `patientID` INT,
	`firstName` CHAR(30),
	`lastName` CHAR(30),
	`dateOfBirth` DATE,
	`dateOfCreation` DATE,
	`listOfMedications` INT,
	`listOfDiagnoses` INT,

    PRIMARY KEY (patientID),
    FOREIGN KEY (listOfMedications) REFERENCES listMedications(listID), 
    FOREIGN KEY (listOfDiagnoses) REFERENCES listDiagnoses(historyID)
);

CREATE TABLE `listMedications` (
    `listID` INT,
    `medication` INT,
	`dateOfPrescription` DATE,

    PRIMARY KEY (listID),
    FOREIGN KEY (medication) REFERENCES medications(medicationID)
);

CREATE TABLE `listDiagnoses` (
    `historyID` INT,
    `diagnosis` INT,
    `dateOfDiagnosis` DATE,

    PRIMARY KEY (historyID),
    FOREIGN KEY (diagnosis) REFERENCES diagnoses(diagnosisID)
);

CREATE TABLE `diagnoses` (
    `diagnosisID` INT,
    `diagnosis` CHAR(30),

    PRIMARY KEY (diagnosisID)
);


CREATE TABLE `medications` (
    `medicationID` INT,
    `genericName` CHAR(30),
    `brand` CHAR(30),
	`brandName` CHAR(30),

    PRIMARY KEY (medicationID)
);




