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
    payment: {
        payECollectionLink: 'payment/payment/Pay',
        payB2bECollectionLink: 'payment/payment/PayB2B',
        refundPayment: 'payment/payment/Refund',
        sberbankRefundPayment: 'payment/payment/RefundSberBank',
        getPaymentDetail: 'payment/payment/GetPaymentDetailInformation',
        getBankFromCardNumber: 'payment/payment/GetBankFromCardNumber',
        getErpECollectionEntrys: 'account/payment/GetCurrencyItems',
        getInstallmentOptionsByBanks: 'payment/payment/GetInstallmentOptionsByBanks',
    }
};
