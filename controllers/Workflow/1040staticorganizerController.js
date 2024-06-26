const StaticOrganizer = require('../../models/Workflow/1040staticorganizer');
const mongoose = require("mongoose");

//get all StaticOrganizer
const getStaticOrganizers = async (req, res) => {
    try {
        const staticOrganizer = await StaticOrganizer.find({}).sort({ createdAt: -1 });
        res.status(200).json({ message: "Static Organizer retrieved successfully", staticOrganizer });

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

//Get a single staticOrganizer
const getStaticOrganizer = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid static Organizer Id" });
    }

    try {
        const staticOrganizer = await StaticOrganizer.findById(id);

        if (!staticOrganizer) {
            return res.status(404).json({ error: "No such Static Organizer" });
        }

        res.status(200).json({ message: "Static Organizer retrieved successfully", staticOrganizer });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error.message)
    }
};



//POST a new StaticOrganizer 
const createStaticOrganizer = async (req, res) => {
    const { account,
    CalendarYear,
    IsFirstYearTax,
    FillingStatus,
    PersonalDetails,
    PhoneNumberEmailAddressandOccupation,
    HomeAddress,
    BankDetails,
    FirstYearTaxFilingInUSA,
    PreviousYearsTax,
    DependentStayOutsideUS,
    NameNumberOfMonthsofDependent,
    HealthInsurance,
    uploadform1095A,
    MemberDontHaveInsurance,
    IPPin,
    HSA,
    MoneyWithdrawFromHSAAccount,
    EstimatedTaxPayments,
    CRYPTO,
    FBAR,
    FATCA,
    ValidID,
    UploadID,
    AnyRelocationDuringTaxYear ,
    ListallDatesToFromStateCountry ,
    AnyunReimbursedMovingExpenses,
    SelectallFormsThatApplyForYou,
    SelectFormsThatApplyForYou,
    SelectallthatApplicable,


    CryptoQuantity ,

   OwnahomeSelectAllthatApplicable,

   
    IRAContributionsDistributionsSelectallthatapplicable,
    AmountTransferredFromIRAtoRothIRA,
    UploadIRAContributiondocuments,
    WithdrawMoneyFroYourIRAAccount,

    
    HybridCarPurchaseSolarInstallationSelectThatApplicable,
    UploadHybridCarorSolarinstallationrelatedDocuments,
  
    DayCareExpenses1ChildName,
    TotalDaycareExpenses1,
    DaycareProviderInformation1,
    UploadDaycareExpenseReceipts1,

   
    DayCareExpenses2ChildName,
    TotalDaycareExpenses2,
    DaycareProviderInformation2,
    UploadDaycareExpenseReceipts2,

 

    DayCareExpenses3ChildName,
    TotalDaycareExpenses3,
    DaycareProviderInformation3,
    UploadDaycareExpenseReceipts3,
    
    NewFamilymemberadded1,
    UploadNewFamilymemberrelatedDocuments1,

    
    NewFamilymemberadded2,
    UploadNewFamilymemberrelatedDocuments2,

    
    PropertySale1,
    PropertySale1SelectThatApplicable,
    ForeignCountryPropertyPleaseListThePurchaseDatePriceSaleDatePriceTaxesExpenses,
    UploadPropertySaleRelatedDocuments,
    IsThisYourPRIMARYHome,
    Howlongyouhavestayedinthishomeduringthelast5years,
    ShareanyadditionaldetailsaboutthisPropertySale,

 
    RentalIncome,
    RentalExpenses,

   
    DoyouwantmetofileFBARFATCA,
    ProvideTheMaximumBalance,

 
    EducationRelatedExpensesSelectallthatareapplicable,
    For1099TSpecifyWhetherStudentIsDoingGraduationOrUnderGraduationwhichYear,

    ITINApplicantName,
    SelectITINService,
    FirstEntryDatetoTheUS,
    BirthPlace,
    RequiredDocuments,


    BusinessName,
    BusinessAddress,
    WhatIsTheMainActivityofThisBusiness,
    WhatIsTheEIN,
    WhoOwnsTheBusiness,
    BusinessStructure,
  

    GrossReceiptsOrSales,
    ReturnsAndAllowances,
    OtherIncome,

   
    InventoryAtBeginningOfTheYear,
    CostOfItemsForPersonalUse,
    CostOfLabor,
    MaterialsAndSupplies,
    OtherCostOfGoodsSold,
    InventoryAtEndOfTheYear,

    CarExpensesInThisYear,
    WhenDidYouPlaceYourVehicleServiceForBusinessPurposes,
    NumberOfMilesUsedOverYearForBusiness,
    IsYourOfficeBasedOutOfYourHome,
    TotalAreaOfTheHouse,
    AreaBusinessPortion,
    Accounting,
    Advertising,
    BankCharges,
    BusinessLicenses,
    Commissions,
    ContractLabor,
    DeliveryandFreight,
    DuesandSubscriptions,
    EmployeeBenefitPrograms,
    Insurance,
    MortgageInterest,
    OtherInterest,
    Janitorial,
    LaundryCleaning,
    LegalAndProfessional,
    Miscellaneous,
    OfficeExpense,
    OutsideServices,
    ParkingAndTolls,
    Postage,
    Printing,
    RentOther,
    RentBuildings,
    Repairs,
    Security,
    Supplies,
    TaxesRealEstate,
    TaxesPayroll,
    TaxesSalesTaxInGrossReceipts,
    TaxesOther,
    Telephone,
    Tools,
    Travel,
    MealsAndEntertainmentInFull,
    Uniforms,
    Wages,
    OtherExpenses,



    SalesTax,
    GIFT ,
    OtherTaxRelatedDocuments,
    AlimonyAmount ,
    AdditionalNotes1,
    AdditionalNotes2,
    active } = req.body;

    try {
        // Check if a task template with similar properties already exists

            const newStaticOrganizer = await StaticOrganizer.create({
                account,
                CalendarYear,
                IsFirstYearTax,
                FillingStatus,
                PersonalDetails,
                PhoneNumberEmailAddressandOccupation,
                HomeAddress,
                BankDetails,
                FirstYearTaxFilingInUSA,
                PreviousYearsTax,
                DependentStayOutsideUS,
                NameNumberOfMonthsofDependent,
                HealthInsurance,
                uploadform1095A,
                MemberDontHaveInsurance,
                IPPin,
                HSA,
                MoneyWithdrawFromHSAAccount,
                EstimatedTaxPayments,
                CRYPTO,
                FBAR,
                FATCA,
                ValidID,
                UploadID,
                AnyRelocationDuringTaxYear ,
                ListallDatesToFromStateCountry ,
                AnyunReimbursedMovingExpenses,
                SelectallFormsThatApplyForYou,
                SelectFormsThatApplyForYou,
                SelectallthatApplicable,

                CryptoQuantity ,

                OwnahomeSelectAllthatApplicable,
             
                
                 IRAContributionsDistributionsSelectallthatapplicable,
                 AmountTransferredFromIRAtoRothIRA,
                 UploadIRAContributiondocuments,
                 WithdrawMoneyFroYourIRAAccount,
             
                 
                 HybridCarPurchaseSolarInstallationSelectThatApplicable,
                 UploadHybridCarorSolarinstallationrelatedDocuments,
               
                 DayCareExpenses1ChildName,
                 TotalDaycareExpenses1,
                 DaycareProviderInformation1,
                 UploadDaycareExpenseReceipts1,
             
                
                 DayCareExpenses2ChildName,
                 TotalDaycareExpenses2,
                 DaycareProviderInformation2,
                 UploadDaycareExpenseReceipts2,
             
              
             
                 DayCareExpenses3ChildName,
                 TotalDaycareExpenses3,
                 DaycareProviderInformation3,
                 UploadDaycareExpenseReceipts3,
                 
                 NewFamilymemberadded1,
                 UploadNewFamilymemberrelatedDocuments1,
             
                 
                 NewFamilymemberadded2,
                 UploadNewFamilymemberrelatedDocuments2,
             
                 
                 PropertySale1,
                 PropertySale1SelectThatApplicable,
                 ForeignCountryPropertyPleaseListThePurchaseDatePriceSaleDatePriceTaxesExpenses,
                 UploadPropertySaleRelatedDocuments,
                 IsThisYourPRIMARYHome,
                 Howlongyouhavestayedinthishomeduringthelast5years,
                 ShareanyadditionaldetailsaboutthisPropertySale,
             
              
                 RentalIncome,
                 RentalExpenses,
             
                
                 DoyouwantmetofileFBARFATCA,
                 ProvideTheMaximumBalance,
             
              
                 EducationRelatedExpensesSelectallthatareapplicable,
                 For1099TSpecifyWhetherStudentIsDoingGraduationOrUnderGraduationwhichYear,
             
                 ITINApplicantName,
                 SelectITINService,
                 FirstEntryDatetoTheUS,
                 BirthPlace,
                 RequiredDocuments,
             
             
                 BusinessName,
                 BusinessAddress,
                 WhatIsTheMainActivityofThisBusiness,
                 WhatIsTheEIN,
                 WhoOwnsTheBusiness,
                 BusinessStructure,
               
             
                 GrossReceiptsOrSales,
                 ReturnsAndAllowances,
                 OtherIncome,
             
                
                 InventoryAtBeginningOfTheYear,
                 CostOfItemsForPersonalUse,
                 CostOfLabor,
                 MaterialsAndSupplies,
                 OtherCostOfGoodsSold,
                 InventoryAtEndOfTheYear,
             
                 CarExpensesInThisYear,
                 WhenDidYouPlaceYourVehicleServiceForBusinessPurposes,
                 NumberOfMilesUsedOverYearForBusiness,
                 IsYourOfficeBasedOutOfYourHome,
                 TotalAreaOfTheHouse,
                 AreaBusinessPortion,
                 Accounting,
                 Advertising,
                 BankCharges,
                 BusinessLicenses,
                 Commissions,
                 ContractLabor,
                 DeliveryandFreight,
                 DuesandSubscriptions,
                 EmployeeBenefitPrograms,
                 Insurance,
                 MortgageInterest,
                 OtherInterest,
                 Janitorial,
                 LaundryCleaning,
                 LegalAndProfessional,
                 Miscellaneous,
                 OfficeExpense,
                 OutsideServices,
                 ParkingAndTolls,
                 Postage,
                 Printing,
                 RentOther,
                 RentBuildings,
                 Repairs,
                 Security,
                 Supplies,
                 TaxesRealEstate,
                 TaxesPayroll,
                 TaxesSalesTaxInGrossReceipts,
                 TaxesOther,
                 Telephone,
                 Tools,
                 Travel,
                 MealsAndEntertainmentInFull,
                 Uniforms,
                 Wages,
                 OtherExpenses,
                 SalesTax,
                GIFT ,
                OtherTaxRelatedDocuments,
                AlimonyAmount ,
                AdditionalNotes1,
                AdditionalNotes2,
                active 
            });
        
        return res.status(201).json({ message: "Static Organizer created successfully", newStaticOrganizer });

    } catch (error) {
        console.error("Error creating Static Organizer:", error);
        return res.status(500).json({ error: "Error creating Static Organizer" });
    }
};


