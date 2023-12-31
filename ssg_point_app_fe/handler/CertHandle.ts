'use client'

import { CertFormDataType } from "@/types/userDataType";




const formatPhoneNumber = (number: string) => {
  return number.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
};

export const handleOnChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  certData: CertFormDataType,
  setCertData: React.Dispatch<React.SetStateAction<CertFormDataType>>
) => {
  const { name, value, type, checked } = e.target;
  if (type === "checkbox") {
    setCertData({
      ...certData,
      [name]: checked
    });
  } else{
    setCertData({
      ...certData,
      [name]: value
    });
  }
  
}

export const handleLocalStorage = (name: String, phone: String) => {
  phone = formatPhoneNumber(phone.toString())
  localStorage.setItem('tempName', name.toString())
  localStorage.setItem('tempPhone', phone.toString())
}

export const checkId = async (name: String, phone: String) => {
  try {
    phone = formatPhoneNumber(phone?.toString() || "");

    const response = await fetch(`https://smilekarina.duckdns.org/api/v1/member/findIdPw?userName=${name}&phone=${phone}`)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    
    if (data.success) {
      return data.result.loginId
    } else {
      
      return undefined;
    }
  } catch (error) {
    console.error("Error sending request:", error);

  }
  return undefined;
}
export const checkIdAdrr = async (name: String, phone: String) => {
  try {
    phone = formatPhoneNumber(phone?.toString() || "");

    const response = await fetch(`https://smilekarina.duckdns.org/api/v1/member/findIdPw?userName=${name}&phone=${phone}`)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    
    if (data.success) {
      return data.result
    } else {
      
      return undefined;
    }
  } catch (error) {
    console.error("Error sending request:", error);

  }
  return undefined;
}
