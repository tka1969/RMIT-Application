import { ApplicationAppType } from 'src/app/enums/applicationapptype.enum';

export interface IApplication {
    appCode: String;
    name: String;
    description: String;
    appGroup: String;
    appType: ApplicationAppType;
}