//delete a StaticOrganizer

const deleteStaticOrganizer = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid Static Organizer ID" });
    }

    try {
        const deletedStaticOrganizer = await StaticOrganizer.findByIdAndDelete({ _id: id });
        if (!deletedStaticOrganizer) {
            return res.status(404).json({ error: "No such Static Organizer" });
        }
        res.status(200).json({ message: "Static Organizer deleted successfully", deletedStaticOrganizer });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

//update a new StaticOrganizer 
const updateStaticOrganizer = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid Static Organizer ID" });
    }

    try {
        const updatedStaticOrganizer = await StaticOrganizer.findOneAndUpdate(
            { _id: id },
            { ...req.body },
            { new: true }
        );

        if (!updatedStaticOrganizer) {
            return res.status(404).json({ error: "No such Static Organizer" });
        }

        res.status(200).json({ message: "Static Organizer Updated successfully", updatedStaticOrganizer });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// const getJobList = async (req, res) => {
//     try {
//         const jobs = await Job.find()
//             .populate({ path: 'accounts', model: 'account' })
//             .populate({ path: 'pipeline', model: 'pipeline', populate: { path: 'stages', model: 'stage' } })
//             .populate({ path: 'jobassignees', model: 'User' });

//         const jobList = [];

//         for (const job of jobs) {
//             // Fetching the pipeline document for each job
//             const pipeline = await Pipeline.findById(job.pipeline);
            

//             if (!pipeline) {
//                 // If pipeline is not found, skip this job
//                 continue;
//             }

//             const jobAssigneeNames = job.jobassignees.map(assignee => assignee.username);
//             const accountsname = job.accounts.map(account => account.accountName);

//             let stageNames = null;

//             if (Array.isArray(job.stageid)) {
//                 // Iterate over each stage ID and find the corresponding stage name
//                 stageNames = [];
//                 for (const stageId of job.stageid) {
//                     const matchedStage = pipeline.stages.find(stage => stage._id.equals(stageId));
//                     if (matchedStage) {
//                         stageNames.push(matchedStage.name);
//                     }
//                 }
//             } else {
//                 // If job.stageid is not an array, convert it to an array containing a single element
//                 const matchedStage = pipeline.stages.find(stage => stage._id.equals(job.stageid));
//                 if (matchedStage) {
//                     stageNames = [matchedStage.name];
//                 }
//             }

//             jobList.push({
//                 id: job._id,
//                 Name: job.jobname,
//                 JobAssignee: jobAssigneeNames,
//                 Pipeline: pipeline ? pipeline.pipelineName : null,
//                 Stage: stageNames,
//                 Account: accountsname,
//                 StartDate: job.startdate,
//                 DueDate: job.enddate,
//                 Priority: job.priority,
//                 Description: job.description,
//                 StartsIn: job.startsin ? `${job.startsin} ${job.startsinduration}` : null,
//                 DueIn: jobs.duein ? `${jobs.duein} ${jobs.dueinduration}` : null,     
//                 createdAt: job.createdAt,
//                 updatedAt: job.updatedAt,
//             });
//         }
       
//         res.status(200).json({ message: "JobTemplate retrieved successfully", jobList });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// const getJobListbyid = async (req, res) => {
//     const { id } = req.params;
//     try {
//         const jobs = await Job.findById(id)
//               .populate({
//                 path: 'accounts',
//                 model: 'account',
//                 populate: {
//                     path: 'tags', 
//                     model: 'tag' 
//                 }
//             })
//             .populate({ path: 'pipeline', model: 'pipeline', populate: { path: 'stages', model: 'stage' } })
//             .populate({ path: 'jobassignees', model: 'User' });

       
//         const pipeline = await Pipeline.findById(jobs.pipeline);

//         let stageNames = null;

//         if (Array.isArray(jobs.stageid)) {
            
//             stageNames = [];
//             for (const stageId of jobs.stageid) {
//                 const matchedStage = pipeline.stages.find(stage => stage._id.equals(stageId));
//                 if (matchedStage) {
//                     stageNames.push({ name: matchedStage.name, _id: matchedStage._id });
//                 }
//             }
//         } else {
           
//             const matchedStage = pipeline.stages.find(stage => stage._id.equals(jobs.stageid));
//             if (matchedStage) {
//                 stageNames = [{ name: matchedStage.name, _id: matchedStage._id }];
//             }
//         }

//         const jobList = ({
//             id: jobs._id,
//             Name: jobs.jobname,
//             JobAssignee: jobs.jobassignees,
//             Pipeline: {
//                 _id: pipeline._id, 
//                 Name: pipeline.pipelineName
//             },
//             Stage: stageNames,
//             Account: jobs.accounts,
//             StartDate: jobs.startdate,
//             DueDate: jobs.enddate,
//             StartsIn: jobs.startsin ? `${jobs.startsin} ${jobs.startsinduration}` : null,
//             DueIn: jobs.duein ? `${jobs.duein} ${jobs.dueinduration}` : null,
//             Priority: jobs.priority,

//             Description: jobs.description,
//             createdAt: jobs.createdAt,
//             updatedAt: jobs.updatedAt,
//         });


//         res.status(200).json({ message: "Job retrieved successfully", jobList });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// const updatestgeidtojob = async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(404).json({ error: "Invalid Job ID" });
//     }

//     try {
//         const updatedJob = await Job.findOneAndUpdate(
//             { _id: id },
//             { ...req.body },
//             { new: true }
//         );

//         if (!updatedJob) {
//             return res.status(404).json({ error: "No such Job" });
//         }

//         res.status(200).json({ message: "Stage Id Updated successfully", updatedJob });
//     } catch (error) {
//         return res.status(500).json({ error: error.message });
//     }
// };



module.exports = {
    createStaticOrganizer,
    getStaticOrganizers,
    getStaticOrganizer,
    deleteStaticOrganizer,
    updateStaticOrganizer,
    // getJobList,
    // getJobListbyid,
    // updatestgeidtojob,
}