/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');

const organizations = ['Lendsqr', 'Irorun', 'Lendstar'];
const statuses = ['Active', 'Inactive', 'Pending', 'Blacklisted'];
const genders = ['Male', 'Female'];
const maritalStatuses = ['Single', 'Married', 'Divorced'];
const residences = ['Parent\'s Apartment', 'Own Apartment', 'Rented Apartment'];
const educationLevels = ['B.Sc', 'M.Sc', 'PhD', 'O.N.D', 'H.N.D'];
const employmentStatuses = ['Employed', 'Unemployed', 'Self-Employed'];
const sectors = ['FinTech', 'Health', 'Education', 'Agriculture', 'Real Estate'];
const relationships = ['Sister', 'Brother', 'Father', 'Mother', 'Friend', 'Spouse'];

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const generatePhoneNumber = () => `0${getRandomInt(7000000000, 9099999999)}`;
const generateBvn = () => `${getRandomInt(10000000000, 99999999999)}`;
const generateDate = () => {
    const start = new Date(2018, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString();
};
const generateName = () => {
    const firstNames = ['Grace', 'Debby', 'Tosin', 'Adedeji', 'John', 'Sarah', 'Michael', 'Emma', 'David', 'Olivia'];
    const lastNames = ['Effiom', 'Ogana', 'Dokunmu', 'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller'];
    return `${getRandomItem(firstNames)} ${getRandomItem(lastNames)}`;
};

const usedIds = new Set();
const generateUserId = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id;
    do {
        let suffix = '';
        for (let i = 0; i < 8; i++) {
            suffix += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        id = `LSQ${suffix}`;
    } while (usedIds.has(id));
    usedIds.add(id);
    return id;
};

const users = Array.from({ length: 500 }, () => {
    const name = generateName();
    const firstName = name.split(' ')[0].toLowerCase();
    const organization = getRandomItem(organizations);
    
    return {
        id: generateUserId(),
        organization,
        username: name,

        email: `${firstName}@${organization.toLowerCase()}.com`,
        phoneNumber: generatePhoneNumber(),
        dateJoined: generateDate(),
        status: getRandomItem(statuses),
        
        // Detailed Information
        personalInformation: {
            fullName: name,
            phoneNumber: generatePhoneNumber(),
            emailAddress: `${firstName}@gmail.com`,
            bvn: generateBvn(),
            gender: getRandomItem(genders),
            maritalStatus: getRandomItem(maritalStatuses),
            children: getRandomInt(0, 5).toString(),
            typeOfResidence: getRandomItem(residences)
        },
        educationAndEmployment: {
            levelOfEducation: getRandomItem(educationLevels),
            employmentStatus: getRandomItem(employmentStatuses),
            sectorOfEmployment: getRandomItem(sectors),
            durationOfEmployment: `${getRandomInt(1, 10)} years`,
            officeEmail: `${firstName}@${organization.toLowerCase()}.com`,
            monthlyIncome: [getRandomInt(50000, 200000), getRandomInt(200000, 500000)],
            loanRepayment: getRandomInt(10000, 50000).toString()
        },
        socials: {
            twitter: `@${firstName}_tw`,
            facebook: name,
            instagram: `@${firstName}_ig`
        },
        guarantor: {
            fullName: generateName(),
            phoneNumber: generatePhoneNumber(),
            emailAddress: `${generateName().split(' ')[0].toLowerCase()}@gmail.com`,
            relationship: getRandomItem(relationships)
        },
        generalDetails: {
            tier: getRandomInt(1, 3),
            accountBalance: getRandomInt(10000, 500000),
            bankAccountNumber: `${getRandomInt(1000000000, 9999999999)}`,
            bankName: 'Providus Bank'
        },
        documents: {
            bvn: generateBvn(),
            stateOfOrigin: 'Lagos State',
            lga: 'Ikeja',
            nin: `${getRandomInt(10000000000, 99999999999)}`,
            identityCard: "Driver's License",
            signatureUrl: '/images/signature.png'
        },
        bankDetails: {
            bankName: 'Providus Bank',
            accountNumber: `${getRandomInt(1000000000, 9999999999)}`,
            accountType: 'Savings Account',
            bvn: generateBvn(),
            bvnVerificationStatus: 'Verified'
        },
        loans: [
            { id: "L-2481", amount: 25000, tenure: "3 months", dateApplied: "2026-02-12", status: "Completed" },
            { id: "L-2895", amount: 50000, tenure: "6 months", dateApplied: "2026-05-18", status: "Active" }
        ],
        savings: {
            accountBalance: getRandomInt(10000, 500000),
            savingsGoal: "New Laptop",
            goalAmount: 850000,
            currentSaved: getRandomInt(50000, 200000),
            interestRate: "8.5% p.a."
        },
        appAndSystem: {
            lastLogin: generateDate(),
            deviceType: getRandomItem(["iPhone 13 Pro", "Samsung Galaxy S22", "Pixel 6 Pro", "MacBook Pro"]),
            ipAddress: `192.168.${getRandomInt(1, 254)}.${getRandomInt(1, 254)}`,
            appVersion: "v1.2.0",
            platformStatus: "Active"
        }
    };
});

fs.writeFileSync('app/api/users/db.json', JSON.stringify(users, null, 2));
console.log('Successfully generated 500 users in app/api/users/db.json');
