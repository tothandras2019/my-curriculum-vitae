export type cvPersonal = {
  personal: {
    name: string
    location: string
    role: string
    worldview: string
  }
  carrier_objectives: {
    descreption: string
  }
}
export type CvCertificationDetailsType = {
  date: string
  certification_title?: string
  place?: string
  document?: string
  details?: string
}
export type CerfiticationsArrType = CvCertificationDetailsType[]

export type cvWorkingHistory = {
  date: string
  position?: string
  enterprice?: string
  role_descreption?: string
}
export type cvWorkingHistoryArrType = cvWorkingHistory[]

export type cvStudiesType = {
  date: string
  field: string
  school: string
  other: string
}
export type cvStudiesArrType = cvStudiesType[]

export type cvSkillsType = {
  type: string
  level: {
    high_level?: string
    mid_level?: string
    early_learnt?: string
  }
  other?: string
}
export type cvSkillsArrType = cvSkillsType[]

export type cvOther = {
  other: {
    language: string
    Interests: string
    driver_license: string
  }
}

export type ColorObjectType = { primary: string; secondary: string }
