const mongoose = require('mongoose');

const StaticOrganizerSchema = new mongoose.Schema({
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'accountModel',
    },
    //Section 1
    CalendarYear: {
        type: String,
    },
    IsFirstYearTax: {
        type: String,
    },
    //Section 2
    FillingStatus: {
        type: String,
    },
    PersonalDetails: {
        type: String,
    },
    PhoneNumberEmailAddressandOccupation: {
        type: String,
    },
    HomeAddress: {
        type: String,
    },
    BankDetails: {
        type: String,
    },
    FirstYearTaxFilingInUSA: {
        type: String,
    },
    PreviousYearsTax: {
        type: String,
    },
    //Section 3
    DependentStayOutsideUS: {
        type: String,
    },
    NameNumberOfMonthsofDependent: {
        type: String,
    },
    HealthInsurance: {
        type: String,
    },
    uploadform1095A: {
        type: String,
    },
    MemberDontHaveInsurance: {
        type: String,
    },
    IPPin: {
        type: String,
    },
    HSA: {
        type: String,
    },
    MoneyWithdrawFromHSAAccount: {
        type: String,
    },
    EstimatedTaxPayments: {
        type: String,
    },
    CRYPTO: {
        type: String,
    },
    FBAR: {
        type: String,
    },
    FATCA: {
        type: String,
    },
    ValidID: {
        type: String,
    },
    UploadID: {
        type: String,
    },
    AnyRelocationDuringTaxYear: {
        type: String,
    },
    ListallDatesToFromStateCountry: {
        type: String,
    },
    AnyunReimbursedMovingExpenses: {
        type: String,
    },
    AdditionalInfoSelectallFormsThatApplyForYou: [{
        type: String,
    }],

    //Section 4
    IncomeSourceSelectFormsThatApplyForYou: [{
        type: String,
    }],

    //Section 5
    StocksAndCryptoSelectallthatApplicable: [{
        type: String,
    }],
    CryptoQuantity: {
        type: String,
    },

    //Section 6
    OwnahomeSelectAllthatApplicable: [{
        type: String,
    }],

    //Section 7

    IRAContributionsDistributionsSelectallthatapplicable: [{
        type: String,
    }],
    AmountTransferredFromIRAtoRothIRA: {
        type: String,
    },
    UploadIRAContributiondocuments: {
        type: String,
    },
    WithdrawMoneyFroYourIRAAccount: {
        type: String,
    },

    // Section 8
    HybridCarPurchaseSolarInstallationSelectThatApplicable: [{
        type: String,
    }],

    UploadHybridCarorSolarinstallationrelatedDocuments: {
        type: String,
    },
    //Section 9
    DayCareExpenses1ChildName: {
        type: String,
    },
    TotalDaycareExpenses1: {
        type: String,
    },
    DaycareProviderInformation1: {
        type: String,
    },
    UploadDaycareExpenseReceipts1: {
        type: String,
    },

    //Section 10
    DayCareExpenses2ChildName: {
        type: String,
    },
    TotalDaycareExpenses2: {
        type: String,
    },
    DaycareProviderInformation2: {
        type: String,
    },
    UploadDaycareExpenseReceipts2: {
        type: String,
    },

    //Section 11

    DayCareExpenses3ChildName: {
        type: String,
    },
    TotalDaycareExpenses3: {
        type: String,
    },
    DaycareProviderInformation3: {
        type: String,
    },
    UploadDaycareExpenseReceipts3: {
        type: String,
    },
    //Section 12
    NewFamilymemberadded1: {
        type: String,
    },
    UploadNewFamilymemberrelatedDocuments1: {
        type: String,
    },

    //Section 13
    NewFamilymemberadded2: {
        type: String,
    },
    UploadNewFamilymemberrelatedDocuments2: {
        type: String,
    },

    //Section 14
    PropertySale1: {
        type: String,
    },
    PropertySale1SelectThatApplicable: {
        type: String,
    },
    ForeignCountryPropertyPleaseListThePurchaseDatePriceSaleDatePriceTaxesExpenses: {
        type: String,
    },
    UploadPropertySaleRelatedDocuments: {
        type: String,
    },
    IsThisYourPRIMARYHome: {
        type: String,
    },
    Howlongyouhavestayedinthishomeduringthelast5years: {
        type: String,
    },
    ShareanyadditionaldetailsaboutthisPropertySale: {
        type: String,
    },

    //Section 15

    RentalIncome: {
        type: String,
    },
    RentalExpenses: {
        type: String,
    },
    RentalExpenses: {
        type: String,
    },

    //Section 16
    DoyouwantmetofileFBARFATCA: {
        type: String,
    },
    ProvideTheMaximumBalance: {
        type: String,
    },

    //Section 17
    EducationRelatedExpensesSelectallthatareapplicable: {
        type: String,
    },
    For1099TSpecifyWhetherStudentIsDoingGraduationOrUnderGraduationwhichYear: {
        type: String,
    },
    //Section 18
    ITINApplicantName: {
        type: String,
    },
    SelectITINService: [{
        type: String,
    }],
    FirstEntryDatetoTheUS: {
        type: Date,
    },
    BirthPlace : {
        type: String,
    },
    RequiredDocuments : [{
        type: String,
    }],

    //Section 19

    BusinessName : {
        type: String,
    },
    BusinessAddress : {
        type: String,
    },
    WhatIsTheMainActivityofThisBusiness : {
        type: String,
    },
    WhatIsTheEIN : {
        type: String,
    },
    WhoOwnsTheBusiness  : [{
        type: String,
    }],
    BusinessStructure : {
        type: String,
    },
    BusinessStructure : {
        type: String,
    },
    //Section 20
    GrossReceiptsOrSales : {
        type: String,
    },
    ReturnsAndAllowances : {
        type: String,
    },
    OtherIncome : {
        type: Number,
    },

    //Section 21
    InventoryAtBeginningOfTheYear : {
        type: Number,
    },
    Purchases : {
        type: Number,
    },
    CostOfItemsForPersonalUse : {
        type: Number,
    },
    CostOfLabor : {
        type: Number,
    },
    MaterialsAndSupplies : {
        type: Number,
    },
    OtherCostOfGoodsSold: { 
        type: Number,
    },
    InventoryAtEndOfTheYear : {
        type: Number,
    },

    //Section 22
    CarExpensesInThisYear : {
        type: Number,
    },
    WhenDidYouPlaceYourVehicleServiceForBusinessPurposes : {
        type: Date,
    },
    NumberOfMilesUsedOverYearForBusiness : {
        type: Number,
    },
    IsYourOfficeBasedOutOfYourHome : { 
        type: String,
    },
    TotalAreaOfTheHouse : {
        type: Number,
    },
    AreaBusinessPortion : {
        type: Number,
    },
    Accounting : {
        type: Number,
    },
    BankCharges : {
        type: Number,
    },
    BusinessLicenses : {
        type: Number,
    },
    Commissions : {
        type: Number,
    },
    ContractLabor : {
        type: Number,
    },
    DeliveryandFreight : {
        type: Number,
    },
    DuesandSubscriptions : {
        type: Number,
    },
    EmployeeBenefitPrograms : {
        type: Number,
    },
    Insurance : {
        type: Number,
    },
    MortgageInterest : {
        type: Number,
    },
    OtherInterest : {
        type: Number,
    },
    Janitorial : {
        type: Number,
    },
    LaundryCleaning : {
        type: Number,
    },
    LegalAndProfessional : {
        type: Number,
    },
    Miscellaneous : {
        type: Number,
    },
    OfficeExpense : {
        type: Number,
    },
    OutsideServices : {
        type: Number,
    },
    ParkingAndTolls : {
        type: Number,
    },
    Postage : {
        type: Number,
    },
    Printing : {
        type: Number,
    },
    RentOther : {
        type: Number,
    },
    RentBuildings : {
        type: Number,
    },
    Repairs : {
        type: Number,
    },
    Security : {
        type: Number,
    },
    Supplies : {
        type: Number,
    },
    TaxesRealEstate : {
        type: Number,
    },
    TaxesPayroll : {
        type: Number,
    },
    TaxesSalesTaxInGrossReceipts : {
        type: Number,
    },
    TaxesOther : {
        type: Number,
    },
    Telephone : {
        type: Number,
    },
    Tools : {
        type: Number,
    },
    Travel : {
        type: Number,
    },
    MealsAndEntertainmentInFull : {
        type: Number,
    },
    Uniforms : {
        type: Number,
    },
    Wages : {
        type: Number,
    },
    OtherExpenses : {
        type: Number,
    },

    SalesTax: {
        type: String,
    },
    GIFT: {
        type: String,
    },
    OtherTaxRelatedDocuments: [{
        type: String,
    }],
    AlimonyAmount: {
        type: String,
    },
    AdditionalNotes1: {
        type: String,
    },
    AdditionalNotes2: {
        type: String,
    },
    active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

const StaticOrganizer = mongoose.model('StaticOrganizer', StaticOrganizerSchema);
module.exports = StaticOrganizer;
