import { ApplicationAppType } from 'src/app/enums/applicationapptype.enum';
import { AppServiceType } from 'src/app/enums/appservicetype.enum';
import { AppServiceSubType } from 'src/app/enums/appservicesubtype.enum';

export interface ISolrContent {
    appCode: String;
    name: String;
    description: String;
    appGroup: String;
    appType: ApplicationAppType;
    serviceCode: String;
    serviceType: AppServiceType;
    serviceSubType: AppServiceSubType;    
}
