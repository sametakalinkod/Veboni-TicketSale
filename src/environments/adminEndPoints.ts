export const adminEndPoints = {
    auth: {
        forgotPassword: 'api/auth/forgot-password',
        resetPassword: 'api/auth/reset-password',
        signIn: 'identity/connect/token',
        signInUsingToken: 'api/auth/refresh-access-token',
        signUp: 'identity/api/user/SignUp',
        unlockSession: 'api/auth/unlock-session',
    },
    general: {
        getCurrencyList: 'account/settings/GetCurrencyList',
        getLanguageList: 'account/settings/GetLanguageList',
    },
    management: {
        generateActivation: 'identity/api/account/create',
        complateActivation: 'identity/api/account/ComplateSubscription', //'identity/api/account/ComplateActivation',
        checkActivationQuery: 'identity/api/account/CheckActivationQuery',
        getTimeZone: 'identity/api/timezone/GetTimeZoneOwners',
    },
    timezone: {
        getTimeZones: 'identity/api/timezone/GetTimeZones', //'account/timezone/GetTimeZones',
        getTimeZoneOwners: 'identity/api/timezone/GetTimeZoneOwners', // 'account/timezone/GetTimeZoneOwners'
    },
    scanner: {
        doScan: "pms/scanner/TriggerScan",
        getDevices: "account/appdevices/GetAppDevices",
        getScannerGuestInfo: "pms/scanner/GetScannerGuestInfo",
        updateCustomerByScannerInfo: "pms/scanner/UpdateCustomerByScannerInfo"

    },
    VeboniReport: {
        createVeboniReport: "pms/vreport/CreateVReport",
        getVeboniReports: "pms/vreport/GetVReport",
        updateVeboniReport: "pms/vreport/UpdateVReport",
        deleteVeboniReport: "pms/vreport/DeleteVReport",
        GetRapQuery: "pms/vreport/GetRapQuery"
    },
    PmsMaid: {
        getPmsMaid: "pms/Maid/GetMaid",
        createPmsMaid: "pms/Maid/CreateMaid",
        updatePmsMaid: "pms/Maid/UpdateMaid",
        deletePmsMaid: "pms/Maid/DeleteMaid",
        GetByIdPmsMaid: "pms/Maid/GetByIdMaid",
    },
    PmsRoomClean: {
        getPmsPmsRoomClean: "pms/PmsRoomClean/GetPmsRoomClean",
        createPmsPmsRoomClean: "pms/PmsRoomClean/CreatePmsRoomClean",
        updatePmsPmsRoomClean: "pms/PmsRoomClean/UpdatePmsRoomClean",
        deletePmsPmsRoomClean: "pms/PmsRoomClean/DeletePmsRoomClean",
    },
    cheff: {
        getcheffs: 'pms/cheff/GetCheffs',
        createcheff: 'pms/cheff/CreateCheff',
        updatecheff: 'pms/cheff/UpdateCheff',
        deletecheff: 'pms/cheff/DeleteCheff'
    },
    cheffsection: {
        getcheffsections: 'pms/cheffsection/GetCheffSections',
        createcheffsection: 'pms/cheffsection/CreateCheffSection',
        updatecheffsection: 'pms/cheffsection/UpdateCheffSection',
        deletecheffsection: 'pms/cheffsection/DeleteCheffSection',
        getByIdcheffsection: 'pms/cheffsection/GetByIdCheffSection'
    },
    hkconnection: {
        getAll: 'pms/HkConnection/GetAllHkConnection',
        saveAll: 'pms/HkConnection/PostHkConnection',

    },
    HkDiscrepancy: {
        getHkDiscrepancy: "pms/HkDiscrepancy/GetHkDiscrepancy",
        createHkDiscrepancy: "pms/HkDiscrepancy/CreateHkDiscrepancy",
        updateHkDiscrepancy: "pms/HkDiscrepancy/UpdateHkDiscrepancy",
        deleteHkDiscrepancy: "pms/HkDiscrepancy/DeleteHkDiscrepancy",
        getHkDiscrepancyRecord: "pms/HkDiscrepancy/GetHkDiscrepancyRecord",
    },
    hkcommon: {
        getproperties: 'pms/hkcommon/GetProperties'
    },
    PmsMaidSection: {
        getPmsMaidSection: "pms/MaidSection/GetMaidSection",
        createPmsMaidSection: "pms/MaidSection/CreateMaidSection",
        updatePmsMaidSection: "pms/MaidSection/UpdateMaidSection",
        deletePmsMaidSection: "pms/MaidSection/DeleteMaidSection",
        GetByIdPmsMaid: "pms/MaidSection/GetByIdMaidSection",

    },
    properties: {
        getTimeZone: 'identity/api/timezone/GetTimeZoneOwners',
        createProperty: 'account/account/CreateProperty',
        getProperty: 'account/account/GetProperty',
        getPropertiesDepartmentAndFolios: 'account/account/GetPropertiesDepartmentAndFolios',
        getProperties: 'account/account/GetProperties',
        getPropertiesForUsers: 'account/account/GetPropertiesForUsers',
        getPropertiesWithRevenueCenters:
            'account/account/GetPropertiesWithRevenueCenters',
        deleteProperty: 'account/account/DeleteProperty',
        updateProperty: 'account/account/UpdateProperty',
        getPropertiesAndRevenueCenters:
            'account/account/GetPropertiesAndRevenueCenters',
        getOpenCheckTable: 'integration/integration/GetOpenCheck',
        exchangeControl: 'integration/integration/ExchangeControl',
        createExchangeRateFromservice:
            'integration/integration/CreateExchangeRate',
        endOfdayControl: 'integration/integration/EndOfDayCommand',
        getPropertyDefination: 'account/account/GetPropertyDefinations',
        getHotelDefinitions: 'account/account/GetHotelDefinitions',
        updatePropertyForSinTransfer:
            'account/account/UpdatePropertyForSinTransfer',
        getPropertyForSinTransfer: 'account/account/GetPropertyForSinTransfer',
        getPropertyShortList: 'account/account/GetPropertyShortList',
        getPropertyCurrAccountMaps:
            'account/account/GetPropertyCurrAccountMaps',
        getPropertyHotelPeriodOwners:
            'account/account/GetPropertyHotelPeriodOwners',
        getPropertyHotelPeriodDetails:
            'account/account/GetPropertyHotelPeriodDetails',
        getHotelPeriod:
            'account/account/GetHotelPeriod',
        getAccommodationMultipliers: 'account/account/getAccommodationMultipliers',
        getPropertyGroups: 'account/account/getPropertyGroups',
        getPropertyGroupsForChart: 'account/account/getPropertyGroupsForChart',
        createPropertyGroup: 'account/account/CreatePropertyGroup',
        updatePropertyGroup: 'account/account/UpdatePropertyGroup',
        getPropertyDepartments: 'account/account/GetPropertyDepartments',
    },
    employees: {
        getEmployees: 'account/employee/GetEmployees',
        createEmployee: 'account/employee/CreateEmployee',
        deleteEmployee: 'account/employee/DeleteEmployee',
        getEmployee: 'account/employee/GetEmployee',
        updateEmployee: 'account/employee/UpdateEmployee',
        getAbilityGroups: 'account/employee/GetAbilityGroups',
    },
    abilitygroups: {
        getAbilityGroup: 'account/employee/GetAbilityGroup',
        getAbilityGroups: 'account/employee/GetAbilityGroups',
        getActionPermissions: 'account/employee/GetActionPermissions',
        createAbilityGroup: 'account/employee/CreateAbilityGroup',
        deleteAbilityGroup: 'account/employee/DeleteAbilityGroup',
        updateAbilityGroup: 'account/employee/UpdateAbilityGroup',
    },
    settings: {
        getCompanyUsers: 'account/settings/GetCompanyUsers',
        getCompanyUser: 'account/settings/GetCompanyUser',
        addCompanyUser: 'account/settings/CreateUser',
        updateCompanyUser: 'account/settings/UpdateUser',
        deleteUser: 'account/settings/DeleteUser',
        // updateCompanyUser: 'identity/api/user/Update',
        deleteCompanyUser: 'identity/api/user/Delete',
        changePassword: 'identity/api/user/changepassword',
        confirmEmail: 'identity/api/user/ConfirmEmail',
        resetPassword: 'identity/api/user/ResetPassword',
        forgotPassword: 'identity/api/user/ForgotPassword',
        getEnterprise: 'account/settings/GetEnterprise',
        getEnterpriseList: 'account/settings/GetEnterpriseList',
        getEnterpriseWithId: 'account/settings/GetEnterpriseWithId',
        addEnterprise: 'account/settings/CreateEnterprise',
        updateEnterprise: 'account/settings/UpdateEnterprise',
        updateEnterpriseLogos: 'account/settings/UpdateEnterpriseLogos',
        saveEnterpriseLogoToS3: 'account/settings/SaveEnterpriseLogoToS3',
        deleteEnterpriseLogoFromS3: 'account/settings/DeleteEnterpriseLogoFromS3',
        deleteEnterprise: 'account/settings/DeleteEnterprise',
        getActiveUser: 'account/account/GetActiveUser',
        getUserPersonnelId: 'account/account/GetUserPersonnelId',
        getUserApp: 'identity/api/account/GetSubscriptionApps',
        createApp: 'identity/api/Account/CreateApp',
        deleteUserApp: 'identity/api/Account/DeleteSubscriptionApp',
        createUserAgency: 'account/settings/CreateUserAgency',
        createUserAccount: 'account/settings/CreateUserAccount',
        updateUserAgency: 'account/settings/UpdateUserAgency',
        updateUserAccount: 'account/settings/UpdateUserAccount',
        updateUserProperty: 'account/settings/UpdateUserProperty',
        createUserProperty: 'account/settings/CreateUserProperty',
        createUserShortcut: 'account/account/CreateUserShortcut',
        deleteUserShortCutItem: 'account/account/DeleteUserShortCutItem',
        getUserAgency: 'account/settings/GetUserAgency',
        getUserAccount: 'account/settings/GetUserAccount',
        getUserProperty: 'account/settings/GetUserProperty',
        getUsersByParentId: 'account/settings/GetUsersByParentId',
        createB2BUser: 'account/settings/CreateB2BUser',
        updateB2BUser: 'account/settings/UpdateB2BUser',
        deleteB2BUser: 'account/settings/DeleteB2BUser',
        getUserById: 'account/settings/GetUserById',
        getCurrencies: 'account/exchange/GetCurrencies',
    },
    departments: {
        getDepartments: 'account/employee/GetDepartments',
        getDepartment: 'account/employee/GetDepartment',
        createDepartment: 'account/employee/CreateDepartment',
        deleteDepartment: 'account/employee/DeleteDepartment',
        updateDepartment: 'account/employee/UpdateDepartment',
    },
    taxes: {
        getTaxes: 'account/generalsettings/GetTaxes',
        getTax: 'account/generalsettings/GetTax',
        createTax: 'account/generalsettings/CreateTax',
        deleteTax: 'account/generalsettings/DeleteTax',
        updateTax: 'account/generalsettings/updateTax',
    },
    reasons: {
        createReason: 'account/reasonsandnotes/CreateReason',
        updateReason: 'account/reasonsandnotes/UpdateReason',
        deleteReason: 'account/reasonsandnotes/DeleteReason',
        getReason: 'account/reasonsandnotes/GetReason',
        getReasons: 'account/reasonsandnotes/GetReasons',
        getReasonTypeList: 'account/reasonsandnotes/GetReasonTypeList',
        getKindTypeList: 'account/reasonsandnotes/GetKindTypeList',
    },
    predefinedNotes: {
        createPredefinedNote: 'account/reasonsandnotes/CreatePredefinedNote',
        updatePredefinedNote: 'account/reasonsandnotes/UpdatePredefinedNote',
        deletePredefinedNote: 'account/reasonsandnotes/deletePredefinedNote',
        getPredefinedNote: 'account/reasonsandnotes/GetPredefinedNote',
        getPredefinedNotes: 'account/reasonsandnotes/GetPredefinedNotes',
        getReasonTypeList: 'account/reasonsandnotes/GetReasonTypeList',
        getKindTypeList: 'account/reasonsandnotes/GetKindTypeList',
    },
    paymentNotes: {
        createPaymentNote: 'account/reasonsandnotes/CreatePaymentNote',
        updatePaymentNote: 'account/reasonsandnotes/UpdatePaymentNote',
        deletePaymentNote: 'account/reasonsandnotes/DeletePaymentNote',
        getPaymentNote: 'account/reasonsandnotes/GetPaymentNote',
        getPaymentNotes: 'account/reasonsandnotes/GetPaymentNotes',
        getReasonTypeList: 'account/reasonsandnotes/GetReasonTypeList',
        getKindTypeList: 'account/reasonsandnotes/GetKindTypeList',
    },
    discounts: {
        getCategories: 'account/menusettings/GetCategoriesForDiscount',
        getDiscounts: 'account/generalsettings/GetDiscounts',
        getDiscount: 'account/generalsettings/GetDiscountById',
        createDiscount: 'account/generalsettings/CreateDiscount',
        deleteDiscount: 'account/generalsettings/DeleteDiscount',
        updateDiscount: 'account/generalsettings/UpdateDiscount',
    },
    categories: {
        createCategory: 'account/menusettings/CreateCategory',
        getCategories: 'account/menusettings/GetCategories',
        getCategory: 'account/menusettings/GetCategory',
        deleteCategory: 'account/menusettings/DeleteCategory',
        updateCategory: 'account/menusettings/UpdateCategory',
        updateCategoryOrder: 'account/menusettings/UpdateOrderCategory',
    },
    menuitems: {
        getMenuItemProperties: 'account/menusettings/GetMenuItemProperties',
        getMenuItems: 'account/menusettings/GetMenuItems',
        getMenuItemsPassive: 'account/menusettings/GetMenuItemsPassive',
        getMenuItem: 'account/menusettings/GetMenuItem',
        createMenuItem: 'account/menusettings/CreateMenuItem',
        updateMenuItem: 'account/menusettings/UpdateMenuItem',
        passiveMenuItem: 'account/menusettings/PassiveMenuItem',
        deleteMenuItem: 'account/menusettings/DeleteMenuItem',
        getCurrencies: 'account/exchange/GetCurrencies',
    },
    roles: {
        getRoleSettingList: 'account/settings/GetRoleSettingList',
        getRoleSetting: 'account/settings/GetRoleSetting',
        createRoleSetting: 'account/settings/CreateRoleSetting',
        saveDevice: 'account/account/SaveUserDevice',
        updateRoleSetting: 'account/settings/UpdateRoleSetting',
        deleteRoleSetting: 'account/settings/DeleteRoleSetting',
        getSidebarNavigations: 'account/settings/GetSidebarNavigations',
        getNavigationItems: 'account/settings/GetNavigationItems',
        getSidebarNavigationsByUser:
            'account/account/GetSidebarNavigationsByUser',
        getRoleCodeByRoleId: 'account/settings/GetRoleCodeByRoleId',
        getRoleAuthorizationByRole: 'account/settings/GetRoleAuthorizationByRole'
    },
    revenuecenters: {
        getRevenueCenters: 'account/revenuecenter/GetRevenueCenters',
        getRevenueCenter: 'account/revenuecenter/GetRevenueCenter',
        deleteRevenueCenter: 'account/revenuecenter/DeleteRevenueCenter',
        createRevenueCenter: 'account/revenuecenter/CreateRevenueCenter',
        updateRevenueCenter: 'account/revenuecenter/UpdateRevenueCenter',
        getRevenueCentersForEnterprise:
            'pos/order/GetRevenueCentersForEnterprise',
        getUserRevenueCenters: 'account/revenuecenter/GetUserRevenueCenters',
    },
    tables: {
        getTables: 'account/revtables/GetTables',
        getTable: 'account/revtables/GetTable',
        getRevTableForRevenueCenters:
            'account/revtables/GetRevTableForRevenueCenters?propertyId={param}',
        createTable: 'account/revtables/CreateTable',
        createMultiTypeTable: 'account/revtables/CreateMultiTypeTable',
        updateTable: 'account/revtables/UpdateTable',
        getLocations: 'account/locations/GetLocations',
        getLocationById: 'account/locations/GetLocationById',
        deleteTable: 'account/revtables/DeleteTable',
    },
    condimentgroups: {
        getCondimentGroups: 'account/menusettings/GetCondimentGroups',
        getCondimentGroup: 'account/menusettings/GetCondimentGroup',
        createCondimentGroup: 'account/menusettings/CreateCondimentGroup',
        updateCondimentGroup: 'account/menusettings/UpdateCondimentGroup',
        deleteCondimentGroup: 'account/menusettings/DeleteCondimentGroup',
    },
    reports: {
        getGeneralReport: 'account/reports/GeneralReport',
        getTotalProductSalesReport: 'account/reports/TotalProductSalesReport',
        getProductSalesReport: 'account/reports/ProductSalesReport',
        getTablesReport: 'account/reports/TablesReport',
        getTablesReportForDashboard: 'reports/api/dashboard/TablesReport',
        getCheckOwnerReport: 'account/reports/CheckOwnerReport',
        getProductSalesReportDetail: 'account/reports/ProductSalesReportDetail',
        getPosNightReportProperties:
            'account/reports/GetPosNightReportProperties',
        getFirstPosSaleList: 'account/reports/FirstPosSaleListReport',
        getDepartmentKuverCountReport:
            'account/reports/DepartmentKuverCountReport',
        getProductListReport: 'account/reports/ProductListReport',
        getPosSaleVatOutReport: 'account/reports/PosSaleVatOutReport',
        getProductsOfReport: 'account/reports/GetProducts',
        createFilter: 'reports/api/defination/CreateReportFilter',
        exportReport: 'reports/api/report/Export',
        exportReportPdfToS3: 'reports/api/report/ExportReportPdfToS3',


        entranceControlReports: 'pos/entrancecontrol/EntranceControlReports',
        productPriceDetailReport: 'account/reports/ProductPriceDetailReport',
    },
    safelist: {
        createSafeList: 'account/account/CreateSafeList',
        updateSafeList: 'account/account/UpdateSafeList',
        deleteSafeList: 'account/account/DeleteSafeList',
        getSafeList: 'account/account/GetSafeList',
    },
    globalLogs: {
        getGlobalLogList: 'account/Settings/GetLogList',
        getLog: 'account/Settings/GetLog',
        getVeboniLogs: 'account/account/GetVeboniLogs',
    },
    buttonsettings: {
        enterprisebuttons: {
            getEnterpriseButtons: 'account/buttonsettings/GetEnterpriseButtons',
            getEnterpriseButton: 'account/buttonsettings/GetEnterpriseButton',
            getEnterpriseButtonsWithButtonTypes:
                'account/buttonsettings/GetEnterpriseButtonsWithButtonTypes',
            createEnterpriseButton:
                'account/buttonsettings/CreateEnterpriseButton',
            updateEnterpriseButton:
                'account/buttonsettings/UpdateEnterpriseButton',
            deleteEnterpriseButton:
                'account/buttonsettings/DeleteEnterpriseButton',
        },
        buttonsAndPreviews: {
            createButtonDetail: 'account/buttonsettings/CreateButtonDetail',
            getButtonDetails: 'account/buttonsettings/GetButtonDetails',
            deleteButtonDetail: 'account/buttonsettings/DeleteButtonDetail',
            updateButtonDetail: 'account/buttonsettings/UpdateButtonDetail',
        },
    },
    printerDefinitions: {
        getPrinterDefinitions:
            'account/printerdefinition/GetPrinterDefinitions',
        getPrinterDefinition: 'account/printerdefinition/GetPrinterDefinition',
        createPrinterDefinition:
            'account/printerdefinition/CreatePrinterDefinition',
        updatePrinterDefinition:
            'account/printerdefinition/UpdatePrinterDefinition',
        deletePrinterDefinition:
            'account/printerdefinition/DeletePrinterDefinition',
    },
    logs: {
        getActionLogs: 'pos/check/GetCheckLogs',
    },
    exchangeRate: {
        getCurrencies: 'account/exchange/GetCurrencies',
        createExchangeRate: 'account/exchange/CreateExchangeRate',
        updateExchangeRate: 'account/exchange/UpdateExchangeRate',
        getExchangeRate: 'account/exchange/GetExchangeRate',
        getExchangeRateFromservice: 'integration/integration/GetExchangeRate',
        getExchangeRateWithoutPropery: 'integration/integration/GetExchangeRateWithoutPropery',
        getExchangeRateForList:
            'integration/integration/GetExchangeRateForList',
        GetCmRoomTypes: 'account/exchange/GetCmRoomTypes',
    },
    locations: {
        getLocations: 'account/locations/GetLocations',
        getLocation: 'account/locations/GetLocation',
        createLocation: 'account/locations/CreateLocation',
        updateLocation: 'account/locations/UpdateLocation',
        deleteLocation: 'account/locations/DeleteLocation',
    },
    integrationsettings: {
        integrations: {
            getIntegrationConfigs:
                'integration/integration/GetIntegrationConfigs',
            getIntegrations: 'integration/integration/GetIntegrations',
            getIntegration: 'integration/integration/GetIntegration',
            updateIntegration: 'integration/integration/UpdateIntegration',
            createIntegration: 'integration/integration/CreateIntegration',
            createCloudIntegration: 'integration/integration/CreateCloudIntegration',
            updateCloudIntegration: 'integration/integration/UpdateCloudIntegration',
            deleteIntegration: 'integration/integration/DeleteIntegration',
            deleteCloudIntegration: 'integration/integration/DeleteCloudIntegration',
            getHotelVeboniIntegrations:
                'integration/integration/GetHotelVeboniIntegrations',
        },
    },
    boards: {
        createBoard: 'account/GeneralSettings/CreateBoard',
        updateBoard: 'account/GeneralSettings/UpdateBoard',
        deleteBoard: 'account/GeneralSettings/DeleteBoard',
        getBoards: 'account/GeneralSettings/GetBoards',
        getPropertyBoards: 'account/GeneralSettings/GetPropertyBoards',
    },
    exchangeDefinitions: {
        createExchange: 'account/GeneralSettings/CreateCurrencyItem',
        updateExchange: 'account/GeneralSettings/UpdateCurrencyItem',
        deleteExchange: 'account/GeneralSettings/DeleteCurrencyItem',
        getExchanges: 'account/GeneralSettings/GetCurrencyItems',
    },
    hrorganizations: {
        createHrOrganization: 'hr/Organization/CreateOrgOrganizationItem',
        updateHrOrganization: 'hr/Organization/UpdateOrgOrganizationItem',
        deleteHrOrganization: 'hr/Organization/DeleteOrgOrganizationItem',
        getHrOrganizations: 'hr/Organization/GetOrgOrganizations',
        getHrOrganizationsWithId: 'hr/Organization/GetOrganizationWithIdItem',
    },
    hrcompanys: {
        createHrCompany: 'hr/Organization/CreateOrgCompanyItem',
        updateHrCompany: 'hr/Organization/UpdateOrgCompanyItem',
        deleteHrCompany: 'hr/Organization/DeleteOrgCompanyItem',
        getHrCompanys: 'hr/Organization/GetOrgCompanies',
        getOrgOrganizations: 'hr/Organization/GetOrgOrganizations',
        getOrgCompaniesForList: 'hr/Organization/GetOrgCompaniesForList',
        getHrCompaniesWithId: 'hr/Organization/GetOrgCompaniesWithIdItem',
    },
    hrbranchs: {
        createHrBranch: 'hr/Organization/CreateOrgBranchItem',
        updateHrBranch: 'hr/Organization/UpdateOrgBranchItem',
        deleteHrBranch: 'hr/Organization/DeleteOrgBranchItem',
        getHrBranchs: 'hr/Organization/GetOrgBranchs',
        getHrCompanys: 'hr/Organization/GetOrgCompanies',
        getHrBranchsFromSelectedCompany:
            'hr/Organization/GetOrgBranchCompanyName',
        getHrBranchForErpFromSelectedCompany:
            'hr/Organization/GetBranchFromCompany',
        getHrBranchsWithId: 'hr/Organization/GetOrgBranchsWithIdItem',
        getOrgBranchForOperationid:
            'hr/Organization/GetOrgBranchForOperationid',
        getBranchList: 'hr/Organization/GetOrgBranchList',
        getHrOrgBranchWithAuthorization: 'hr/OperatingDefinition/GetHrOrgBranchWithAuthorization',
    },
    hrplants: {
        createHrPlant: 'hr/Organization/CreateOrgPlantItem',
        updateHrPlant: 'hr/Organization/UpdateOrgPlantItem',
        deleteHrPlant: 'hr/Organization/DeleteOrgPlantItem',
        getHrPlants: 'hr/Organization/GetOrgPlants',
        getHrCompanys: 'hr/Organization/GetOrgCompanies',
        getHrPlantsWithId: 'hr/Organization/GetOrgPlantsWithIdItem',
    },
    hrunits: {
        createHrUnit: 'hr/Organization/CreateOrgUnitItem',
        updateHrUnit: 'hr/Organization/UpdateOrgUnitItem',
        deleteHrUnit: 'hr/Organization/DeleteOrgUnitItem',
        getHrUnits: 'hr/Organization/GetOrgUnits',
        getHrPlants: 'hr/Organization/GetOrgPlants',
        getHrUnitsWithId: 'hr/Organization/GetOrgUnitsWithIdItem',
    },
    hrparts: {
        createHrPart: 'hr/Organization/CreateOrgPartItem',
        updateHrPart: 'hr/Organization/UpdateOrgPartItem',
        deleteHrPart: 'hr/Organization/DeleteOrgPartItem',
        getHrParts: 'hr/Organization/GetOrgParts',
        getHrUnits: 'hr/Organization/GetOrgUnits',
        getHrPartsWithId: 'hr/Organization/GetOrgPartsWithIdItem',
    },
    hrbuildings: {
        createHrBuilding: 'hr/Organization/CreateOrgBuildingItem',
        updateHrBuilding: 'hr/Organization/UpdateOrgBuildingItem',
        deleteHrBuilding: 'hr/Organization/DeleteOrgBuildingItem',
        getHrBuildings: 'hr/Organization/GetOrgBuildings',
        getHrParts: 'hr/Organization/GetOrgParts',
        getHrBuildingWithId: 'hr/Organization/GetBuildingWithIdItem',
    },
    hrsections: {
        createHrSection: 'hr/Organization/CreateOrgSectionItem',
        updateHrSection: 'hr/Organization/UpdateOrgSectionItem',
        deleteHrSection: 'hr/Organization/DeleteOrgSectionItem',
        getHrSections: 'hr/Organization/GetOrgSections',
        getHrBuildings: 'hr/Organization/GetOrgBuildings',
        getHrSectionsWithId: 'hr/Organization/GetSectionListWithIdItem',
    },
    hrdepartments: {
        createHrDepartment: 'hr/Organization/CreateOrgDepartmentItem',
        updateHrDepartment: 'hr/Organization/UpdateOrgDepartmentItem',
        deleteHrDepartment: 'hr/Organization/DeleteOrgDepartmentItem',
        getHrDepartments: 'hr/Organization/GetOrgDepartments',
        getHrDepartmentsWithId: 'hr/Organization/GetDepartmenListWithIdItem',
    },
    hrpositions: {
        createHrPosition: 'hr/Organization/CreateOrgPositionItem',
        updateHrPosition: 'hr/Organization/UpdateOrgPositionItem',
        deleteHrPosition: 'hr/Organization/DeleteOrgPositionItem',
        getHrPositions: 'hr/Organization/GetOrgPositions',
        getHrPositionsWithId: 'hr/Organization/GetOrgPositionsWithIdItem',
    },
    hrjobs: {
        createHrJob: 'hr/Organization/CreateOrgJobItem',
        updateHrJob: 'hr/Organization/UpdateOrgJobItem',
        deleteHrJob: 'hr/Organization/DeleteOrgJobItem',
        getHrJobs: 'hr/Organization/GetOrgJobs',
        getOrgJobsList: 'hr/Organization/GetOrgJobsList',
        getHrPositions: 'hr/Organization/GetOrgPositions',
        getHrDepartments: 'hr/Organization/GetOrgDepartments',
        getHrJobsWithId: 'hr/Organization/GetOrgJobWithIdtItem',
    },
    hrworkertypes: {
        createHrWorkerType: 'hr/Organization/CreateOrgWorkerTypeItem',
        updateHrWorkerType: 'hr/Organization/UpdateOrgWorkerTypeItem',
        deleteHrWorkerType: 'hr/Organization/DeleteOrgWorkerTypeItem',
        getHrWorkerTypes: 'hr/Organization/GetOrgWorkerTypes',
        getHrWorkerTypesWithId: 'hr/Organization/GetOrgWorkerTypesWithIdItem',
    },
    hremployeelists: {
        createemployeelistitem: 'hr/Employee/CreateEmployeeListItem',
        createHrEmployeeList: '',
        updateHrEmployeeList: 'hr/Employee/UpdateEmployeeListItem',
        rehireHrEmployeeList: 'hr/Employee/RehireEmployeeListItem',
        deleteHrEmployeeList: 'hr/Employee/DeleteEmployeeListItem',
        getHrEmployeeLists: 'hr/Employee/GetPersonelListFormItems',
        getCountryCodeList: 'hr/OperatingDefinition/GetCountryCodeQuery',
        getHrCitys: 'hr/OperatingDefinition/GetCityCodeQuery',
        getGenderList: 'hr/OperatingDefinition/GetGenderListQuery',
        getMaritalStatusList:
            'hr/OperatingDefinition/GetMaritalStatusListQuery',
        getBranchList: 'hr/Organization/GetOrgBranchList',
        getSgkCodeList: 'hr/OperatingDefinition/GetSgkCodeForList',
        getSgkEmployeeTypeList: 'hr/OperatingDefinition/GetOpdSgkEmployeeType',
        getWageTypeList: 'hr/OperatingDefinition/GetWageTypeList',
        getPositionList: 'hr/Organization/GetPositionForSelectList',
        getWorkerTypeList: 'hr/Organization/GetWorkerTypeForSelectList',
        getContractTypeList: 'hr/OperatingDefinition/GetContractTypeList',
        getContractWorkTypeList:
            'hr/OperatingDefinition/GetContractWorkTypeList',
        getContractWorkPlanList:
            'hr/OperatingDefinition/GetContractWorkPlanList',
        getDisabledLevelList: 'hr/OperatingDefinition/GetDisabledLevelList',
        getDisabledLevelFamilyList:
            'hr/OperatingDefinition/GetDisabledGroupList',
        getCurrenyList: 'hr/TestCurrency/GetTestCurrencies',
        getPlantList: 'hr/Organization/GetPlantsWithCompany',
        getUnitList: 'hr/Organization/GetUnitListWithPlant',
        getPartList: 'hr/Organization/GetPartListWithUnit',
        getBuildingList: 'hr/Organization/GetBuildingListWithPart',
        getSectionList: 'hr/Organization/GetSectionListWithBuilding',
        getDepartmentList: 'hr/Organization/GetDepartmentListWithBranch',
        getJobList: 'hr/Organization/GetJobListWithPosition',
        getPersonelListItemForUpdate:
            'hr/Employee/GetPersonelListItemForUpdate',
        getPersonelAdressList: 'hr/Employee/GetPersonnelAdressListQuery',
        getPersonelForExiting: 'hr/Employee/GetPersonelForExisting',
        getSgkCodeForExiting: 'hr/OperatingDefinition/GetExitingSgkCodeList',
        getIskurCodeForExiting: 'hr/OperatingDefinition/GetExitingIskurCode',
        getExitingTypes: 'hr/OperatingDefinition/GetExitingType',
        getBranchForExiting: 'hr/OperatingDefinition/GetBranchList',
        updatePersonelForExiting: 'hr/Employee/UpdateEmployeeExitingType',
        getSyndicateList: 'hr/OperatingDefinition/GetSyndicateQuery',
        getBesFundyTypeList: 'hr/OperatingDefinition/GetBesFundTypeQuery',
        getEncouragementList: 'hr/OperatingDefinition/GetEncouragementList',
        getPersonelLocationItem: 'hr/Employee/GetPersonelLocationItem',
        updateEmployeeLocationItem: 'hr/Employee/UpdateEmployeeLocationItem',
        updateHrEmployeeContractList: 'hr/Employee/UpdateHrEmployeeContractList',
        getSomeOrgListItem: 'hr/Organization/GetSomeOrganization',
        getPersonelPositionForUpdate: 'hr/Employee/GetPersonelPositionItem',
        getPersonelWageForUpdate: 'hr/Employee/GetPersonelWageItem',
        updateHrEmployeeWageList: 'hr/Employee/UpdateEmployeeWageItem',
        updateHrEmployeePositionList: 'hr/Employee/UpdateEmployeePositionItem',
        getIdentityItemList: 'hr/OperatingDefinition/GetIdentitySourceItems',
        getAdmissionItemList: 'hr/OperatingDefinition/GetAdmissionSourceItems',
        getPositionLocationItemList:
            'hr/Organization/GetPositionLocationSourceItems',
        getPositionLocationsWithCompanyId:
            'hr/Organization/GetPositionLocationsWithCompanyId',
        getContractList: 'hr/OperatingDefinition/GetContractSourceItems',
        getAdressList: 'hr/OperatingDefinition/GetAdressSourceItems',
        getSomeOrgPositionItem: 'hr/Organization/GetSomeOrganizationPosition',
        getPropertyList: 'hr/Employee/GetPropertyList',
        getAllPersonnelShortItems: 'hr/Employee/GetAllPersonnelShortItems',
        getEmployeeShortListFromBranch: 'hr/Employee/GetPersonnelShortItemsFromBranch',
        getPersonnelPaymentItems: 'hr/Employee/GetPersonnelPaymentItems',
        getPaymentHistory: 'hr/Employee/GetPaymentHistory',
        getLocationHistory: 'hr/Employee/GetLocationHistory',
        getPositionHistory: 'hr/Employee/GetPositionHistory',
        getEntryExitHistory: 'hr/Employee/getEntryExitHistory',
        getPersonelContractItem: 'hr/Employee/GetPersonelContractItem',
        getMilitaryStatusListQuery: 'hr/Employee/GetMilitaryStatusListQuery',
        getBloodGroupListQuery: 'hr/Employee/GetBloodGroupListQuery',
        getEducationStatusListQuery: 'hr/Employee/GetEducationStatusListQuery',
        getHrCodeListLanguageLevel: 'hr/Employee/GetHrCodeListLanguageLevel',
        getBankBranchListQuery: 'hr/Employee/GetBankBranchListQuery',
        getCodeListSgkJobCodeQuery:
            'hr/OperatingDefinition/GetCodeListSgkJobCodeQuery',
        getSgkStaffStatusListQuery: 'hr/Employee/GetSgkStaffStatusListQuery',
        sendPersonelSgkCommand: 'hr/Employee/SendPersonelSgkCommand',
        sendPersonelListSgkCommand: 'hr/Employee/SendPersonelSgkEntryList',
        getAllSgkEntryPersonel: 'hr/Employee/GetAllSgkEntryPersonel',
        GetPersonnelPreEmploymentQuery:
            'hr/Employee/GetPersonnelPreEmploymentQuery',
        GetNewPersonnelPreEmploymentQuery:
            'hr/Employee/GetNewPersonnelPreEmploymentQuery',
        updatePersonelWorkEntry:
            'hr/Employee/UpdatePersonnelPreEmploymentCommand',
        createPersonnelPreEmployment:
            'hr/Employee/CreatePersonnelPreEmployment',
        exitPersonnelSgkCommand: 'hr/Employee/ExitPersonelSgkCommand',
        ExitPersonelSgkList: 'hr/Employee/ExitPersonelSgkList',
        getAllSgkExitingPersonel: 'hr/Employee/GetAllSgkExitingPersonel',
        getEmployeeShortListFromBranchandDate:
            'hr/Employee/GetPersonnelShortItemsFromBranchandDate',
        getPersonnelWithBranchId:
            'hr/Employee/GetPersonnelWithBranchId',
        deletePersonnelPreEmployment:
            'hr/Employee/DeletePersonnelPreEmploymentCommand',
        getHrPersonnelCardAccountId: 'hr/Employee/GetHrPersonelCardAccountId',
        getHrPersonnelCardAccountIdForList:
            'hr/Employee/GetHrPersonnelCardAccountIdForList',
        savePdfPersonelSgk: 'hr/Employee/SavePdf',
        getPersonelPdfDocument: 'hr/Employee/GetPersonelSgkPdf',
        getPersonelSgkPdfEntryList: 'hr/Employee/GetPersonelSgkPdfEntryList',
        getPersonelSgkPdfOutList: 'hr/Employee/GetPersonelSgkPdfOutList',
        getPersonelInformationSgk: 'hr/Employee/GetPersonelInformationSgk',
        getExitPersonelPersonelInformationSgk: 'hr/Employee/GetExitPersonelPersonelInformationSgk',
        getPersonelReportWithDate: 'hr/Employee/GetPersonelReportWithDate',
        personelReportApproval: 'hr/Employee/PersonelReportApproval',
        personelReportReadReceipt: 'hr/Employee/PersonelReportReadReceipt',
        GetNextStaffCodeQuery: 'hr/Employee/GetNextStaffCodeQuery',
        GetCurrencyWithBranchId: 'hr/Employee/GetCurrencyWithBranchId',
        getBlackListByCitizenshipNo: 'hr/Employee/GetBlackListByCitizenshipNo',
        GetHrWageCutWithPersonelidQuery: 'hr/Employee/GetHrWageCutWithPersonelidQuery',
        GetEmployeeDetailQuery: 'hr/Employee/GetEmployeeDetailQuery',
        getHrGridReportsPayroll: 'reports/api/HumanResources/GetHrGridReportsPayroll',
        getEmplooyeParameters: 'reports/api/HumanResources/GetEmplooyeParameters',
        updatePersonelEncouragement: 'hr/Employee/UpdatePersonelEncouragement',
        getPersonelListShortItem: 'hr/Employee/GetPersonelListShortItem',
        getPersonnelInformationForCompensation: 'hr/Employee/GetPersonnelInformationForCompensation',
        compensationCalculate: 'hr/Employee/CompensationCalculate',
        getHrGridReportsPersonel: 'reports/api/HumanResources/GetHrGridReportsPersonel',
        getSqlTest: 'reports/api/HumanResources/GetSqlTest',
        getPayrollColumns: 'hr/Employee/GetPayrollColumns',
        createEmployeeContractCommand: 'hr/Employee/CreateEmployeeContractCommand',
        deleteEmployeeWageItemCommand: 'hr/Employee/DeleteEmployeeWageItemCommand',
        getPersonelKbsList: 'hr/Employee/GetPersonelKbsList',
        personelKbsApproval: 'hr/Employee/PersonelKbsApproval',
        exportCompensationReport: 'hr/Employee/ExportCompensationReport',
        getShowCompensationReportData: 'hr/Employee/GetShowCompensationReportData',
        getCompensationCodeList: 'hr/Employee/GetCompensationCodeList',
        transferCompensationToPayroll: 'hr/Employee/TransferCompensationToPayroll',
        getEmployeeGrossWageWithNet: 'hr/Employee/GetEmployeeGrossWageWithNet',
        getPersonnelContractHistory: 'hr/Employee/GetPersonnelContractHistory',
        getPersonnelTaxAmounts: 'hr/Employee/GetPersonnelTaxAmounts',
        getPersonnelContractMaxDateQuery: 'hr/Employee/GetPersonnelContractMaxDateQuery',
    },
    hrparameterlists: {
        createHrParameterList: '',
        updateHrParameterList: 'hr/OperatingDefinition/GetLawParametersForShow',
        updateHrParameterSingleList:
            'hr/OperatingDefinition/GetLawParametersForSingleShow',
        deleteHrParameterList: '',
        getHrParameterLists: 'hr/OperatingDefinition/GetLawParameter',
        createHrParameterForNewBranches:
            'hr/OperatingDefinition/CreateLawParameterForBranches',
    },
    hrbranchdepartments: {
        createHrBranchDepartment: 'hr/Organization/CreateBranchDepartmentsItem',
        updateHrBranchDepartment: '',
        deleteHrBranchDepartment: 'hr/Organization/DeleteBranchDepartmentsItem',
        getHrBranchDepartments: 'hr/Organization/GetBranchDepartments',
        getHrBranchDepartmentsWithId: 'hr/Organization/GetBranchDepartmentsWithId',
        getOrgCompaniesForList: 'hr/Organization/GetOrgCompaniesForList',
        getHrDepartmentsForBranchDepartment:
            'hr/Organization/GetHrDepartmentsForBranchDepartment',
        getHrBranchsFromSelectedCompany:
            'hr/Organization/GetOrgBranchCompanyName',
    },
    hrcodeliscsgbbusinessline: {
        getCodeLiscsgbBusinessLine:
            'hr/OperatingDefinition/GetCodeLiscsgbBusinessLine',
    },
    accountplans: {
        createErpaccountplan: 'erp/AccountCards/CreateAccountCard',
        updateErpaccountplan: 'erp/AccountCards/UpdateAccountPlan',
        deleteErpaccountplan: 'erp/AccountCards/DeleteAccountPlan',
        getErpaccountplans: 'erp/AccountCards/GetAccountPlan',
        getErpCurrencies: 'erp/TestCurrency/GetTestCurrencies',
        getErpBalancetype: 'erp/AccountCards/GetBalanceType',
        getErpWorkType: 'erp/AccountCards/GetWorkType',
        getErpCardType: 'erp/AccountCards/GetCardType',
        getErpCardStatus: 'erp/AccountCards/GetCardStatus',
        getErpaccountplansByFilter: 'erp/AccountCards/GetAccountPlanByFilter',
        getErpaccountplanByRecId: 'erp/AccountCards/GetAccountPlanByRecId',
        getErpaccountplanNumbers: 'erp/AccountCards/GetAccountPlanNumbers',
        getErpaccountplanNumbersDetail:
            'erp/AccountCards/GetAccountPlanNumbersDetail',
        getErpFinanceAccountForCardtype:
            'erp/AccountCards/GetAccountCardForList',
        getAccountCardListFromPeriodId:
            'erp/AccountCards/GetAccountCardListFromPeriodId',
        getAccountCardListForSpecificCodes:
            'erp/AccountCards/GetAccountCardListForSpecificCodes',
        getErpAccountCardBalance: 'erp/AccountCards/GetAccountBalanceWithoutId',
    },
    hrtranscodevalues: {
        createHrTransCodeValue: '',
        updateHrTransCodeValue: '',
        updatePayrollMissingDefinition:
            'hr/Payroll/UpdatePayrollMissingDefinition',
        deleteHrTransCodeValue: 'hr/Payroll/DeletePayrollSourceItems',
        getHrTransCodeValues: 'hr/Payroll/GetPayrollSourceEntryListFormItems',
        getPayrollMissingDays: 'hr/Payroll/GetPayrollMissingDefinitions',
        getHrTransCodeValueForCreate:
            'hr/Payroll/GetPayrollSourceForCreateItems',
        getPayrollWithId: 'hr/Payroll/GetPayrollWithId',
        createorupdateHrTransCodeValue:
            'hr/Payroll/CreateOrUpdatePayrollSourceItems',
        calculationPayrollSourceSummary: 'hr/Payroll/GetPayrollSourceSummary',
        calculationAllPayrollSourceSummary:
            'hr/Payroll/CountAndCreateAllPayroll',
        deletePayrollQuery: 'hr/Payroll/DeletePayroll',
        getPayrollSummary: 'hr/Payroll/GetPayrollSummary',
        getTransCodeSummary: 'hr/Payroll/GetPayrollSummary',
        createAllPayrollSource: 'hr/Payroll/CreateAllPayrollSourceItemCommand',
        allPayrollAndPayrollSourceDelete:
            'hr/Payroll/AllPayrollAndPayrollSourceDelete',
        mounthlyPayrollSource: 'hr/Payroll/CreateAllPayrollSourceItemCommand',
        payrollSourceQuentity: 'hr/Payroll/GetPayrollSourceQuentity',
        payrollEncouragement: 'hr/Payroll/PayrollEncouragement',
        payrollSourceIsLocked: 'hr/Payroll/PayrollSourceIsLocked',
        payrollSourceIsUnlocked: 'hr/Payroll/PayrollSourceIsUnLocked',
        payrollIsLocked: 'hr/Payroll/PayrollIsLocked',
        payrollIsUnlocked: 'hr/Payroll/PayrollIsUnlocked',
        deleteEncouragement: 'hr/Payroll/DeletePayrollEncouragement',
        payrollEncouragemenChangeLock: 'hr/Payroll/PayrollEncouragemenChangeLock',
    },
    hrpayrolltranss: {
        createHrPayrollTrans: '',
        updateHrPayrollTrans: '',
        deleteHrPayrollTrans: '',
        getHrPayrollTranss: 'hr/Payroll/GetPayrollCalculateListItems',
        getHrPayrollType: 'hr/Payroll/GetPayrollTypeList',
        getHrPayrollTypeForLawList: 'hr/Payroll/GetPayrollTypeForLawList',
        getPayrollSummary: 'hr/Payroll/GetPayrollSummary',
        getPayrollReport: 'hr/Payroll/PayrollMasterReport',
        getPayrollEncouragement: 'hr/Payroll/GetPayrollEncouragement',
        getPayrollDetail: 'hr/Payroll/GetPayrollDetail',
        getPayrollDetailForPersonnelList: 'hr/Payroll/GetPayrollDetailForPersonnelList',
        getHrPayrollListDialog: 'reports/api/HumanResources/PayrollMasterReportDialog'
    },
    hrpayrollperiodicpayment: {
        getHrPayrollPeriodicPayments: 'hr/Payroll/GetPayrollPeriodPayment',
        getPayrollPeriodPaymentForPersonelId: 'hr/Payroll/GetPayrollPeriodPaymentForPersonelId',
        getHrPayrollPeriodicPaymentsWithId: 'hr/Payroll/GetPayrollPeriodPaymentWithId',
        createHrPayrollPeriodicPayments: 'hr/Payroll/CreatePayrollPeriodPayment',
        updateHrPayrollPeriodicPayments: 'hr/Payroll/UpdatePayrollPeriodPayment',
        deleteHrPayrollPeriodicPayments: 'hr/Payroll/DeletePayrollPeriodPayment'
    },
    erpworkparameterss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpWorkParameters: '',
        updateErpWorkParameters: '',
        deleteErpWorkParameters: '',
        getErpWorkParameterss: '',
    },
    erpworkdefinitionss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpWorkDefinitions: '',
        updateErpWorkDefinitions: '',
        deleteErpWorkDefinitions: '',
        getErpWorkDefinitionss: '',
        getErpnacelist: 'erp/ErpWorkDefinations/GetErpcodelistnace',
        getErpintegratorlist: 'erp/ErpWorkDefinations/GetErpintegratorlist',
    },
    erpcompanyperiods: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createCompanyPeriod: 'erp/ErpWorkDefinations/CreateCompanyPeriod',
        updateCompanyPeriod: 'erp/ErpWorkDefinations/UpdateCompanyPeriod',
        deleteCompanyPeriod: 'erp/ErpWorkDefinations/ ',
        getCompanyPeriod: 'erp/ErpWorkDefinations/GetCompanyPeriod',
        getCompanyPeriods: 'erp/ErpWorkDefinations/GetCompanyPeriods',
        getErpCompanyPeriodFromBranch: 'erp/ErpWorkDefinations/GetErpCompanyPeriodFromBranch',
        getErpCompanyWithId: 'erp/ErpWorkDefinations/GetErpCompanyWithId',
    },
    erpcompanies: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpCompany: 'erp/ErpWorkDefinations/CreateErpCompany',
        updateErpCompany: 'erp/ErpWorkDefinations/UpdateErpCompany',
        deleteErpCompany: 'erp/ErpWorkDefinations/DeleteErpCompany',
        getErpCompany: 'erp/ErpWorkDefinations/GetErpCompany',
        getErpCompanyLight: 'erp/ErpWorkDefinations/GetErpCompanyLight',
        getErpCompanyLightByUser:
            'erp/ErpWorkDefinations/GetErpCompanyLightByUser',
        getErpCompanyLightById: 'erp/ErpWorkDefinations/GetErpCompanyLightById',
        getErpCompanyByUser: 'erp/ErpWorkDefinations/GetErpCompanyByUser',
        getErpCompanyShortList: 'erp/ErpWorkDefinations/GetErpCompanyShortList',
    },
    erpcompanybranches: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpCompanyBranch: 'erp/ErpWorkDefinations/CreateErpCompanyBranch',
        updateErpCompanyBranch: 'erp/ErpWorkDefinations/UpdateErpCompanyBranch',
        deleteErpCompanyBranch: 'erp/ErpWorkDefinations/DeleteErpCompanyBranch',
        getErpCompanyBranches: 'erp/ErpWorkDefinations/GetErpCompanyBranch',
        getCompanyBranches: 'erp/ErpWorkDefinations/GetCompanyBranches',
        getCompanyBranchesByUser:
            'erp/ErpWorkDefinations/GetCompanyBranchesByUser',
        getErpBranchFromCompany:
            'erp/ErpWorkDefinations/GetErpBranchFromCompany',
        getCompanyBranchBank:
            'erp/ErpWorkDefinations/GetErpCompanyBranchBankAccountForCompany',
        getErpCompanyBranchByUser:
            'erp/ErpWorkDefinations/GetErpCompanyBranchByUser',
        getErpCompanyBranchWithId:
            'erp/ErpWorkDefinations/GetErpCompanyBranchWithId',
        getErpCompanyBranchGroups: 'erp/ErpWorkDefinations/GetErpCompanyBranchGroups',
        getErpCompanyBranchDetailByGroup: 'erp/ErpWorkDefinations/GetErpCompanyBranchDetailByGroup',
        createErpCompanyBranchGroup: 'erp/ErpWorkDefinations/CreateErpCompanyBranchGroup',
        deleteErpCompanyBranchGroup: 'erp/ErpWorkDefinations/DeleteErpCompanyBranchGroup',


    },
    erpcodelisteledgerdocument: {
        getErpCodeListeLedgerDocument: 'erp/ErpWorkDefinations/GetErpCodeListeLedgerDocument',
        createErpCodeListeLedgerDocument: 'erp/ErpWorkDefinations/CreateErpCodeListeLedgerDocument',
        updateErpCodeListeLedgerDocument: 'erp/ErpWorkDefinations/UpdateErpCodeListeLedgerDocument',
        deleteErpCodeListeLedgerDocument: 'erp/ErpWorkDefinations/DeleteErpCodeListeLedgerDocument'
    },
    erpcodelisteledgerpaymenttype: {
        getErpcodelisteledgerpaymenttype: 'erp/FinanceCards/GetErpcodelisteledgerpaymenttype',
    },
    erpcodelistdocumentformatch: {
        erpcodelistdocumentformatch: 'erp/ErpWorkDefinations/GetErpCodeListDocumentForMatch',
        erpcodelisteledgerdocumentformatch: 'erp/ErpWorkDefinations/GetErpCodeListeLedgerDocumentForMatch',
        saveerpdocumenttypematched: 'erp/ErpWorkDefinations/SaveErpDocumentTypeMatched'
    },
    erpdocumentnoes: {
        createErpDocumentNo: 'erp/ErpWorkDefinations/CreateErpDocumentNo',
        updateErpDocumentNo: 'erp/ErpWorkDefinations/UpdateErpDocumentNo',
        deleteErpDocumentNo: 'erp/ErpWorkDefinations/DeleteErpDocumentNo',
        getErpDocumentNoes: 'erp/ErpWorkDefinations/GetErpDocumentNoes',
        getErpDocumentNo: 'erp/ErpWorkDefinations/GetErpDocumentNo',
        getErpFicheNo: 'erp/ErpWorkDefinations/GetErpFicheNo',
    },
    erpaccdefinitions: {
        getErpAccDefinitionList:
            'erp/ErpWorkDefinations/GetErpAccountingDefinitions',
        updateErpAccountingDefinion:
            'erp/ErpWorkDefinations/UpdateErpAccountingDefinition',
    },

    erpacctaxparams: {
        getErpAccTaxParamList: 'erp/ErpWorkDefinations/GetTaxParamList',
        getErpAccWithOldingTaxParam: 'erp/ErpWorkDefinations/GetErpAccWithOldingTaxParam',
        editErpAccTaxParamList: 'erp/ErpWorkDefinations/EditTaxParamList',
    },
    erpaccfichenumbers: {
        getErpAccFicheNumbers: 'erp/ErpWorkDefinations/GetFicheNumbers',
        EditFicheNumbers: 'erp/ErpWorkDefinations/EditFicheNumbers',
        createUpdateErpAccWithOldingTaxParam: 'erp/ErpWorkDefinations/CreateUpdateErpAccWithOldingTaxParam'
    },
    erpaccountdepartmentcards: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpAccountDepartmentCards:
            'erp/AccountDepartmentCards/CreateAccountDepartmentCard',
        updateErpAccountDepartmentCards:
            'erp/AccountDepartmentCards/UpdateAccountDepartmentCardPlan',
        deleteErpAccountDepartmentCards:
            'erp/AccountDepartmentCards/DeleteAccountDepartmentCardPlan',
        getErpAccountDepartmentCardss:
            'erp/AccountDepartmentCards/GetAccountDepartmentCards',
        getErpaccountplansByFilter:
            'erp/AccountDepartmentCards/GetAccountDepartmentCardsPlanByFilter',
        getAccountDepartmentCardForList:
            'erp/AccountDepartmentCards/GetAccountDepartmentCardForList',
    },
    erpaccounttransactions: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpAccountTransaction:
            'erp/Transactions/CreateAccountTransaction',
        updateErpAccountTransaction:
            'erp/Transactions/UpdateAccountTransaction',
        deleteErpAccountTransaction:
            'erp/Transactions/DeleteAccountTransaction',
        getErpAccountTransactions: 'erp/Transactions/GetErpAccountTransactions',
        getErpFicheOwner: 'erp/Transactions/GetErpFicheOwner',
        getErpDocumenttype: 'erp/Transactions/GetDocumentType',
        getErpCodeListOtherDocumentType:
            'erp/Transactions/GetErpCodeListOtherDocumentType',
        getErpCodeListDocumentTypeByMainCode:
            'erp/Transactions/GetErpCodeListDocumentTypeByMainCode',
        getErpFichetype: 'erp/Transactions/GetFicheType',
        getErpPaymenttype: 'erp/Transactions/GetPaymentType',
        getErpExchangeRate: 'erp/Transactions/GetErpExchangeRate',
        getDailyExchangeRates: 'erp/Transactions/GetDailyExchangeRates',
        getErpAccountDetails: 'erp/Transactions/GetErpAccountDetails',
        getErpAccountDetailsList: 'erp/Transactions/GetErpAccountDetailsList',
        getErpDocumenttypeById: 'erp/Transactions/GetErpDocumentTypeById',
        getErpDocumenttypeForList: 'erp/Transactions/GetErpDocumenttypeForList',
    },
    erpaccbalancereports: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpAccBalanceReport: '',
        updateErpAccBalanceReport: '',
        deleteErpAccBalanceReport: '',
        getErpAccBalanceReports: '',
    },
    erpaccdetailreports: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpAccDetailReport: '',
        updateErpAccDetailReport: '',
        deleteErpAccDetailReport: '',
        getErpAccDetailReports: '',
    },
    erpaccjournalreports: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpAccJournalReport: '',
        updateErpAccJournalReport: '',
        deleteErpAccJournalReport: '',
        getErpAccJournalReports: '',
    },
    erpaccledgerreports: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpAccLedgerReport: '',
        updateErpAccLedgerReport: '',
        deleteErpAccLedgerReport: '',
        getErpAccLedgerReports: '',
    },
    erpaccmainbalancereports: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpAccMainBalanceReport: '',
        updateErpAccMainBalanceReport: '',
        deleteErpAccMainBalanceReport: '',
        getErpAccMainBalanceReports: '',
    },
    erpaccincomereports: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpAccIncomeReport: '',
        updateErpAccIncomeReport: '',
        deleteErpAccIncomeReport: '',
        getErpAccIncomeReports: '',
    },
    erpaccvatdeclarationss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpAccVatDeclarations: '',
        updateErpAccVatDeclarations: '',
        deleteErpAccVatDeclarations: '',
        getErpAccVatDeclarationss: '',
    },
    erpcorporationdeclarationss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpCorporationDeclarations: '',
        updateErpCorporationDeclarations: '',
        deleteErpCorporationDeclarations: '',
        getErpCorporationDeclarationss: '',
    },
    erpbabsdeclarationss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpBabsDeclarations: '',
        updateErpBabsDeclarations: '',
        deleteErpBabsDeclarations: '',
        getErpBabsDeclarationss: '',
    },
    erpfinanceworkparameterss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpFinanceWorkParameters: '',
        updateErpFinanceWorkParameters: '',
        deleteErpFinanceWorkParameters: '',
        getErpFinanceWorkParameterss: '',
    },
    erpfinanceworkdefinitionss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpFinanceWorkDefinitions: '',
        updateErpFinanceWorkDefinitions: '',
        deleteErpFinanceWorkDefinitions: '',
        getErpFinanceWorkDefinitionss: '',
    },
    erpfinancecurrentcards: {
        // API ENDPOINTLERİ YAZILACAK (S.E)   getAllErpCurrentCardAccountsWithPeriod
        createErpFinanceCurrentCard: 'erp/FinanceCards/CreateCurrentAccounts',
        createErpCurrentCardForBank: '',
        updateErpFinanceCurrentCard: 'erp/FinanceCards/UpdateCurrentAccounts',
        deleteErpFinanceCurrentCard: 'erp/FinanceCards/DeleteCurrentAccounts',
        getErpFinanceCurrentCards: 'erp/FinanceCards/GetErpCurrentAccount',
        GetErpCurrentCardListWithPeriyod:
            'erp/FinanceCards/GetErpCurrentCardListWithPeriyod',
        getErpCurrentAccountForList:
            'erp/FinanceCards/GetErpCurrentAccountForList',
        getErpFinanceCurrentWithId:
            'erp/FinanceCards/GetErpCurrentAccountWithId',
        getAllErpCurrentCardAccountsWithPeriod:
            'erp/FinanceCards/GetAllErpCurrentCardAccountsWithPeriod',
        getErpFinanceCurrentForCardtype:
            'erp/FinanceCards/GetErpCurrentCardType', //cardtype from erpcodelistcurrentcardtype
        getErpCodeListFilteredCurrentCardType:
            'erp/FinanceCards/GetErpCodeListFilteredCurrentCardType',
        getErpCurrencies: 'erp/TestCurrency/GetTestCurrencies',
        getErpFinanceCurrentForAging:
            'erp/FinanceCards/GetErpCurrentAccountForAgingType', //erpcodelistcurrentagingtype
        getErpFinanceCurrentForPaymentweek:
            'erp/FinanceCards/GetErpCodeListWeekDay', //erpcodelistweekday
        getErpFinanceCurrentForRatetype:
            'erp/FinanceCards/GetErpCurrratetypeForList', //erpcodelistcurrratetype
        getErpFinanceCurrentCardAccountId:
            'erp/FinanceCards/GetErpCurrentCardAccountId',
        getErpContractType: 'erp/FinanceCards/GetCardContactTypesForList', //erpcodelistcontracttype
        getErpCurrentCardContract: 'erp/FinanceCards/GetCardContacts', //erpcurrentcardcontract
        updateErpCurrentCardConract: 'erp/FinanceCards/UpdateCardContracts', //erpcurrentcardcontract
        updateErpBankCardConract: 'erp/FinanceCards/UpdateCardBankAccounts', //erpcurrentcardbankaccounts

        getErpCurrentCardBank: 'erp/FinanceCards/GetCurrentCardBank',
        getErpCompanyBranchForList:
            'erp/ErpWorkDefinations/GetCompanyBranchesForList',
        getHrBankBranchForList: 'hr/OperatingDefinition/GetBankBranchForList',
        getErpCurrratetypeForList: 'erp/FinanceCards/GetErpCodeListCurrrateDay',
        getErpCurrentBusinessForList:
            'erp/FinanceCards/GetErpCodeListCurrentBusinessType',
        getErpInVoiceProfileForList:
            'erp/FinanceCards/GetErpCodeListInVoiceProfileType',
        getErpCurrentCardForCompanyGroup:
            'erp/FinanceCards/GetErpCurrentCardForCompanyGroup',
        getErpFinanceCurrentCardsForList:
            'erp/FinanceCards/GetErpFinanceCurrentCardsForList',
        getErpFinanceCurrentCardsForListByCompany:
            'erp/FinanceCards/GetErpFinanceCurrentCardsForListByCompany',
        getErpCurrentCardFilteredByCardType:
            'erp/FinanceCards/GetErpCurrentCardFilteredByCardType',
        getErpFinanceCurrentOtherCardControll:
            'erp/FinanceCards/GetErpFinanceCurrentOtherCardControll',
        getErpFinanceCurrentCardsForListFiltered:
            'erp/FinanceCards/GetErpCurrentCardForListFiltered',

        getErpCurrentCardCompanyGroupForList:
            'erp/FinanceCards/GetErpCurrentCardCompanyGroupForList',
        getErpFinanceAccountForCardtype:
            'erp/AccountCards/GetAccountCardForList',
        getErpcodelistcurrentCardtypeForCurrent:
            'erp/FinanceCards/GetErpcodelistcurrentCardtypeForCurrent',
        getAccountingCode: 'erp/FinanceCards/GetErpcurrentcardaccountidForList',
        getErpCurrenAccountCardForPeriod:
            'erp/FinanceCards/GetErpCurrenAccountCardForPeriod',
        getErpCurrentPlanDetail: 'erp/FinanceCards/GetErpCurrentPlanDetail',
        getErpCurrentEInvoinceByCompanybranch: 'erp/FinanceCards/GetErpCurrentEInvoinceByCompanybranch',
        getBranchByUserandCompany: 'erp/FinanceCards/GetBranchByUserandCompany',
        getErpFinanceCurrentFromCardType: 'erp/FinanceCards/GetErpFinanceCurrentFromCardType',
        createErpCurrentGroup: 'erp/FinanceCards/CreateErpCurrentGroup',
        getErpCurrentGroup: 'erp/FinanceCards/GetErpCurrentGroup',
        getErpCurrentDetailByGroup: 'erp/FinanceCards/GetErpCurrentDetailByGroup',
        deleteErpCurrentGroup: 'erp/FinanceCards/DeleteErpCurrentGroup',
        getErpAgingReport: 'erp/FinanceCards/GetErpAgingReport',
        getErpAgingReportDetails: 'erp/FinanceCards/GetErpAgingReportDetails'
    },
    erpfinancebankcashcards: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpFinanceBankCashCard: '',
        updateErpFinanceBankCashCard: '',
        deleteErpFinanceBankCashCard: '',
        getErpFinanceBankCashCards: '',
    },
    erpportfolioopenings: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpPortfolioOpening: '',
        updateErpPortfolioOpening: '',
        deleteErpPortfolioOpening: '',
        getErpPortfolioOpenings: '',
    },
    erppurchaseinvoices: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpPurchaseInvoice: '',
        updateErpPurchaseInvoice: '',
        deleteErpPurchaseInvoice: '',
        getErpPurchaseInvoices: '',
    },
    erpsaleinvoices: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpSaleInvoice: '',
        updateErpSaleInvoice: '',
        deleteErpSaleInvoice: '',
        getErpSaleInvoices: '',
    },
    erppurchasereturninvoices: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpPurchaseReturnInvoice: '',
        updateErpPurchaseReturnInvoice: '',
        deleteErpPurchaseReturnInvoice: '',
        getErpPurchaseReturnInvoices: '',
    },
    erpsalereturninvoices: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpSaleReturnInvoice: '',
        updateErpSaleReturnInvoice: '',
        deleteErpSaleReturnInvoice: '',
        getErpSaleReturnInvoices: '',
    },
    erpexpenseslips: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpExpenseSlip: '',
        updateErpExpenseSlip: '',
        deleteErpExpenseSlip: '',
        getErpExpenseSlips: '',
    },
    erpcollectiontransactions: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpCollectionTransaction: '',
        updateErpCollectionTransaction: '',
        deleteErpCollectionTransaction: '',
        getErpCollectionTransactions: '',
    },
    erppaymenttransactions: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpPaymentTransaction: '',
        updateErpPaymentTransaction: '',
        deleteErpPaymentTransaction: '',
        getErpPaymentTransactions: '',
    },
    erpothertransactions: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpOtherTransaction: '',
        updateErpOtherTransaction: '',
        deleteErpOtherTransaction: '',
        getErpOtherTransactions: '',
    },
    erpreceipttransactions: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpReceiptTransaction: '',
        updateErpReceiptTransaction: '',
        deleteErpReceiptTransaction: '',
        getErpReceiptTransactions: '',
    },
    erpcheckportfoliotransactions: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpCheckPortfolioTransaction: '',
        updateErpCheckPortfolioTransaction: '',
        deleteErpCheckPortfolioTransaction: '',
        getErpCheckPortfolioTransactions: '',
    },
    erpvoucherportfoliotransactions: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpVoucherPortfolioTransaction: '',
        updateErpVoucherPortfolioTransaction: '',
        deleteErpVoucherPortfolioTransaction: '',
        getErpVoucherPortfolioTransactions: '',
    },
    erpvouchertranss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpVoucherTrans: '',
        updateErpVoucherTrans: '',
        deleteErpVoucherTrans: '',
        getErpVoucherTranss: '',
    },
    erpfinancevoucherportfoliotranss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpFinanceVoucherPortfolioTrans: '',
        updateErpFinanceVoucherPortfolioTrans: '',
        deleteErpFinanceVoucherPortfolioTrans: '',
        getErpFinanceVoucherPortfolioTranss: '',
    },
    erpfinanceeinvoices: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpFinanceEinvoice: '',
        updateErpFinanceEinvoice: '',
        deleteErpFinanceEinvoice: '',
        getErpFinanceEinvoices: '',
    },
    erpfinancebanks: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpFinanceBank: '',
        updateErpFinanceBank: '',
        deleteErpFinanceBank: '',
        getErpFinanceBanks: '',
    },
    erpfinancereconciliations: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpFinanceReconciliation: '',
        updateErpFinanceReconciliation: '',
        deleteErpFinanceReconciliation: '',
        getErpFinanceReconciliations: '',
    },
    erpincomeexpenseplans: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpIncomeExpensePlan: '',
        updateErpIncomeExpensePlan: '',
        deleteErpIncomeExpensePlan: '',
        getErpIncomeExpensePlans: '',
    },
    erppaymentdemands: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpPaymentDemand: '',
        updateErpPaymentDemand: '',
        deleteErpPaymentDemand: '',
        getErpPaymentDemands: '',
    },
    erpconfirmations: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpConfirmation: '',
        updateErpConfirmation: '',
        deleteErpConfirmation: '',
        getErpConfirmations: '',
    },
    erpinvoicematchings: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpInvoiceMatching: '',
        updateErpInvoiceMatching: '',
        deleteErpInvoiceMatching: '',
        getErpInvoiceMatchings: '',
    },
    erpbankinstructionss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpBankInstructions: '',
        updateErpBankInstructions: '',
        deleteErpBankInstructions: '',
        getErpBankInstructionss: '',
    },
    erpfinancemonitors: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpFinanceMonitor: '',
        updateErpFinanceMonitor: '',
        deleteErpFinanceMonitor: '',
        getErpFinanceMonitors: '',
    },
    erpdepotcards: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpDepotCard: 'erp/StokCost/CreateDepotCard',
        updateErpDepotCard: 'erp/StokCost/UpdateDepotCard',
        deleteErpDepotCard: 'erp/StokCost/DeleteDepotCard',
        getErpDepotCards: 'erp/StokCost/GetDepotCards',
    },
    erpstockworkparameterss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpStockWorkParameters: '',
        updateErpStockWorkParameters: '',
        deleteErpStockWorkParameters: '',
        getErpStockWorkParameterss: '',
    },
    erpstockworkdefinitionss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpStockWorkDefinitions: '',
        updateErpStockWorkDefinitions: '',
        deleteErpStockWorkDefinitions: '',
        getErpStockWorkDefinitionss: '',
    },
    erpstockcards: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpStockCard: 'erp/StokCost/CreateStockCard',
        updateErpStockCard: 'erp/StokCost/UpdateStockCard',
        deleteErpStockCard: 'erp/StokCost/DeleteStockCard',
        getErpStockCards: 'erp/StokCost/GetStockCardsListQuery',
        getErpStockCardsByCompany: 'erp/StokCost/GetStokCardsListByCompany',
        subCategoryListQuery: 'erp/StokCost/GetSubCategoryCardQuery',
        geterpunitcardmainunit: 'erp/StokCost/GetErpUnitCardMainUnitQuery',
        getcategorylistAll: 'erp/StokCost/GetAllCategoryList',
        getstockcardbycode: 'erp/StokCost/GetStockCardByCode',
        getStockForUpdateQuery: 'erp/StokCost/GetStockForUpdateQuery',
        getStockCardQuery: 'erp/StokCost/GetStockCardQuery',
        getStockCostForListQuery: 'erp/StokCost/GetStockCostForListQuery',
        getStockCardWithCardType: 'erp/StokCost/GetStockCardWithCardType',
        saveFilesToS3: 'erp/StokCost/SaveFilesToS3',
        getStockCardsDocuments: 'erp/StokCost/GetStockCardsDocuments',
        getStockCharacteristicFeatures: 'erp/StokCost/GetStockCharacteristicFeatures',
        CreateBToBSlider: 'erp/StokCost/CreateBToBSlider',
        GetBtoBSliderEditList: 'erp/StokCost/GetBtoBSliderEditList',
        GetBtoBStockConnectionList: 'erp/StokCost/GetBtoBStockConnectionList',
        getStocksSearchResult: 'erp/StokCost/GetStocksSearchResult',
        getStockAndPriceControl: 'erp/StokCost/GetStockAndPriceControl',
        getCardInfo: 'erp/StokCost/GetCardInfo',
    },
    erpstocktransactionlist: {
        getErpStockTransactionList: 'erp/StokCost/GetErpStockTransactionList'
    },
    erpstockunitcards: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpStockUnitCard: 'erp/StokCost/CreateStockUnitCard',
        updateErpStockUnitCard: 'erp/StokCost/UpdateStockUnitCard',
        deleteErpStockUnitCard: 'erp/StokCost/DeleteStockUnitCard',
        getErpStockUnitCards: 'erp/StokCost/GetUnitCard',
        getErpUnitCardByType: 'erp/StokCost/GetErpUnitCardByType',
        getErpStockUnitCardTypes: 'erp/StokCost/GetErpUnitCardType',
        getEinvoiceunit: 'erp/StokCost/GetErpEinvoiceunit',
        getErpStockUnitCardsUnitremark: 'erp/StokCost/GetErpUnitCardUnitremark',
    },
    erpstockpurchasecards: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpStockPurchaseCard:
            'erp/StokCost/CreateProductPurchaseCardCommand',
        updateErpStockPurchaseCard: 'erp/StokCost/UpdateProductPurchaseCardCommand',/*eklenecek*/
        deleteErpStockPurchaseCard: 'erp/StokCost/DeleteProductPurchaseCardCommand',/*eklenecek*/
        getErpStockPurchaseCards: 'erp/StokCost/GetProductPurchaseCardQuery',
        getErpStockPurchaseCardWithId: 'erp/StokCost/GetErpStockPurchaseCardWithId',
        getUnitCardListQuery: 'erp/StokCost/GetUnitCardListQuery',
        getCurrentCardListQuery: 'erp/StokCost/GetCurrentCardListQuery',
        getStockListQuery: 'erp/StokCost/getStockListQuery',
        getProductPurchaseForStockQuery: 'erp/StokCost/GetProductPurchaseForStockQuery',
    },
    erpstockcriticals: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpStockCritical: '',
        updateErpStockCritical: '',
        deleteErpStockCritical: '',
        getErpStockCriticals: '',
    },
    erpdepartmentdemands: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        getErpProductCards: 'erp/StokCost/GetDemandProductCards',
        createErpDepartmentDemand: 'erp/StokCost/CreateDemandFichowner',
        updateErpDepartmentDemand: 'erp/StokCost/UpdateDemandFichowner',
        deleteErpDepartmentDemand: 'erp/StokCost/DeleteDemandFichowner',
        cancelErpDemandApproval: 'erp/StokCost/CancelErpDemandApproval',
        getErpDepartmentDemands: '',
        getErpDemandDepots: 'erp/StokCost/GetDemandDepots',
        getErpDemandDocumentTypes: 'erp/StokCost/GetDemandDocuments',
        getErpPurchaseCards: 'erp/StokCost/GetDemandPurchaseCards',
        getErpDemandAllPurchaseCards: 'erp/StokCost/GetAllDemandPurchaseCards',
        getErpDemandUnits: 'erp/StokCost/GetDemandUnits',
        getErpDemandAllUnits: 'erp/StokCost/GetAllDemandUnits',
        getErpDemandDepotAmount: 'erp/StokCost/GetErpDemandDepotAmount',
        // getErpFicheOwnerList: 'erp/StokCost/GetDemandFichownerList',
        getErpDemandFichOwner: 'erp/StokCost/GetDemandFichownerList',
        getErpDemandFichDetail: 'erp/StokCost/GetDemandFichDetails',
        getErpDemandOwnerFromId: 'erp/StokCost/GetErpDemandOwnerFromId',
        getDemandFichdetailListForProduct: 'erp/StokCost/GetDemandFichdetailListForProducts',
        GetDemandFichdetailListForPmsDailyHouse: 'erp/StokCost/GetDemandFichdetailListForPmsDailyHouses',
    },
    erpdemandtransfers: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpDemandTransfer: '',
        updateErpDemandTransfer: '',
        deleteErpDemandTransfer: '',
        getErpDemandTransfersForList: 'erp/StokCost/GetDemandTransfersForList',
        getDepotTypeForTransferList: 'erp/StokCost/GetDepotTypeForTransferList',
        createTransferToDepotFiches: 'erp/StokCost/CreateTransferToDepotFiches',
    },
    erpstockdepotfichess: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpStockDepotFiches: 'erp/StokCost/CreateDepotFiches',
        updateErpStockDepotFiches: 'erp/StokCost/UpdateDepotFiches',
        deleteErpStockDepotFiches: 'erp/StokCost/DeleteDepotFiches',
        getErpStockDepotFichess: 'erp/StokCost/GetDepotFiches',
        getErpStockDepotFicheOwner: 'erp/StokCost/GetDepotFichesFor',
        getEntryExitDepotCounts: 'erp/StokCost/GetEntryExitDepotCounts'
    },
    erpdepotcountresults: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpDepotCountResult: 'erp/StokCost/ErpStoreCountCreate',
        updateErpDepotCountResult: 'erp/StokCost/ErpStoreCountUpdate',
        deleteErpDepotCountResult: 'erp/StokCost/ErpStoreCountDelete',
        getErpDepotCountResults: 'erp/StokCost/GetErpStoreCountOwner',
        getErpStoreCountOwnerWithDetail: 'erp/StokCost/GetErpStoreCountOwnerWithDetail',
    },
    erpdepotcountdifferences: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpDepotCountDifference: '',
        updateErpDepotCountDifference: '',
        deleteErpDepotCountDifference: '',
        getErpDepotCountDifferences: '',
    },
    erpcostingservices: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpCostingService: '',
        updateErpCostingService: '',
        deleteErpCostingService: '',
        getErpCostingServices: '',
    },
    erpperiodclosureservices: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpPeriodClosureService: '',
        updateErpPeriodClosureService: '',
        deleteErpPeriodClosureService: '',
        getErpPeriodClosureServices: '',
    },
    erpinventoryreports: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpInventoryReport: '',
        updateErpInventoryReport: '',
        deleteErpInventoryReport: '',
        getErpInventoryReports: '',
    },
    erpcostingreports: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpCostingReport: '',
        updateErpCostingReport: '',
        deleteErpCostingReport: '',
        getErpCostingReports: '',
    },
    erpstockreports: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpStockReport: '',
        updateErpStockReport: '',
        deleteErpStockReport: '',
        getErpStockReports: '',
        getErpDepotStockReports: 'erp/StokCost/GetErpDepotStockReports',
        getErpStockExtractStatements: 'erp/StokCost/GetErpStockExtractStatements',
        getErpDepotCards: 'erp/StokCost/GetDepotCards',
        getErpStockUnitsWithId: 'erp/StokCost/GetErpStockUnitsWithId'
    },
    hrworkdefinitions: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createHrWorkDefinition: '',
        updateHrWorkDefinition: '',
        deleteHrWorkDefinition: '',
        getHrWorkDefinitions: '',
    },
    hrworkparameterss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createHrWorkParameters: '',
        updateHrWorkParameters: '',
        deleteHrWorkParameters: '',
        getHrWorkParameterss: '',
    },
    hrcodelistsgkcodes: {
        createHrCodeListSgkCode: 'hr/OperatingDefinition/CreateOpdSgkcodeItem',
        updateHrCodeListSgkCode: 'hr/OperatingDefinition/UpdateOpdSgkcodeItem',
        deleteHrCodeListSgkCode: 'hr/OperatingDefinition/DeleteOpdSgkcodeItem',
        getHrCodeListSgkCodes: 'hr/OperatingDefinition/GetOpdSgkcode',
        getHrGetSgkCodeWithId: 'hr/OperatingDefinition/GetSgkCodeWithIdItem',
    },
    hrcodelisttranscodes: {
        createHrCodeListTransCode: 'hr/OperatingDefinition/CreateTransCodeItem',
        updateHrCodeListTransCode: 'hr/OperatingDefinition/UpdateTransCodeItem',
        deleteHrCodeListTransCode: 'hr/OperatingDefinition/DeleteTransCodeItem',
        getHrCodeListTransCodes: 'hr/OperatingDefinition/GetTransCode',
        getHrPartialExemptions: 'hr/OperatingDefinition/GetPartialExemptions',
        getHrTransvalues: 'hr/OperatingDefinition/GetTransValue',
        getHrTransTypes: 'hr/OperatingDefinition/GetTransType',
        getHrTransCodeWithId: 'hr/OperatingDefinition/GetTransCodeWithIdItem',
        getHrCompulsoryDeductions:
            'hr/OperatingDefinition/GetCompulsoryDeductions',
        getTransCodeQueryForPayrollPaymentFiltered:
            'hr/OperatingDefinition/GetTransCodeQueryForPayrollPaymentFiltered',
    },
    hrcodelistsection: {
        createHrCodeListSection: 'hr/OperatingDefinition/CreateCodeListSectionItem',
        updateHrCodeListSection: 'hr/OperatingDefinition/UpdateCodeListSectionItem',
        deleteHrCodeListSection: 'hr/OperatingDefinition/DeleteHrCodeListSectionItem',
        getHrCodeListSection: 'hr/OperatingDefinition/GetCodeListSectionList',
        getHrCodeListSectionListWithId: 'hr/OperatingDefinition/GetHrCodeListSectionListWithId',
    },
    erpservicepurchaseinvoices: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpServicePurchaseInvoice: '',
        updateErpServicePurchaseInvoice: '',
        deleteErpServicePurchaseInvoice: '',
        getErpServicePurchaseInvoices: '',
    },
    hrbranchtranscodes: {
        createHrBranchTransCode:
            'hr/OperatingDefinition/CreateTransCodeBranchItem',
        updateHrBranchTransCode:
            'hr/OperatingDefinition/UpdateTransCodeBranchItem',
        deleteHrBranchTransCode:
            'hr/OperatingDefinition/DeleteTransCodeBranchItem',
        getHrBranchTransCodes: 'hr/OperatingDefinition/GetTransCodeBranch',
        getHrBranchTransCodesList:
            'hr/OperatingDefinition/GetTransCodeBranchList',
        // getHrCompanys: 'hr/Organization/GetOrgCompanies',
        getHrBranchs: 'hr/Organization/GetOrgBranchs',
        // getHrCodeListTransCodes: 'hr/OperatingDefinition/GetTransCode',
        getTransCodeBranchList: 'hr/OperatingDefinition/GetTransCodeBranchList',
        getTransCodeBranchMultiple: 'hr/OperatingDefinition/GetTransCodeBranchMultiple',
        getOrgCompaniesForList: 'hr/Organization/GetOrgCompaniesForList',
        getHrBranchsFromSelectedCompany:
            'hr/Organization/GetOrgBranchCompanyName',
        getTransCodeForAdvanceList:
            'hr/OperatingDefinition/GetTransCodeForAdvanceList',
    },
    hrshiftcodes: {
        createHrShiftCode: 'hr/OperatingDefinition/CreateShiftcodeItem',
        updateHrShiftCode: 'hr/OperatingDefinition/UpdateShiftcodeItem',
        deleteHrShiftCode: 'hr/OperatingDefinition/DeleteShiftcodeItem',
        getHrShiftCodes: 'hr/OperatingDefinition/GetShiftcode',
        getShiftCodeBasic: 'hr/OperatingDefinition/GetShiftCodeBasic',
        getTransCodeShifList: 'hr/OperatingDefinition/GetTransCodeBranchList',
        getHrShiftCodeWithId: 'hr/OperatingDefinition/GetShiftCodeWithIdItem',
    },
    hrencouragementlaws: {
        createHrEncouragementLaw:
            'hr/OperatingDefinition/CreateEncouragementItem',
        updateHrEncouragementLaw:
            'hr/OperatingDefinition/UpdateEncouragementItem',
        deleteHrEncouragementLaw:
            'hr/OperatingDefinition/DeleteEncouragementItem',
        getHrEncouragementLaws: 'hr/OperatingDefinition/GetEncouragement',
        getHrEncouragementLawsWithId:
            'hr/OperatingDefinition/GetEncouragementWithIdItem',
    },
    // ,hrexitingcodes:{
    //    createHrEncouragementLaw: '',
    //   updateHrEncouragementLaw: '',
    //   deleteHrEncouragementLaw: '',
    //    getHrEncouragementLaws: ''
    //  }
    hrexitingcodes: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createHrExitingCode: '',
        updateHrExitingCode: '',
        deleteHrExitingCode: '',
        getHrExitingCodes: 'hr/OperatingDefinition/GetExitingCodeSgk',
    },

    hrexitingcodeiskurs: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createHrExitingCodeIskur: '',
        updateHrExitingCodeIskur: '',
        deleteHrExitingCodeIskur: '',
        getHrExitingCodeIskurs: 'hr/OperatingDefinition/GetExitingCodeIskur',
    },
    hrcountrys: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createHrCountry: '',
        updateHrCountry: '',
        deleteHrCountry: '',
        getHrCountrys: 'hr/OperatingDefinition/GetCountryCodeQuery',
        getHrRegions: 'hr/OperatingDefinition/GetRegionQuery',
        getHrCitys: 'hr/OperatingDefinition/GetCityCodeQuery',
    },
    erppurchaseparameterss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpPurchaseParameters: '',
        updateErpPurchaseParameters: '',
        deleteErpPurchaseParameters: '',
        getErpPurchaseParameterss: '',
    },
    erppurchaseworkdefinitionss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpPurchaseWorkDefinitions: '',
        updateErpPurchaseWorkDefinitions: '',
        deleteErpPurchaseWorkDefinitions: '',
        getErpPurchaseWorkDefinitionss: '',
    },
    erppurchasecontracts: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpPurchaseContract: 'erp/Purchase/CreateErpPurchaseContacts',
        updateErpPurchaseContract: 'erp/Purchase/UpdateErpPurchaseContacts',
        deleteErpPurchaseContract: 'erp/Purchase/DeleteErpPurchaseContacts',
        getErpPurchaseContracts: 'erp/Purchase/GetErpPurchaseContactsQuery',
        getErpStockContactDocumentTypes: 'erp/Purchase/getErpStockContactDocumentTypes',
        getErpPurchaseContactWithId: 'erp/Purchase/GetErpPurchaseContactWithId',
        getErpCurrentGroupList: 'erp/FinanceCards/GetErpCurrentGroup',
    },
    turnoverbonusdefinitionss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createTurnOverBonusDefinitions: '',
        updateTurnOverBonusDefinitions: '',
        deleteTurnOverBonusDefinitions: '',
        getTurnOverBonusDefinitionss: '',
    },
    erppurchasedemandentrys: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpPurchaseDemandEntry:
            'erp/Purchase/CreatePurchaseDemandCommand',
        updateErpPurchaseDemandEntry:
            'erp/Purchase/UpdatePurchaseDemandCommand',
        deleteErpDepartmentDemand:
            'erp/Purchase/DeletePurchaseDemandFichCommand',
        getErpPurchaseDemandEntrys: '',
        getErpDemandDocumentTypes: 'erp/Purchase/GetPurchaseDemandDocumenttypeQuery',
        getErpDemandFichOwner: 'erp/Purchase/GetPurchaseDemandFichownerListQuery',
        cancelErpDemandApproval: 'erp/Purchase/CancelPurchaseDemandApprovalCommand',
        getErpDemandFichDetail: 'erp/Purchase/GetPurchaseDemandFichdetailListQuery',
        getErpPurchaseDepots: 'erp/Purchase/GetPurchaseDepoQuery',
        getErpPurchaseAllDepots: 'erp/Purchase/GetPurchaseAllDepoQuery',
        getErpProductCards: 'erp/Purchase/GetPurchaseDemandproductscardQuery'
    },
    erppurchasetranss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpPurchaseTrans: '',
        updateErpPurchaseTrans: '',
        deleteErpPurchaseTrans: '',
        getErpPurchaseTranss: '',
    },
    erppurchasebids: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpPurchaseBid: '',
        updateErpPurchaseBid: '',
        deleteErpPurchaseBid: '',
        getErpPurchaseBids: '',
    },
    erppurchasebidanalysiss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpPurchaseBidAnalysis: '',
        updateErpPurchaseBidAnalysis: '',
        deleteErpPurchaseBidAnalysis: '',
        getErpPurchaseBidAnalysiss: '',
    },
    erppurchaseorders: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpPurchaseOrder: '',
        updateErpPurchaseOrder: '',
        deleteErpPurchaseOrder: '',
        getErpPurchaseOrders: '',
    },
    erppurchasedispatchs: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpPurchaseDispatch: '',
        updateErpPurchaseDispatch: '',
        deleteErpPurchaseDispatch: '',
        getErpPurchaseDispatchs: '',
    },
    erppurchasetransreportss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpPurchaseTransReports: '',
        updateErpPurchaseTransReports: '',
        deleteErpPurchaseTransReports: '',
        getErpPurchaseTransReportss: '',
    },
    erpfixtureworkparameterss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpFixtureWorkParameters: '',
        updateErpFixtureWorkParameters: '',
        deleteErpFixtureWorkParameters: '',
        getErpFixtureWorkParameterss: '',
    },
    erpfixtureworkdefinitionss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpFixtureWorkDefinitions: '',
        updateErpFixtureWorkDefinitions: '',
        deleteErpFixtureWorkDefinitions: '',
        getErpFixtureWorkDefinitionss: '',
    },
    erpfixturecards: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpFixtureCard: '',
        updateErpFixtureCard: '',
        deleteErpFixtureCard: '',
        getErpFixtureCards: '',
    },
    fixtureamortizationcalculates: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createFixtureAmortizationCalculate: '',
        updateFixtureAmortizationCalculate: '',
        deleteFixtureAmortizationCalculate: '',
        getFixtureAmortizationCalculates: '',
    },
    fixturemaintenanceplans: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createFixtureMaintenancePlan: '',
        updateFixtureMaintenancePlan: '',
        deleteFixtureMaintenancePlan: '',
        getFixtureMaintenancePlans: '',
    },
    fixturemaintenancetasks: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createFixtureMaintenanceTask: '',
        updateFixtureMaintenanceTask: '',
        deleteFixtureMaintenanceTask: '',
        getFixtureMaintenanceTasks: '',
    },
    fixturereports: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createFixtureReport: '',
        updateFixtureReport: '',
        deleteFixtureReport: '',
        getFixtureReports: '',
    },
    fixtureinventoryreps: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createFixtureInventoryRep: '',
        updateFixtureInventoryRep: '',
        deleteFixtureInventoryRep: '',
        getFixtureInventoryReps: '',
    },
    pmsreservationlists: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        getPmsReservations: 'pms/reservation/getPmsReservations',
        getIncReservations: 'pms/reservation/getIncReservations',
        getPmsHotels: 'pms/reservation/getpmshotels',
        getPmsAgency: 'pms/reservation/getpmsagency',
        getPmsMarkets: 'pms/reservation/getpmsmarkets',
        getPmsBoards: 'pms/reservation/getpmsboards',
        getPmsRooms: 'pms/room/getpmsrooms',
        getListPmsRoomWithType: 'pms/room/GetListPmsRoomWithType',
        getReservationPmsRoom: 'pms/room/getreservationpmsroom',
        getPmsRoomTypes: 'pms/room/getproperyroomtypes',
        getPmsPriceTypes: 'pms/room/getproperypricetypes',
        getPmsFindContract: 'pms/contract/findcontract',
        createPmsReservationOwner: 'pms/reservation/createpmsreservationowner',
        cancelPmsReservationOwner: 'pms/reservation/cancelreservationowner',
        updatePmsReservationOwner: 'pms/reservation/updatereservationowner',
        getReservationOwnerEdit: 'pms/reservation/getreservationowneredit',
        deleteReservationOwner: 'pms/reservation/deletereservationowner',
        updateDailyDetail: 'pms/reservation/UpdateDailyDetail',
        updateBlockage: 'pms/reservation/UpdateReservationBlockage',
        removeBlockage: 'pms/reservation/RemoveBlockage',
        getErpReservationOwners: 'pms/reservation/GetErpReservationOwners',
        getErpReservationDetails: 'pms/reservation/GetErpReservationDetails',
        getDepartmentCityLedger: 'pms/reservation/GetDepartmentCityLedger',
        getReservationsByInvoiceId:
            'pms/reservation/GetReservationsByInvoiceId',
        getInvoiceParameter: 'pms/reservation/GetInvoiceParameter',
        getpropertyCLAgencyAccountId:
            'pms/reservation/GetpropertyCLAgencyAccountId',
        getSinReservation: 'pms/reservation/GetSinReservation',
        updateSinReservation: 'pms/reservation/UpdateSinReservation',
        getSinDefinations: 'pms/reservation/GetSinDefinations',
        getSinAccounts: 'pms/reservation/GetSinAccounts',
        getReservationListForTrace:
            'pms/reservation/GetReservationListForTrace',
        sendReservation: 'pms/reservation/SendReservation',
        getTempReservation: 'pms/reservation/GetTempReservation',
        importReservation: 'pms/reservation/ImportReservation',
        getResRoomRack: 'pms/reservation/GetResRoomRack',
        getReservationsForActivity: 'pms/reservation/GetReservationsForActivity',
        updatePmsReservationPrice: 'pms/reservation/updatereservationprice',
        updateConfirmStatus: 'pms/reservation/updateConfirmStatus',
        seperatePmsReservation: 'pms/reservation/seperatereservation',
        getpricedetails: 'pms/reservation/GetReservationPriceDetails',
        delayArrivalPmsReservation: 'pms/reservation/delayarrivalreservation',

        approveOnlineReservationPayment: 'pms/reservation/ApproveOnlineReservationPayment',

        changeDeparturePmsReservation: 'pms/reservation/changedeparturereservation',
        undoReservation: 'pms/reservation/UndoReservation',
        GetAgecnyPackets: 'pms/reservation/GetAgecnyPackets',
        saveReservationDocuments: 'pms/crm/SaveReservationDocuments',
        getReservationDocuments: 'pms/crm/GetReservationDocuments',
        deleteReservationDocumentByRecId: 'pms/crm/DeleteReservationDocumentByRecId',
        getPacketSelections: 'pms/contract/GetContractPacketSelections',
        sendReservationMail: 'pms/reservation/SendReservationMail',
    },
    pmsfolio: {
        getDepartments: 'pms/folio/getpmsdepartments',
        createPmsFolio: 'pms/folio/createpmsfolio',
        updatePmsFolio: 'pms/folio/updatepmsfolio',
        deletePmsFolio: 'pms/folio/deletepmsfolio',
        getTaxes: 'pms/folio/gettaxes',
        updatefoliorouting: 'pms/folio/updatefoliorouting',
        getfolioroutings: 'pms/folio/getfolioroutings',
        updatefoliodiscount: 'pms/folio/updatefoliodiscount',
        getfoliodiscounts: 'pms/folio/getfoliodiscounts',
        getFolioByReservation: 'pms/folio/getFolioByReservation',
        updatefoliosplit: 'pms/folio/updatefoliosplit',
        updatefoliomove: 'pms/folio/updatefoliomove',

    },
    pmsgroupreservations: {
        getpmsgroupreservations: 'pms/groupreservation/GetPmsGroupReservation',
        getpmsgroupreservationbyid: 'pms/groupreservation/GetPmsGroupReservationById',
        createpmsgroupreservation: 'pms/groupreservation/CreatePmsGroupReservation',
        updatepmsgroupreservation: 'pms/groupreservation/UpdatePmsGroupReservation',
        deletepmsgroupreservation: 'pms/groupreservation/DeletePmsGroupReservation',
        getpmsallotmentbygroupresid: 'pms/groupreservation/GetPmsAllotmentByGroupresid',
        getpmssaleresbygroupresid: 'pms/groupreservation/GetPmsSaleResByGroupresid',
        removegroupreservation: 'pms/groupreservation/removegroupreservation',
    },
    pmswizardreservations: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createPmsWizardReservation: '',
        updatePmsWizardReservation: '',
        deletePmsWizardReservation: '',
        getPmsWizardReservations: '',
        getContractPrices: 'pms/contract/GetContractPrices',
    },
    pmsonlinereservations: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createPmsOnlineReservation:
            'pms/onlinereservation/SaveFactSheetDefination',
        updatePmsOnlineReservation: '',
        deletePmsOnlineReservation: '',
        getPmsOnlineReservations:
            'pms/onlinereservation/GetFactSheetdefination',
        createS3LinkOfImages: 'pms/onlinereservation/SaveImagesToS3',
        deleteS3LinkOfImages: 'pms/onlinereservation/DeleteImagesFromS3',
        readHtml: 'pms/onlinereservation/ReadHtml',
        uploadHtmls: 'pms/onlinereservation/UploadHtml',
        createOnlineMarketings: 'pms/onlinereservation/CreateOnlineMarketing',
        deleteOnlineMarketings: 'pms/onlinereservation/DeleteOnlineMarketing',
        getContracts: 'pms/contract/GetContracts',
        getCountries: 'identity/api/countries/GetCountries',
        createContractMapping: 'pms/onlinereservation/CreateContractMapping',
        getContractMappings: 'pms/onlinereservation/GetContractMappingList',
        updateContractMapping: 'pms/onlinereservation/UpdateContractMapping',
        deleteContractMapping: 'pms/onlinereservation/DeleteContractMapping',

        getHotelFeatures: 'pms/onlinereservation/GetHotelFeatures',
        saveHotelFeaturesDetails: 'pms/onlinereservation/SaveHotelFeaturesDetails',
        getHotelFeaturesDetails: 'pms/onlinereservation/GetHotelFeaturesDetails',
        createOnlineTerms: 'pms/onlinereservation/SaveOnlineTerms',
        updateOnlineTerms: 'pms/onlinereservation/UpdateOnlineTerms',
        deleteOnlineTerms: 'pms/onlinereservation/DeleteOnlineTerms',
        getOnlineTerms: 'pms/onlinereservation/GetOnlieTerms',
        getOnlinePrivacyTerm: 'pms/onlinereservation/GetOnlinePrivacyTerm',

        getPmsPromotionAction:'pms/onlinereservation/GetPmsPromotionAction',
        getRandomPromotionCode:'pms/onlinereservation/GetRandomPromotionCode',
        createPmsPromotionAction:'pms/onlinereservation/CreatePmsPromotionAction',
        deletePmsPromotionActions:'pms/onlinereservation/DeletePmsPromotionAction',
        updatePmsPromotionAction:'pms/onlinereservation/UpdatePmsPromotionAction'
    },
    pmsreservationimports: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createPmsReservationImport: '',
        updatePmsReservationImport: '',
        deletePmsReservationImport: '',
        getPmsReservationImports: '',
    },
    pmsreservationtransfers: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createPmsReservationTransfer: '',
        updatePmsReservationTransfer: '',
        deletePmsReservationTransfer: '',
        getPmsReservationTransfers: '',
    },
    pmssednainfonetworkreservations: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createPmsSednaInfoNetworkReservation: '',
        updatePmsSednaInfoNetworkReservation: '',
        deletePmsSednaInfoNetworkReservation: '',
        getPmsSednaInfoNetworkReservations: '',
    },
    pmscallcenters: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createPmsCallCenter: 'pms/reservation/CreateCallCenterOwnerCommand',
        createCallCenterOfferSearch: 'pms/reservation/CreateCallCenterOfferSearch',
        updatePmsCallCenter: 'pms/reservation/UpdateCallCenterOwner',
        deletePmsCallCenter: 'pms/reservation/DeleteCallCenterOwner',
        getPmsCallCenters: '',
        GetCustomers: 'pms/reservation/GetCallCenterCustomersQuery',
        getCallCenterOwner: 'pms/reservation/GetCallCenterSearchOwnerQuery',
        getCallCenterReservation: 'pms/reservation/GetCallCenterReservation',
        getCallCenterOfferSearch:
            'pms/reservation/GetCallCenterOfferSearchQuery',
        getCallCenterSearchOwnerById:
            'pms/reservation/GetCallCenterSearchOwnerById',
        getCallCenterSearchReservation:
            'pms/reservation/GetCallCenterSearchReservation',
        //tevfk
    },

    pmsbanquettereservations: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createPmsBanquetteReservation: '',
        updatePmsBanquetteReservation: '',
        deletePmsBanquetteReservation: '',
        getPmsBanquetteReservations: '',
    },
    pmsdailyhouselists: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createPmsDailyHouseList: '',
        updatePmsDailyHouseList: 'pms/dailyhouse/UpdateDailyHouse',
        deletePmsDailyHouseList: '',
        getPmsDailyHouseLists: 'pms/dailyhouse/GetDailyHouse',
        getDashBoardQuery: 'pms/dashboard/GetDashBoardQuery',
        getDashBoardBudget: 'pms/dashboard/GetDashBoardBudget',
        getDashBoardSurveyQuery: 'pms/dashboard/GetDashBoardSurveyQuery',
        getDashBoardSurvey2Query: 'pms/dashboard/GetDashBoardSurvey2Query',
        getDashBoard2Query: 'pms/dashboard/GetDashBoard2Query',
        getDashBoardCustomerQuery: 'pms/dashboard/GetDashboardCustomer',
        updateEndofDay: 'pms/endofday/UpdateEndOfDay',
        getPmfolio: 'pms/reservation/GetPmfolioOwner',
        getDailyCustomerQuery: 'pms/DailyHouse/GetDailyCustomers',
        getPmReservationByHotel: 'pms/reservation/GetPmReservationByHotel',
        createFolioOwner: 'pms/reservation/CreateFolioOwner',
        updateFolioOwner: 'pms/reservation/UpdateFolioOwner',
        getfolios: 'pms/reservation/GetFolios',
        getpossales: 'pms/reservation/GetPosSales',
        addqueue: 'pms/DailyHouse/AddQueue',
        undoqueue: 'pms/DailyHouse/UndoQueue',
        updateDirtyClean: 'pms/room/UpdateDirtyClean',
        updateRoomAvailability: 'pms/room/UpdateRoomAvailability',
        getDashBoard3Query: 'pms/dashboard/GetDashBoard3Query',
        getRoomChanges: 'pms/dailyhouse/GetRoomChanges',
    },
    pmsroomstatuss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createPmsRoomStatus: '',
        updatePmsRoomStatus: '',
        deletePmsRoomStatus: '',
        getPmsRoomStatuss: '',
    },
    pmsroomassigments: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createPmsRoomAssigment: '',
        updatePmsRoomAssigment: '',
        deletePmsRoomAssigment: '',
        getPmsRoomAssigments: '',
    },
    pmsroomracks: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createPmsRoomRack: 'pms/reservation/CreateRoomRack',
        updatePmsRoomRack: '',
        deletePmsRoomRack: '',
        getPmsRoomRacks: 'pms/reservation/GetRoomRack',
    },
    pmscardoperationss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createPmsCardOperations: '',
        updatePmsCardOperations: '',
        deletePmsCardOperations: '',
        getPmsCardOperationss: '',
    },
    pmsroomchangeplanlists: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createPmsRoomChangePlanlist: '',
        updatePmsRoomChangePlanlist: 'pms/blockage/UpdatePmsBlockage',
        deletePmsRoomChangePlanlist: '',
        getPmsRoomChangePlanlists: 'pms/blockage/GetPmsBlockageRooms',
    },
    pmsscantools: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createPmsScanTool: '',
        updatePmsScanTool: '',
        deletePmsScanTool: '',
        getPmsScanTools: '',
    },
    pmsmaterials: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createPmsMaterial: '',
        updatePmsMaterial: '',
        deletePmsMaterial: '',
        getPmsMaterials: '',
    },
    pmsnightaudits: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createPmsNightAudit: '',
        updatePmsNightAudit: '',
        deletePmsNightAudit: '',
        getPmsNightAudits: '',
    },
    pmsfastguestupdates: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createPmsFastGuestUpdate: '',
        updatePmsFastGuestUpdate: '',
        deletePmsFastGuestUpdate: '',
        getPmsFastGuestUpdates: '',
    },
    pmsinhouseguests: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createPmsInhouseGuest: '',
        updatePmsInhouseGuest: '',
        deletePmsInhouseGuest: '',
        getPmsInhouseGuests: '',
    },
    pmsfoliooperationss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createPmsFolioOperations: '',
        updatePmsFolioOperations: '',
        deletePmsFolioOperations: '',
        getPmsFolioOperationss: '',
    },
    pmsroomfolioss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createPmsRoomFolios: '',
        updatePmsRoomFolios: '',
        deletePmsRoomFolios: '',
        getPmsRoomFolioss: '',
    },
    pmsmasterfolioss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createPmsMasterFolios: '',
        updatePmsMasterFolios: '',
        deletePmsMasterFolios: '',
        getPmsMasterFolioss: '',
    },
    pmsotherfolioss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createPmsOtherFolios: '',
        updatePmsOtherFolios: '',
        deletePmsOtherFolios: '',
        getPmsOtherFolioss: '',
    },
    pmssalesandmarketing: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createContract: 'pms/contract/CreateContract',
        updateContract: 'pms/contract/UpdateContract',
        deleteContract: 'pms/contract/DeleteContract',
        getPmsContract: 'pms/contract/GetContracts',
        getContractById: 'pms/contract/GetContractById',
        getContractDetailById: 'pms/contract/GetContractDetailById',
        getContractDetailWithId: 'pms/contract/GetContractDetailWithId',
        getPmsContractDetails: 'pms/contract/GetContractDetails',
        getPmsContractDetailFromSummary: 'pms/contract/GetPmsContractDetailFromSummary',
        getMarkets: 'pms/setup/GetMarkets',
        getCustomers: 'pms/contract/GetCustomers',
        getHotelSearch: 'pms/contract/GetHotelSearch',
        getPropertySearch: 'pms/contract/GetPropertySearch',
        getRoomTypes: 'pms/room/GetRoomType',
        getRoomTypeSearch: 'pms/room/GetRoomTypeSearch',
        createContractDetail: 'pms/contract/CreateContractDetail',
        updateContractDetail: 'pms/contract/UpdateContractDetail',
        deleteContractDetail: 'pms/contract/DeleteContractDetail',
        getBoardSearch: 'pms/setup/GetBoardSearch',
        getCombinations: 'pms/contract/GetCombinations',
        saveCombinations: 'pms/contract/SaveCombinations',
        getContractAgenciesForIntegration:
            'pms/contract/GetContractAgencyForIntegration',
        sendContract: 'pms/contract/SendContract',
        getTempContract: 'pms/contract/GetTempContract',
        copyContract: 'pms/contract/CopyContract',
        getTempContractDetails: 'pms/contract/GetTempContractDetails',
        importContract: 'pms/contract/ImportContract',
        getUserCrossTable: 'account/settings/GetUserCrossTable',
        updateUserCrossTable: 'account/settings/UpdateUserCrossTable',
        createContractWizard: 'pms/contract/CreateContractWizard',
        createContractWizardPeriod: 'pms/contract/CreateContractWizardPeriod',
        getContractPeriodByHotelQuery: 'pms/contract/getContractPeriodByHotelQuery',
        getContractDetailReservations: 'pms/contract/GetPmsContractDetailReservations',
        getContractPeriodsQuery: 'pms/contract/getContractPeriodsQuery',
        getAllotmentList: 'pms/allotment/GetAllotmentList',
        getSelectedAllomentDetails: 'pms/allotment/GetSelectedAllomentDetails',
        createPmsAllotments: 'pms/allotment/CreatePmsAllotments',
        updatePmsAllotment: 'pms/allotment/UpdatePmsAllotment',
        deletePmsAllotment: 'pms/allotment/DeletePmsAllotment',
        importExcelContract: 'pms/contract/ImportExcelContract',
        getContractAgencies: 'pms/contract/GetContractAgencies',
        createContractDetailWizard: 'pms/contract/CreateContractDetailWizard',
        getPmsContractPeriod: 'pms/contract/GetPmsContractPeriod',
        getContractMultiplierAccommodations: 'pms/contract/GetContractMultiplierAccommodations',
        getContractDetailOrders: 'pms/contract/getContractDetailOrders',
        getPmsReservationPackages: 'pms/contract/GetPmsReservationPackages',
        getContractsAfterFilter: 'pms/contract/GetContractsAfterFilter',
        deleteTempContract: 'pms/contract/DeleteTempContract',

    },
    pmscustomerrelation: {
        pmsguest: {
            createCustomer: 'pms/crm/CreateCrmCustomer',
            updateCustomer: 'pms/crm/UpdateCrmCustomer',
            deleteCustomer: 'pms/crm/DeleteCrmCustomer',
            getCustomers: 'pms/crm/GetCrmCustomers',
            getCustomersByPaging: 'pms/crm/GetCustomersByPaging',
            getCustomersByType: 'pms/crm/GetCustomersByType',
            getCustomersReservation: 'pms/crm/GetCustomersReservation',
            getCustomersForMerge: 'pms/crm/GetCustomersMergeList',
            prepareCustomersForMerge: 'pms/crm/PrepareCustomersForMerge',
            completeMerge: 'pms/crm/CompleteCustomerMerge',
            getCustomerSelectList: 'pms/crm/getCustomerSelectList',
        },
    },
    pmssetup: {
        generalSettings: {
            childAge: {
                createChildAge: 'pms/setup/CreateChildAge',
                updateChildAge: 'pms/setup/UpdateChildAge',
                deleteChildAge: 'pms/setup/DeleteChildAge',
                getChildAge: 'pms/setup/GetChildages',
            },
            department: {
                createDepartment: 'pms/setup/CreateDepartment',
                updateDepartment: 'pms/setup/UpdateDepartment',
                deleteDepartment: 'pms/setup/DeleteDepartment',
                getDepartments: 'pms/setup/GetDepartments',
                getDepartmentsLight: 'pms/setup/GetDepartmentsLight',
            },
            market: {
                createMarket: 'pms/setup/CreateMarket',
                updateMarket: 'pms/setup/UpdateMarket',
                deleteMarket: 'pms/setup/DeleteMarket',
                getMarkets: 'pms/setup/GetMarkets',
                getMarketSearch: 'pms/setup/GetMarketSearch',
            },
            mainmarket: {
                createMainMarket: 'pms/setup/CreateMainMarket',
                updateMainMarket: 'pms/setup/UpdateMainMarket',
                deleteMainMarket: 'pms/setup/DeleteMainMarket',
                getMainMarkets: 'pms/setup/GetMainMarkets',
            },
            pmsSource: {
                createPmsSource: 'pms/setup/CreatePmsSource',
                updatePmsSource: 'pms/setup/UpdatePmsSource',
                deletePmsSource: 'pms/setup/DeletePmsSource',
                getPmsSources: 'pms/setup/GetPmsSources'
            },
            pmsSection: {
                createPmsSection: 'pms/setup/CreatePmsSection',
                updatePmsSection: 'pms/setup/UpdatePmsSection',
                deletePmsSection: 'pms/setup/DeletePmsSection',
                getPmsSections: 'pms/setup/GetPmsSections',
                getPropertySections: 'pms/setup/GetPropertySections',
                getSectionsWithProperty: 'pms/setup/GetSectionsWithProperty'
            },
            userDefinedCode: {
                createuserDefinedCode: 'pms/setup/CreateuserDefinedCode',
                updateuserDefinedCode: 'pms/setup/UpdateuserDefinedCode',
                deleteuserDefinedCode: 'pms/setup/DeleteuserDefinedCode',
                getuserDefinedCode: 'pms/setup/GetuserDefinedCodes'
            },
            roomType: {
                createRoomType: 'pms/Room/CreateRoomType',
                updateRoomType: 'pms/Room/UpdateRoomType',
                deleteRoomType: 'pms/Room/DeleteRoomType',
                getRoomType: 'pms/Room/GetRoomType',
                getRoomTypeGroups: 'pms/Room/GetPmsRoomTypeGroups',
                getRoomTypeGroupsLight: 'pms/Room/GetPmsRoomTypeGroupsLight',
                getRoomTypesLight: 'pms/Room/GetPmsRoomTypesLight',
                createRoomTypeGroup: 'pms/Room/CreatePmsRoomTypeGroup',
                updateRoomTypeGroup: 'pms/Room/UpdatePmsRoomTypeGroup',
                deleteRoomTypeGroup: 'pms/Room/DeletePmsRoomTypeGroup',
                getPropertyRoomTypeMultiplier: 'pms/Room/GetPropertyRoomTypeMultiplier',
                getPropertyRoomDefinitions: 'pms/Room/GetPropertyRoomDefinitions',
                getListRoomTypeAllHotels: 'pms/Room/GetListRoomTypeAllHotels',
            },
            hotel: {
                createHotel: 'pms/Hotel/CreateHotel',
                updateHotel: 'pms/Hotel/UpdateHotel',
                deleteHotel: 'pms/Hotel/DeleteHotel',
                getHotel: 'pms/Hotel/GetHotel',
            },
            agency: {
                createAgency: 'pms/setup/CreateAgency',
                updateAgency: 'pms/setup/UpdateAgency',
                deleteAgency: 'pms/setup/DeleteAgency',
                getAgencies: 'pms/setup/GetAgencies',
                getAgencyList: 'pms/reservation/GetAgencyList',
                getCustomerAccountMap: 'pms/setup/GetCustomerAccountMaps',
                getAgencyAccrossing: 'pms/setup/GetAgencyAccrossingWithId',
                getAgencyGroupList: 'pms/setup/GetAgencyGroupList',
                getAgencyWithGroupList: 'pms/setup/GetAgencyWithGroups',
                createAgencyAccrossing: 'pms/setup/CreateAgencyAccrossing',
                updateAgencyAccrossing: 'pms/setup/UpdateAgencyAccrossing',
                saveAgencyGroup: 'pms/setup/SaveAgencyGroup',
                getAgencyShortList: 'pms/setup/GetAgencyShortList',
                getAgencyDefaultValues: 'pms/setup/GetAgencyDefaultValues',
            },
            pmsRoom: {
                createPmsRoom: 'pms/room/CreatePmsRoom',
                updatePmsRoom: 'pms/room/UpdatePmsRoom',
                deletePmsRoom: 'pms/room/DeletePmsRoom',
                getPmsRooms: 'pms/room/GetPmsRooms',
                getPropertyRoomTypes: 'pms/room/GetProperyRoomTypes',
                createPmsRoomFromWizard: 'pms/room/CreatePmsRoomFromWizard',
                getRoomsFromProperty: 'pms/room/GetRoomsFromProperty',
                getRoomConByRoomId: 'pms/room/GetRoomConByRoomId',
                getRoomConByPropertyId: 'pms/room/GetRoomConByPropertyId',
                getRoomInfoForCheck: 'pms/room/GetRoomInfoForCheck'
            },
            vipType: {
                createVipType: 'pms/setup/CreateVipType',
                updateVipType: 'pms/setup/UpdateVipType',
                deleteVipType: 'pms/setup/DeleteVipType',
                getVipType: 'pms/setup/GetVipType',
            },
            conceptType: {
                createConceptType: 'pms/setup/CreateConceptType',
                updateConceptType: 'pms/setup/UpdateConceptType',
                deleteConceptType: 'pms/setup/DeleteConceptType',
                getConceptType: 'pms/setup/GetConceptType',
                getConceptTypeForDropdown: 'pms/setup/GetConceptTypeForDropdown',
            },
            eCollection: {
                virtualPosDefination: {
                    deletePmsVirtualPosDefinitions: 'payment/virtualpos/DeleteVirtualPos',
                    getPmsVirtualPosDefinitions: 'payment/virtualpos/GetVirtualPoses',
                    getVirtualPosMaturityCommission: 'payment/virtualpos/GetVirtualPosMaturityCommissions',
                    createPmsVirtualPosDefinitions: 'payment/virtualpos/CreateVirtualPos',
                    updatePmsVirtualPosDefinitions: 'payment/virtualpos/UpdateVirtualPos',
                    getVirtualPosSectionCodes: 'payment/virtualpos/GetVirtualPosSectionCodes',
                    getVirtualPosById: 'payment/virtualpos/GetVirtualPosById',
                    getVirtualPosDefinationsByProperty: 'payment/virtualpos/GetVirtualPosDefinationsByProperty'
                },
                eCollectionDefination: {
                    createPmseCollectionDefinitions: 'payment/ecollectiondefination/CreatePmsECollectionDefinations',
                    updatePmseCollectionDefinitions: 'payment/ecollectiondefination/UpdatePmsECollectionDefinations',
                    deletePmseCollectionDefinitions: 'payment/ecollectiondefination/DeletePmsECollectionDefinations',
                    getPmseCollectionDefinitions: 'payment/ecollectiondefination/GetECollectionDefinations',
                    getCollectionDefinitionsById: 'payment/ecollectiondefination/GetECollectionDefinitionsById',
                    saveImagesToS3: 'payment/ecollectiondefination/SaveImagesToS3',
                    deletePmsECollectionDefinationsFiles: 'payment/ecollectiondefination/DeletePmsECollectionDefinationsFilesCommand'
                },
            },
            loyality: {
                getPmsLoyalityDefinitions: 'pms/setup/GetListLoyalities',
                createPmsLoyalityDefinitions: 'pms/setup/CreatePmsLoyalities',
                updatePmsLoyalityDefinitions: 'pms/setup/UpdatePmsLoyalities',
                deletePmsLoyalityDefinitions: 'pms/setup/DeletePmsLoyalities',
                getPmsLoyalityCalcDefinition:
                    'pms/setup/GetListLoyalityCalculateDefination',
                createPmsLoyalityCalcDefinition:
                    'pms/setup/CreatePmsLoyalityCalculateDefiniton',
                updatePmsLoyalityCalcDefiniton:
                    'pms/setup/UpdatePmsLoyalityCalculateDefiniton',
                deletePmsLoyalityCalculateDefiniton:
                    'pms/setup/DeletePmsLoyalityCalculateDefiniton',
                calculatePmsLoyality: 'pms/setup/LoyalitiesCalculateService',
                viewPmsLoyalities: 'pms/setup/ViewLoyalities',
            },
            pmsCrmLanguages: {
                getCrmMainLanguages: 'pms/setup/GetCrmMainLanguages',
                createCrmActiveLanguages: 'pms/setup/CreateCrmActiveLanguages',
                updateCrmActiveLanguage: 'pms/setup/UpdatePmsCrmLanguage',
                deleteCrmActiveLanguage: 'pms/setup/DeletePmsCrmLanguage',
                getCrmActiveLanguages: 'pms/setup/GetCrmActiveLanguages',
                getPmsCrmLanguagesList: 'pms/setup/GetPmsCrmLanguagesList',
                getCrmMainLanguagesForDropdown:
                    'pms/setup/getCrmMainLanguagesForDropdown',
            },
            stayType: {
                getPmsStayType: 'pms/setup/GetListStayTypes',
            },
            hotelSection: {
                getHotelSection: 'pms/hotelSection/getHotelSection',
            },
            bedType: {
                getPmsBedType: 'pms/setup/GetPmsBedType',
                getPmsBedTypeById: 'pms/setup/GetPmsBedTypeById',
                createPmsBedType: 'pms/setup/CreatePmsBedType',
                updatePmsBedType: 'pms/setup/UpdatePmsBedType',
                deletePmsBedType: 'pms/setup/DeletePmsBedType'
            },
            guestPropertyDefinition: {
                getGuestPropertyDefinitionList: 'pms/setup/GetGuestPropertyDefinitionList',
                getGuestPropertyDefinitionById: 'pms/setup/GetGuestPropertyDefinitionById',
                getGuestPropertyDefinitionByIdList: 'pms/setup/GetPmsCustomerPropertiesWithIdList',
                getPmsCustomerPropertiesWithId: 'pms/setup/GetPmsCustomerPropertiesWithId',
                createGuestPropertyDefinition: 'pms/setup/CreateGuestPropertyDefinition',
                updateGuestPropertyDefinition: 'pms/setup/UpdateGuestPropertyDefinition',
                deleteGuestPropertyDefinition: 'pms/setup/DeleteGuestPropertyDefinition',
            },
            propertyMultiplier: {
                getPropertyMultiplierOwner: 'pms/setup/GetPropertyMultiplierOwner',
                getPropertyMultiplierDetail: 'pms/setup/GetPropertyMultiplierDetail',
                getPropertyMultiplierDetailList: 'pms/setup/GetPropertyMultiplierDetailList',
                createEditPropertyMultiplier: 'pms/setup/CreateEditPropertyMultiplier',
                deletePropertyMultiplier: 'pms/setup/DeletePropertyMultiplier'
            },
            cashierDefinition: {
                getPmsCashierDefinition: 'pms/setup/GetPmsCashierDefinition',
                getPmsCashierDefinitionWithId: 'pms/setup/GetPmsCashierDefinitionWithId',
                createCashierDefinition: 'pms/setup/CreateCashierDefinition',
                updateCashierDefinition: 'pms/setup/UpdateCashierDefinition',
                deleteCashierDefinition: 'pms/setup/DeleteCashierDefinition'
            },
        },
    },
    pmscashieroperationss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createPmsCashierOperations: '',
        updatePmsCashierOperations: '',
        deletePmsCashierOperations: '',
        getPmsCashierOperationss: '',
    },
    pmscashieroperations: {
        getCashierFolioTransactions: 'pms/cashieroperations/GetCashierFolioTransactions',
        getCashierFolioTransactionsSummary: 'pms/cashieroperations/GetCashierFolioTransactionsSummary'
    },
    pmsquickpostings: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createPmsQuickPosting: '',
        updatePmsQuickPosting: '',
        deletePmsQuickPosting: '',
        getPmsQuickPostings: '',
    },
    pmsexchangeratess: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createPmsExchangeRates: '',
        updatePmsExchangeRates: '',
        deletePmsExchangeRates: '',
        getPmsExchangeRatess: '',
    },
    pmshuginmonitors: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createPmsHuginMonitor: '',
        updatePmsHuginMonitor: '',
        deletePmsHuginMonitor: '',
        getPmsHuginMonitors: '',
    },
    hrlawparambasewages: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createHrLawParamBaseWage: '',
        updateHrLawParamBaseWage: '',
        deleteHrLawParamBaseWage: '',
        getHrLawParamBaseWages: '',
    },
    hrlawparamtaxratios: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createHrLawParamTaxRatio: '',
        updateHrLawParamTaxRatio: '',
        deleteHrLawParamTaxRatio: '',
        getHrLawParamTaxRatios: '',
    },
    hrlawparamstamptaxs: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createHrLawParamStampTax: '',
        updateHrLawParamStampTax: '',
        deleteHrLawParamStampTax: '',
        getHrLawParamStampTaxs: '',
    },
    hrlawparamdisableds: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createHrLawParamDisabled: '',
        updateHrLawParamDisabled: '',
        deleteHrLawParamDisabled: '',
        getHrLawParamDisableds: '',
    },
    hrlawparamexemptionss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createHrLawParamExemptions: '',
        updateHrLawParamExemptions: '',
        deleteHrLawParamExemptions: '',
        getHrLawParamExemptionss: '',
    },
    hrlawparamlimitss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createHrLawParamLimits:
            'hr/OperatingDefinition/CreateLawParameterLimits',
        updateHrLawParamLimits:
            'hr/OperatingDefinition/UpdateLawParameterLimits',
        deleteHrLawParamLimits:
            'hr/OperatingDefinition/DeleteLawParameterLimits',
        getHrLawParamLimitss: 'hr/OperatingDefinition/GeLawParameterLimits',
        GetHrLawParameterLimitsWithId:
            'hr/OperatingDefinition/GetHrLawParameterLimitsWithId',
    },
    hrpersonnels: {
        createHrPersonnel: 'hr/Employee/CreateEmployeeListItem',
        updateHrPersonnel: 'hr/Employee/UpdateEmployeeListItem',
        deleteHrPersonnel: 'hr/Employee/DeleteEmployeeListItem',
        getHrPersonnels: 'hr/Employee/GetPersonelListFormItems',
    },
    hrpersonnelcontracts: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createHrPersonnelContract: '',
        updateHrPersonnelContract: '',
        deleteHrPersonnelContract: '',
        getHrPersonnelContracts: '',
    },
    hrpersonnelemployments: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createHrPersonnelEmployment: '',
        updateHrPersonnelEmployment: '',
        deleteHrPersonnelEmployment: '',
        getHrPersonnelEmployments: '',
    },
    hrpersonnellocations: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createHrPersonnelLocation: '',
        updateHrPersonnelLocation: '',
        deleteHrPersonnelLocation: '',
        getHrPersonnelLocations: '',
    },
    hrpersonnelwages: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createHrPersonnelWage: '',
        updateHrPersonnelWage: '',
        deleteHrPersonnelWage: '',
        getHrPersonnelWages: '',
    },
    hrpersonnelpositions: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createHrPersonnelPosition: '',
        updateHrPersonnelPosition: '',
        deleteHrPersonnelPosition: '',
        getHrPersonnelPositions: '',
    },
    hrdepartmentshifts: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createHrDepartmentShift: '',
        updateHrDepartmentShift: '',
        deleteHrDepartmentShift: 'hr/Payroll/DeletePersonnelShiftItems',
        getHrDepartmentShifts: 'hr/Payroll/GetPersonnelShiftItems',
        getShiftCodeList: 'hr/Payroll/GetPersonnelShiftCodeItems',
        editPersonnelShiftItems: 'hr/Payroll/EditPersonnelShiftItems',
        confirmingAllDepartments: 'hr/Payroll/ConfirmAllDepartment',
        confirmingAllHr: 'hr/Payroll/ConfirmAllHr',
        deconfirmingAllHr: 'hr/Payroll/DeconfirmAllHr',
        deconfirmingAllDepartment: 'hr/Payroll/DeconfirmAllDepartment',
        getPersonnelOrgSectionItems: 'hr/Payroll/GetPersonnelOrgSectionItems',
        checkForApproval: 'hr/Payroll/CheckForApprovalItems',
        deletePersonnelShiftColumnItems: 'hr/Payroll/DeletePersonnelShiftColumnItems',
    },
    hrovertimeworkings: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createHrOvertimeWorking: '',
        updateHrOvertimeWorking: '',
        deleteHrOvertimeWorking: '',
        getHrOvertimeWorkings: '',
    },
    hrpayrollreportss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createHrPayrollReports: '',
        updateHrPayrollReports: '',
        deleteHrPayrollReports: '',
        getHrPayrollReportss: '',
    },
    hrdeclarationss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createHrDeclarations: '',
        updateHrDeclarations: '',
        deleteHrDeclarations: '',
        getHrDeclarationss: '',
    },
    hrleavedemands: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createHrLeaveDemand: 'hr/PersonnelDemand/CreateLeaveDemand',
        updateHrLeaveDemand: 'hr/PersonnelDemand/UpdateLeaveDemand',
        deleteHrLeaveDemand: 'hr/PersonnelDemand/DeleteLeaveDemand',
        getHrLeaveDemands: 'hr/PersonnelDemand/GetLeaveDemand',
        getleaveDemandWithPersonelId: 'hr/PersonnelDemand/GetLeaveDemandWithPersonelIdQuery',
        getHrLeaveDemandWithId: 'hr/PersonnelDemand/GetLeaveDemandWithId',
        getPersonelWithBranch: 'hr/PersonnelDemand/GetPersonnelForList',
    },
    hradvancedemands: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createHrAdvanceDemand: 'hr/PersonnelDemand/CreateAdvanceDemand',
        updateHrAdvanceDemand: 'hr/PersonnelDemand/UpdateAdvanceDemand',
        deleteHrAdvanceDemand: 'hr/PersonnelDemand/DeleteAdvanceDemand',
        getHrAdvanceDemands: 'hr/PersonnelDemand/GetAdvanceDemand',
        getAdvanceDemandWithPersonelId: 'hr/PersonnelDemand/GetAdvanceDemandWithPersonelIdQuery',
        getAdvancetypeList: '',
        getHrAdvanceDemandWithId: 'hr/PersonnelDemand/GetAdvanceDemandWithId',
    },
    hrpersonnelwagecutss: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createHrPersonnelWageCuts:
            'hr/PersonnelAccount/CreateHrPersonnelWageCut',
        updateHrPersonnelWageCuts:
            'hr/PersonnelAccount/UpdateHrPersonnelWageCut',
        deleteHrPersonnelWageCuts:
            'hr/PersonnelAccount/DeleteHrPersonnelWageCut',
        getHrPersonnelWageCutss: 'hr/PersonnelAccount/GetHrpersonnelWageCut',
        getHrPersonnelWageCutssWithId:
            'hr/PersonnelAccount/GetHrpersonnelWageCutWithId',
        getHrpersonnelWageCutPlansWithId: 'hr/PersonnelAccount/GetHrpersonnelWageCutPlansWithId'
    },
    hrpersonnelleaves: {
        createHrPersonnelLeave: 'hr/PersonnelAccount/CreateLeaveType',
        updateHrPersonnelLeave: 'hr/PersonnelAccount/UpdateLeaveType',
        deleteHrPersonnelLeave: 'hr/PersonnelAccount/DeleteLeaveType',
        getHrPersonnelLeaves: 'hr/PersonnelAccount/GetLeaveType',
        getHrPersonnelLeaveWithId: 'hr/PersonnelAccount/GetLeaveTypeById',
        getTransCodeQueryForListFiltered:
            'hr/PersonnelAccount/GetTransCodeQueryForListFiltered',
        getHrPersonnelLeavesMissingDefinition:
            'hr/PersonnelAccount/GetMissingDefinition',
        getLeavetypeList: 'hr/PersonnelAccount/GetLeaveTypeForList',
    },
    hrdocuments: {
        createHrDocument: '',
        updateHrDocument: '',
        deleteHrDocument: '',
        getHrDocuments: 'account/GeneralSettings/GetCurrencyItems',
    },
    hrcodelistdocumentgroups: {
        createHrCodeListDocumentGroup:
            'hr/Quality/CreateCodeListDocumentGroupItem',
        updateHrCodeListDocumentGroup:
            'hr/Quality/UpdateCodeListDocumentGroupItem',
        deleteHrCodeListDocumentGroup:
            'hr/Quality/DeleteCodeListDocumentGroupItem',
        getHrCodeListDocumentGroups: 'hr/Quality/GetCodeListDocumentGroups',
        getHrCodeListDocumentGroupsWithId:
            'hr/Quality/GetCodeListDocumentWithIdItem',
        getHrCodeListDocumentGroupForSelect:
            'hr/Quality/GetCodeListDocumentGroupQueryForSelect',
    },
    hrcodelistdocumenttypes: {
        createHrCodeListDocumentType:
            'hr/Quality/CreateCodeListDocumentTypeItem',
        updateHrCodeListDocumentType:
            'hr/Quality/UpdateCodeListDocumentTypeItem',
        deleteHrCodeListDocumentType:
            'hr/Quality/DeleteCodeListDocumentTypeItem',
        getHrCodeListDocumentTypes: 'hr/Quality/GetCodeListDocumentTypes',
    },
    hrtrainings: {
        createHrtraining: 'hr/Quality/CreateTrainingDefinition',
        updateHrtraining: 'hr/Quality/UpdateTrainingDefinition',
        deleteHrtraining: 'hr/Quality/DeleteTrainingDefinition',
        getHrtrainings: 'hr/Quality/GetTrainingDefinition',
        getHrtrainingsWithId: 'hr/Quality/GetTrainingDefinitionById',
    },
    hrbankdefinitions: {
        createHrbankdefinition: 'hr/OperatingDefinition/CreateBanksCommand',
        updateHrbankdefinition: 'hr/OperatingDefinition/UpdateBanksCommand',
        deleteHrbankdefinition: 'hr/OperatingDefinition/DeleteBanksCommand',
        getHrbankdefinitions: 'hr/OperatingDefinition/GetBanksForList',
    },
    hrpersonelleavetypes: {
        createHrpersonelleavetype: '',
        updateHrpersonelleavetype: '',
        deleteHrpersonelleavetype: '',
        getHrpersonelleavetypes: 'account/GeneralSettings/GetCurrencyItems'
    }
    , hrcodelistmissingdefinitions: {
        createHrcodelistmissingdefinition: 'hr/Employee/CreateHrCodeListMissingDefinitionItem',
        updateHrcodelistmissingdefinition: 'hr/Employee/UpdateHrCodeListMissingDefinitionItem',
        deleteHrcodelistmissingdefinition: 'hr/Employee/DeleteHrCodeListMissingDefinitionItem',
        getHrcodelistmissingdefinitions: 'hr/Employee/GetHrCodeListMissingDefinitions',
        getHrCodeListMissingDefinitionFilter: 'hr/Employee/GetHrCodeListMissingDefinitionFilter',
        getMissingDayOnTransCode: 'hr/Employee/GetMissingDayOnTransCode',
        getPayrollSourceList: 'hr/Employee/GetHrCodeListLightPayrollSource'
    }
    , globallogss: {
        createGlobalLogs: '',
        updateGlobalLogs: '',
        deleteGlobalLogs: '',
        getGlobalLogss: 'account/GeneralSettings/GetCurrencyItems',
    },
    hrwagecutdefinitions: {
        createHrWageCutDefinition:
            'hr/OperatingDefinition/CreateWageCutItemCommand',
        updateHrWageCutDefinition:
            'hr/OperatingDefinition/UpdateWageCutItemCommand',
        deleteHrWageCutDefinition:
            'hr/OperatingDefinition/DeleteWageCutItemCommand',
        getHrWageCutDefinitions: 'hr/OperatingDefinition/WageCutForList',
        getTransCodeForWage: 'hr/OperatingDefinition/GetTransCodeForWage',
        getHrWageCutShortList: 'hr/OperatingDefinition/WageCutForShortList',
    },
    hrtemplatereportdefination: {
        createTemplateReportDefination: 'hr/OperatingDefinition/CreateTemplateReportDefination',
        getTemplateReportDefination: 'hr/OperatingDefinition/GetTemplateReportDefination',
        updateTemplateReportDefination: 'hr/OperatingDefinition/UpdateTemplateReportDefination',
        deleteTemplateReportDefination: 'hr/OperatingDefinition/DeleteTemplateReportDefination'
    },
    hrtemplatereport: {
        createTemplateReport: 'hr/OperatingDefinition/CreateTemplateReport',
        getTemplateReport: 'hr/OperatingDefinition/GetTemplateReports',
        updateTemplateReport: 'hr/OperatingDefinition/UpdateTemplateReport',
        deleteTemplateReport: 'hr/OperatingDefinition/DeleteTemplateReport',
        readHtmlCommand: 'hr/OperatingDefinition/ReadHtmlCommand'
    },
    hrbankbranchdefinitions: {
        createHrBankBranchDefinition:
            'hr/OperatingDefinition/CreateBanksBranchCommand',
        updateHrBankBranchDefinition:
            'hr/OperatingDefinition/UpdateBanksBranchCommand',
        deleteHrBankBranchDefinition:
            'hr/OperatingDefinition/DeleteBanksBranchCommand',
        getHrBankBranchDefinitions:
            'hr/OperatingDefinition/GetBanksBranchForList',
    },
    hrcodelistsgkretireds: {
        createHrCodeListSgkRetired:
            'hr/OperatingDefinition/CreateSgkretiredItemCommand',
        updateHrCodeListSgkRetired:
            'hr/OperatingDefinition/UpdateSgkretiredItemCommand',
        deleteHrCodeListSgkRetired:
            'hr/OperatingDefinition/DeleteSgkretiredItemCommand',
        getHrCodeListSgkRetireds: 'hr/OperatingDefinition/GetSgkRetiredCode',
    },
    hrcodelistsgkjobcodes: {
        createHrCodeListSgkJobCode:
            'hr/OperatingDefinition/CreateCodeListSgkJobCodeCommand',
        updateHrCodeListSgkJobCode:
            'hr/OperatingDefinition/UpdateCodeListSgkJobCodeCommand',
        deleteHrCodeListSgkJobCode:
            'hr/OperatingDefinition/DeleteCodeListSgkJobCodeCommand',
        getHrCodeListSgkJobCodes:
            'hr/OperatingDefinition/GetCodeListSgkJobCodeQuery',
        getCodeListSgkJobCodeSelectable:
            'hr/OperatingDefinition/GetCodeListSgkJobCodeSelectable',
        getHrCodeListSgkJobCodeById:
            'hr/OperatingDefinition/GetCodeListSgkJobCodeQueryById',
    },
    hrcodelistleavedayss: {
        createHrCodeListLeaveDays:
            'hr/OperatingDefinition/CreateLeaveDaysCommand',
        updateHrCodeListLeaveDays:
            'hr/OperatingDefinition/UpdateLeaveDaysCommand',
        deleteHrCodeListLeaveDays:
            'hr/OperatingDefinition/DeleteLeaveDaysCommand',
        getHrCodeListLeaveDayss:
            'hr/OperatingDefinition/GetLeaveDayListCommand',
        getHrCodeListLeaveDaysWithId:
            'hr/OperatingDefinition/GetHrCodeListLeaveDaysWithId',
    },
    hrcodelistholidays: {
        createHrCodeListHoliday: '',
        updateHrCodeListHoliday: '',
        deleteHrCodeListHoliday: '',
        getHrCodeListHolidays: 'hr/OperatingDefinition/GetCodeListHoliday',
    },
    hruserdefinitions: {
        createHrUserDefinition: '',
        updateHrUserDefinition: '',
        deleteHrUserDefinition: '',
        getHrUserDefinitions: 'account/GeneralSettings/GetCurrencyItems',
    },
    hruserbranchsecs: {
        createHrUserBranchSec: '',
        updateHrUserBranchSec: '',
        deleteHrUserBranchSec: '',
        getHrUserBranchSecsCompanies:
            'hr/OperatingDefinition/GetUserCompanyList',
        getHrUserAllList: 'hr/OperatingDefinition/GetUserBranchAllList',
        editHrUserAllList: 'hr/OperatingDefinition/UpdateBranchAllList',
    },

    hruserplantsecs: {
        createHrUserPlantSec: '',
        updateHrUserPlantSec: '',
        deleteHrUserPlantSec: '',
        getHrUserPlantSecsCompanies:
            'hr/OperatingDefinition/GetUserCompanyList',
        getHrUserPlantAllList: 'hr/OperatingDefinition/GetUserPlantAllList',
        editHrPlantUserAllList: 'hr/OperatingDefinition/UpdatePlantAllList',
    },

    hruserparameterss: {
        createHrUserParameters: '',
        updateHrUserParameters: 'hr/OperatingDefinition/UpdateUserParameters',
        deleteHrUserParameters: '',
        getHrUserParameterss: 'hr/OperatingDefinition/GetUserParameters',
    },

    hruserdepartmentsecs: {
        createHrUserDepartmentSec:
            'hr/OperatingDefinition/CreateUserDepartmentsec',
        updateHrUserDepartmentSec:
            'hr/OperatingDefinition/UpdateUserDepartmentsec',
        deleteHrUserDepartmentSec:
            'hr/OperatingDefinition/DeleteUserDepartmentsec',
        getHrUserDepartmentSecs:
            'hr/OperatingDefinition/GetUserDepartmentsecList',
        getHrUserDepartmentBranchs:
            'hr/OperatingDefinition/GetUserDepartmentsecBranch',
        getHrUserDepartmentSelect:
            'hr/OperatingDefinition/GetUserDepartmentsecSelect',
        getHrUserDepartmentUser:
            'hr/OperatingDefinition/GetUserDepartmentsecUser',
    },

    hrpayrolltaxdiscounts: {
        createHrPayrollTaxDiscount:
            'hr/OperatingDefinition/CreateTaxDiscountItemCommand',
        updateHrPayrollTaxDiscount:
            'hr/OperatingDefinition/UpdateTaxDiscountItemCommand',
        deleteHrPayrollTaxDiscount:
            'hr/OperatingDefinition/DeleteTaxDiscountItemCommand',
        getHrPayrollTaxDiscounts:
            'hr/OperatingDefinition/GetTaxDiscountWithItemsQuery',
        getPayrollTaxDiscountForPersonelQuery:
            'hr/OperatingDefinition/GetPayrollTaxDiscountForPersonelQuery',
        getHrPayrollTaxDiscountTypes:
            'hr/OperatingDefinition/GetTaxDiscountTypeListQuery',
        getPersonelWithBranch:
            'hr/OperatingDefinition/GetPersonelListWithBranchQuery',
        getHrPayrollTaxDiscountsWithId:
            'hr/OperatingDefinition/GetTaxDiscountWithId',
    },
    hrpersonnelshiftlevels: {
        createHrPersonnelShiftLevel:
            'Hr/OperatingDefinition/CreatePersonnelShiftLevelCommand',
        updateHrPersonnelShiftLevel:
            'Hr/OperatingDefinition/UpdatePersonnelShiftLevelCommand',
        deleteHrPersonnelShiftLevel:
            'Hr/OperatingDefinition/DeletePersonnelShiftLevelCommand',
        getOrgBranch: 'Hr/OperatingDefinition/GetOrgBranchQuery',
        getCodeListLocationTypeList:
            'Hr/OperatingDefinition/GetCodeListLocationTypeQuery',
        getHrPersonnelShiftLevels:
            'Hr/OperatingDefinition/GetPersonnelShiftLevel',
        getHrPersonnelShiftLevelsDefault:
            'Hr/OperatingDefinition/GetPersonnelShiftLevelById',
        getHrPersonnelShiftLevelBranch:
            'Hr/OperatingDefinition/GetPersonnelShiftBranch',
        getHrPersonnelShiftLevelRemark:
            'Hr/OperatingDefinition/GetPersonnelShiftRemark',
        getHrPersonnelShiftLevelsWithId:
            'hr/OperatingDefinition/GetPersonnelShiftLevelById',
    },
    hruserpositionsecs: {
        createHrUserPositionSec: 'hr/OperatingDefinition/CreateUserPositionsec',
        updateHrUserPositionSec: 'hr/OperatingDefinition/UpdateUserPositionsec',
        deleteHrUserPositionSec: 'hr/OperatingDefinition/DeleteUserPositionsec',
        getHrUserPositionSecs: 'hr/OperatingDefinition/GetUserPositionsecList',
        getHrUserPositionBranchs:
            'hr/OperatingDefinition/GetUserPositionsecBranch',
        getHrUserPositiontUser: 'hr/OperatingDefinition/GetUserPositionsecUser',
        getHrUserPositionPosition:
            'hr/OperatingDefinition/GetUserPositionsecPosition',
    },
    hrpayrolltemplates: {
        createHrPayrollTemplate: 'hr/OperatingDefinition/CreatePayrollTemplate',
        updateHrPayrollTemplate:
            'hr/OperatingDefinition/UpdatePayrollTemplateItem',
        deleteHrPayrollTemplate:
            'hr/OperatingDefinition/DeletePayrollTemplateItem',
        getHrPayrollTemplates: 'hr/OperatingDefinition/GetPayrollTemplate',
        getHrPayrollTemplatesWithId:
            'hr/OperatingDefinition/GetPayrollTemplateWithId',
        getHrPayrollTemplateForUpdate:
            'hr/OperatingDefinition/GetPayrollTemplateListForUpdate',
    },
    hrperformanss: {
        createHrPerformans: 'hr/Quality/CreateHrPerformanceCategoryCommand',
        createHrPerformanceCriteria: 'hr/Quality/CreateHrPerformanceCriteriaCommand',
        updateHrPerformans: 'hr/Quality/UpdateHrPerformanceCategoryCommand',
        updateHrPerformanceCriteria: 'hr/Quality/UpdateHrPerformanceCriteriaCommand',
        deleteHrPerformans: 'hr/Quality/DeleteHrPerformanceCategoryCommand',
        getHrPerformanss: '',
        getPerformanceCategoryList: 'hr/Quality/GetPerformanceCategoryList',
        getPerformanceCategoryListWithId: 'hr/Quality/GetPerformanceCategoryListWithId',
        getPerformanceCriteriaList: 'hr/Quality/GetPerformanceCriteriaList',
        getPerformanceCriteriaListWithId: 'hr/Quality/GetPerformanceCriteriaListWithId',
        deleteHrPerformansCriteria: 'hr/Quality/DeleteHrPerformanceCriteriaCommand',
        getPerformanceScoreList: 'hr/Quality/GetPerformanceScoreList',
        getPerformanceScoreListWithId: 'hr/Quality/GetPerformanceScoreListWithId',
        createHrPerformanceScore: 'hr/Quality/CreateHrPerformanceScoreCommand',
        updateHrPerformanceScore: 'hr/Quality/UpdateHrPerformanceScoreCommand',
        deleteHrPerformanceScore: 'hr/Quality/DeleteHrPerformanceScoreCommand',
        getHrDepartmentPerformanceList: 'hr/Quality/GetHrDepartmentPerformanceList',
        getHrDepartmentsForPerformanceList: 'hr/Quality/GetHrDepartmentsForPerformanceList',
        getHrJobsForPerformanceList: 'hr/Quality/GetHrJobsForPerformanceList',
        createHrDepartmentPerformanceCommand: 'hr/Quality/CreateHrDepartmentPerformanceCommand',
    },
    hrselectionandplacements: {
        createHrSelectionAndPlacement: '',
        updateHrSelectionAndPlacement: '',
        deleteHrSelectionAndPlacement: '',
        getHrSelectionAndPlacements: 'account/GeneralSettings/GetCurrencyItems',
    },
    hrcodelistadvancetypes: {
        createHrCodeListAdvanceType: 'hr/OperatingDefinition/CreateAdvanceType',
        updateHrCodeListAdvanceType: 'hr/OperatingDefinition/UpdateAdvanceType',
        deleteHrCodeListAdvanceType: 'hr/OperatingDefinition/DeleteAdvanceType',
        getHrCodeListAdvanceTypes: 'hr/OperatingDefinition/GetAdvanceType',
        getHrAdvanceTypeWithId: 'hr/OperatingDefinition/GetAdvanceTypeWithId',
    },
    pmstracedefinitions: {
        createPmsTraceEntry: 'pms/Operation/CreatePmsTraceEntryItem',
        updatePmsTraceDefinition: 'pms/Operation/UpdatePmsTraceDefinitionItem',
        deletePmsTraceDefinition: 'pms/Operation/DeletePmsTraceDefinitionItem',
        getPmsTraceDefinitions: 'pms/Operation/GetPmsTraceDefinitions',
        getPmsTraceDefinitionById: 'pms/Operation/GetPmsTraceDefinitionById',
        updateControlTraceDefinition:
            'pms/Operation/UpdateControlTraceDefinition',
        getPmsSubTrace: 'pms/Operation/GetPmsSubTrace',
        // updatePmsTraceEntry: 'pms/Operation/UpdatePmsTraceEntryItem',
        // getPmsTraceEntrys: 'pms/Operation/GetPmsTraceMappings'

        createPmsTraceMapping: 'pms/Operation/CreatePmsTraceMappingItem',
        updatePmsTraceMapping: 'pms/Operation/UpdatePmsTraceMappingItem',
        deletePmsTraceMapping: 'pms/Operation/DeletePmsTraceMappingItem',
        getPmsTraceMappings: 'pms/Operation/GetPmsTraceMappings',
        getPmsSubforTrace: 'pms/Operation/GetPmsSubforTrace',
        getPmsDefinitionFromTrace: 'pms/Operation/GetPmsDefinitionFromTrace',
    },
    erpstockcategorys: {
        createErpStockCategory: 'erp/StokCost/CreateStockCategoryCommand',
        updateErpStockCategory: 'erp/StokCost/UpdateStockCategoryCardCommand',
        deleteErpStockCategory: 'erp/StokCost/DeleteStockCategoryCardCommand',
        getErpStockCategorys: 'account/GeneralSettings/GetCurrencyItems',
        categoryTypeListQuery: 'erp/StokCost/CategoryTypeListQuery',
        mainCategoryListQuery: 'erp/StokCost/GetMainCategoryListQuery',
        getCategoryCardQuery: 'erp/StokCost/GetCategoryCardQuery',
        getInterCategoryListQuery: 'erp/StokCost/GetInterCategoryListQuery',
        getForUpdateCatetoryCardQuery:
            'erp/StokCost/GetForUpdateCatetoryCardQuery',
        getCategoryCodeQuery: 'erp/StokCost/GetCategoryCode',
        getCategoryListQuery: 'erp/StokCost/GetCategoryList',
        getStockListByCategoryId: 'erp/StokCost/GetStockListByCategoryId',
        updateCustomerOrderOwner: 'erp/StokCost/UpdateCustomerOrderOwner',
        getBasketList: 'erp/StokCost/GetCustomerBasketList',
        getFilterGroupByCategoryId: 'erp/StokCost/GetFilterGroupByCategoryId',
        getCurrentCode: 'erp/StokCost/GetCurrentCode',
        getImportSettingId: 'erp/StokCost/GetImportSettingId',
        getStockAttributeList: 'erp/StokCost/GetStockAttributeList',
        getb2bCurrentAccountReviewList: 'erp/StokCost/Getb2bCurrentAccountReviewList',
    },
    erpcurrentopenings: {
        createErpCurrentOpening: 'erp/FinanceCards/CreateErpCurrentFich',
        createErpOtherTransactions: 'erp/FinanceCards/CreateErpOtherTransactions',
        updateErpCurrentOpening: 'erp/FinanceCards/UpdateErpCurrentFich',
        updateErpOtherTransactions: 'erp/FinanceCards/UpdateErpOtherTransactions',
        deleteErpCurrentOpening: 'erp/FinanceCards/DeleteErpCurrentFich',
        cancelErpCurrentOpening: 'erp/FinanceCards/CancelErpCurrentFich',
        getErpCurrentOpenings: 'account/GeneralSettings/GetCurrencyItems',

        getErpCurrentFichOwner: 'erp/FinanceOperations/GetErpCurrentFichOwner',
        getErpCurrentDetails: 'erp/FinanceOperations/GetErpCurrentFichDetail',
        getErpCurrentDetailsList:
            'erp/FinanceOperations/GetErpCurrentFichDetailList',
        getErpCurrentFichOwnerWithId:
            'erp/FinanceOperations/GetErpCurrentFichOwnerWithId',

        getErpDocumentType: '', //erpcodelistdocumenttype
        getErpCodeListedDocumentTypeCode:
            'erp/FinanceCards/GetErpCodeListedcoumentTypeCode', //Erpcodelistedcoumenttypecode
        getErpCodeListedDocumentType:
            'erp/FinanceCards/GetErpcodeListedcoumentType', //Erpcodelistedcoumenttype
        getErpCodeListeledgerDocument:
            'erp/FinanceCards/GetErpCodeListeledgerDocument', //Erpcodelistinvoiceprofiletype
        getCurrentCardtypesForList:
            'erp/FinanceCards/GetCurrentCardtypesForList',
        getErpPaymenttypeForList: 'erp/FinanceOperations/GetErpPaymenttype',
        getErpPortfoliostatusForList:
            'erp/FinanceOperations/GetErpPortfoliotypeForList',

        getErpCurrentFichDetailsByOwner:
            'erp/FinanceOperations/GetErpCurrentFichDetailsByOwner',
    },
    erpinvoices: {
        GetErpInvoiceOwnerList: 'erp/FinanceErpInvoice/GetErpInvoiceOwnerList',
        DeleteErpInvoice: 'erp/FinanceErpInvoice/DeleteErpInvoice',
        getErpCurrentFicheInvoiceDetails:
            'erp/FinanceErpInvoice/GetErpStockInvoiceDetails',
        getErpDepotCardList: 'erp/FinanceErpInvoice/GetDepotCardList',
        GetCurrentCardList: 'erp/FinanceErpInvoice/GetCurrentCardList',
        Geterpcodelistwitholdingtax:
            'erp/FinanceErpInvoice/Geterpcodelistwitholdingtax',
        GetErpcodelistwitholdingtaxGroupRatio:
            'erp/FinanceErpInvoice/GetErpcodelistwitholdingtaxGroupRatio',
        GetErpcodelisttaxexamptions:
            'erp/FinanceErpInvoice/GetErpcodelisttaxexamptions',
        GetErpInvoiceProduct: 'erp/FinanceErpInvoice/GetErpInvoiceProduct',
        GetErpUnitCardList: 'erp/FinanceErpInvoice/GetErpUnitCardList',
        getErpStockUnitTypesWithId: 'erp/FinanceErpInvoice/GetErpStockUnitTypesWithId',
        getErpStockUnitListForDropdown: 'erp/FinanceErpInvoice/GetErpStockUnitListForDropdown',
        CreateErpInvoice: 'erp/FinanceErpInvoice/CreateErpInvoice',
        GetErpInvoiceOwner: 'erp/FinanceErpInvoice/GetErpInvoiceOwner',
        UpdateErpInvoice: 'erp/FinanceErpInvoice/UpdateErpInvoice',
        GetErpInvoiceOwnerListByTypeCardId: 'erp/FinanceErpInvoice/GetErpInvoiceOwnerListByTypeCardId',
        GetProductAccId: 'erp/FinanceErpInvoice/GetProductAccId',
        GetTaxAccId: 'erp/FinanceErpInvoice/GetTaxAccId',
        getTaxesList: 'erp/FinanceErpInvoice/GetTaxesList',
        GetAccountInfo: 'erp/FinanceErpInvoice/GetAccountInfo',
        getErpInvoiceForErpClosureInvoice: 'erp/FinanceErpInvoice/GetErpInvoiceForErpClosureInvoice',
        getErpPaymentForErpClosureInvoice: 'erp/FinanceErpInvoice/GetErpPaymentForErpClosureInvoice',
        createErpInvoiceMatch: 'erp/FinanceErpInvoice/CreateErpInvoiceMatch',
        createErpInvoiceForPmsMatch: 'erp/FinanceErpInvoice/CreateErpInvoiceForPmsMatch',
        deleteErpInvoiceMatch: 'erp/FinanceErpInvoice/DeleteErpInvoiceMatch',
        getErpInvoiceFromErpClosureInvoice: 'erp/FinanceErpInvoice/GetErpInvoiceFromErpClosureInvoice',
        getErpPaymentFromErpClosureInvoice: 'erp/FinanceErpInvoice/GetErpPaymentFromErpClosureInvoice',
        getClosureInvoiceCurrentBalance: 'erp/FinanceErpInvoice/GetClosureInvoiceCurrentBalance',
        GetErpInvoiceDepartments:
            'erp/FinanceErpInvoice/GetErpInvoiceDepartments',
        GetEInvoiceList: 'erp/FinanceErpInvoice/GetEInvoiceList',
        GetEInvoiceHtml: 'erp/FinanceErpInvoice/GetEInvoiceHtml',
        InsertErpEInvoice: 'erp/FinanceErpInvoice/InsertErpEInvoice',
        GetEInvoiceDataList: 'erp/FinanceErpInvoice/GetEInvoiceDataList',
        GetEInvoiceDataByUUID: 'erp/FinanceErpInvoice/GetEInvoiceDataByUUID',
        GetEInvoiceUnit: 'erp/FinanceErpInvoice/GetEInvoiceUnit',
        GetEInvoiceDepartment: 'erp/FinanceErpInvoice/GetEInvoiceDepartment',
        InsertErpEInvoiceXml: 'erp/FinanceErpInvoice/InsertErpEInvoiceXml',
        GetErpInvoiceOwners: 'erp/FinanceErpInvoice/GetErpInvoiceOwners',
        CheckInvoiceForReadonly: 'erp/FinanceErpInvoice/CheckInvoiceForReadonly',
        getErpInvoiceForPmsClosureInvoice: 'erp/FinanceErpInvoice/GetErpInvoiceForPmsClosureInvoice',
        getErpPaymentForPmsClosureInvoice: 'erp/FinanceErpInvoice/getErpPaymentForPmsClosureInvoice',
        getErpReservationFromErpClosureInvoice: 'erp/FinanceErpInvoice/GetErpReservationFromErpClosureInvoice',
    },
    erpchecks: {
        GetErpCheckOwnerList: 'erp/FinanceErpCheck/GetErpCheckOwnerList',
        CreateErpCheck: 'erp/FinanceErpCheck/CreateErpCheck',
        GetErpCheckOwner: 'erp/FinanceErpCheck/GetErpCheckOwner',
        UpdateErpCheck: 'erp/FinanceErpCheck/UpdateErpCheck',
        DeleteErpCheck: 'erp/FinanceErpCheck/DeleteErpCheck',
        GetErpCheckDetails: 'erp/FinanceErpCheck/GetErpCheckDetails',
    },
    erpuserbranchsecs: {
        createErpUserBranchSec: '',
        updateErpUserBranchSec: '',
        deleteErpUserBranchSec: '',
        getErpUserBranchSecs: 'erp/ErpWorkDefinations/GetErpCompany',
        getErpUserAllList: 'erp/ErpWorkDefinations/GetUserBranchAllList',
        editErpUserAllList: 'erp/ErpWorkDefinations/UpdateBranchAllList',
    },
    erpproformasalesinvoices: {
        createErpProformaSalesInvoice: '',
        updateErpProformaSalesInvoice: '',
        deleteErpProformaSalesInvoice: '',
        getErpProformaSalesInvoices: 'account/GeneralSettings/GetCurrencyItems',
    },
    erpproformapurchaseinvoices: {
        createErpProformaPurchaseInvoice: '',
        updateErpProformaPurchaseInvoice: '',
        deleteErpProformaPurchaseInvoice: '',
        getErpProformaPurchaseInvoices:
            'account/GeneralSettings/GetCurrencyItems',
    },
    hrpricingallemployees: {
        createHrPricingAllEmployee: 'hr/Employee/CreatePricingAllEmployees',
        updateHrPricingAllEmployee: '',
        deleteHrPricingAllEmployee: '',
        getHrPricingAllEmployees: 'hr/Employee/GetPricingAllEmployees',
    },
    hrdismisallemployees: {
        createHrDismisAllEmployee: '',
        updateHrDismisAllEmployee: 'hr/Employee/UpdateDismisAllEmployee',
        deleteHrDismisAllEmployee: '',
        getHrDismisAllEmployees: 'account/GeneralSettings/GetCurrencyItems',
    },

    erpuserdepotsecs: {
        createErpUserDepotSec: '',
        updateErpUserDepotSec: '',
        deleteErpUserDepotSec: '',
        getErpUserDepotSecs: 'account/GeneralSettings/GetCurrencyItems',
        getErpUserDepotAllList: 'erp/StokCost/GetUserDepotAllList',
        editErpUserDepotAllList: 'erp/StokCost/UpdateUserDepotAllList',
    },
    erpuserdefinitions: {
        createErpUserDefinition: '',
        updateErpUserDefinition: '',
        deleteErpUserDefinition: '',
        getErpUserDefinitions: 'account/GeneralSettings/GetCurrencyItems',
    },
    erpcurrentbalances: {
        createErpCurrentBalance: '',
        updateErpCurrentBalance: '',
        deleteErpCurrentBalance: '',
        // getErpCurrentBalances: 'account/GeneralSettings/GetCurrencyItems',
        getErpCurrentBalancePlan: 'erp/FinanceCards/GetErpCurrentCardsBalance',
    },
    erpaccintegparam: {
        getErpAccIntegParamProperty:
            'erp/ErpWorkDefinations/GetErpAccIntegParamProperty',
        getErpAccIntegParamList: 'erp/ErpWorkDefinations/ErpAccIntegParamList',
        updateErpAccIntegParam: 'erp/ErpWorkDefinations/UpdateErpAccIntegParam',
    },
    hrpersonelovertimes: {
        createHrPersonelOverTime: '',
        updateHrPersonelOverTime: '',
        deleteHrPersonelOverTime: 'hr/Payroll/DeletePersonnelOvertime',
        getHrPersonelOverTimes: 'hr/Payroll/GetPersonnelOverTimeItems',
        editPersonnelOvertimes: 'hr/Payroll/EditPersonnelOvertimeItems',
        confirmAllDepartments: 'hr/Payroll/ConfirmAllDepartmentOvertime',
        confirmAllHr: 'hr/Payroll/ConfirmAllHrOvertime',
        deconfirmAllDepartments: 'hr/Payroll/DeconfirmAllDepartmentOvertime',
        deconfirmAllHr: 'hr/Payroll/DeconfirmAllHrOvertime',
        deletePersonnelOvertimeColumnItems: 'hr/Payroll/DeletePersonnelOvertimeColumnItems'
    },
    hrpayrollperiodicpaymentperiods: {
        createHrPayrollPeriodicPaymentPeriod:
            'hr/OperatingDefinition/CreatePayrollPeriodicPaymentPeriod',
        updateHrPayrollPeriodicPaymentPeriod:
            'hr/OperatingDefinition/UpdatePayrollPeriodPaymentPeriod',
        deleteHrPayrollPeriodicPaymentPeriod:
            'hr/OperatingDefinition/DeletePayrollPeriodPaymentPeriod',
        getHrPayrollPeriodicPaymentPeriods:
            'hr/OperatingDefinition/GetPayrollPeriodicPaymentPeriod',
        getHrPayrollPeriodicPaymentPeriodsWithId:
            'hr/OperatingDefinition/GetPayrollPeriodicPaymentPeriodWithIdQuery',
    },
    frontofficeintegrations: {
        getFrontOfficeIntegrationList:
            'erp/AccountDepartmentCards/GetFrontOfficeIntegration',
    },

    pmsblockages: {
        createPmsBlockage: '',
        updatePmsBlockage: 'pms/blockage/UpdatePmsBlockage',
        deletePmsBlockage: '',
        getPmsBlockages: 'pms/blockage/GetPmsBlockage',
        getPmsBlockageRooms: 'pms/blockage/GetPmsBlockageRooms',
        getPmsBlockageRoomConByRoomId: 'pms/blockage/GetBlockageRoomConByRoomId',
    },

    hrleavemovements: {
        createHrLeaveMovement: 'hr/Employee/CreateHrLeaveMovement',
        updateHrLeaveMovement: 'hr/Employee/UpdateHrLeaveMovement',
        deleteHrLeaveMovement: 'hr/Employee/DeleteHrLeaveMovement',
        getHrLeaveMovements: 'hr/Employee/GetPersonnelMovement',
        getHrLeaveMovementsWithId: 'hr/Employee/GetPersonnelMovementWithId',
        getPersonnelMovementLeaveType:
            'hr/Employee/GetPersonnelMovementLeaveType',
        getPersonnelMovementForSummary:
            'hr/Employee/GetPersonnelMovementForSummary',
        getPersonnelMovementLastDate:
            'hr/Employee/GetPersonnelMovementLastDate',
        getPersonnelLeaveCount: 'hr/Employee/GetPersonnelLeaveCount',
        getPersonnelLastOffDay: 'hr/Employee/GetPersonnelLastOffDay',
    },

    hrpersonnelexternaldutys: {
        createHrPersonnelExternalDuty:
            'hr/Employee/CreateHrPersonnelExternalDuty',
        updateHrPersonnelExternalDuty:
            'hr/Employee/UpdateHrPersonnelExternalDuty',
        deleteHrPersonnelExternalDuty:
            'hr/Employee/DeleteHrPersonnelExternalDuty',
        getHrPersonnelExternalDutys: 'hr/Employee/GetPersonnelExternalDuties',
        getPersonnelExternalDutyWithId:
            'hr/Employee/GetPersonnelExternalDutyWithId',
        getHrPersonnelForExternalDuty:
            'hr/Employee/GetHrPersonnelForExternalDuty',
        getPersonnelPositionLocationForDuty:
            'hr/Employee/GetPersonnelPositionLocationForDuty',
    },

    hrleaveaccruals: {
        createHrLeaveAccrual: '',
        updateHrLeaveAccrual: '',
        deleteHrLeaveAccrual: '',
        getHrLeaveAccruals: 'hr/Employee/GetLeaveAccrual',
        getLeaveTypeDayHour: 'hr/Employee/GetLeaveTypeDayHour',
        getLeavetypeAccrual: 'hr/Employee/GetLeavetypeAccrual',
        editPersonnelLeaveAccrual: 'hr/Employee/EditLeaveAccrual',
        getHrLeaveAccrualWithId: 'hr/Employee/GetLeaveAccrualWithId',
        saveImportExcell: 'hr/Employee/SaveImportExcell',
    },

    hrpersonelmultiesgks: {
        createHrPersonelMultiEsgk: '',
        updateHrPersonelMultiEsgk: '',
        deleteHrPersonelMultiEsgk: '',
        getHrPersonelMultiEsgks: 'account/GeneralSettings/GetCurrencyItems',
    },
    pmsreservationsintransfers: {
        createPmsReservationSinTransfer: '',
        updatePmsReservationSinTransfer: '',
        deletePmsReservationSinTransfer: '',
        getPmsReservationSinTransfers:
            'pms/reservation/GetSinReservationTransfer',
        getPmsSinHotels: '',
    },
    pdksdeviceinfos: {
        createPdksDeviceInfo: 'hr/Pdks/CreateDeviceInfo',
        updatePdksDeviceInfo: 'hr/Pdks/UpdateDeviceInfo',
        deletePdksDeviceInfo: 'hr/Pdks/DeleteDeviceInfo',
        getPdksDeviceInfos: 'hr/Pdks/GetDeviceInfoQuery',
        getDeviceInfoId: 'hr/Pdks/GetDeviceInfoId',
        getCheckConnection: 'hr/Pdks/GetCheckConnect',
        getPdksLocationList: 'hr/Pdks/GetPdksLocationList',
    },
    pmstracemaps: {
        createPmsTraceMap: 'pms/Operation/CreatePmsTraceMapping',
        updatePmsTraceMap: 'pms/Operation/UpdatePmsTraceMapping',
        deletePmsTraceMap: 'pms/Operation/DeletePmsTraceMappingItem',
        getPmsTraceMaps: 'pms/Operation/GetPmsTraceMappings',
    },
    pmsregiondefinations: {
        createPmsCountryDefination: 'pms/setup/CreatePmsCountry',
        updatePmsCountryDefination: 'pms/setup/UpdatePmsCountry',
        deletePmsCountryDefination: 'pms/setup/DeletePmsCountry',
        getPmsCountryDefination: 'pms/setup/GetPmsCountry',

        createPmsMainRegionDefination: 'pms/setup/CreatePmsMainRegion',
        updatePmsMainRegionDefination: 'pms/setup/UpdatePmsMainRegion',
        deletePmsMainRegionDefination: 'pms/setup/DeletePmsMainRegion',
        getPmsMainRegionDefination: 'pms/setup/GetPmsMainRegion',

        createPmsSubRegionDefination: 'pms/setup/CreatePmsSubRegion',
        updatePmsSubRegionDefination: 'pms/setup/UpdatePmsSubRegion',
        deletePmsSubRegionDefination: 'pms/setup/DeletePmsSubRegion',
        getPmsSubRegionDefination: 'pms/setup/GetPmsSubRegion',

        createPmsRegionDefination: 'pms/setup/CreatePmsRegion',
        updatePmsRegionDefination: 'pms/setup/UpdatePmsRegion',
        deletePmsRegionDefination: 'pms/setup/DeletePmsRegion',
        getPmsRegionDefination: 'pms/setup/GetPmsRegion',
    },
    pdkspersonelmappings: {
        createPdksPersonelMapping: 'hr/Pdks/CreateDevicePerson',
        updatePdksPersonelMapping: '',
        deletePdksPersonelMapping: 'hr/Pdks/DeletePdkPersonnelDatas',
        getPdksPersonelMappings: 'hr/Pdks/GetPersonMapping',
        getPdksPersonelFingerMapping: 'hr/Pdks/PdksPersonelFingerMapping',
    },
    pdksinouttransfers: {
        createPdksinoutTransfer: '',
        updatePdksinoutTransfer: '',
        deletePdksinoutTransfer: '',
        getPdksinoutTransfers: 'hr/Pdks/GetInOutTransfer',
        createPdksOperation: 'hr/Pdks/CreatePdksOperations',
        insertInOutRecords: 'hr/Pdks/InsertInOutRecords',
        getPdksOperation: 'hr/Pdks/GetPdksOperation',
        getPdksOperationWithId: 'hr/Pdks/GetPdksOperationWithId',
        createPdksOperationRecord: 'hr/Pdks/CreatePdksOperationRecord',
        updatePdksOperationRecord: 'hr/Pdks/UpdatePdksOperationRecord',
        deletePdksOperationRecord: 'hr/Pdks/DeletePdksOperationRecord'
    },

    genaraldomaindefinations: {
        createGenaralDomainDefination:
            'account/settings/CreateAccountDomainCommand',
        updateGenaralDomainDefination:
            'account/settings/UpdateAccountDomainCommand',
        deleteGenaralDomainDefination:
            'account/settings/DeleteAcccountDomainCommand',
        getGenaralDomainDefinations: 'account/settings/GetAccountDomainQuery',
    },

    maildomaindefinations: {
        createMailDomainDefinition: 'account/settings/CreateMailDomain',
        updateMailDomainDefinition: 'account/settings/UpdateMailDomain',
        deleteMailDomainDefinition: 'account/settings/DeleteMailDomain',
        getMailDomainDefinitions: 'account/settings/GetMailDomain',
    },

    pmsphysicallyareass: {
        createPmsPhysicallyAreas:
            'pms/Operation/CreatePmsPhysicallyAreaCommand',
        updatePmsPhysicallyAreas:
            'pms/Operation/UpdatePmsPhysicallyAreaCommand',
        deletePmsPhysicallyAreas:
            'pms/Operation/DeletePmsPhysicallyAreaCommand',
        getPmsPhysicallyAreass: 'pms/Operation/GetPmsPhysicallyAreaQuery',
        GetForUpdatePmsPhysicallyAreaQuery:
            'pms/Operation/GetForUpdatePmsPhysicallyAreaQuery',
        GetPropertiesListQuery: 'account/account/GetPropertiesListQuery',
        getPmsPhysicallyAreaFromProperty:
            'pms/Operation/GetPmsPhysicallyAreaFromProperty',
    },
    pmstracedepartmentss: {
        createPmsTraceDepartments:
            'pms/Operation/CreatePmsTraceDepartmentCommand',
        updatePmsTraceDepartments:
            'pms/Operation/UpdatePmsTraceDepartmentCommand',
        deletePmsTraceDepartments: 'pms/Operation/DeletePmsDepartmentCommand',
        getPmsTraceDepartmentss: 'pms/Operation/GetPmsTraceDepartmentQuery',
        GetForUpdatePmsTraceDepartmentQuery:
            'pms/Operation/GetForUpdatePmsTraceDepartmentQuery',
    },
    hrReportMenus: {
        createHrReportMenu: '',
        updateHrReportMenu: '',
        deleteHrReportMenu: '',
        getHrReportMenus: 'account/GeneralSettings/GetCurrencyItems',
    },
    pmsvehicledefinitions: {
        createPmsVehicleDefinition: 'pms/Operation/CreateIncVehicleCommand',
        updatePmsVehicleDefinition: 'pms/Operation/UpdateIncVehicleCommand',
        deletePmsVehicleDefinition: 'pms/Operation/DeleteIncVehicleCommand',
        getPmsVehicleDefinitions: 'pms/Operation/GetIncVehicleQuery',
    },
    pmsroutedefinitions: {
        createPmsRouteDefinition: 'pms/Operation/CreateTransportRoute',
        updatePmsRouteDefinition: 'pms/Operation/UpdateTransportRoute',
        deletePmsRouteDefinition: 'pms/Operation/DeleteTransportRoute',
        getPmsRouteDefinitions: 'pms/Operation/GetTransportRoutes',
    },
    pmsvehiclecompanydefinitions: {
        createPmsVehicleCompanyDefinition: 'pms/Operation/CreateVehicleCompany',
        updatePmsVehicleCompanyDefinition: 'pms/Operation/UpdateVehicleCompany',
        deletePmsVehicleCompanyDefinition: 'pms/Operation/DeleteVehicleCompany',
        getPmsVehicleCompanyDefinitions: 'pms/Operation/GetVehicleCompanies',
    },
    pmsguidedefinitions: {
        createPmsGuideDefinition: 'pms/crm/CreateCrmCustomer',
        updatePmsGuideDefinition: 'pms/crm/UpdateCrmCustomer',
        deletePmsGuideDefinition: 'pms/crm/DeleteCrmCustomer',
        getPmsGuideDefinitions: 'pms/crm/GetCrmCustomers',
    },
    pmsDriverdefinitions: {
        createPmsDriverDefinition: 'pms/crm/CreateCrmCustomer',
        updatePmsDriverDefinition: 'pms/crm/UpdateCrmCustomer',
        deletePmsDriverDefinition: 'pms/crm/DeleteCrmCustomer',
        getPmsDriverDefinitions: 'pms/crm/GetCrmCustomers',
    },
    pmsairplanedefinitions: {
        createPmsAirplaneDefinition: 'pms/Operation/CreateIncAirplaneCommand',
        updatePmsAirplaneDefinition: 'pms/Operation/UpdateIncAirplaneCommand',
        deletePmsAirplaneDefinition: 'pms/Operation/DeleteIncAirplaneCommand',
        getPmsAirplaneDefinitions: 'pms/Operation/GetAirplaneQuery',
    },
    transferOperation: {
        "getTransferOperations": 'pms/operation/getTransferOperations',
        "getTransportVehicle": 'pms/operation/getTransportVehicle',
        "createTransportVehicle": 'pms/operation/createTransportVehicle',
        "updateTransportVehicle": 'pms/operation/updateTransportVehicle',
        "extractTransferFromVehicle": 'pms/operation/extractTransferFromVehicle',
        "addTransferToVehicle": 'pms/operation/addTransferToVehicle',
    },
    pmstransferpricesdefinitions: {
        createPmsTransferPricesDefinition:
            'pms/Operation/CreateIncTransferPriceCommand',
        updatePmsTransferPricesDefinition:
            'pms/Operation/UpdateIncTransferPriceCommand',
        deletePmsTransferPricesDefinition:
            'pms/Operation/DeleteIncTransferPriceCommand',
        getPmsTransferPricesDefinitions: 'pms/Operation/GetTransferPriceQuery',
        getTransferPriceForReservation: 'pms/Operation/GetTransferPriceForReservation'
    },
    pmsuserdepartmappings: {
        createPmsUserDepartMapping:
            'pms/Operation/CreatePmsTraceDepartMappingCommand',
        updatePmsUserDepartMapping: '',
        deletePmsUserDepartMapping:
            'pms/Operation/DeletePmsTraceDepartMappingCommand',
        getPmsUserDepartMappings: 'account/GeneralSettings/GetCurrencyItems',
        getPmsUserTraceDepartMappings:
            'pms/Operation/GetPmsDepartUserMapWithId',
        getPmsTraceFromSub: 'pms/Operation/GetPmsTraceFromSub',
        getUsersFromTraceDepartment:
            'account/settings/GetUsersFromTraceDepartment',
        getPmsTraceMappingForDef: 'pms/Operation/GetPmsTraceMappingForDef',
    },
    erphrbranchmappings: {
        createErpHrBranchMapping:
            'erp/ErpWorkDefinations/CreateErpHrBranchMapping',
        updateErpHrBranchMapping: '',
        deleteErpHrBranchMapping:
            'erp/ErpWorkDefinations/DeleteErpHrBranchMapping',
        getErpHrBranchMappings: 'erp/ErpWorkDefinations/GetErpHrBranches',
    },
    hrsgkconcisebonusservicestatements: {
        createHrSgkConciseBonusServiceStatement: '',
        updateHrSgkConciseBonusServiceStatement: '',
        deleteHrSgkConciseBonusServiceStatement: '',
        getHrSgkConciseBonusServiceStatements:
            'hr/Concise/GetConciseBonusServiceStatement',
        getHrConciseDefinition: 'hr/OperatingDefinition/GetHrConciseDefinition',
    },
    generalparameterss: {
        createGeneralParameters: '',
        updateGeneralParameters: 'hr/Parameter/UpdateParameters',
        deleteGeneralParameters: '',
        getGeneralParameterss: 'hr/Parameter/GetParameters',
        getParameterWithFilter: 'hr/Parameter/GetParameterWithFilter',
    },
    pmstraceoperationss: {
        createPmsTraceOperations: 'pms/Operation/CreatePmsTraceOperation',
        saveFilesToS3: 'pms/Operation/SaveFilesToS3',
        getFilesToS3: 'pms/Operation/GetFilesToS3',
        updatePmsTraceOperations: 'pms/Operation/UpdatePmsTraceOperation',
        deletePmsTraceOperations: 'pms/Operation/DeletePmsTraceOperation',
        getPmsTraceOperationss: 'pms/Operation/GetPmsTraceOperation',
        getPmsTraceOperationWithId: 'pms/Operation/GetPmsTraceOperationWithId',
        getPmsTraceOperationsErp: 'pms/Operation/GetPmsTraceOperationErp',
        getPmsTraceOperationErpWithId: 'pms/Operation/GetPmsTraceOperationErpWithId',
        createS3LinkOfFiles: 'pms/crm/SaveSurveyDocumentsToS3',
        deleteS3LinkOfFile: 'pms/pmscommon/DeletePmsDocumentFromS3',
        sendTraceOperationBpm: 'pms/Operation/SendTraceOperation'
    },
    pmssurveydefinitions: {
        createPmsSurveyDefinition: 'pms/crm/CreatePmsSurveyDefinition',
        updatePmsSurveyDefinition: 'pms/crm/UpdatePmsSurveyDefinition',
        deletePmsSurveyDefinition: 'pms/crm/DeletePmsSurveyDefinition',
        getPmsSurveyDefinitions: 'pms/crm/GetPmsSurveyDefinitions',
        getPmsAllSurveyDefinitions: 'pms/crm/GetPmsAllSurveyDefinitions',
        getSurveyDesignQuery: 'pms/crm/GetSurveyDesignQuery',
        getSurveyDesignForEntry: 'pms/crm/GetSurveyDesignForEntry',
        checkSurveyDesign: 'pms/crm/CheckSurveyDesign',

    },
    pmssurveyowners: {
        createPmsSurveyOwner: 'pms/crm/CreateSurveyOwnerCommand',
        updatePmsSurveyOwner: 'pms/crm/UpdateSurveyOwnerCommand',
        deletePmsSurveyOwner: 'pms/crm/DeleteSurveyOwnerCommand',
        getPmsSurveyOwners: 'pms/crm/GetSurveyOwnerQuery',
        getSurveyOwnerForRoute: 'pms/crm/GetSurveyOwnerForRoute',
        showSurveyDesign: 'pms/crm/GetSurveyTypeQuery',
        sendSurveyOwner: 'pms/crm/SendSurveyOwner'
    },
    pmssurveydesigns: {
        createPmsSurveyDesign: 'pms/crm/CreateSurveyViewCommand',
        updatePmsSurveyDesign: 'pms/crm/UpdateSurveyViewCommand',
        deletePmsSurveyDesign: 'pms/crm/DeleteSurveyViewCommand',
        getPmsSurveyDesigns: 'account/GeneralSettings/GetCurrencyItems',
        getSurveyViewQuery: 'pms/crm/GetSurveyViewQuery',
        getSurveyViewWithOwnerId: 'pms/crm/GetSurveyViewWithOwnerId',
        updateSurveyDocuments: 'pms/crm/UpdateSurveyDocuments',
        createSurveyDocuments: 'pms/crm/CreatePmsSurveyDocuments',
        deleteS3LinkOfFiles: '',
        createS3LinkOfFiles: 'pms/crm/SaveSurveyDocumentsToS3',
        getSurveyDocumentsForQuestions: 'pms/crm/GetSurveyDocumentsForQuestions',
        updateSurveyDocumentByUser: 'pms/crm/UpdateSurveyDocumentByUser',
        deletePmsSurveyDocuments: 'pms/crm/DeletePmsSurveyDocuments',
        getSurveyDocumentsCount: 'pms/crm/GetSurveyDocumentsCount',
    },
    pmsmailingtemplatess: {
        createPmsMailingTemplatesOwner: 'pms/crm/CreatePmsMailTemplateOwner',
        updatePmsMailingTemplatesOwner: '',
        deletePmsMailingTemplatesOwner: 'pms/crm/DeletePmsMailTemplateOwner',
        getPmsMailingTemplatessOwner: 'pms/crm/GetPmsMailTemplateOwners',

        createPmsMailingTemplateMapping: 'pms/crm/CreatePmsMailingTempMapping',
        getPmsMailingTemplateMapping: 'pms/crm/GetPmsMailingTempMapping',
        deletePmsMailingTemplateMapping:
            'pms/crm/DeletePmsMailingTemplateMapping',

        createPmsMailingTemplate: 'pms/crm/CreatePmsMailTemplate',

        getPmsMailTemplatesByOwnerId: 'pms/crm/GetPmsMailTemplatesByOwnerId',
        createMailTemplates: 'pms/crm/CreateMailTemplate',
        updateMailTemplates: 'pms/crm/UpdateMailTemplate',
        deletePmsMailTemplate: 'pms/crm/DeletePmsMailTemplate',
    },
    pmstracetasktypes: {
        createPmsTraceTaskType: 'pms/Operation/CreatePmsTraceTaskType',
        updatePmsTraceTaskType: 'pms/Operation/UpdatePmsTraceTaskType',
        deletePmsTraceTaskType: 'pms/Operation/DeletePmsTraceTaskType',
        getPmsTraceTaskTypes: 'pms/Operation/GetPmsTraceTaskType',
        getPmsTraceTaskTypeWithId: 'pms/Operation/GetPmsTraceTaskTypeWithId',
    },
    pmstourmanagementdefinitionss: {
        createPmsTourManagementDefinitions: '',
        updatePmsTourManagementDefinitions: '',
        deletePmsTourManagementDefinitions: '',
        getPmsTourManagementDefinitionss:
            'account/GeneralSettings/GetCurrencyItems',
    },
    pmstourpricedefinitionss: {
        createPmsTourPriceDefinitions: 'pms/Operation/CreateTourCommand',
        updatePmsTourPriceDefinitions: 'pms/Operation/UpdateTourCommand',
        deletePmsTourPriceDefinitions: 'pms/Operation/DeleteTourCommand',

        getPmsTourPriceDefinitionss: 'pms/Operation/GetTourDefinationQuery',
        updateTourPrice: 'pms/Operation/UpdateTourPriceCommand',
        getIncTourPrice: 'pms/Operation/GetIncTourPriceQuery',
        getIncTourDefinitionById: 'pms/Operation/GetIncTourDefinitionById',
    },
    pmstourdefinitionss: {
        createPmsTourDefinitions: 'pms/Operation/CreateTourTypesCommand',
        updatePmsTourDefinitions: 'pms/Operation/UpdateTourTypesCommand',
        deletePmsTourDefinitions: 'pms/Operation/DeleteTourTypesCommand',
        getPmsTourDefinitionss: 'pms/Operation/GetTourTypesQuery'
    }
    , erpecollectionreviews: {
        createErpECollectionReview: 'payment/ecollection/CreatePmsECollection',
        updateErpECollectionReview: 'payment/ecollection/UpdatePmsECollection',
        deleteErpECollectionReview: 'payment/ecollection/DeletePmsECollection',
        sendErpECollectionMail: 'payment/ecollection/SendErpECollectionMail',
        deleteAllErpECollectionReview: 'payment/ecollection/',
        getErpECollectionReviews: 'payment/ecollection/GetPmsECollections',
        getCollectionById: 'payment/ecollection/GetECollectionsById',
        getErpECollectionReviewParameters: 'payment/ecollection/GetPmsECollectionParameters',
        getECollectionWithoutId: 'payment/ecollection/getECollectionWithoutId',
        getECollectionLogs: 'payment/ecollection/GetEcollectionLogs',
        getReservationECollectionLogs: 'payment/ecollection/GetReservationECollectionLogs',
        getRecentExchangeRate: 'account/exchange/GetRecentExchangeRate'

    }
    , erpecollectionentrys: {
        createErpECollectionEntry: '',
        updateErpECollectionEntry: '',
        deleteErpECollectionEntry: '',
        getErpECollectionEntrys: 'payment/ecollection/GetPmsECollections'
    }
    , payment: {
        payECollectionLink: 'payment/payment/Pay',
        payB2bECollectionLink: 'payment/payment/PayB2B',
        refundPayment: 'payment/payment/Refund',
        sberbankRefundPayment: 'payment/payment/RefundSberBank',
        getPaymentDetail: 'payment/payment/GetPaymentDetailInformation',
        getBankFromCardNumber: 'payment/payment/GetBankFromCardNumber',
        getErpECollectionEntrys: 'account/payment/GetCurrencyItems',
        getInstallmentOptionsByBanks: 'payment/payment/GetInstallmentOptionsByBanks',
    }
    , hrmissingdayentrys: {
        createHrMissingDayEntry: 'hr/payroll/CreatePersonnelMissingDay',
        updateHrMissingDayEntry: 'hr/payroll/UpdatePersonnelMissingDay',
        deleteHrMissingDayEntry: 'hr/payroll/DeletePersonnelMissingDay',
        getHrMissingDayEntrys: 'hr/payroll/GetPersonnelMissingDay',
        getPersonnelMissingDayFilterReport: 'hr/payroll/GetPersonnelMissingDayFilterReport',
        getPersonnelMissingDayWithPersonelId: 'hr/payroll/GetPersonnelMissingDayWithPersonelId',
        getPersonelMissingDayReport: 'hr/payroll/GetPersonelMissingDayReport',
        getPersonnelMissingDayWithId: 'hr/payroll/GetPersonnelMissingDayWithId',
    }
    , pmsactivitydefinitions: {
        createPmsActivityDefinition: 'pms/Operation/CreatePmsActivityDefinition',
        updatePmsActivityDefinition: 'pms/Operation/UpdatePmsActivityDefinition',
        deletePmsActivityDefinition: 'pms/Operation/DeletePmsActivityDefinition',
        getPmsActivityDefinitions: 'pms/Operation/GetPmsActivityDefinition',
        getPmsActivityDefinitionsWithId:
            'pms/Operation/GetPmsActivityDefinitionWithId',
        getPmsActivityDefinitionsForTable:
            'pms/Operation/GetPmsActivityDefinitionForTable',
        getPmsActivityTable: 'pms/Operation/GetPmsActivityTable',
        createPmsActivityTable: 'pms/Operation/CreatePmsActivityTable',
        updatePmsActivityTable: 'pms/Operation/UpdatePmsActivityTable',
        getPmsActivityTableWithId: 'pms/Operation/GetPmsActivityTableWithId',
        deletePmsActivityTable: 'pms/Operation/DeletePmsActivityTable',
        getPmsActivtyAreaFromDefinition:
            'pms/Operation/GetPmsActivtyAreaFromDefinition',
        getPmsActivityAreaForRes: 'pms/Operation/GetPmsActivityAreaForRes',
    },
    pmsactivityentrys: {
        createPmsActivityEntry: 'pms/Operation/CreatePmsActivityReservation',
        updatePmsActivityEntry: '',
        deletePmsActivityEntry: '',
        getPmsActivityEntrys: 'pms/Operation/GetPmsActivityReservation',
        getPmsResCustomersForActivity:
            'pms/Operation/GetPmsResCustomersForActivity',
    },
    pmsloyalitycalculatess: {
        createPmsLoyalityCalculates: '',
        updatePmsLoyalityCalculates: '',
        deletePmsLoyalityCalculates: '',
        getPmsLoyalityCalculatess: 'account/GeneralSettings/GetCurrencyItems'
    }
    , erpcodefielddefinitionss: {
        createErpCodeFieldDefinitions: 'erp/ErpWorkDefinations/CreateErpCodeArea',
        updateErpCodeFieldDefinitions: '',
        deleteErpCodeFieldDefinitions: '',
        getErpCodeFieldDefinitionss:
            'erp/ErpWorkDefinations/GetErpDocumentTypes',
        getErpCodeHeaders: 'erp/ErpWorkDefinations/GetErpCodeHeaders',
        getErpCodeAreaDetails: 'erp/ErpWorkDefinations/GetErpCodeAreaDetails',
        geterpCodeListDocumentTypeFilteredGroup: 'erp/ErpWorkDefinations/ErpCodeListDocumentTypeFilteredGroup',
    },
    hrdocumentmanagements: {
        updateHrPersonnelDocument: 'hr/Quality/UpdateHrPersonnelDocument',
        deleteHrDocumentManagement: 'hr/Quality/DeleteHrPersonnelDocument',
        getHrDocumentManagements: 'hr/Quality/GetHrPersonnelDocument',
        createS3LinkOfFiles: 'hr/Quality/SaveFilesToS3',
        getS3LinkOfFiles: 'hr/Quality/GetFilesToS3',
        deleteS3LinkOfFiles: 'hr/Quality/DeleteFilesFromS3',
        createHrPersonnelDocument: 'hr/Quality/CreateHrPersonnelDocument',
        getLightHrEmployeeList: 'hr/Quality/GetLightHrPersonnelList',
    },

    bpmSettings: {
        // BpmCategory
        createBpmCategory: 'bpm/BpmSettings/CreateBpmCategory',
        updateBpmCategory: 'bpm/BpmSettings/UpdateBpmCategory',
        getBpmCategories: 'bpm/BpmSettings/GetBpmCategories',
        deleteBpmCategory: 'bpm/BpmSettings/DeleteBpmCategory',
        // BpmDocumentType
        createBpmDocumentType: 'bpm/BpmSettings/CreateBpmDocumentType',
        updateBpmDocumentType: 'bpm/BpmSettings/UpdateBpmDocumentType',
        getBpmDocumentTypes: 'bpm/BpmSettings/GetBpmDocumentTypes',
        deleteBpmDocumentType: 'bpm/BpmSettings/DeleteBpmDocumentType',
        GetVeboniDocumenttypeList: 'bpm/BpmSettings/GetVeboniDocumenttypeList',

        // BpmDocument
        createBpmDocument: 'bpm/BpmSettings/CreateBpmDocument',
        updateBpmDocument: 'bpm/BpmSettings/UpdateBpmDocument',
        getBpmDocuments: 'bpm/BpmSettings/GetBpmDocuments',
        deleteBpmDocument: 'bpm/BpmSettings/DeleteBpmDocument',
        getBpmDocumentByRecId: 'bpm/BpmSettings/GetBpmDocumentByRecId',
        getBpmPersons: 'bpm/BpmSettings/GetBpmAccounts',
        // BpmScenario
        createBpmScenario: 'bpm/BpmSettings/CreateBpmScenario',
        updateBpmScenario: 'bpm/BpmSettings/UpdateBpmScenario',
        getBpmScenarios: 'bpm/BpmSettings/GetBpmScenarios',
        deleteBpmScenario: 'bpm/BpmSettings/DeleteBpmScenario',
        getBpmScenarioByRecId: 'bpm/BpmSettings/GetBpmScenarioByRecId',
        TriggerBpmScenarioNow: 'bpm/BpmSettings/TriggerBpmScenarioNow',
        // BpmDocumentApproval
        getBpmDocumentApproval: 'bpm/BpmSettings/GetBpmDocumentsForApproval',
        getBpmApprovalByDocumentId: 'bpm/BpmSettings/GetBpmApprovalByDocumentId',
        ApproveBpmDocument: 'bpm/BpmSettings/ApproveBpmDocument',
        GetBpmDocumenTypeByRecId: 'bpm/BpmSettings/GetBpmDocumenTypeByRecId',

        CheckBpmStatus: 'bpm/BpmSettings/CheckBpmStatus',
        GetSmtpSettings: 'bpm/BpmSettings/GetSmtpSettingsLight',
        GetMailTemplates: 'bpm/BpmSettings/GetMailTemplatesLight',
        GetBpmHistoryList: 'bpm/BpmSettings/GetBpmHistoryList',
        // BpmFormFilter
        CreateBpmFormFilter: 'bpm/BpmSettings/CreateBpmFormFilter',
        UpdateBpmFormFilter: 'bpm/BpmSettings/UpdateBpmFormFilter',
        DeleteBpmFormFilter: 'bpm/BpmSettings/DeleteBpmFormFilter',
        GetBpmFormFilterList: 'bpm/BpmSettings/GetBpmFormFilterList',
        GetBpmFormFilterLight: 'bpm/BpmSettings/GetBpmFormFilterLight',
        UpdateFieldInfoJson: 'bpm/BpmSettings/UpdateFieldInfoJson',
        GetFieldInfoByRecId: 'bpm/BpmSettings/GetFieldInfoByRecId',

        //HtmlEditor
        UploadHtml: 'pms/OnlineReservation/UploadHtml',
        ReadHtml: 'pms/OnlineReservation/ReadHtml',
        // BpmReportTemplate
        CreateBpmReportTemplateOwner: 'bpm/BpmSettings/CreateBpmReportTemplateOwner',
        UpdateBpmReportTemplateOwner: 'bpm/BpmSettings/UpdateBpmReportTemplateOwner',
        GetBpmReportTemplateOwners: 'bpm/BpmSettings/GetBpmReportTemplateOwners',
        DeleteBpmReportTemplateOwner: 'bpm/BpmSettings/DeleteBpmReportTemplateOwner',
        GetBpmReportTemplateOwnerByRecId: 'bpm/BpmSettings/GetBpmReportTemplateOwnerByRecId',
        // import
        CreateImportSetting: 'bpm/BpmSettings/CreateImportSetting',
        UpdateImportSetting: 'bpm/BpmSettings/UpdateImportSetting',
        GetImportSettings: 'bpm/BpmSettings/GetImportSettings',
        DeleteImportSetting: 'bpm/BpmSettings/DeleteImportSetting',
        GetImportSettingByRecId: 'bpm/BpmSettings/GetImportSettingByRecId',
        CreateImportTemp: 'bpm/BpmSettings/CreateImportTemp',
        ImportTemp: 'bpm/BpmSettings/ImportTemp',
        TriggerImportScenarioNow: 'bpm/BpmSettings/TriggerImportScenarioNow',
        // connection
        CreateConnection: 'bpm/BpmSettings/CreateConnection',
        UpdateConnection: 'bpm/BpmSettings/UpdateConnection',
        GetConnections: 'bpm/BpmSettings/GetConnections',
        DeleteConnection: 'bpm/BpmSettings/DeleteConnection',
        GetConnectionByRecId: 'bpm/BpmSettings/GetConnectionByRecId',
        getPmsPivotSource: 'bpm/BpmSettings/GetPmsPivotSource',
    }
    , erpcurrentothertransactions: {
        createErpCurrentOtherTransaction: '',
        updateErpCurrentOtherTransaction: '',
        deleteErpCurrentOtherTransaction: '',
        getErpCurrentOtherTransactions:
            'account/GeneralSettings/GetCurrencyItems',
    },
    hrogranizationschemas: {
        createHrOgranizationSchema: '',
        updateHrOgranizationSchema: '',
        deleteHrOgranizationSchema: '',
        getHrOgranizationSchemas: 'account/GeneralSettings/GetCurrencyItems',
    },
    mailing: {
        createsmtpsetting: 'mailing/smtp/CreateSmtpSetting',
        updatesmtpsetting: 'mailing/smtp/UpdateSmtpSetting',
        getsmtpsettings: 'mailing/smtp/GetSmtpSettings',
        getsmtpsettingbyid: 'mailing/smtp/GetSmtpSettingById',
        getsmtpsettingbyroleId: 'mailing/smtp/GetSmtpSettingsByRoleId',
        getsmtperrors: 'mailing/smtp/GetSmtpErrors',
        createsmtperror: 'mailing/smtp/CreateSmtpError',
        getsmtproles: 'mailing/smtp/GetSmtpRoles',
        updatesmtproles: 'mailing/smtp/UpdateSmtpRoles',
        sendmail: 'mailing/smtp/sendmail',
        readinbox: 'mailing/smtp/readinbox',
        deleteSmtpSetting: 'mailing/smtp/DeleteSmtpSetting',
        getHtmlString: 'mailing/smtp/GetHtmlString',
        uploadAttachment: 'mailing/smtp/uploadAttachment',
        getAttachments: 'mailing/smtp/getattachments',
        testMail: 'mailing/smtp/TestSendingMail',
        getInboxWithUdForm: 'mailing/smtp/GetInboxWithUdForm',
        getMailWithId: 'mailing/smtp/GetMailWithId'
    }
    , erppurchaseoffers: {
        // API ENDPOINTLERİ YAZILACAK (S.E)
        createErpPurchaseOffer: '',
        updateErpPurchaseOffer: '',
        deleteErpPurchaseOffer: '',
        getErpPurchaseOffers: '',
    }
    , erppurchaseofferfichelists: {
        createErpPurchaseOfferFicheList: 'erp/Purchase/CreateErpPurchaseOfferFicheList',
        updateErpPurchaseOfferFicheList: '',
        deleteErpPurchaseOfferFicheList: '',
        getErpPurchaseOfferFicheLists: 'erp/Purchase/GetErpPurchaseOfferFicheList',
        getErpCurrentCardsForPurchaseList: 'erp/Purchase/GetErpCurrentCardsForPurchaseList'
    }
    , erppurchasestockoffers: {
        createErpPurchaseStockOffer: 'erp/Purchase/CreatePurchaseOffer',
        updateErpPurchaseStockOffer: 'erp/Purchase/UpdatePurchaseOffer',
        deleteErpPurchaseStockOffer: 'erp/Purchase/DeletePurchaseOffer',
        getErpPurchaseStockOffers: 'erp/Purchase/GetPurchaseOffer',
        updateDetailList: 'erp/Purchase/UpdateErpPurchaseStockOfferDetail',
        updateUnitPriceAndRemark: 'erp/Purchase/UpdateUnitPriceAndRemark',
        askForAnOffer: 'erp/Purchase/AskForAnOffer',
        getErpPurchaseStockOfferById: 'erp/Purchase/GetErpPurchaseStockOfferById'
    }
    , hrplantschemas: {
        createHrPlantSchema: '',
        updateHrPlantSchema: '',
        deleteHrPlantSchema: '',
        getHrPlantSchemas: 'account/GeneralSettings/GetCurrencyItems'
    }
    , prostockrecipes: {
        createProStockRecipe: '',
        updateProStockRecipe: '',
        deleteProStockRecipe: '',
        getProStockRecipes: 'account/GeneralSettings/GetCurrencyItems'
    }
    , proproductionplanings: {
        createProProductionPlaning: '',
        updateProProductionPlaning: '',
        deleteProProductionPlaning: '',
        getProProductionPlanings: 'account/GeneralSettings/GetCurrencyItems'
    }
    , proproductionorders: {
        createProProductionOrder: '',
        updateProProductionOrder: '',
        deleteProProductionOrder: '',
        getProProductionOrders: 'account/GeneralSettings/GetCurrencyItems'
    }
    , proproductionexitings: {
        createProProductionExiting: '',
        updateProProductionExiting: '',
        deleteProProductionExiting: '',
        getProProductionExitings: 'account/GeneralSettings/GetCurrencyItems'
    }
    , proproductionentryings: {
        createProProductionEntrying: '',
        updateProProductionEntrying: '',
        deleteProProductionEntrying: '',
        getProProductionEntryings: 'account/GeneralSettings/GetCurrencyItems'
    }
    , salesalesoffers: {
        createSaleSalesOffer: '',
        updateSaleSalesOffer: '',
        deleteSaleSalesOffer: '',
        getSaleSalesOffers: 'account/GeneralSettings/GetCurrencyItems'
    }
    , saledispatchs: {
        createSaleDispatch: '',
        updateSaleDispatch: '',
        deleteSaleDispatch: '',
        getSaleDispatchs: 'account/GeneralSettings/GetCurrencyItems'
    }
    , saleorders: {
        createSaleOrder: '',
        updateSaleOrder: '',
        deleteSaleOrder: '',
        getSaleOrders: 'account/GeneralSettings/GetCurrencyItems'
    }
    , budgetentrys: {
        createBudgetEntry: '',
        updateBudgetEntry: '',
        deleteBudgetEntry: '',
        getBudgetEntrys: 'account/GeneralSettings/GetCurrencyItems'
    }
    , budgetstockcoastentrys: {
        createBudgetStockCoastEntry: '',
        updateBudgetStockCoastEntry: '',
        deleteBudgetStockCoastEntry: '',
        getBudgetStockCoastEntrys: 'account/GeneralSettings/GetCurrencyItems'
    }
    , budgethumanresourcesentrys: {
        createBudgetHumanresourcesEntry: '',
        updateBudgetHumanresourcesEntry: '',
        deleteBudgetHumanresourcesEntry: '',
        getBudgetHumanresourcesEntrys: 'account/GeneralSettings/GetCurrencyItems'
    }
    , budgetfinanceentrys: {
        createBudgetFinanceEntry: '',
        updateBudgetFinanceEntry: '',
        deleteBudgetFinanceEntry: '',
        getBudgetFinanceEntrys: 'account/GeneralSettings/GetCurrencyItems'
    }
    , budgetdefinition: {
        createBudgetGroup: 'pms/Budget/CreatePmsBudgetGroup',
        updateBudgetGroup: 'pms/Budget/UpdatePmsBudgetGroup',
        deleteBudgetdefinition: 'pms/Budget/DeletePmsBudgetGroup',
        getBudgetGroup: 'pms/Budget/GetPmsBudgetGroup',
        getBudgetGroupDetail: 'pms/Budget/GetPmsBudgetGroupDetail',
    }

    , budgetrevenueentry: {
        createBudgetRevenueEntry: '',
        updateBudgetRevenueEntry: '',
        deletePmsFoIncomeBudget: 'pms/Budget/DeletePmsFoIncomeBudget',
        getPmsFoIncomeBudget: 'pms/Budget/GetPmsFoIncomeBudget',
        getBudgetRevenueEntryOwner: 'pms/Budget/GetPmsFoIncomeBudgetOwner',
        getPmsFoIncomeBudgetOwnerList: 'pms/Budget/GetPmsFoIncomeBudgetOwnerList',
        getBudgetRevenueEntryDetail: 'pms/Budget/GetPmsFoIncomeBudgetDetail',
        createPmsFoIncomeBudget: 'pms/Budget/CreatePmsFoIncomeBudget',
        getHappenedCalculate: 'pms/Budget/GetHappenedCalculate',
        getHappenedCalculateByOwner: 'pms/Budget/GetHappenedCalculateByOwner',
    }
    , erppurchaseofferreviews: {
        createErpPurchaseOfferreView: '',
        updateErpPurchaseOfferreView: 'erp/Purchase/UpdatePurchaseReviewCommand',
        deleteErpPurchaseOfferreView: '',
        getErpPurchaseOfferreViews: 'account/GeneralSettings/GetCurrencyItems',
        getErpPurchaseViewAll: 'erp/Purchase/GetPurchaseReviewAllQuery',
        getErpPurchaseDocument: 'erp/Purchase/GetPurchaseReviewDocumentnoListQuery'
    }
    , hrpositionschemawithemployes: {
        createHrPositionSchemaWithEmploye: '',
        updateHrPositionSchemaWithEmploye: '',
        deleteHrPositionSchemaWithEmploye: '',
        getHrPositionSchema: 'hr/Organization/GetPositionEmployeeSchemaItems',
    },
    roomchangeplan: {
        getRoomchangePlanSearch: 'pms/roomchangeplan/GetListPmsRoomChangePlanSearch',
        createRoomchangePlans: 'pms/roomchangeplan/CreatePmsRoomChangePlan',
        updateRoomchangePlans: 'pms/roomchangeplan/UpdatePmsRoomChangePlan',
        deleteRoomchangePlans: 'pms/roomchangeplan/DeletePmsRoomChangePlan',

        getBpmDocumentByRecId: 'pms/roomchangeplan/GetBpmDocumentByRecId',

        getListFeeRoomSearch: 'pms/roomchangeplan/GetListFreeRoomSearch',
        updateRoomchangePlanBlockage: 'pms/roomchangeplan/UpdateRoomChangePlanBlockage',


    }
    , channelmanager: {
        getChannelManagerParameters: 'pms/ChannelManager/GetChannelManagerParameters',
        getChannelManagerConfig: 'pms/ChannelManager/GetChannelManagerConfig',
        createChannelManagerDefinations: 'pms/ChannelManager/CreateChannelManagerDefinations',
        confirmReservation: 'pms/ChannelManager/ConfirmReservation',
        notConfirmReservation: 'pms/ChannelManager/NotConfirmReservation',
        updateChannelManagerDefinations: 'pms/ChannelManager/UpdateChannelManagerDefinations',
        updateChannelManagerParameter: 'pms/ChannelManager/UpdateChannelManagerParameter', /* TODO: Geri Dönülecek. */
        deleteChannelManagerDefinations: 'pms/ChannelManager/DeleteChannelManagerDefinations',
        getChannelManagerDefinations: 'pms/ChannelManager/GetChannelManagerDefinations',
        getReservations: 'pms/ChannelManager/GetReservations',
        getTempReservationsList: 'pms/ChannelManager/GetTempReservationsList',
        getConfirmedReservationsList: 'pms/ChannelManager/GetConfirmedReservationsList',
        getNotConfirmedReservationsList: 'pms/ChannelManager/GetNotConfirmedReservationsList',
        saveReservations: 'pms/ChannelManager/SaveReservations',
        getCmPmsIntegrations: 'pms/ChannelManager/GetCmPmsIntegrations',
        deleteCmPmsIntegrations: 'pms/ChannelManager/DeleteCmPmsIntegrations',
        getCmPmsIntegrationsConfig: 'pms/ChannelManager/GetCmPmsIntegrationsConfig',
        createCmPmsIntegration: 'pms/ChannelManager/CreateCmPmsIntegration',
        updateCmPmsIntegration: 'pms/ChannelManager/UpdateCmPmsIntegration',
        getCmPmsParameters: 'pms/ChannelManager/GetCmPmsParameters',
        prepareReservationForImport: 'pms/ChannelManager/PrepareReservationForImport',
        completeReservationForImport: 'pms/ChannelManager/CompleteReservationForImport',
        searchActualPrices: 'pms/ChannelManager/SearchActualPrices',
        getContracts: 'pms/ChannelManager/GetCmContracts',
        getMappings: 'pms/ChannelManager/GetCmCrossDefinitions',
        updateMappings: 'pms/ChannelManager/UpdateCmCrossDefinitions',
        importAllReservations: 'pms/ChannelManager/CreateSaveReservationQueue'
    }
    ,
    pmsreservationsharing: {

        getSharingReservationSelect: 'pms/reservationsharing/GetSharingReservationSelect',
        addReservationSharing: 'pms/reservationsharing/AddReservationSharing',
        cancelReservationSharing: 'pms/reservationsharing/CancelReservationSharing'
    },
    predefineddata: {
        getpredefineddatas: 'account/predefineddata/GetPredefinedDatas',
        createpredefineddata: 'account/predefineddata/CreatePredefinedData',
        updatepredefineddata: 'account/predefineddata/UpdatePredefinedData',
        deletepredefineddata: 'account/predefineddata/DeletePredefinedData',
        getpredefineddatasforentry: 'account/predefineddata/GetPredefinedDatasForEntry',
        getPredefinedEntriesByEntryId: 'pms/predefinedentry/GetPredefinedEntriesByEntryId',
    },

    crmsurveylist: {
        getCrmSurveyList: 'pms/crm/GetSurveyList',
        getBpmSurveyList: 'pms/crm/GetBpmSurveyList',
    },
    pmsroutingdefinition: {
        getPmsRoutingDefinitions: 'pms/routingdefinition/GetPmsRoutingDefinition',
        createPmsRoutingDefinition: 'pms/routingdefinition/CreatePmsRoutingDefinition',
        updatePmsRoutingDefinition: 'pms/routingdefinition/UpdatePmsRoutingDefinition',
        deletePmsRoutingDefinition: 'pms/routingdefinition/DeletePmsRoutingDefinition',

    },
    userdefinedreport: {
        getUserDefinedParametersSource: 'reports/api/HumanResources/GetUserDefinedParametersSource',
        getUserDefinedReportsList: 'reports/api/HumanResources/GetUserDefinedReportsList',
        getUserDefinedReportById: 'reports/api/HumanResources/GetUserDefinedReportById',
        getGridReportMultiparameters: 'reports/api/HumanResources/GetGridReportMultiparameters',
        createUserDefinedReport: 'reports/api/HumanResources/CreateUserDefinedReport',
        updateUserDefinedReportFilter: 'reports/api/HumanResources/UpdateUserDefinedReportFilter',
        deleteUserDefinedReport: 'reports/api/HumanResources/DeleteUserDefinedReport',
        checkUserRoleForReport: 'reports/api/HumanResources/CheckUserRoleForReport',
        getPivotGridDataSource: 'reports/api/HumanResources/GetPivotGridDataSource',
        createPivotReports: 'reports/api/HumanResources/CreateUserDefinedReportPivot',
        getUserDefinedPivotReportById: 'reports/api/HumanResources/GetUserDefinedPivotReportById',
    }

    , checklistcontrols: {
        createCheckListControl: '',
        updateCheckListControl: 'pms/crm/UpdateCheckListControl',
        deleteCheckListControl: '',
        getCheckListControls: 'pms/crm/GetCheckListControlList',
        getCheckListControl: 'pms/crm/GetCheckListControl'
    },
    pmsdiscountdefinition: {
        getPmsDiscountDefinitions: 'pms/discountdefinition/GetPmsdiscountDefinition',
        createPmsDiscountDefinition: 'pms/discountdefinition/CreatePmsdiscountDefinition',
        updatePmsDiscountDefinition: 'pms/discountdefinition/UpdatePmsdiscountDefinition',
        deletePmsDiscountDefinition: 'pms/discountdefinition/DeletePmsdiscountDefinition',

    },
    hrlaborreport: {
        getLaborReports: 'hr/OperatingDefinition/GetLaborReports',
        getLaborReportXml: 'hr/OperatingDefinition/GetLaborReportXml',
    },
    erpecollectionb2bpayment: {
        getB2BECollections: 'payment/ecollection/GetB2BECollections',
        getB2BPaymentReceipt: 'payment/ecollection/GetB2BPaymentReceipt'
    }
    ,
    pmsbreakdown: {
        getpmsbreakdowns: 'pms/breakdown/GetPmsBreakDown',
        getpmsbreakdownbyid: 'pms/breakdown/GetPmsBreakDownById',
        createpmsbreakdown: 'pms/breakdown/CreatePmsBreakDown',
        updatepmsbreakdown: 'pms/breakdown/UpdatePmsBreakDown',
        deletepmsbreakdown: 'pms/breakdown/DeletePmsBreakDown',

    },
    generalchange: {
        getgeneralchanges: 'pms/generalchange/GetGeneralChanges',
        getGeneralChangeById: 'pms/generalchange/GetGeneralChangeById',
        GetGeneralChangeDataSources: 'pms/generalchange/GetGeneralChangeDataSources',
        createGeneralChange: 'pms/generalchange/CreateGeneralChange',
        UpdateGeneralChange: 'pms/generalchange/UpdateGeneralChange',
        deleteGeneralChange: 'pms/generalchange/DeleteGeneralChange',
        triggerGeneralChangeNow: 'pms/generalchange/TriggerGeneralChange',

    },
    pmscontractgroupdefs: {
        createPmsContractGroupDef: 'pms/contract/CreatePmsContractGroupDef',
        updatePmsContractGroupDef: 'pms/contract/UpdatePmsContractGroupDef',
        deletePmsContractGroupDef: 'pms/contract/DeletePmsContractGroupDef',
        getPmsContractGroupDef: 'pms/contract/GetPmsContractGroupDef',
        getPmsContractSummary: 'pms/contract/GetPmsContractSummary',
        getPmsContractGroupOwnerDetail: 'pms/contract/GetPmsContractGroupOwnerDetail'
    }
    , giveorders: {
        createGiveOrder: '',
        updateGiveOrder: '',
        deleteGiveOrder: '',
        getGiveOrders: 'account/GeneralSettings/GetCurrencyItems',
        giveOrder: 'erp/StokCost/GiveOrder',
        emptyTheBasket: 'erp/StokCost/EmptyTheBasket',
        getBSBAForm: 'erp/StokCost/GetBSBAForm',
        getB2BInvoiceListByImportId: 'erp/StokCost/GetB2BInvoiceListByImportId',
        getOrderAddressList: 'erp/StokCost/GetOrderAddressList',
        getCustomerRepresentative: 'erp/UserInfo/GetCustomerRepresentative',
        getAccountDetail: 'erp/StokCost/GetB2BAccountDetail',
        getCurrentAndSpecialPricesAndCreate: 'erp/StokCost/GetCurrentAndSpecialPricesAndCreate',
        //getLiveStockListFromIfsService : 'erp/StokCost/GetLiveStockListFromIfsService',
        getLiveStockListFromIfsService: 'bpm/BpmSettings/CreateStockUpdateJob',
        createIfsStockCardStatusUpdateJob: 'bpm/BpmSettings/CreateIfsStockCardStatusUpdateJob',
        createIfsPriceUpdateJob: 'bpm/BpmSettings/CreateIfsPriceServiceJob',
        getOrderStockAndPriceControl: 'erp/StokCost/GetOrderStockAndPriceControl',
    }
    , currentaccountstatement: {
        getCurrentAccountStatement: ''
    }
    , orderlists: {
        createOrderList: '',
        updateOrderList: '',
        deleteOrderList: '',
        getOrderLists: 'account/GeneralSettings/GetCurrencyItems'
    }
    , udforms: {
        createUdForm: 'bpm/UdForms/CreateUdForm',
        updateUdForm: 'bpm/UdForms/UpdateUdForm',
        deleteUdForm: 'bpm/UdForms/DeleteUdForm',
        deleteAllRecords: 'bpm/UdForms/DeleteAllRecords',
        getUdForms: 'bpm/UdForms/GetUdForms',
        getUdFormsForNavigation: 'bpm/UdForms/GetUdFormsForNavigation',
        getUdFormWithId: 'bpm/UdForms/GetUdFormsWithId',
        getUdFormDetails: 'bpm/UdForms/GetUdFormDetails',
        getUdFormListDetails: 'bpm/UdForms/GetUdFormListDetails',
        getUdFormDetailsWithId: 'bpm/UdForms/GetUdFormDetailsWithId',
        createUdFormDetail: 'bpm/UdForms/CreateUdFormDetail',
        updateUdFormDetail: 'bpm/UdForms/UpdateUdFormDetail',
        getUdRecordDetail: 'bpm/UdForms/GetUdRecordDetail',
        EditUdRecordDetail: 'bpm/UdForms/EditUdRecordDetail',
        getUdRecordDetailWithId: 'bpm/UdForms/GetUdRecordDetailWithId',
        deleteUdRecordDetail: 'bpm/UdForms/DeleteUdRecordDetail',
        deleteUdFormDetail: 'bpm/UdForms/DeleteUdFormDetail',
        UpdateUdFormDetailOrder: 'bpm/UdForms/UpdateUdFormDetailOrder',
        getUdFormPages: 'bpm/UdForms/GetUdFormPages',
        getUdFormPagesListWithId: 'bpm/UdForms/GetUdFormPagesListWithId',
        getUdFormPagesWithId: 'bpm/UdForms/GetUdFormPagesWithId',
        createUdFormPage: 'bpm/UdForms/CreateUdFormPage',
        updateUdFormPage: 'bpm/UdForms/UpdateUdFormPage',
        UpdateUdFormPageOrder: 'bpm/UdForms/UpdateUdFormPageOrder',
        deleteUdFormPage: 'bpm/UdForms/DeleteUdFormPage',
        getUsersForUd: 'account/settings/GetUsersForUd',
        EditUserConfirm: 'bpm/UdForms/EditUserConfirm',
        getUdUserConfirm: 'bpm/UdForms/GetUdUserConfirm',
        deleteUdFormUser: 'bpm/UdForms/DeleteUdFormUser',
        UpdateUdUserConfirmOrder: 'bpm/UdForms/UpdateUdUserConfirmOrder',
        getudrecordconfirm: 'bpm/UdForms/Getudrecordconfirm',
        updateudrecordconfirm: 'bpm/UdForms/Updateudrecordconfirm',
        getUdFormsForMapping: 'bpm/UdForms/GetUdFormsForMapping',
        getUdSubFormMap: 'bpm/UdForms/GetUdSubFormMap',
        getUdRecordDetailForFilter: 'bpm/UdForms/GetUdRecordDetailForFilter',
        updateUdFormsOrder: 'bpm/UdForms/UpdateUdFormsOrder',
        getAuthorizationWithoutUdRecordDetail: 'bpm/UdForms/GetAuthorizationWithoutUdRecordDetail',
        getUdRecordDetailsWithAuthorization: 'bpm/UdForms/GetUdRecordDetailsWithAuthorization',
        getUdFormDetailsByFormRecid: 'bpm/UdForms/GetUdFormDetailsByFormRecid',
        updateUdFormDetailConnectionOrder: 'bpm/UdForms/UpdateUdFormDetailConnectionOrder',
        getUdFormsNotificationsWithId: 'bpm/UdForms/GetUdFormsNotificationsWithId',
        getUdRecordNotificationDetailsForFilter: 'bpm/UdForms/GetUdRecordNotificationDetailsForFilter',
        createS3FilesOfImages: 'bpm/UdForms/SaveFilesToS3',
        deleteS3LinkOfFiles: 'bpm/UdForms/DeleteFilesFromS3',
        getUdFormConnect: 'bpm/UdForms/GetUdFormConnect',
        checkUdFormDashboard: 'bpm/UdForms/CheckUdFormDashboard',
        getUdDashboardsWithId: 'bpm/UdForms/GetUdDashboardWithId',
        triggerUdFormNotifications: 'bpm/UdForms/TriggerUdFormNotifications',
        getUdRecordsFromFormDetail: 'bpm/UdForms/GetUdRecordsFromFormDetail',
        getUdFormDetailDefaultValues: 'bpm/UdForms/GetUdFormDetailDefaultValues',
        getUdFormsForOutsideSource: 'bpm/UdForms/GetUdFormsForOutsideSource',
        getUdAuthorizationControl: 'bpm/UdForms/GetUdAuthorizationControl',
        getUdFormProcesses: 'bpm/UdForms/GetUdFormProcesses',
        getUdProcessesAuthFromForm: 'bpm/UdForms/GetUdProcessesAuthFromForm',
        getUdProcessFlowWithFormid: 'bpm/UdForms/GetUdProcessFlowWithFormid',
        getUdFlowPermissionWithFromid: 'bpm/UdForms/GetUdFlowPermissionWithFromid',
        getUdFormDetailsWithProcessAuth: 'bpm/UdForms/GetUdFormDetailsWithProcessAuth',
        editUdRecordProcessFlowHistory: 'bpm/UdForms/EditUdRecordProcessFlowHistory',
        getUdRecordProcessHistory: 'bpm/UdForms/GetUdRecordProcessHistory',
        getUdFormPagesProcessAuth: 'bpm/UdForms/getUdFormPagesProcessAuth',
        getUdFormDetailsParameters: 'bpm/UdForms/GetUdFormDetailsParameters',
        getUdParameterRecords: 'bpm/UdForms/GetUdParameterRecords',
        getUdComments: 'bpm/UdForms/GetUdComments',
    }
    , erpfixturecardss: {
        createErpFixtureCards: 'erp/fixture/CreateFixtureCardDefinition',
        updateErpFixtureCards: 'erp/fixture/UpdateFixtureCardDefinition',
        deleteErpFixtureCards: 'erp/fixture/DeleteFixtureCardDefinition',
        getErpFixtureCardss: 'erp/fixture/GetFixtureCardDefinitonList',
        getErpFixtureCardWithId: 'erp/fixture/GetFixtureCardDefinitonWithId',
        getErpFixtureCardDefinitonCategoryType: "erp/fixture/GetFixtureCardDefinitonCategoryType",
        getErpFixtureCardDefinitonStockType: "erp/fixture/GetFixtureCardDefinitonStockType",
        getErpFixtureCardDefinitonStockTypeAll: "erp/fixture/GetFixtureCardDefinitonStockTypeAll",
        getErpFixtureCardCategoryTypeWithRecId: "erp/fixture/GetErpFixtureCardCategoryTypeWithRecId",
        getErpFixtureCardStockCardWithRecId: "erp/fixture/GetErpFixtureCardStockCardWithRecId",
        createErpFixtureCardsProductList: "erp/fixture/CreateFixtureCardProductList",
        getErpFixtureCardsProductList: "erp/fixture/GetErpFixtureCardProductsList",
        updateErpFixtureCardsForProduct: "erp/fixture/UpdateFixtureCardsProductList",
        deleteErpFixtureCardsForProduct: "erp/fixture/DeleteFixtureCardForProductList",
        deleteErpFixtureCardsForErpProduct: "erp/fixture/DeleteFixtureCardForProduct",
        updateErpFixtureCardsForWrongProduct: "erp/fixture/UpdateFixtureCardDefinitionForWrongProductList",

    }
    , udrecordauthorization: {
        saveRoleList: "bpm/UdForms/UpdateUdRecordRoleList",
        getSelectedRoleList: "bpm/UdForms/GetUdrecordAuthorization",
    }
    , hrlodgingdefinitions: {
        createHrLodgingDefinition: 'hr/lodging/CreateLodging',
        updateHrLodgingDefinition: 'hr/lodging/UpdateLodging',
        deleteHrLodgingDefinition: 'hr/lodging/DeleteLodging',
        getHrLodgingDefinitions: 'hr/lodging/GetLodging',
        getCityCodeQuery: 'hr/lodging/GetCityListQuery',

        //--------------------HrOrgBranchLodging---------------------------------
        getUserCompanyList: 'hr/lodging/GetBranchCompanyList',
        getLodgingBranchAllListQuery: 'hr/lodging/GetLodgingBranchAllListQuery',
        updateLodgingBranchAllList: 'hr/lodging/UpdateLodgingBranchAllList',
    }
    , whatsappdefinitions: {
        getWhatsAppGeneralDefinitions: "account/Whatsapp/GetWhatsAppGeneralDefinitions",
        getWhatsappDefinitionsLight: "account/Whatsapp/GetWhatsappDefinitionsLight",
        createWhatsAppGeneralDefinitions: "account/Whatsapp/CreateWhatsAppGeneralDefinitions",
        editWhatsAppGeneralDefinitions: "account/Whatsapp/EditWhatsAppGeneralDefinitions",
        updateWhatsAppGeneralDefinitions: "account/Whatsapp/UpdateWhatsAppGeneralDefinitions",
        deleteWhatsAppGeneralDefinitions: "account/Whatsapp/DeleteWhatsAppGeneralDefinitions",
        createS3FilesOfImages: "account/Whatsapp/SaveFilesToWhatsApp",
        getWhatsAppAccountDefinitions: "account/Whatsapp/GetWhatsAppAccountDefinitions",
        createWhatsAppAccountDefinitions: "account/Whatsapp/CreateWhatsAppAccountDefinitions",
        deleteWhatsAppAccountDef: "account/Whatsapp/DeleteWhatsAppAccountDef",
        editWhatsAppAccountDef: "account/Whatsapp/EditWhatsAppAccountDefinitions",
        updateWhatsAppAccountDefinitions: "account/Whatsapp/UpdateWhatsAppAccountDefinitions",
        getWhatsAppMobileDefinitions: "account/Whatsapp/GetWhatsAppMobileDefinitions",
        getWhatsappMobileDefinitionsLight: "account/Whatsapp/GetWhatsappMobileDefinitionsLight",
        createWhatsAppMobileDefinitions: "account/Whatsapp/CreateWhatsAppMobileDefinitions",
        deleteWhatsAppMobileDef: "account/Whatsapp/DeleteWhatsAppMobileDef",
        editWhatsAppMobileDef: "account/Whatsapp/EditWhatsAppMobileDefinitions",
        updateWhatsAppMobileDefinitions: "account/Whatsapp/UpdateWhatsAppMobileDefinitions",
        getWhatsAppRoleDefinitions: "account/Whatsapp/GetWhatsAppRoleDefinitions",
        updateWhatsAppRoles: "account/Whatsapp/UpdateWhatsAppRoles",
        sendTemplate: "account/Whatsapp/SendTemplate",
        checkTemplateStatus: "account/Whatsapp/CheckTemplateStatus",
        sendTemplateMessage: "account/Whatsapp/SendTemplateMessage",
        editWhatsAppMonitor: "account/Whatsapp/EditWhatsAppMonitor",
        updateWhatsAppMonitor: "account/Whatsapp/UpdateWhatsAppMonitor",
        deleteWhatsAppMonitor: "account/Whatsapp/DeleteWhatsAppMonitor",
        getWhatsAppMonitor: "account/Whatsapp/GetWhatsAppMonitor",
    }
    , pmsstopsales: {
        createPmsStopSale: 'pms/stopsale/CreatePmsStopSale',
        updatePmsStopSale: 'pms/stopsale/UpdatePmsStopSale',
        deletePmsStopSale: 'pms/stopsale/DeletePmsStopSale',
        getPmsStopSales: 'pms/stopsale/GetPmsStopSales',
        getPmsStopSaleWithRecid: 'pms/stopsale/GetPmsStopSaleWithId',
        getPropertiesForPmsStopSale: 'pms/stopsale/GetPropertiesForPmsStopSale'
    }
    , pmsanalysisreport: {
        getPmsReservationDetailsReport: 'pms/AnalysisReport/GetPmsReservationDetailsReport',
        getPmsReservationDetailsGridReport: 'pms/AnalysisReport/GetPmsReservationDetailsGridReport',
        getPropertyGroupReservationDetailsReport: 'pms/AnalysisReport/GetPropertyGroupReservationDetailsReport',
        getPropertyDetailReservationDetailsReport: 'pms/AnalysisReport/GetPropertyDetailReservationDetailsReport',
    }

    , pmsminaccoms: {
        createPmsMinAccom: 'pms/minaccom/CreatePmsMinAccom',
        updatePmsMinAccom: 'pms/minaccom/UpdatePmsMinAccom',
        deletePmsMinAccom: 'pms/minaccom/DeletePmsMinAccom',
        getPmsMinAccoms: 'pms/minaccom/GetPmsMinAccoms',
        getPmsMinAccomWithRecid: 'pms/minaccom/GetPmsMinAccomWithId',
        getPropertiesForPmsMinAccom: 'pms/minaccom/GetPropertiesForPmsMinAccom'
    }
};
