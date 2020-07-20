import { AppServiceSubType } from 'src/app/enums/appservicesubtype.enum';
import { AppServiceType } from 'src/app/enums/appservicetype.enum';

export interface IAppService {
    appCode: String;
    name: String;
    description: String;
    serviceCode: String;
    type: AppServiceType;
    subType: AppServiceSubType;
}
