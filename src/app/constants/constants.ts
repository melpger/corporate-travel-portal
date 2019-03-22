
export class Constants {
    public static baseUrl = 'api'; // client server

    public static USER_API_ENDPOINT = Constants.baseUrl + '/users';
    public static TOUR_API_ENDPOINT = Constants.baseUrl + '/tours';

}

export enum STATUS {
    STATUS_DRAFT = 0,
    STATUS_SUBMITTED,
    STATUS_APPROVED_MANAGER,
    STATUS_APPROVED_FINANCE,
    STATUS_REJECTED,
    STATUS_REQUEST_FOR_INFORMATION,
  
}

export enum ACCESS_LEVEL {
    ACCESS_LEVEL_EMPLOYEE = 0,
    ACCESS_LEVEL_MANAGER,
    ACCESS_LEVEL_FINANCE_MANAGER
}