export interface CertFormDataType {
    loginId: String;
    userName: String,
    birthday: String,
    phone: String,
    gender: String,
    nationality: String,
    agree1: Boolean,
    agree2: Boolean,
    agree3: Boolean,
    agree4: Boolean,
}

export interface LogInFormDataType {
    loginId: string,
    password: String,
    isAutoId: Boolean,
    isAutoLogin: Boolean,
}

export interface SignUpFormDataType {
    loginId: String,
    password: String,
    userName: String,
    phone: String,
    zoneCode: String,
    address: string,
    detailAddress: string,
    agree1: Boolean,
    agree2: Boolean,
    agree3: Boolean,
    agree4: Boolean,
    agree5: Boolean,
    agree6: Boolean,
}

export interface FindPWFormDataType {
    loginId: String,
    password: String,
    passwordCk: String,
}
export interface ModifyFormDataType {
    loginId: String,
    password: String,
    userName: String,
    phone: String,
    zoneCode: String,
    address: string,
    detailAddress: string,
    email: string,
    emailDomain: string,
}
export interface ChangePWFormDataType {
    password: String,
    newPassword: String,
    newPasswordCk: String,
}